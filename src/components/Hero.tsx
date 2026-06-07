import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import PhoneMockup from './PhoneMockup'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

interface FloatingCardProps {
  className?: string
  children: ReactNode
  top?: string
  bottom?: string
  left?: string
  right?: string
  animDelay?: string
}

function FloatingCard({ className, children, top, bottom, left, right, animDelay }: FloatingCardProps) {
  return (
    <div
      className={`absolute card-glass rounded-xl px-3 py-2.5 shadow-2xl ${className ?? ''}`}
      style={{ backdropFilter: 'blur(16px)', top, bottom, left, right, animationDelay: animDelay }}
    >
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 68% 10%, rgba(24,185,116,0.10) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 30% 80%, rgba(24,185,116,0.05) 0%, transparent 60%)',
        }}
      />
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-4 items-center">

          {/* ── Left: copy ── */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
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

            {/* Headline */}
            <motion.h1
              custom={0.08}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-ps-text mb-6"
            >
              Track the{' '}
              <span className="text-ps-green">smart</span>{' '}
              money
              <br />
              on Polymarket.
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={0.18}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-ps-muted leading-relaxed max-w-[52ch] mb-8"
            >
              Real-time Polymarket whale intelligence in your pocket. Follow
              high-conviction positions, get instant alerts the moment they trade,
              and let AI synthesize the signals.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.26}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ps-green text-ps-black text-sm font-bold hover:bg-opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                Join the Waitlist
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ps-muted hover:text-ps-green transition-colors duration-200"
              >
                See how it works
                <ArrowRight size={14} />
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={0.34}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {[
                { value: '50+', label: 'whale wallets monitored' },
                { value: 'Live', label: 'Polymarket API data' },
                { value: 'AI', label: 'Claude-powered signals' },
              ].map(({ value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="font-mono font-semibold text-ps-green text-sm">{value}</span>
                  <span className="text-xs text-ps-muted">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: phone mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Ambient glow behind phone */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(24,185,116,0.12) 0%, transparent 70%)',
              }}
            />

            <div className="relative animate-float">
              <PhoneMockup screen="feed" />

              {/* Floating notification card (top-left of phone) */}
              <FloatingCard className="animate-float" top="18%" left="-36%" animDelay="1.2s">
                <div className="flex items-start gap-2.5 max-w-[180px]">
                  <span className="mt-0.5 w-2 h-2 rounded-full bg-ps-green flex-shrink-0 animate-pulse-dot" />
                  <div>
                    <p className="text-[10px] font-semibold text-ps-green leading-tight">surfandturf — BUY</p>
                    <p className="text-[9px] text-ps-muted leading-snug mt-0.5">Iran-US Nuclear Deal · $3,200 @ 44¢</p>
                  </div>
                </div>
              </FloatingCard>

              {/* Floating high-conviction chip (bottom-right) */}
              <FloatingCard className="animate-float-slow" bottom="22%" right="-30%" animDelay="2.5s">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ps-orange" />
                  <p className="text-[10px] font-semibold text-ps-orange whitespace-nowrap">High Conviction</p>
                  <span className="text-[10px] font-mono text-ps-text">$143K</span>
                </div>
              </FloatingCard>

              {/* Floating stat chip (top-right) */}
              <FloatingCard className="animate-float" top="8%" right="-20%" animDelay="0.6s">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-ps-muted whitespace-nowrap">Tracking 50 whales</span>
                  <span className="text-[9px] font-mono text-ps-green">LIVE</span>
                </div>
              </FloatingCard>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
