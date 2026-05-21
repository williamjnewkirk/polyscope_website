import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ChartLine, Lightning, Wallet, Brain } from '@phosphor-icons/react'
import PhoneMockup from './PhoneMockup'

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden:   { opacity: 0, y: 20 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function FeatureTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-ps-green mb-3">
      {children}
    </span>
  )
}

function LiveFeedCard() {
  return (
    <motion.div
      variants={itemVariants}
      className="relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card"
      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Copy */}
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <FeatureTag>
            <ChartLine size={14} weight="bold" />
            Live Feed
          </FeatureTag>
          <h3 className="text-2xl font-bold tracking-tight text-ps-text mb-3">
            Every trade, the moment it happens.
          </h3>
          <p className="text-sm text-ps-muted leading-relaxed max-w-[38ch]">
            A real-time, chronological feed of all qualifying trades from the wallets
            you follow. Market name, outcome, size, and implied probability — at a glance.
          </p>
        </div>
        {/* Phone demo */}
        <div className="hidden md:flex items-end justify-center overflow-hidden pt-6 pb-0 pr-6">
          <PhoneMockup screen="feed" className="scale-[0.72] origin-bottom" />
        </div>
      </div>
    </motion.div>
  )
}

function SignalsCard() {
  const signals = [
    { address: '0x6fec...3be3', market: 'Will Trump say "Hormuz" with Xi?', outcome: 'No', size: '$143,782', price: '100¢' },
    { address: '0x90ca...1a4b', market: 'Iran-US Nuclear Deal by Aug 31?', outcome: 'No', size: '$98,450', price: '88¢' },
  ]

  return (
    <motion.div
      variants={itemVariants}
      className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card p-8"
      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
    >
      <FeatureTag>
        <Lightning size={14} weight="bold" />
        High Conviction
      </FeatureTag>
      <h3 className="text-xl font-bold tracking-tight text-ps-text mb-2">
        Flag trades that move markets.
      </h3>
      <p className="text-sm text-ps-muted leading-relaxed mb-6">
        Positions over $100k are surfaced as potential smart-money signals — instantly,
        across all Polymarket markets.
      </p>
      {/* Mini signal demo */}
      <div className="space-y-2">
        {signals.map((s, i) => (
          <div
            key={i}
            className="rounded-xl p-3 border bg-ps-orange/5 border-ps-orange/20"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-ps-orange" />
              <span className="text-[10px] font-bold text-ps-orange uppercase tracking-wider">High Conviction</span>
              <span className="text-[10px] font-mono text-ps-text ml-auto">{s.size}</span>
            </div>
            <p className="text-[11px] font-medium text-ps-text line-clamp-1 mb-1">{s.market}</p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-ps-orange/15 text-ps-orange">{s.outcome}</span>
              <span className="text-[9px] font-mono text-ps-muted">@ {s.price} · BUY · {s.address}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function WalletCard() {
  const whales = [
    { rank: 1, name: 'bossoskil1',       pnl: '+$3.09M', tracked: false },
    { rank: 2, name: 'surfandturf',       pnl: '+$2.52M', tracked: true  },
    { rank: 3, name: 'LaBradfordSmit...', pnl: '+$2.37M', tracked: true  },
    { rank: 4, name: '0x4924...B586',    pnl: '+$1.77M', tracked: false },
    { rank: 5, name: 'Pestle',           pnl: '+$1.76M', tracked: false },
  ]

  return (
    <motion.div
      variants={itemVariants}
      className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card p-8"
      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
    >
      <FeatureTag>
        <Wallet size={14} weight="bold" />
        Whale Tracker
      </FeatureTag>
      <h3 className="text-xl font-bold tracking-tight text-ps-text mb-2">
        Follow the top performers.
      </h3>
      <p className="text-sm text-ps-muted leading-relaxed mb-6">
        Curated leaderboard of the top 39 Polymarket wallets by monthly P&L.
        One tap to follow, instant alerts from there.
      </p>
      {/* Mini leaderboard */}
      <div className="space-y-2">
        {whales.map((w) => (
          <div key={w.rank} className="flex items-center gap-3 py-2 border-b border-white/[0.05] last:border-0">
            <span className="text-[11px] font-mono text-ps-muted w-4">#{w.rank}</span>
            <span className="text-[11px] font-semibold text-ps-text flex-1 truncate">{w.name}</span>
            <span className="text-[11px] font-mono text-ps-green">{w.pnl}</span>
            {w.tracked ? (
              <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-ps-green/15 text-ps-green border border-ps-green/20">
                Tracking
              </span>
            ) : (
              <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/[0.05] text-ps-muted border border-white/[0.08]">
                + Follow
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function AICard() {
  const messages = [
    { role: 'user',      text: 'What are the whales buying this week?' },
    { role: 'assistant', text: '3 whales have accumulated $312k on the Iran diplomatic talks market over 48h, pushing implied probability from 41% to 54%. Possible insider conviction on near-term resolution. Whales also loaded up $189k on No side of the Xi summit language markets.' },
  ]

  return (
    <motion.div
      variants={itemVariants}
      className="relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card"
      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Copy */}
        <div className="flex flex-col justify-center p-8 lg:p-10 order-2 md:order-1">
          <FeatureTag>
            <Brain size={14} weight="bold" />
            AI Trade Advisor
          </FeatureTag>
          <h3 className="text-2xl font-bold tracking-tight text-ps-text mb-3">
            Ask. Analyze. Act.
          </h3>
          <p className="text-sm text-ps-muted leading-relaxed max-w-[38ch]">
            Claude synthesizes whale patterns, implied probability shifts, and insider
            signals into plain-English insights. Ask any question about current market
            activity and get an actionable answer.
          </p>
          <p className="text-[11px] text-ps-muted/60 mt-4 italic">Premium tier only</p>
        </div>
        {/* Chat demo */}
        <div className="order-1 md:order-2 p-6 flex flex-col justify-center">
          <div className="rounded-2xl bg-ps-surface border border-white/[0.07] p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-xl px-3 py-2.5 text-[11px] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-ps-green/15 text-ps-green border border-ps-green/20'
                      : 'bg-white/[0.05] text-ps-text border border-white/[0.07]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {/* Input stub */}
            <div className="flex items-center gap-2 bg-white/[0.04] rounded-xl px-3 py-2 border border-white/[0.06] mt-2">
              <span className="text-[10px] text-ps-muted flex-1">Ask about whale activity...</span>
              <div className="w-5 h-5 rounded-full bg-ps-green flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                  <path d="M6 9.5V2.5M6 2.5L3 5.5M6 2.5L9 5.5" stroke="#0A0A0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-ps-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-ps-green mb-3">Features</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ps-text max-w-xl leading-tight">
            Built for traders who act fast.
          </h2>
          <p className="mt-4 text-ps-muted text-base leading-relaxed max-w-[52ch]">
            Every tool you need to stay ahead of the market — real-time data, instant
            alerts, and AI synthesis — in one mobile app.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {/* Row 1: Live Feed (2/3) + Signals (1/3) */}
          <LiveFeedCard />
          <SignalsCard />

          {/* Row 2: Wallet Tracker (1/3) + AI Advisor (2/3) */}
          <WalletCard />
          <AICard />
        </motion.div>
      </div>
    </section>
  )
}
