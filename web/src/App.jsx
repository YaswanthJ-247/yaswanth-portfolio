import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiDownload,
  FiExternalLink,
  FiGitBranch,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiMail,
  FiMoon,
  FiPhone,
  FiSend,
  FiSun,
  FiX,
} from 'react-icons/fi'
import {
  SiAmazon,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiGraphql,
  SiHtml5,
  SiMongodb,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiMysql,
} from 'react-icons/si'

import maLogo from "./assets/Medical-Advisor-Logo.png";
import tfgLogo from "./assets/TFG-Logo.png";
import splashGif from "./assets/ma-splash-screen.gif";

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

const stats = [
  { label: 'Academic / personal projects completed', value: '5+' },
  { label: 'Basic APIs built for practice projects', value: '10+' },
  { label: 'Average response time in small-scale apps', value: '<300ms' },
]

const skillGroups = [
  {
    title: 'Backend & APIs',
    items: [
      { name: 'Java', icon: SiOpenjdk },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Python', icon: SiPython },
      { name: 'RESTful APIs', icon: FiSend },
    ],
  },
  {
    title: 'Frontend & UI',
    items: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'React', icon: SiReact },
      { name: 'Bootstrap', icon: SiBootstrap },
    ],
  },
  {
    title: 'Data & Platforms',
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Docker', icon: SiDocker },
      { name: 'Git & CI', icon: FiGitBranch },
    ],
  },
]

const education = {
  school: 'Bachelor of Technology, Computer Science & Engineering',
  place: 'Miracle Educational Society Group of Institutions · Vizianagaram, Andhra Pradesh',
  details: ['2021 – 2025 · CGPA: 7.55', 'Full-stack coursework and projects across Java, Python, flutter and web development.'],
}

const projects = [
  {
    title: 'Medical Advisor Mobile Application Powered By TFG',
    description: 'Cross-platform healthcare app built with Flutter/Dart, Firebase, and a FAST API + PostgreSQL backend.',
    stack: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'FastAPI', 'PostgreSQL'],
    features: [
      'Built a smooth, responsive UI across Android and iOS using Flutter and Dart.',
      'Integrated Firebase Authentication and Firestore for secure user management, real-time data, and cloud storage.',
      'Designed and implemented a FAST API backend with PostgreSQL for scalable data operations and high-performance RESTful APIs.',
      'Modular architecture with advanced state management, role-based access, and seamless client-server sync.',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.tfg.medicaladvisor&pcampaignid=web_share',
    github: '',
    thumbnail:
      'src/assets/Medical-Advisor-Logo.png',
    screenshots: [
      'src/assets/TFG-Logo.png',
      'src/assets/ma-splash-screen.gif',
    ],
  },
  {
    title: 'GroConnect powered by TFG',
    description: 'E-commerce platform with responsive UI, interactive flows, and real-time updates.',
    stack: ['JavaScript', 'Bootstrap', 'MongoDB', 'Full-Stack'],
    features: [
      'Responsive storefront built with HTML, CSS, JavaScript, and Bootstrap for smooth cross-device shopping.',
      'Interactive components that keep users engaged and streamline browsing and checkout.',
      'MongoDB-backed data layer handling product listings, user data, and transactions reliably.',
      'Full-stack integration between frontend and backend to deliver fast, real-time updates.',
    ],
    link: 'https://www.groconnect.in',
    github: '',
    thumbnail:
      'src/assets/GroConnect-Logo.png',
    screenshots: [
      'src/assets/TFG-Logo.png',
      'src/assets/GroConnect-glance.png',
    ],
  },
  {
    title: 'RSS Feed Reader',
    description: 'Full-stack reader that aggregates updates from multiple sources into one clean interface.',
    stack: ['Java', 'MongoDB', 'Full-Stack', 'RSS'],
    imageFit: 'contain',
    features: [
      'Lets users subscribe to diverse RSS feeds and see a consolidated, organized view.',
      'Built with Java and web tech to handle aggregation and presentation efficiently.',
      'Enables users to stay updated on preferred topics without hopping across sites.',
    ],
    link: '#',
    github: '',
    thumbnail:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BXOjsVk5Ptgs-mwnrekMUw.png',
    screenshots: [
      'https://cdn.dribbble.com/users/1282972/screenshots/3562720/attachments/793458/desktop_hd__4_.jpg',
      'https://cdn.dribbble.com/userupload/44565828/file/033d7e5f147c4231c1ff43e8504c9ba1.png?resize=3810x2860&vertical=center',
    ],
  },
  {
    title: 'My Portfolio',
    description: 'Animated, accessible personal site with Netlify-ready contact forms.',
    stack: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    features: [
      'Dark/light theming with persisted preferences.',
      'Motion-first storytelling with scroll reveals and CTA micro-interactions.',
      'SEO + structured data for stronger discoverability.',
    ],
    link: '#',
    github: '#',
    thumbnail:
      'src/assets/yash-portfolio-logo.png',
    screenshots: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
      'src/assets/yash-linkedin-glance.png',
    ],
  },
]

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Threshing Floor Group',
    period: 'Mar 2025 — Present',
    impact: [
      'Delivered event-based web applications using Python, MySQL, HTML, CSS, Bootstrap and Flutter for responsive UX.',
      'Worked across frontend and backend to ship reliable user experiences and robust functionality.',
      'Debugged and optimized applications to raise performance and reliability for business users.',
    ],
  },
  {
    role: 'Artificial Intelligence',
    company: 'SkillDzire',
    period: 'Dec 2024 — Mar 2025',
    impact: [
      'Built predictive models (classification, regression, sentiment) using scikit-learn and TensorFlow.',
      'Collaborated on capstone projects applying AI techniques to real-world problems.',
      'Gained hands-on practice in machine learning, neural networks, and NLP with Python.',
    ],
  },
  {
    role: 'Testing Tools / Selenium with Java & Python / API Testing',
    company: 'ExcelR Solutions',
    period: 'Apr 2024 — Aug 2024',
    impact: [
      'Completed internship focused on Selenium, REST API testing, and automation design.',
      'Validated RESTful APIs with Postman across request/response cycles, status codes, and edge cases.',
      'Debugged and resolved issues in test scripts to improve coverage and QA reliability.',
    ],
  },
]

