import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import admin from 'firebase-admin'
import fs from 'fs'
import nodemailer from 'nodemailer'

dotenv.config()

const {
  ALLOW_ORIGIN = '*',
  PORT = 4000,
  FIREBASE_CREDENTIAL_PATH = './serviceAccountKey.json',
  RECAPTCHA_SECRET,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE = 'false',
  SMTP_USER,
  SMTP_PASS,
  NOTIFY_EMAIL,
} = process.env

const app = express()
app.use(cors({ origin: ALLOW_ORIGIN.split(',').map((o) => o.trim()) || '*' }))
app.use(bodyParser.json())

// Initialize Firebase Admin
if (!fs.existsSync(FIREBASE_CREDENTIAL_PATH)) {
  console.warn(`Firebase credential file not found at ${FIREBASE_CREDENTIAL_PATH}. Firestore writes will fail until provided.`)
}

try {
  const serviceAccount = JSON.parse(fs.readFileSync(FIREBASE_CREDENTIAL_PATH, 'utf8'))
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
  console.log('Firebase Admin initialized')
} catch (err) {
  console.error('Failed to initialize Firebase Admin. Provide a valid serviceAccountKey.json.', err.message)
}

const db = admin.apps.length ? admin.firestore() : null

const transporter =
  SMTP_HOST && SMTP_USER && SMTP_PASS && NOTIFY_EMAIL
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT || 587),
        secure: SMTP_SECURE === 'true',
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      })
    : null

const verifyRecaptcha = async (token) => {
  if (!RECAPTCHA_SECRET || !token) return true
  try {
    const params = new URLSearchParams()
    params.append('secret', RECAPTCHA_SECRET)
    params.append('response', token)
    const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    })
    const data = await resp.json()
    return data.success === true
  } catch (error) {
    console.error('reCAPTCHA verification failed', error)
    return false
  }
}

app.get('/health', (_, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, inquiry, message, recaptchaToken } = req.body || {}
  if (!name || !email || !inquiry || !message) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  const isHuman = await verifyRecaptcha(recaptchaToken)
  if (!isHuman) {
    return res.status(400).json({ error: 'reCAPTCHA failed. Please try again.' })
  }

  try {
    const payload = {
      name: String(name).trim(),
      email: String(email).trim(),
      inquiry: String(inquiry).trim(),
      message: String(message).trim(),
      createdAt: admin.firestore.Timestamp.now(),
    }

    if (db) {
      await db.collection('contact_messages').add(payload)
    }

    if (transporter) {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${SMTP_USER}>`,
        to: NOTIFY_EMAIL,
        subject: `New inquiry from ${payload.name}`,
        text: `Name: ${payload.name}
Email: ${payload.email}
Inquiry: ${payload.inquiry}
Message: ${payload.message}`,
      })
    }

    res.json({ status: 'ok' })
  } catch (err) {
    console.error('Error handling contact message', err)
    res.status(500).json({ error: 'Failed to save message' })
  }
})

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`)
})
