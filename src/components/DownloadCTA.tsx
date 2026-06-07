import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { isPrerendering } from '../lib/prerender'

function AppStoreBadge({ store, className }: { store: 'apple' | 'google'; className?: string }) {
  const isApple = store === 'apple'
  return (
    <div
      className={`flex items-center gap-3 px-5 py-3 rounded-xl border border-white/[0.10] bg-white/[0.04] opacity-50 cursor-not-allowed select-none ${className}`}
    >
      {isApple ? (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-ps-text" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-ps-text" fill="currentColor">
          <path d="M3.18 23.76c.31.17.66.22 1.01.14l12.5-7.22-2.83-2.83-10.68 9.91zM.55 1.27C.2 1.62 0 2.18 0 2.89v18.22c0 .71.2 1.27.56 1.61l.08.08 10.2-10.2v-.24L.63 1.19l-.08.08zM20.48 10.5l-2.89-1.67-3.2 3.19 3.2 3.19 2.9-1.68c.83-.48.83-1.55-.01-2.03zM4.19.24L16.7 7.46l-2.83 2.83L3.18.24C3.5.32 3.85.28 4.19.24z"/>
        </svg>
      )}
      <div className="flex flex-col">
        <span className="text-[9px] font-medium text-ps-muted leading-none">Coming soon on</span>
        <span className="text-sm font-bold text-ps-text leading-tight">
          {isApple ? 'App Store' : 'Google Play'}
        </span>
      </div>
    </div>
  )
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqejqvpj'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function DownloadCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          message: 'I have joined the waitlist.',
          _subject: 'New Waitlist Signup',
        }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="download" className="py-24 bg-ps-surface relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(24,185,116,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={isPrerendering ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-ps-green mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ps-green animate-pulse-dot" />
            Coming to App Stores
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ps-text leading-tight mb-4">
            Be first on Polyscope.
          </h2>
          <p className="text-ps-muted text-base leading-relaxed max-w-[42ch] mx-auto mb-10">
            Join the waitlist and get early access the day we launch.
            No spam — one email when it's live.
          </p>

          {/* Email form */}
          <div className="mb-8">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-ps-green/10 border border-ps-green/30 text-ps-green font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-ps-green" />
              You're on the list — we'll be in touch.
            </motion.div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-3 rounded-full bg-ps-card border border-white/[0.09] text-ps-text text-sm placeholder:text-ps-muted focus:outline-none focus:border-ps-green/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ps-green text-ps-black text-sm font-bold hover:bg-opacity-90 active:scale-[0.97] transition-all duration-200 flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Joining…' : 'Notify Me'}
                  {status !== 'submitting' && <ArrowRight size={15} weight="bold" />}
                </button>
              </form>
              {status === 'error' && (
                <p className="text-xs text-red-400 mb-5">
                  Something went wrong. Please try again or email{' '}
                  <a href="mailto:support@polyscopeapp.com" className="underline">support@polyscopeapp.com</a>.
                </p>
              )}
            </>
          )}
          </div>

          {/* App store badge */}
          <div className="flex items-center justify-center">
            <AppStoreBadge store="apple" />
          </div>
          <p className="mt-4 text-[11px] text-ps-muted/50">
            iOS · Free to download · Pro and Premium tiers available
          </p>
        </motion.div>
      </div>
    </section>
  )
}
