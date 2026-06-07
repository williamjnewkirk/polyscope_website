import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PaperPlaneTilt, CheckCircle, WarningCircle, CaretDown } from '@phosphor-icons/react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqejqvpj'
const RATE_LIMIT_KEY = 'ps_contact_submissions'
const MAX_SUBMISSIONS = 3
const WINDOW_MS = 60 * 60 * 1000

function getSubmissions(): number[] {
  try {
    return JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) ?? '[]')
  } catch {
    return []
  }
}

function recordSubmission() {
  const now = Date.now()
  const recent = getSubmissions().filter(t => now - t < WINDOW_MS)
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify([...recent, now]))
}

function getRateLimitState(): { blocked: boolean; remainingMs: number; remaining: number } {
  const now = Date.now()
  const recent = getSubmissions().filter(t => now - t < WINDOW_MS)
  if (recent.length < MAX_SUBMISSIONS) return { blocked: false, remainingMs: 0, remaining: MAX_SUBMISSIONS - recent.length }
  const oldestInWindow = Math.min(...recent)
  return { blocked: true, remainingMs: WINDOW_MS - (now - oldestInWindow), remaining: 0 }
}

const FAQS = [
  {
    question: 'When will Polyscope launch?',
    answer: "We're in active development and getting close. Join the waitlist on our homepage and you'll be the first to know — we'll send one email when it's live, nothing else.",
  },
  {
    question: 'What is a Polymarket "whale"?',
    answer: 'A whale is a wallet that trades large amounts on Polymarket prediction markets. Polyscope monitors the wallets with the highest historical P&L and alerts you the moment they place a new trade.',
  },
  {
    question: 'How do push notifications work?',
    answer: 'Once you follow a wallet, Polyscope monitors it in real time via the Polygon blockchain. When it trades, you get an instant push notification showing the market, outcome, and size.',
  },
  {
    question: 'How do I cancel or manage my subscription?',
    answer: 'Subscriptions are managed entirely through the App Store (iOS) or Google Play (Android). You can cancel, pause, or switch plans at any time from your device subscription settings.',
  },
  {
    question: 'Is my personal data sold or shared?',
    answer: 'No. We collect only what is necessary to run the service. Read our Privacy Policy for the full details.',
    link: { label: 'View Privacy Policy', to: '/privacy' },
  },
]

function FaqItem({ question, answer, link }: { question: string; answer: string; link?: { label: string; to: string } }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-sm font-medium text-ps-text">{question}</span>
        <CaretDown
          size={14}
          weight="bold"
          className={`flex-shrink-0 text-ps-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-4 -mt-1">
          <p className="text-sm text-ps-muted leading-relaxed">{answer}</p>
          {link && (
            <Link to={link.to} className="inline-block mt-2 text-xs font-medium text-ps-green hover:underline">
              {link.label}
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'ratelimited'

const FAQ_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
})

export default function Support() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [cooldownMins, setCooldownMins] = useState(0)

  useEffect(() => {
    const { blocked, remainingMs } = getRateLimitState()
    if (blocked) {
      setStatus('ratelimited')
      setCooldownMins(Math.ceil(remainingMs / 60000))
    }
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { blocked, remainingMs } = getRateLimitState()
    if (blocked) {
      setStatus('ratelimited')
      setCooldownMins(Math.ceil(remainingMs / 60000))
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        recordSubmission()
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
    <Helmet>
      <title>Support &amp; Contact | Polyscope</title>
      <meta name="description" content="Get help with Polyscope. Find answers to common questions or send us a message and we'll get back to you." />
      <link rel="canonical" href="https://polyscopeapp.com/support" />
      <script type="application/ld+json">{FAQ_SCHEMA}</script>
    </Helmet>
    <main className="min-h-screen bg-ps-black pt-28 pb-20 px-5 sm:px-8">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-ps-green mb-3">Help Center</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-ps-text mb-3 leading-tight">
            Support &amp; Contact
          </h1>
          <p className="text-sm text-ps-muted leading-relaxed">
            Find answers to common questions below, or send us a message and we'll get back to you.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="rounded-2xl border border-white/[0.08] bg-ps-card px-6 py-2 mb-8"
        >
          <p className="text-[11px] font-bold uppercase tracking-widest text-ps-muted pt-5 pb-3">
            Frequently Asked Questions
          </p>
          {FAQS.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
        >
          <p className="text-[11px] font-bold uppercase tracking-widest text-ps-muted mb-4">
            Still need help?
          </p>
          <div className="rounded-2xl border border-white/[0.08] bg-ps-card p-6 sm:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <CheckCircle size={48} weight="fill" className="text-ps-green" />
                <div>
                  <p className="text-base font-semibold text-ps-text mb-1">Message sent!</p>
                  <p className="text-sm text-ps-muted">We'll be in touch at the email you provided.</p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs font-medium text-ps-green hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : status === 'ratelimited' ? (
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <div>
                  <p className="text-base font-semibold text-ps-text mb-1">Too many messages</p>
                  <p className="text-sm text-ps-muted">
                    You've reached the limit of {MAX_SUBMISSIONS} messages per hour.
                    Please try again in {cooldownMins} minute{cooldownMins !== 1 ? 's' : ''}, or email us directly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-ps-muted">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-ps-black border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-ps-text placeholder:text-ps-muted/50 outline-none focus:border-ps-green/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-ps-muted">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="bg-ps-black border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-ps-text placeholder:text-ps-muted/50 outline-none focus:border-ps-green/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-medium text-ps-muted">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-ps-black border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-ps-text placeholder:text-ps-muted/50 outline-none focus:border-ps-green/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-ps-muted">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    className="bg-ps-black border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-ps-text placeholder:text-ps-muted/50 outline-none focus:border-ps-green/50 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-xs">
                    <WarningCircle size={14} weight="fill" />
                    Something went wrong. Please try again or email us directly at{' '}
                    <a href="mailto:support@polyscopeapp.com" className="underline">
                      support@polyscopeapp.com
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-ps-green text-ps-black text-sm font-semibold hover:bg-opacity-90 active:scale-[0.97] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <PaperPlaneTilt size={16} weight="fill" />
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        <p className="text-center text-xs text-ps-muted mt-6">
          Or email us directly at{' '}
          <a href="mailto:support@polyscopeapp.com" className="text-ps-text hover:text-ps-green transition-colors">
            support@polyscopeapp.com
          </a>
        </p>
      </div>
    </main>
    </>
  )
}
