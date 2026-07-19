import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  ChartLine,
  Lightning,
  Brain,
  ArrowUp,
  Funnel,
  IdentificationCard,
  ChartLineUp,
  UsersThree,
  Trophy,
  Target,
  MagnifyingGlass,
} from '@phosphor-icons/react'
import PhoneMockup from './PhoneMockup'
import SpotlightCard from './fx/SpotlightCard'
import { isPrerendering } from '../lib/prerender'

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

function ProPill() {
  return (
    <span className="inline-flex items-center text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-ps-green text-ps-black leading-none">
      Pro
    </span>
  )
}

function LiveFeedCard() {
  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card"
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
    </SpotlightCard>
  )
}

function SignalsCard() {
  const signals = [
    { address: '0x3dfb...abaf', market: 'Colorado Rockies vs. Los Angeles Angels', outcome: 'Colorado Rockies', size: '$158,918', price: '100¢', action: 'SELL' },
    { address: '0xfaf9...f4c4', market: 'Putin out as President of Russia by Dec 31, 2026?', outcome: 'No', size: '$179,504', price: '91¢', action: 'BUY' },
  ]

  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card p-8"
    >
      <FeatureTag>
        <Lightning size={14} weight="bold" />
        High Conviction
      </FeatureTag>
      <h3 className="text-xl font-bold tracking-tight text-ps-text mb-2">
        Flag trades that move markets.
      </h3>
      <p className="text-sm text-ps-muted leading-relaxed mb-6">
        Positions over $100k are surfaced as potential smart-money signals &mdash; instantly,
        across all Polymarket markets. Prefer it quieter? &ldquo;Significant trades only&rdquo;
        pings you when a wallet bets unusually big for itself, and stays silent when it
        doesn&rsquo;t.
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
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${s.action === 'SELL' ? 'bg-red-500/15 text-red-400' : 'bg-ps-green/15 text-ps-green'}`}>
                {s.outcome}
              </span>
              <span className="text-[9px] font-mono text-ps-muted">@ {s.price} · {s.action} · {s.address}</span>
            </div>
          </div>
        ))}
      </div>
    </SpotlightCard>
  )
}

function CopyScoreCard() {
  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <FeatureTag>
            <ChartLineUp size={14} weight="bold" />
            Copy Score
            <ProPill />
          </FeatureTag>
          <h3 className="text-2xl font-bold tracking-tight text-ps-text mb-3">
            Every wallet, rated 0&ndash;100 on real edge.
          </h3>
          <p className="text-sm text-ps-muted leading-relaxed max-w-[40ch]">
            On a prediction market a raw win rate lies &mdash; betting heavy favourites
            at 90&cent; &ldquo;wins&rdquo; 90% of the time with zero skill. Copy Score is
            price-adjusted: it measures how far a trader beats the odds they actually
            paid, blended with consistency, return on capital, and how recently
            they&rsquo;ve traded.
          </p>
          <p className="text-[11px] text-ps-muted/60 mt-4 italic">
            Deliberately conservative &mdash; wallets with too few resolved bets are held
            back until there&rsquo;s enough data to judge them fairly.
          </p>
        </div>
        <div className="hidden md:flex items-end justify-center overflow-hidden pt-6 pb-0 pr-6">
          <PhoneMockup screen="copyScore" className="scale-[0.72] origin-bottom" />
        </div>
      </div>
    </SpotlightCard>
  )
}

function ClustersCard() {
  const legs = [
    { addr: '0xe16d...5e30', size: '$1,000' },
    { addr: '0xc44f...d49f', size: '$14K' },
    { addr: '0xa187...7fd4', size: '$5K' },
  ]

  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card p-8"
    >
      <FeatureTag>
        <UsersThree size={14} weight="bold" />
        Smart Money Clusters
        <ProPill />
      </FeatureTag>
      <h3 className="text-xl font-bold tracking-tight text-ps-text mb-2">
        When proven traders move together.
      </h3>
      <p className="text-sm text-ps-muted leading-relaxed mb-6">
        One big trade is a single opinion. Several high-scoring wallets independently
        taking the same side within minutes is a far stronger signal &mdash; and it&rsquo;s
        nearly impossible to spot by hand. Polyscope watches for it and pushes it the
        instant it happens.
      </p>
      {/* Mini cluster demo */}
      <div className="rounded-xl border border-blue-500/60 bg-blue-500/[0.07] p-4">
        <div className="flex items-center gap-2 mb-2">
          <UsersThree size={13} weight="fill" className="text-blue-400" />
          <span className="text-[11px] font-bold text-blue-400">3 smart wallets &middot; $20K</span>
          <span className="text-[10px] text-ps-muted ml-auto">2m ago</span>
        </div>
        <p className="text-[12px] font-semibold text-ps-text leading-tight mb-2">
          Will Spain win on 2026-07-19?
        </p>
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-ps-green/15 text-ps-green">
            BUY Yes @ 43&cent;
          </span>
          <span className="text-[10px] text-ps-muted">avg score 84</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {legs.map((l) => (
            <span
              key={l.addr}
              className="text-[9px] font-mono text-ps-muted px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.07]"
            >
              {l.addr} &middot; {l.size}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  )
}

function LeaderboardsCard() {
  const rows = [
    { rank: 1, name: 'pada',            roi: '+121.8%', bot: false },
    { rank: 2, name: 'asparagus2012',   roi: '+94.9%',  bot: false },
    { rank: 3, name: '0x75973C6...',    roi: '+57.5%',  bot: true  },
    { rank: 4, name: 'therighteous...', roi: '+53.4%',  bot: true  },
  ]

  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card p-8"
    >
      <FeatureTag>
        <Trophy size={14} weight="bold" />
        Leaderboards
      </FeatureTag>
      <h3 className="text-xl font-bold tracking-tight text-ps-text mb-2">
        Ranked by edge, not bankroll.
      </h3>
      <p className="text-sm text-ps-muted leading-relaxed mb-6">
        Sort suggested traders by ROI or straight by Copy Score, so sharp smaller
        accounts surface instead of only the biggest wallets. Flagged bots stay
        labelled and capped, so market-makers never masquerade as elite traders.
      </p>
      {/* Mini leaderboard */}
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.rank} className="flex items-center gap-3 py-2 border-b border-white/[0.05] last:border-0">
            <span className="text-[11px] font-mono text-ps-muted w-4">#{r.rank}</span>
            <span className="text-[11px] font-semibold text-ps-text truncate">{r.name}</span>
            {r.bot && (
              <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-ps-orange/15 text-ps-orange border border-ps-orange/30">
                BOT
              </span>
            )}
            <span className="text-[11px] font-mono text-ps-green ml-auto">{r.roi} ROI</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-ps-muted/60 mt-4 italic">
        ROI ranking is free. Copy Score ranking is Pro.
      </p>
    </SpotlightCard>
  )
}

function TraderAnalyticsCard() {
  const metrics = [
    { value: '+23.9¢/sh', label: 'Edge' },
    { value: '+128%',     label: 'ROI' },
    { value: '1.7',       label: 'Consistency' },
    { value: '131d',      label: 'Entry lead' },
  ]
  const categories = [
    { name: 'Politics', meta: '93% win · 28', pnl: '+$941K', pct: 100 },
    { name: 'Crypto',   meta: '78% win · 14', pnl: '+$212K', pct: 58 },
    { name: 'Tech',     meta: '100% win · 2', pnl: '+$64.2K', pct: 30 },
  ]

  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col justify-center p-8 lg:p-10 order-2 md:order-1">
          <FeatureTag>
            <IdentificationCard size={14} weight="bold" />
            Trader Analytics
            <ProPill />
          </FeatureTag>
          <h3 className="text-2xl font-bold tracking-tight text-ps-text mb-3">
            See what a trader is actually good at.
          </h3>
          <p className="text-sm text-ps-muted leading-relaxed max-w-[40ch]">
            Under the score sits a full performance profile: profit per share beyond
            the entry price, realized ROI, a risk-adjusted consistency measure, how
            early they enter before resolution, whether they scale in or go all-in
            &mdash; and a category-by-category breakdown of where they win and lose.
          </p>
        </div>
        {/* Analytics demo */}
        <div className="order-1 md:order-2 p-6 flex flex-col justify-center">
          <div className="rounded-2xl bg-ps-surface border border-white/[0.07] p-4">
            <div className="grid grid-cols-4 gap-1.5 mb-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-lg bg-white/[0.03] border border-white/[0.05] px-1 py-2 text-center">
                  <p className="text-[11px] font-extrabold text-ps-green leading-none">{m.value}</p>
                  <p className="text-[8px] text-ps-muted mt-1 leading-tight">{m.label}</p>
                </div>
              ))}
            </div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-ps-muted mb-2">
              Performance by category
            </p>
            <div className="space-y-2.5">
              {categories.map((c) => (
                <div key={c.name}>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[11px] font-bold text-ps-text">{c.name}</span>
                    <span className="text-[9px] text-ps-muted ml-auto">{c.meta}</span>
                    <span className="text-[11px] font-bold text-ps-green">{c.pnl}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] mt-1.5 overflow-hidden">
                    <div className="h-full rounded-full bg-ps-green" style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  )
}

function EVCard() {
  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card p-8"
    >
      <FeatureTag>
        <Target size={14} weight="bold" />
        Expected Value
        <ProPill />
      </FeatureTag>
      <h3 className="text-xl font-bold tracking-tight text-ps-text mb-2">
        Does this trade fit their strengths?
      </h3>
      <p className="text-sm text-ps-muted leading-relaxed mb-6">
        Open any trade from a scored wallet and Polyscope shows that trader&rsquo;s
        historical edge on trades like it &mdash; in dollars and cents per share &mdash;
        so you can weigh it against their proven record.
      </p>
      {/* Mini EV demo */}
      <div className="rounded-xl border border-ps-green/25 bg-ps-green/[0.06] p-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <ChartLineUp size={12} weight="bold" className="text-ps-green" />
          <p className="text-[9px] font-bold uppercase tracking-widest text-ps-muted">
            Trader&rsquo;s historical edge
          </p>
        </div>
        <p className="text-2xl font-extrabold text-ps-green leading-none mb-2">
          +$6.3k <span className="text-[11px] font-bold text-ps-muted">(+2.0&cent;/share)</span>
        </p>
        <p className="text-[10px] text-ps-muted leading-relaxed">
          Based on 14 resolved positions at similar prices. Past performance
          doesn&rsquo;t predict future results.
        </p>
      </div>
    </SpotlightCard>
  )
}

function AddByNameCard() {
  const results = [
    { initial: 'P', name: 'Poly7-meta4',    address: '0x95b6...50a9' },
    { initial: 'J', name: 'Jon-Poly',       address: '0x97ba...27c3' },
    { initial: 'P', name: 'Poly-Master-Trade', address: '0xe6a5...412f' },
  ]

  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card p-8"
    >
      <FeatureTag>
        <MagnifyingGlass size={14} weight="bold" />
        Search by Name
      </FeatureTag>
      <h3 className="text-xl font-bold tracking-tight text-ps-text mb-2">
        Track anyone by name.
      </h3>
      <p className="text-sm text-ps-muted leading-relaxed mb-6">
        No more hunting for a 0x address. Type a trader&rsquo;s Polymarket name and
        Polyscope finds the wallet and fills everything in with one tap.
      </p>
      {/* Mini search demo */}
      <div className="rounded-xl border border-white/[0.06] bg-ps-surface p-4">
        <div className="flex items-center gap-2 bg-white/[0.05] rounded-lg px-3 py-2 border border-white/[0.09] mb-3">
          <MagnifyingGlass size={12} className="text-ps-muted flex-shrink-0" />
          <span className="text-[12px] font-medium text-ps-text">poly</span>
        </div>
        <div className="space-y-2">
          {results.map((r) => (
            <div key={r.name} className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-ps-green/15 border border-ps-green/30 flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] font-bold text-ps-green">{r.initial}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-ps-text truncate leading-tight">{r.name}</p>
                <p className="text-[9px] font-mono text-ps-muted truncate leading-tight">{r.address}</p>
              </div>
              <span className="text-[10px] font-bold text-ps-green flex-shrink-0">Use</span>
            </div>
          ))}
        </div>
      </div>
    </SpotlightCard>
  )
}

function AICard() {
  const messages = [
    { role: 'user',      text: 'What are the whales buying this week?' },
    { role: 'assistant', text: '3 whales have accumulated $312k on the Iran diplomatic talks market over 48h, pushing implied probability from 41% to 54%. Possible insider conviction on near-term resolution. Whales also loaded up $189k on the No side of the Xi summit language markets.' },
  ]

  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card"
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
                <ArrowUp size={11} weight="bold" className="text-ps-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  )
}

function BotFilterCard() {
  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Copy */}
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <FeatureTag>
            <Funnel size={14} weight="bold" />
            Bot Filter
            <ProPill />
          </FeatureTag>
          <h3 className="text-2xl font-bold tracking-tight text-ps-text mb-3">
            See real human conviction, minus the bot noise.
          </h3>
          <p className="text-sm text-ps-muted leading-relaxed max-w-[40ch]">
            Market-maker and HFT bots fire thousands of trades a day and bury the
            signal. Polyscope flags them automatically — by trade frequency,
            simultaneous markets, same-second bursts, and round-the-clock timing —
            then lets you hide them from the feed, Signals, and suggested wallets
            with one tap.
          </p>
          <p className="text-[11px] text-ps-muted/60 mt-4 italic">
            Conservatively tuned — never hides real human traders.
          </p>
        </div>
        {/* Phone demo — redesigned wallet profile with bot detection */}
        <div className="hidden md:flex items-end justify-center overflow-hidden pt-6 pb-0 pr-6">
          <PhoneMockup screen="walletDetail" className="scale-[0.72] origin-bottom" />
        </div>
      </div>
    </SpotlightCard>
  )
}


export default function Features() {
  return (
    <section id="features" className="py-24 bg-ps-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={isPrerendering ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-ps-green mb-3">Features</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ps-text max-w-xl leading-tight">
            Built for traders who want proof.
          </h2>
          <p className="mt-4 text-ps-muted text-base leading-relaxed max-w-[52ch]">
            Polyscope doesn&rsquo;t just tell you what happened &mdash; it tells you who&rsquo;s
            worth watching. Every wallet is scored on price-adjusted edge and opened up
            into a full performance profile, with cluster alerts, edge-ranked
            leaderboards, a bot filter, and an AI advisor on top.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={sectionVariants}
          initial={isPrerendering ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {/* Row 1: Copy Score (2/3) + Smart Money Clusters (1/3) */}
          <CopyScoreCard />
          <ClustersCard />

          {/* Row 2: Leaderboards (1/3) + Trader Analytics (2/3) */}
          <LeaderboardsCard />
          <TraderAnalyticsCard />

          {/* Row 3: Live Feed (2/3) + Expected Value (1/3) */}
          <LiveFeedCard />
          <EVCard />

          {/* Row 4: Signals (1/3) + AI Advisor (2/3) */}
          <SignalsCard />
          <AICard />

          {/* Row 5: Bot Filter (2/3) + Search by Name (1/3) */}
          <BotFilterCard />
          <AddByNameCard />
        </motion.div>
      </div>
    </section>
  )
}
