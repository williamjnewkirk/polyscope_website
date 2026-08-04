import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Rss, Lightning, Wallet, Robot, ChartLineUp, UsersThree, Crosshair, Stack } from '@phosphor-icons/react'
import PhoneMockup, { type PhoneScreen } from './PhoneMockup'
import Tilt from './fx/Tilt'
import { isPrerendering } from '../lib/prerender'

const ADVANCE_MS = 6000

const TABS: { id: PhoneScreen; Icon: typeof Rss; label: string; desc: string }[] = [
  {
    id: 'markets',
    Icon: Crosshair,
    label: 'Markets',
    desc: 'For every busy market, which outcome proven traders bought over the last 24h, how much they staked, and how it lines up against the price. Sort by strength, volume, or smart money.',
  },
  {
    id: 'marketDetail',
    Icon: ChartLineUp,
    label: 'Signal Strength Breakdown',
    desc: 'Independent wallets, track record, money behind it, one-sidedness and recency — graded out of 100, with a scrubbing 24h price chart and the exact wallets behind the lean.',
  },
  {
    id: 'positions',
    Icon: Stack,
    label: 'Big Open Positions',
    desc: 'The $1M+ books whales are still holding across all of Polymarket, ranked by capital committed. Filter by size, category, or markets resolving today or this week.',
  },
  {
    id: 'clusters',
    Icon: UsersThree,
    label: 'Smart Money Clusters',
    desc: 'Four or more proven wallets independently buying the same side within minutes, above a minimum size. Its own view now — and a much higher bar to fire.',
  },
  {
    id: 'copyScore',
    Icon: ChartLineUp,
    label: 'Copy Score & Trader Analytics',
    desc: 'Every wallet rated 0–100 on price-adjusted edge, plus ROI, consistency, entry timing, position style, and category-by-category performance.',
  },
  {
    id: 'wallets',
    Icon: Wallet,
    label: 'ROI & Copy Score Leaderboards',
    desc: 'Rank suggested traders by return or by Copy Score, not just raw profit — so sharp smaller accounts surface instead of only the biggest bankrolls.',
  },
  {
    id: 'tradeDetail',
    Icon: Lightning,
    label: 'Expected-Value Estimates',
    desc: "Open any trade from a scored wallet to see that trader's historical edge on trades like it, in cents per share — so you can judge whether it fits their proven strengths.",
  },
  {
    id: 'feed',
    Icon: Rss,
    label: 'Live Feed',
    desc: 'Every qualifying trade from the wallets you follow, seconds after it lands on-chain. Search by trader or market, filter by size.',
  },
  {
    id: 'ai',
    Icon: Robot,
    label: 'AI Advisor',
    desc: 'Claude-powered analysis of any trade, market, or whale pattern. Ask why a position printed and get a straight answer.',
  },
]

export default function AppShowcase() {
  const [active, setActive] = useState<PhoneScreen>('markets')
  // Bumped on every manual selection so the progress bar restarts cleanly
  const [cycle, setCycle] = useState(0)
  const [paused, setPaused] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const select = useCallback((id: PhoneScreen) => {
    setActive(id)
    setCycle((c) => c + 1)
  }, [])

  // Auto-advance through the tabs while the section is unpaused
  useEffect(() => {
    if (isPrerendering || paused) return
    const t = setTimeout(() => {
      const i = TABS.findIndex((tab) => tab.id === active)
      select(TABS[(i + 1) % TABS.length].id)
    }, ADVANCE_MS)
    return () => clearTimeout(t)
  }, [active, cycle, paused, select])

  return (
    <section id="app" className="relative py-24 bg-ps-black overflow-hidden">
      {/* Distinct backdrop: grid + center glow */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 65% at 72% 50%, rgba(24,185,116,0.09) 0%, transparent 60%)',
        }}
      />

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={isPrerendering ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-ps-green mb-3">Inside the app</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ps-text max-w-xl leading-tight">
            Don&rsquo;t just see the trades.
            <br />
            See where the money sits.
          </h2>
          <p className="mt-4 text-ps-muted text-base leading-relaxed max-w-[52ch]">
            This is the actual app &mdash; graded markets, signal strength breakdowns,
            million-dollar open positions, clusters, Copy Score and trader analytics,
            exactly as they run on your phone.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* ── Tab list ── */}
          <motion.div
            initial={isPrerendering ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 order-2 lg:order-1"
          >
            {TABS.map(({ id, Icon, label, desc }) => {
              const isActive = id === active
              return (
                <button
                  key={id}
                  onClick={() => select(id)}
                  className={`relative text-left rounded-2xl border p-5 transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'bg-ps-card border-ps-green/35'
                      : 'bg-transparent border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isActive
                          ? 'bg-ps-green/10 border-ps-green/40'
                          : 'bg-ps-card border-white/[0.08]'
                      }`}
                    >
                      <Icon size={20} weight="duotone" className={isActive ? 'text-ps-green' : 'text-ps-muted'} />
                    </div>
                    <div className="min-w-0">
                      <p className={`text-base font-bold tracking-tight mb-1 transition-colors duration-300 ${isActive ? 'text-ps-text' : 'text-ps-muted'}`}>
                        {label}
                      </p>
                      <p className={`text-sm leading-relaxed transition-opacity duration-300 ${isActive ? 'text-ps-muted opacity-100' : 'text-ps-muted/70 opacity-80'}`}>
                        {desc}
                      </p>
                    </div>
                  </div>

                  {/* Auto-advance progress bar (hidden while paused on hover) */}
                  {isActive && !isPrerendering && !paused && (
                    <motion.div
                      key={cycle}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: ADVANCE_MS / 1000, ease: 'linear' }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-ps-green/50 origin-left"
                    />
                  )}
                </button>
              )
            })}
          </motion.div>

          {/* ── Phone ── */}
          <motion.div
            initial={isPrerendering ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(24,185,116,0.14) 0%, transparent 70%)',
              }}
            />
            <Tilt max={7}>
              <PhoneMockup screen={active} />
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
