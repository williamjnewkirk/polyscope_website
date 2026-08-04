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
  Crosshair,
  Gauge,
  Stack,
  BellRinging,
} from '@phosphor-icons/react'
import logoIcon from '../assets/logo-icon.png'
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

function MarketsCard() {
  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <FeatureTag>
            <Crosshair size={14} weight="bold" />
            Markets
            <ProPill />
          </FeatureTag>
          <h3 className="text-2xl font-bold tracking-tight text-ps-text mb-3">
            Where the smart money actually sits.
          </h3>
          <p className="text-sm text-ps-muted leading-relaxed max-w-[40ch]">
            For every busy Polymarket market, see which outcome proven traders bought
            over the last 24 hours, how much they staked, and how that lines up against
            the market&rsquo;s own price &mdash; &ldquo;$61K from 14 qualified wallets,
            bought avg 85&cent;, now 95&cent;.&rdquo; Sort by strength, volume, or smart
            money.
          </p>
          <p className="text-[11px] text-ps-muted/60 mt-4 italic">
            A measurement of public on-chain buying &mdash; not a forecast. Markets where
            the whales are already underwater, or where the outcome is effectively
            decided, are filtered out rather than dressed up as signals.
          </p>
        </div>
        <div className="hidden md:flex items-end justify-center overflow-hidden pt-6 pb-0 pr-6">
          <PhoneMockup screen="markets" className="scale-[0.72] origin-bottom" />
        </div>
      </div>
    </SpotlightCard>
  )
}

