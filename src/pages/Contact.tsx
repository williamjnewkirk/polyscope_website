import { useState } from 'react'
import { motion } from 'framer-motion'
import { PaperPlaneTilt, CheckCircle, WarningCircle } from '@phosphor-icons/react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqejqvpj'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
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
    <main className="min-h-screen bg-ps-black pt-28 pb-20 px-5 sm:px-8">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-ps-green mb-3">Get in touch</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-ps-text mb-3 leading-tight">
            Contact Us
          </h1>
          <p className="text-sm text-ps-muted leading-relaxed mb-10">
            Questions about Polyscope, partnership inquiries, or feedback? Send us a message and we'll get back to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/[0.08] bg-ps-card p-6 sm:p-8"
        >
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
                  <a href="mailto:newkirk@polyscopeapp.com" className="underline">
                    newkirk@polyscopeapp.com
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
        </motion.div>

        <p className="text-center text-xs text-ps-muted mt-6">
          Or email us directly at{' '}
          <a href="mailto:newkirk@polyscopeapp.com" className="text-ps-text hover:text-ps-green transition-colors">
            newkirk@polyscopeapp.com
          </a>
        </p>
      </div>
    </main>
  )
}