const services = [
  {
    title: 'Web development',
    detail: 'Responsive React frontends with component-driven UX and strong Lighthouse scores.',
  },
  {
    title: 'API design',
    detail: 'REST/GraphQL APIs with clear contracts, validation, and documentation.',
  },
  {
    title: 'Performance tuning',
    detail: 'Profiling JVM/Node services, caching strategies, and load-test playbooks.',
  },
  {
    title: 'Code reviews',
    detail: 'Actionable reviews focused on reliability, readability, and observability.',
  },
]

const socials = {
  email: 'yaswanthjarajapu@outlook.com',
  linkedin: 'https://www.linkedin.com/in/jarajapu-yaswanth/',
  github: 'https://github.com/YaswanthJ-247',
  resume: 'https://yaswanth-jarajapu.my.canva.site/',
}

const marqueeTech = [
  'Java',
  'Spring Boot',
  'Python',
  'React',
  'Flutter',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Docker',
  'REST APIs',
  'CI/CD',
]

const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay }}
    viewport={{ once: true, amount: 0.35 }}
    className={className}
  >
    {children}
  </motion.div>
)

const SectionHeading = ({ eyebrow, title, caption }) => (
  <FadeIn className="mb-10 space-y-3">
    <div className="pill w-fit bg-white/80 text-brand-700 dark:bg-white/5 dark:text-slate-100">
      {eyebrow}
    </div>
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
        {title}
      </h2>
      {caption && <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">{caption}</p>}
    </div>
  </FadeIn>
)

const ProjectCard = ({ project, index, onScreenshotClick }) => {
  const imageFitClass =
    project.imageFit === 'contain'
      ? 'object-contain bg-slate-900/70 p-3 dark:bg-slate-900/40'
      : 'object-cover'

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.2 }}
      className="section-card project-card glass-hover"
    >
      <div className="grid gap-8 p-6 lg:grid-cols-5 lg:p-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/40 bg-slate-100/60 dark:border-white/10 dark:bg-white/5 lg:col-span-2">
          <div className="project-index">0{index + 1}</div>
          <img
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            className={`h-full w-full ${imageFitClass}`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 via-transparent to-transparent dark:from-black/60" />
          <div className="absolute left-4 top-4 space-y-2">
            <span className="pill bg-white/80 text-slate-800 dark:bg-white/10 dark:text-slate-100">Project</span>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((tech) => (
                <span key={tech} className="tag bg-white/80 dark:bg-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:bg-white/5 dark:text-slate-200">
                Case Study
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{project.description}</p>
            </div>
            <div className="flex gap-2">
              {project.github && (
                <a
                  className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 dark:border-white/10 dark:text-white dark:hover:border-brand-300 dark:hover:text-brand-200"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="inline-block" />
                </a>
              )}
              {project.link && (
                <a
                  className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 dark:border-white/10 dark:text-white dark:hover:border-brand-300 dark:hover:text-brand-200"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink className="inline-block" />
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-3">
            {project.screenshots.map((shot, idx) => (
              <button
                type="button"
                key={shot + idx}
                onClick={() => onScreenshotClick?.(shot, `${project.title} screenshot ${idx + 1}`)}
                className="group relative h-24 w-32 overflow-hidden rounded-xl border border-white/50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10"
              >
                <img
                  src={shot}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="pointer-events-none absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/15" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: index * 0.05 }}
    viewport={{ once: true, amount: 0.2 }}
    className="section-card glass-hover p-6 sm:p-8"
  >
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{experience.role}</h3>
        <p className="text-sm font-semibold text-brand-600 dark:text-brand-200">{experience.company}</p>
      </div>
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-white/10 dark:text-slate-200">
        {experience.period}
      </span>
    </div>
    <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
      {experience.impact.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
)

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    className="section-card glass-hover p-5"
  >
    <div className="pill mb-3 text-brand-700 dark:text-brand-200">{service.title}</div>
    <p className="text-sm text-slate-600 dark:text-slate-300">{service.detail}</p>
  </motion.div>
)

const BlogCard = ({ post, index }) => (
  <motion.a
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    href={post.link}
    className="section-card glass-hover block p-6"
  >
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{post.title}</h3>
      <FiArrowUpRight className="text-brand-600 dark:text-brand-200" />
    </div>
    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{post.summary}</p>
  </motion.a>
)

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem('theme')
  if (saved) return saved
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [formData, setFormData] = useState({ name: '', email: '', inquiry: '', message: '' })
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' })
  const [lightbox, setLightbox] = useState(null)
  const [recaptchaReady, setRecaptchaReady] = useState(false)
  const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:4000'
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('dark-mode', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const schema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Yaswanth Jarajapu',
      jobTitle: 'Java & Full-Stack Developer',
      email: `mailto:${socials.email}`,
      sameAs: [socials.linkedin, socials.github].filter(Boolean),
    }),
    [socials.email, socials.github, socials.linkedin],
  )

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    if (formStatus.state === 'loading') return
    setFormStatus({ state: 'loading', message: 'Sending your message...' })

    try {
      let recaptchaToken = ''
      if (recaptchaSiteKey && window.grecaptcha && recaptchaReady) {
        recaptchaToken = await window.grecaptcha.execute(recaptchaSiteKey, { action: 'submit' })
      }

      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to submit')
      }

      setFormStatus({ state: 'success', message: 'Thanks! Your message was sent.' })
      setFormData({ name: '', email: '', inquiry: '', message: '' })
    } catch (error) {
      setFormStatus({ state: 'error', message: error.message || 'Could not send message. Please try again.' })
    }
  }

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightbox(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!recaptchaSiteKey || typeof window === 'undefined') return
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => setRecaptchaReady(true))
      return
    }
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`
    script.async = true
    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => setRecaptchaReady(true))
      }
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [recaptchaSiteKey])

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 blur-3xl">
        <div className="absolute left-[-10%] top-[-10%] h-64 w-64 rounded-full bg-brand-400/25" />
        <div className="absolute right-[-10%] top-[10%] h-72 w-72 rounded-full bg-amber-400/25" />
        <div className="absolute bottom-[-20%] left-[20%] h-72 w-72 rounded-full bg-emerald-400/20" />
      </div>

      <div className="relative z-10">
        {lightbox && (
          <div className="fixed inset-0 z-50 bg-slate-900/90 px-4 py-8 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Close image"
            >
              <FiX size={20} />
            </button>
            <div className="flex h-full items-center justify-center">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-h-[80vh] max-w-5xl rounded-2xl border border-white/10 bg-slate-900 object-contain shadow-2xl"
              />
            </div>
          </div>
        )}

        <header className="sticky top-0 z-20 border-b border-white/60 bg-white/70 backdrop-blur-xl dark:border-white/5 dark:bg-slate-950/80">
          <div className="container flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-400 text-lg font-bold text-white shadow-glow">
                YJ
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-700 dark:text-brand-200">Yaswanth Jarajapu</p>
                <p className="text-xs text-slate-500 dark:text-slate-300">Java & Full-Stack Developer</p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-200 lg:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-brand-600 dark:hover:text-brand-200">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                aria-label="Toggle theme"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:border-brand-200"
              >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </button>
              <a
                href={socials.resume}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 dark:bg-white dark:text-slate-900 dark:shadow-glow lg:inline-flex"
              >
                <FiExternalLink />
                View resume
              </a>
            </div>
          </div>
        </header>

        <main className="container space-y-20 py-12 md:space-y-28 md:py-16">
          <section id="hero" className="surface relative overflow-hidden border-none px-6 py-10 shadow-glow md:px-10 md:py-12">
            <div className="absolute inset-0 backdrop-gradient" aria-hidden />
            <div className="relative grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-brand-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  FullStack Developer · Hyderabad, Telangana
                </div>
                <FadeIn delay={0.05}>
                  <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-white">
                    Designing & shipping trustworthy digital experiences.
                  </h1>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
                    I build enterprise-ready UIs with clean, performant APIs. Minimal, readable layouts; measured motion; and a focus
                    on accessibility and reliability.
                  </p>
                </FadeIn>
                <FadeIn delay={0.12} className="mt-6 flex flex-wrap gap-3">
                  {['API-first builds', 'Performance tuning', 'Design systems', 'Cross-platform UI'].map((item) => (
                    <span key={item} className="tag bg-white/90 px-4 py-2 text-sm shadow-sm dark:bg-white/10">
                      {item}
                    </span>
                  ))}
                </FadeIn>
                <FadeIn delay={0.16} className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-emerald-500 to-amber-400 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-brand-500/30 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                  >
                    View projects <FiArrowUpRight />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-white dark:hover:border-brand-200"
                  >
                    Contact me <FiSend />
                  </a>
                </FadeIn>
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {stats.map((stat) => (
                    <FadeIn key={stat.label} delay={0.18 + 0.02 * stat.label.length}>
                      <div className="hero-stat">
                        <div className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</div>
                        <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">{stat.label}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
                <FadeIn delay={0.22} className="mt-8 overflow-hidden rounded-2xl border border-white/50 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="tech-marquee">
                    <div className="tech-marquee__track">
                      {marqueeTech.concat(marqueeTech).map((item, idx) => (
                        <span key={item + idx} className="tech-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </FadeIn>
              <FadeIn delay={0.08} className="relative">
                <div className="surface fade-border relative overflow-hidden bg-white/90 p-6 dark:bg-white/5">
                  <div className="floating-dots absolute inset-0" aria-hidden />
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">Currently</p>
                        <p className="text-sm font-semibold text-emerald-500">Open to full-time & internships</p>
                      </div>
                      <span className="pill bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">Available</span>
                    </div>
                    <div className="grid gap-3 rounded-2xl bg-slate-900/90 p-5 text-white shadow-xl dark:bg-slate-950">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase text-white/50">Focus this quarter</p>
                          <p className="text-lg font-semibold">Platform-grade polish</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl font-bold text-white">
                          YJ
                        </div>
                      </div>
                      <div className="grid gap-3 md:grid-cols-3">
                        <div className="highlight-tile">
                          <p className="text-xs uppercase text-white/60">Delivery</p>
                          <p className="text-sm font-semibold">2-3 week sprints</p>
                        </div>
                        <div className="highlight-tile">
                          <p className="text-xs uppercase text-white/60">Platforms</p>
                          <p className="text-sm font-semibold">React · Flutter · APIs</p>
                        </div>
                        <div className="highlight-tile">
                          <p className="text-xs uppercase text-white/60">Quality</p>
                          <p className="text-sm font-semibold">Accessibility & Perf</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-700 dark:text-slate-200">
                      <span className="tag">Scalable</span>
                      <span className="tag">High contrast UI</span>
                      <span className="tag">Motion-led</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          <section id="about" className="space-y-10">
            <SectionHeading
              eyebrow="About"
              title="Human-friendly code with product intuition"
              caption="I thrive at the intersection of backend performance and delightful UI. Each build pairs reliable engineering with concise storytelling for users and stakeholders."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              <FadeIn className="surface glass-hover p-6 lg:col-span-2">
                <div className="space-y-4 text-slate-700 dark:text-slate-200">
                  <p>
                    I design and build simple end-to-end solutions as a fresher. I work with Java/Spring Boot and Python to create basic services, and I use SQL/NoSQL databases for data handling. On the frontend, I build responsive interfaces using HTML, CSS, React, and Bootstrap. I focus on writing clean code, understanding requirements clearly, and improving my work through continuous learning and feedback.
                  </p>
                  <p>
                   Along with feature development, I also enjoy making my projects reliable. I practice debugging, API testing with Postman, and setting up lightweight containerized environments using Docker. I use Git to manage my code and collaborate better. My clients and teammates describe me as adaptable, consistent, and easy to work with.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Workflow coordination', 'Adaptable', 'Perseverant', 'Diligent', 'Conscientious'].map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {skillGroups.map((group) => (
                    <div key={group.title} className="rounded-2xl border border-white/60 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{group.title}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map(({ name, icon: Icon }) => (
                          <span key={name} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-100">
                            <Icon className="text-brand-600 dark:text-brand-200" />
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.05} className="surface glass-hover p-6">
                <p className="pill mb-3 text-brand-700 dark:text-brand-200">Education</p>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{education.school}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{education.place}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {education.details.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={socials.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-brand-200"
                >
                  <FiExternalLink className="text-brand-600 dark:text-brand-200" />
                  My Resume
                  <FiArrowUpRight className="ml-auto text-brand-600 dark:text-brand-200" />
                </a>
              </FadeIn>
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <SectionHeading
              eyebrow="Projects"
              title="A Collection of Solutions I've Designed and Built"
            />
            <div className="timeline">
              {projects.map((project, idx) => (
                <div key={project.title} className="timeline-item">
                  <ProjectCard project={project} index={idx} onScreenshotClick={(src, alt) => setLightbox({ src, alt })} />
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="space-y-8">
            <SectionHeading
              eyebrow="Experience"
              title="Roles, internships, and impact"
              caption="Highlights from internships and collaborations that focus on shipping, iteration, and reliability."
            />
            <div className="timeline">
              {experiences.map((experience, idx) => (
                <div key={experience.role + experience.company} className="timeline-item">
                  <ExperienceCard experience={experience} index={idx} />
                </div>
              ))}
            </div>
          </section>

          <section id="services" className="space-y-8">
            <SectionHeading
              eyebrow="Services"
              title="What I do"
              caption="Hands-on partnership across architecture, delivery, and polish."
            />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service, idx) => (
                <ServiceCard key={service.title} service={service} index={idx} />
              ))}
            </div>
          </section>

          <section id="contact" className="space-y-8">
            <SectionHeading
              eyebrow="Contact"
              title="Get in Touch for Projects or Parternships"
              caption="Always Open to Discussions. I respond quickly to thoughtful messages."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
                className="section-card glass-hover p-6"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Email</p>
                    <a
                      href={`mailto:${socials.email}`}
                      className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-brand-700 underline decoration-2 underline-offset-4 dark:text-brand-200"
                    >
                      <FiMail />
                      {socials.email}
                    </a>
                  </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Phone</p>
                  <a
                    href="tel:+918106120622"
                    className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white"
                  >
                    <FiPhone />
                    +91 8106120622
                  </a>
                </div>
                <div className="flex gap-3">
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/60 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-white dark:hover:border-brand-200"
                    >
                      <FiLinkedin /> LinkedIn
                    </a>
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/60 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-white dark:hover:border-brand-200"
                    >
                      <FiGithub /> GitHub
                    </a>
                    <a
                      href={socials.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/60 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-white dark:hover:border-brand-200"
                    >
                      <FiExternalLink /> View resume
                    </a>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                    Prefer a quick intro? Share what you’re building, timelines, and any success metrics you care about. I’ll reply
                    with next steps and a small execution plan.
                  </p>
                </div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                viewport={{ once: true }}
                name="contact"
                onSubmit={handleFormSubmit}
                className="section-card glass-hover p-6"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Name
                    <input
                      className="mt-1 w-full rounded-xl border border-white/60 bg-white/80 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-brand-200 dark:focus:ring-brand-100/10"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      disabled={formStatus.state === 'loading'}
                    />
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Enter your full name.</p>
                  </label>
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Email
                    <input
                      className="mt-1 w-full rounded-xl border border-white/60 bg-white/80 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-brand-200 dark:focus:ring-brand-100/10"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      disabled={formStatus.state === 'loading'}
                    />
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">You’ll get a reply here.</p>
                  </label>
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 sm:col-span-2">
                    Inquiry
                    <input
                      className="mt-1 w-full rounded-xl border border-white/60 bg-white/80 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-brand-200 dark:focus:ring-brand-100/10"
                      type="text"
                      name="inquiry"
                      placeholder="Project idea, integration help, performance tuning..."
                      value={formData.inquiry}
                      onChange={handleFormChange}
                      required
                      disabled={formStatus.state === 'loading'}
                    />
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">What do you need help with?</p>
                  </label>
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 sm:col-span-2">
                    Message
                    <textarea
                      className="mt-1 w-full rounded-xl border border-white/60 bg-white/80 px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-brand-200 dark:focus:ring-brand-100/10"
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      disabled={formStatus.state === 'loading'}
                    />
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Share context, timelines, or links.</p>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={formStatus.state === 'loading'}
                  className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-900 dark:shadow-glow"
                >
                  {formStatus.state === 'loading' ? 'Sending...' : 'Send message'} <FiSend />
                </button>
                {formStatus.message && (
                  <p
                    className={`mt-3 text-sm ${
                      formStatus.state === 'success'
                        ? 'text-emerald-600 dark:text-emerald-300'
                        : formStatus.state === 'error'
                          ? 'text-red-600 dark:text-red-300'
                          : 'text-slate-500 dark:text-slate-300'
                    }`}
                    aria-live="polite"
                  >
                    {formStatus.message}
                  </p>
                )}
              </motion.form>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/60 bg-white/80 py-8 text-sm text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-slate-800 dark:text-white">Yaswanth Jarajapu</p>
              <p>Crafting reliable software with intention.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-brand-600 dark:hover:text-brand-200">
                  {item.label}
                </a>
              ))}
              <a href={socials.linkedin} className="hover:text-brand-600 dark:hover:text-brand-200">
                LinkedIn
              </a>
              <a href={socials.github} className="hover:text-brand-600 dark:hover:text-brand-200">
                GitHub
              </a>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Yaswanth Jarajapu</p>
          </div>
        </footer>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  )
}

export default App
