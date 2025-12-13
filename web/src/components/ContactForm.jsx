// src/components/ContactForm.jsx
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Basic client validation
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }

    const doc = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
      createdAt: serverTimestamp(), // server side timestamp placeholder
    };

    try {
      // writes a new document to 'contacts' collection
      await addDoc(collection(db, "contacts"), doc);
      setStatus("Thanks — your message was sent.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Firestore write error:", err);
      setStatus("Error — please try again later.");
    }
  };

  return (
    <form onSubmit={onSubmit} style={{maxWidth:480, margin:"0 auto"}}>
      <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
      <input name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
      <textarea name="message" value={form.message} onChange={onChange} rows={6} placeholder="Message" required />
      <button type="submit">Send</button>
      <div aria-live="polite">{status}</div>
    </form>
  );
}
