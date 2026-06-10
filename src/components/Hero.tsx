import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import PhoneMockup from './PhoneMockup'
import Magnetic from './fx/Magnetic'
import Tilt from './fx/Tilt'
import logoIcon from '../assets/logo-icon.png'
import { isPrerendering } from '../lib/prerender'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

// Word-by-word reveal with a blur that resolves into focus
const word = {
  hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: 0.05 + i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
}

const HEADLINE: { text: string; accent?: boolean; break?: boolean }[] = [
  { text: 'Track' },
  { text: 'the' },
  { text: 'smart', accent: true },
  { text: 'money' },
  { text: 'on', break: true },
  { text: 'Polymarket.' },
]

// Real alerts the app sends, replayed as a live notification simulator
const NOTIFICATIONS = [
  { title: 'Whale Trade', body: '0xeebd...ba30 BUY Bitcoin Up or Down — $1.1k @ 99¢' },
  { title: 'High Conviction', body: '0x3dfb...abaf SELL Colorado Rockies — $158.9k @ 100¢' },
  { title: 'Whale Trade', body: 'surfandturf BUY Iran-US Nuclear Deal — $3.2k @ 44¢' },
  { title: 'High Conviction', body: '0xfaf9...f4c4 BUY Putin out by Dec 31, 2026 — $179.5k @ 91¢' },
]

function NotificationToast() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (isPrerendering) return
    let hide: ReturnType<typeof setTimeout>
    const cycle = setInterval(() => {
      setVisible(false)
      hide = setTimeout(() => {
        setIndex((i) => (i + 1) % NOTIFICATIONS.length)
        setVisible(true)
      }, 700)
    }, 4600)
    return () => {
      clearInterval(cycle)
      clearTimeout(hide)
    }
  }, [])

  const n = NOTIFICATIONS[index]
  return (
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[290px] z-20 pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            key={index}
            initial={isPrerendering ? false : { opacity: 0, y: -28, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="card-glass rounded-2xl px-3.5 py-3 shadow-2xl"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-ps-black border border-ps-green/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src={logoIcon} alt="" className="w-[22px] h-[22px] object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[11px] font-bold text-ps-text leading-tight">{n.title}</p>
                  <p className="text-[9px] text-ps-muted flex-shrink-0">now</p>
                </div>
                <p className="text-[10px] text-ps-muted leading-snug mt-0.5">{n.body}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    const el = sectionRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--hx', `${e.clientX - r.left}px`)
    el.style.setProperty('--hy', `${e.clientY - r.top}px`)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 60% at 70% 8%, rgba(24,185,116,0.13) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 28% 85%, rgba(24,185,116,0.07) 0%, transparent 55%), radial-gradient(ellipse 40% 30% at 15% 20%, rgba(24,185,116,0.04) 0%, transparent 50%)',
        }}
      />
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />
      {/* Cursor-following ambient glow */}
      <div className="hero-spotlight absolute inset-0 pointer-events-none hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-4 items-center">

          {/* ── Left: copy ── */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial={isPrerendering ? 'visible' : 'hidden'}
              animate="visible"
              className="flex items-center gap-2 mb-7"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ps-green opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ps-green" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-ps-green">
                Polymarket Intelligence
              </span>
            </motion.div>

            {/* Headline — word-by-word blur reveal */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-ps-text mb-6">
              {HEADLINE.map((w, i) => (
                <span key={i} className="inline">
                  {w.break && <br />}
                  <motion.span
                    custom={i}
                    variants={word}
                    initial={isPrerendering ? 'visible' : 'hidden'}
                    animate="visible"
                    className={`inline-block ${w.accent ? 'relative text-ps-green' : ''}`}
                  >
                    {w.text}
                    {w.accent && (
                      <svg
                        viewBox="0 0 120 10"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        className="absolute left-0 -bottom-[0.12em] w-full h-[0.16em] text-ps-green/50"
                      >
                        <path
                          d="M3 7.5C24 4 68 3.2 117 5.5"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                    )}
                  </motion.span>
                  {' '}
                </span>
              ))}
            </h1>

            {/* Description */}
            <motion.p
              custom={0.34}
              variants={fadeUp}
              initial={isPrerendering ? 'visible' : 'hidden'}
              animate="visible"
              className="text-base sm:text-lg text-ps-muted leading-relaxed max-w-[52ch] mb-8"
            >
              The moment a whale makes a high-conviction bet on Polymarket,
              you'll know. Polyscope tracks 50+ top wallets around the clock,
              fires push alerts the instant they trade, and gives you an AI
              advisor to make sense of it all.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.42}
              variants={fadeUp}
              initial={isPrerendering ? 'visible' : 'hidden'}
              animate="visible"
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Magnetic strength={0.3}>
                <a
                  href="#download"
                  className="btn-primary group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ps-green text-ps-black text-sm font-bold active:scale-[0.97]"
                >
                  Join the Waitlist
                  <ArrowRight size={16} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </Magnetic>
              <a
                href="#app"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-ps-muted hover:text-ps-green transition-colors duration-200"
              >
                See it in action
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={0.5}
              variants={fadeUp}
              initial={isPrerendering ? 'visible' : 'hidden'}
              animate="visible"
              className="flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {[
                { value: '50+', label: 'whale wallets tracked' },
                { value: '~5s', label: 'trade detection speed' },
                { value: '$100k+', label: 'high conviction threshold' },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex items-center gap-2">
                  {i > 0 && <span className="w-px h-3 bg-white/[0.10] mr-1" />}
                  <span className="font-mono font-semibold text-ps-green text-sm">{value}</span>
                  <span className="text-xs text-ps-muted">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: phone mockup ── */}
          <motion.div
            initial={isPrerendering ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end lg:pr-8"
          >
            {/* Ambient glow + sonar rings behind phone */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center lg:justify-end">
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(24,185,116,0.12) 0%, transparent 70%)',
                }}
              />
              <div className="relative w-[480px] h-[480px] lg:-mr-20 flex items-center justify-center">
                {[0, 1.2, 2.4].map((delay) => (
                  <span
                    key={delay}
                    className="absolute inset-0 rounded-full border border-ps-green/25 animate-sonar"
                    style={{ animationDelay: `${delay}s` }}
                  />
                ))}
              </div>
            </div>

            <div className="relative">
              <NotificationToast />

              <div className="animate-float">
                <Tilt max={8}>
                  <PhoneMockup screen="feed" />
                </Tilt>
              </div>

              {/* Floating high-conviction chip (bottom-right) */}
              <div
                className="absolute hidden sm:block card-glass rounded-xl px-3 py-2.5 shadow-2xl animate-float-slow"
                style={{ bottom: '20%', right: '-26%', animationDelay: '2.2s' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ps-orange" />
                  <p className="text-[10px] font-semibold text-ps-orange whitespace-nowrap">High Conviction</p>
                  <span className="text-[10px] font-mono text-ps-text">$158.9K</span>
                </div>
              </div>

              {/* Floating live-tracking chip (left) */}
              <div
                className="absolute hidden sm:block card-glass rounded-xl px-3 py-2.5 shadow-2xl animate-float"
                style={{ top: '30%', left: '-30%', animationDelay: '0.8s' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ps-green animate-pulse-dot" />
                  <span className="text-[9px] text-ps-muted whitespace-nowrap">Tracking 50 whales</span>
                  <span className="text-[9px] font-mono text-ps-green">LIVE</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