function SignalStrengthCard() {
  const factors = [
    { label: 'Independent wallets', pct: 52 },
    { label: 'Wallet track record', pct: 96 },
    { label: 'Money behind it', pct: 33 },
    { label: 'One-sidedness', pct: 85 },
    { label: 'Recency', pct: 85 },
  ]

  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card p-8"
    >
      <FeatureTag>
        <Gauge size={14} weight="bold" />
        Signal Strength
        <ProPill />
      </FeatureTag>
      <h3 className="text-xl font-bold tracking-tight text-ps-text mb-2">
        Every lean, graded out of 100.
      </h3>
      <p className="text-sm text-ps-muted leading-relaxed mb-6">
        One score that says how much qualified evidence backs a lean &mdash; and a full
        breakdown of what drove it. Open the detail screen for the scrubbing 24h price
        chart and the exact wallets behind the number.
      </p>
      {/* Mini breakdown demo */}
      <div className="rounded-xl border border-ps-green/25 bg-ps-green/[0.06] p-4">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-extrabold text-ps-green leading-none">
            66<span className="text-[11px] font-bold text-ps-muted">/100</span>
          </span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-ps-green border border-ps-green/40 rounded-full px-2 py-0.5 ml-auto">
            Strong signal
          </span>
        </div>
        <div className="space-y-2">
          {factors.map((f) => (
            <div key={f.label} className="flex items-center gap-2.5">
              <span className="text-[10px] text-ps-muted w-[92px] flex-shrink-0 leading-tight">{f.label}</span>
              <div className="h-1.5 flex-1 rounded-full bg-white/[0.07] overflow-hidden">
                <div className="h-full rounded-full bg-ps-green" style={{ width: `${f.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[11px] text-ps-muted/60 mt-4 italic">
        Not a probability, and not a prediction of how the market resolves.
      </p>
    </SpotlightCard>
  )
}

function BigPositionsCard() {
  const positions = [
    { addr: '0x2c33...0563', market: '2026 Balance of Power: D Senate, D House', side: 'No', cost: '$5.0M', pnl: '+11%' },
    { addr: '0xa2cd...2ba0', market: 'Will the US confirm that aliens exist before 2027?', side: 'No', cost: '$1.3M', pnl: '+8%' },
  ]

  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card p-8"
    >
      <FeatureTag>
        <Stack size={14} weight="bold" />
        Big Open Positions
        <ProPill />
      </FeatureTag>
      <h3 className="text-xl font-bold tracking-tight text-ps-text mb-2">
        Not just who traded &mdash; who&rsquo;s still holding.
      </h3>
      <p className="text-sm text-ps-muted leading-relaxed mb-6">
        The $1M+ books whales are still sitting on across all of Polymarket, ranked by
        capital committed, with cost basis, value now, and open P&amp;L. Filter to trades,
        positions or both, set a minimum size, pick a category, or narrow to markets
        resolving today or this week.
      </p>
      {/* Mini positions demo */}
      <div className="space-y-2">
        {positions.map((p) => (
          <div key={p.addr} className="relative rounded-xl p-3 border border-white/[0.07] bg-ps-surface overflow-hidden">
            <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-500" />
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
                Position
              </span>
              <span className="text-[10px] font-mono text-ps-green truncate">{p.addr}</span>
              <span className="text-[10px] font-mono font-bold text-ps-text ml-auto flex-shrink-0">{p.cost}</span>
            </div>
            <p className="text-[11px] font-medium text-ps-text line-clamp-1 mb-1.5">{p.market}</p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/15 text-red-400">{p.side}</span>
              <span className="text-[10px] font-mono text-ps-green">{p.pnl} open P&amp;L</span>
            </div>
          </div>
        ))}
      </div>
    </SpotlightCard>
  )
}

function MarketAlertsCard() {
  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card p-8"
    >
      <FeatureTag>
        <BellRinging size={14} weight="bold" />
        Market Signal Alerts
        <ProPill />
      </FeatureTag>
      <h3 className="text-xl font-bold tracking-tight text-ps-text mb-2">
        Know the moment a market turns.
      </h3>
      <p className="text-sm text-ps-muted leading-relaxed mb-6">
        Get pushed the instant a market newly crosses into a strong signal. Set your own
        strength threshold so only the evidence you care about buzzes, and mute any
        category you don&rsquo;t follow.
      </p>
      {/* Mini alert demo */}
      <div className="card-glass rounded-2xl px-3.5 py-3 shadow-xl mb-4">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-ps-black border border-ps-green/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img src={logoIcon} alt="" width={22} height={22} className="w-[22px] h-[22px] object-contain" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-2">
              <p className="text-[11px] font-bold text-ps-text leading-tight">Market Signal</p>
              <p className="text-[9px] text-ps-muted flex-shrink-0">now</p>
            </div>
            <p className="text-[10px] text-ps-muted leading-snug mt-0.5">
              Karmine Corp reached 82/100 &mdash; $61K from 14 qualified wallets
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-ps-muted">Alert above</span>
        <div className="h-1.5 flex-1 rounded-full bg-white/[0.07] overflow-hidden">
          <div className="h-full w-[70%] rounded-full bg-ps-green" />
        </div>
        <span className="text-[10px] font-mono font-bold text-ps-green">70</span>
      </div>
    </SpotlightCard>
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
        Trades over $100k are surfaced as potential smart-money signals &mdash; instantly,
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
  const bar = [
    { label: 'Wallets required', value: '4+', note: 'raised from 3' },
    { label: 'Copy Score floor', value: 'Higher', note: 'proven wallets only' },
    { label: 'Minimum size', value: 'Enforced', note: 'no dust clusters' },
  ]

  return (
    <SpotlightCard
      variants={itemVariants}
      className="card-lift relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] bg-ps-card"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <FeatureTag>
            <UsersThree size={14} weight="bold" />
            Smart Money Clusters
            <ProPill />
          </FeatureTag>
          <h3 className="text-2xl font-bold tracking-tight text-ps-text mb-3">
            When proven traders move together.
          </h3>
          <p className="text-sm text-ps-muted leading-relaxed max-w-[40ch] mb-5">
            One big trade is a single opinion. Several high-scoring wallets independently
            taking the same side within minutes is far stronger &mdash; and nearly
            impossible to spot by hand. Clusters now get their own view, and the bar to
            fire one is much higher, so a cluster alert means something again.
          </p>
          {/* The tightened trigger */}
          <div className="space-y-2">
            {bar.map((b) => (
              <div key={b.label} className="flex items-center gap-2">
                <span className="text-[11px] text-ps-muted flex-1">{b.label}</span>
                <span className="text-[11px] font-bold text-blue-400">{b.value}</span>
                <span className="text-[10px] text-ps-muted/60 w-[110px] text-right">{b.note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-end justify-center overflow-hidden pt-6 pb-0 pr-6">
          <PhoneMockup screen="clusters" className="scale-[0.72] origin-bottom" />
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
            Polyscope answers a bigger question than &ldquo;who just traded?&rdquo; &mdash;
            it shows you where the smart money actually sits. Markets graded out of 100 on
            real evidence, the million-dollar books whales are still holding, cluster
            alerts with teeth, and a 0&ndash;100 Copy Score behind every wallet.
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
          {/* Row 1: Markets (2/3) + Signal Strength (1/3) */}
          <MarketsCard />
          <SignalStrengthCard />

          {/* Row 2: Big Open Positions (1/3) + Copy Score (2/3) */}
          <BigPositionsCard />
          <CopyScoreCard />

          {/* Row 3: Smart Money Clusters (2/3) + Market Signal Alerts (1/3) */}
          <ClustersCard />
          <MarketAlertsCard />

          {/* Row 4: Leaderboards (1/3) + Trader Analytics (2/3) */}
          <LeaderboardsCard />
          <TraderAnalyticsCard />

          {/* Row 5: Live Feed (2/3) + Expected Value (1/3) */}
          <LiveFeedCard />
          <EVCard />

          {/* Row 6: Signals (1/3) + AI Advisor (2/3) */}
          <SignalsCard />
          <AICard />

          {/* Row 7: Bot Filter (2/3) + Search by Name (1/3) */}
          <BotFilterCard />
          <AddByNameCard />
        </motion.div>
      </div>
    </section>
  )
}
