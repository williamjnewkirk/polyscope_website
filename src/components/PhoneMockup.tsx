import { AnimatePresence, motion } from 'framer-motion'
import {
  WifiHigh,
  BatteryFull,
  MagnifyingGlass,
  FadersHorizontal,
  Rss,
  Wallet,
  Lightning,
  Robot,
  User,
  Warning,
  ArrowUp,
  ArrowLeft,
  Plus,
  UsersThree,
  ShieldCheck,
  ChartLineUp,
  X,
} from '@phosphor-icons/react'
import logoIcon from '../assets/logo-icon.png'
import TypeText from './fx/TypeText'
import { isPrerendering } from '../lib/prerender'

export type PhoneScreen =
  | 'feed'
  | 'signals'
  | 'markets'
  | 'marketDetail'
  | 'positions'
  | 'wallets'
  | 'walletDetail'
  | 'copyScore'
  | 'clusters'
  | 'tradeDetail'
  | 'addWallet'
  | 'ai'

interface TradeCardData {
  alias: string
  address: string
  action: 'BUY' | 'SELL'
  market: string
  outcome: string
  size: string
  price: string
  time: string
  highConviction?: boolean
}

const FEED_TRADES: TradeCardData[] = [
  { alias: '0x3DFb153c197D4...', address: '0x3dfb...abaf', action: 'BUY', market: 'Birmingham: Mark Lajal vs Leandro Riedi', outcome: 'Mark Lajal', size: '$4,208.05', price: '36¢', time: '3m ago' },
  { alias: 'Bonereaper', address: '0xeebd...ba30', action: 'BUY', market: 'Bitcoin Up or Down - June 2, 1:35AM-1:40AM ET', outcome: 'Down', size: '$1,083.07', price: '99¢', time: '3m ago' },
  { alias: 'surfandturf', address: '0x4280...7f21', action: 'BUY', market: 'Iran-US Nuclear Deal by Aug 31?', outcome: 'Yes', size: '$3,200.00', price: '44¢', time: '1h ago' },
  { alias: 'Vatrer', address: '0x77b3...e1c9', action: 'BUY', market: 'UFC 316 — Dvalishvili vs O’Malley, winner?', outcome: 'Dvalishvili', size: '$1,920.00', price: '58¢', time: '2h ago' },
  { alias: 'ferrariChampions24', address: '0x9c11...20aa', action: 'SELL', market: 'Fed rate cut in September 2026?', outcome: 'Yes', size: '$2,750.00', price: '71¢', time: '2h ago' },
  { alias: 'afghj2421', address: '0x52de...77b1', action: 'BUY', market: 'S&P 500 closes above 6,100 this week?', outcome: 'Yes', size: '$5,150.00', price: '63¢', time: '3h ago' },
]

const SIGNAL_TRADES: TradeCardData[] = [
  { alias: '0x3dfb...abaf', address: '0x3dfb...abaf', action: 'SELL', market: 'Colorado Rockies vs. Los Angeles Angels', outcome: 'Colorado Rockies', size: '$158,918.86', price: '100¢', time: '1h ago', highConviction: true },
  { alias: '0x88ed...6cfb', address: '0x88ed...6cfb', action: 'BUY', market: 'MicroStrategy sells any Bitcoin by May 31, 2026?', outcome: 'No', size: '$100,000.00', price: '100¢', time: '12h ago', highConviction: true },
  { alias: '0xfaf9...f4c4', address: '0xfaf9...f4c4', action: 'BUY', market: 'Putin out as President of Russia by December 31, 2026?', outcome: 'No', size: '$179,504.31', price: '91¢', time: '14h ago', highConviction: true },
  { alias: '0x2d47...f88a', address: '0x2d47...f88a', action: 'BUY', market: 'UFC 316 — Dvalishvili vs O’Malley, winner?', outcome: 'Dvalishvili', size: '$112,000.00', price: '54¢', time: '16h ago', highConviction: true },
  { alias: '0xb8c2...91ea', address: '0xb8c2...91ea', action: 'BUY', market: 'Fed rate cut in September 2026?', outcome: 'Yes', size: '$187,400.00', price: '66¢', time: '20h ago', highConviction: true },
]

// Ranked by ROI (not raw profit) so sharp smaller accounts surface too — and
// suspected bots stay labelled, mirroring the real Suggested Wallets tab.
const SUGGESTED_WALLETS = [
  { rank: 1, name: 'pada',          roi: '+121.8% ROI', pnl: '+$1.13M',  bot: false },
  { rank: 2, name: 'asparagus2012', roi: '+94.9% ROI',  pnl: '+$2.30M',  bot: false },
  { rank: 3, name: '0x75973C6...',  roi: '+57.5% ROI',  pnl: '+$917,893', bot: true },
  { rank: 4, name: 'therighteous...', roi: '+53.4% ROI', pnl: '+$566,303', bot: true },
  { rank: 5, name: 'Bonereaper',    roi: '+41.2% ROI',  pnl: '+$54,300', bot: false },
]

const WALLET_SORTS = ['Profit/Loss', 'Volume', 'ROI', 'Copy Score']

const AI_QUESTION = 'What’s driving the conflicting MicroStrategy position signals?'
const AI_ANSWER =
  'This market has almost certainly already resolved “No” — the deadline was May 31 and today is June 2. What you’re seeing is post-resolution settlement activity, not directional betting: the $100k “No” buys at 100¢ are near-riskless settlement captures.'

function TradeCardItem({ trade }: { trade: TradeCardData }) {
  return (
    <div
      className={`rounded-xl p-3 mb-2 border ${
        trade.highConviction
          ? 'bg-orange-950/30 border-ps-orange/30'
          : 'bg-white/[0.03] border-white/[0.06]'
      }`}
    >
      {trade.highConviction && (
        <div className="flex items-center gap-1.5 mb-2">
          <Lightning size={9} weight="fill" className="text-ps-orange" />
          <span className="text-[9px] font-bold tracking-wider text-ps-orange uppercase">
            High Conviction
          </span>
        </div>
      )}
      <div className="flex items-start justify-between mb-1.5 gap-2">
        <div className="min-w-0">
          <p className={`text-[10px] font-semibold truncate ${trade.highConviction ? 'font-mono' : ''} text-ps-green`}>
            {trade.alias}
          </p>
          {!trade.highConviction && (
            <p className="text-[8px] font-mono text-ps-muted truncate">{trade.address}</p>
          )}
        </div>
        <span
          className={`text-[9px] font-bold px-2 py-0.5 rounded-md flex-shrink-0 tracking-wider ${
            trade.action === 'BUY'
              ? 'bg-ps-green/15 text-ps-green'
              : 'bg-red-500/15 text-red-400'
          }`}
        >
          {trade.action}
        </span>
      </div>
      <p className="text-[11px] font-semibold text-ps-text leading-tight mb-1.5 line-clamp-2">
        {trade.market}
      </p>
      <div className="flex items-center gap-2">
        <span
          className={`text-[9px] font-medium px-2 py-0.5 rounded-md ${
            trade.action === 'SELL' && trade.highConviction
              ? 'bg-red-500/15 text-red-400'
              : 'bg-ps-green/15 text-ps-green'
          }`}
        >
          {trade.outcome}
        </span>
        <span className="text-[10px] font-mono font-semibold text-ps-text">{trade.size}</span>
        <span className="text-[9px] text-ps-muted font-mono">@ {trade.price}</span>
        <span className="text-[9px] text-ps-muted ml-auto">{trade.time}</span>
      </div>
    </div>
  )
}

function FeedScreen() {
  const doubled = [...FEED_TRADES, ...FEED_TRADES]
  return (
    <>
      <div className="px-4 mb-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-white/[0.05] rounded-xl px-3 py-2 border border-white/[0.07] flex-1">
            <MagnifyingGlass size={11} className="text-ps-muted flex-shrink-0" />
            <span className="text-[10px] text-ps-muted flex-1 truncate">Search by trader or market...</span>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.07]">
            <FadersHorizontal size={11} className="text-ps-muted" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-4 py-1.5 mb-1.5 bg-white/[0.02] border-y border-white/[0.04]">
        <Rss size={9} className="text-ps-muted" />
        <span className="text-[9px] text-ps-muted font-medium">Last 24 hours</span>
      </div>
      <div className="relative overflow-hidden px-4" style={{ height: '352px' }}>
        <div className="animate-scroll-up group-hover/phone:[animation-play-state:paused]" style={{ animationDuration: '26s' }}>
          {doubled.map((trade, i) => (
            <TradeCardItem key={i} trade={trade} />
          ))}
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #111115)' }}
        />
      </div>
    </>
  )
}

// Signals is a three-way view in 1.4 — live trades, graded markets, and clusters.
function SignalTabs({ active }: { active: 'Signals' | 'Markets' | 'Clusters' }) {
  return (
    <div className="flex gap-1 px-4 mb-2">
      {(['Signals', 'Markets', 'Clusters'] as const).map((tab) => (
        <span
          key={tab}
          className={`flex-1 text-center text-[10px] font-bold py-1 rounded-full border ${
            tab === active
              ? 'text-ps-text bg-white/[0.07] border-white/[0.16]'
              : 'text-ps-muted border-transparent'
          }`}
        >
          {tab}
        </span>
      ))}
    </div>
  )
}

function SignalsScreen() {
  const doubled = [...SIGNAL_TRADES, ...SIGNAL_TRADES]
  return (
    <>
      <SignalTabs active="Signals" />
      <div className="flex items-center gap-2 px-4 mb-2">
        <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-ps-green/15 text-ps-green border border-ps-green/25">
          Newest
        </span>
        <span className="text-[10px] text-ps-muted px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
          Highest $
        </span>
        {/* Filter sheet — trades / positions / both, min size, category, resolving soon */}
        <span className="ml-auto w-6 h-6 rounded-full border border-ps-green/50 flex items-center justify-center flex-shrink-0">
          <FadersHorizontal size={11} weight="bold" className="text-ps-green" />
        </span>
      </div>
      <div className="mx-4 mb-2.5 p-2.5 rounded-xl bg-ps-orange/10 border border-ps-orange/25">
        <div className="flex gap-2">
          <Warning size={11} weight="fill" className="text-ps-orange flex-shrink-0 mt-0.5" />
          <p className="text-[9px] text-ps-orange leading-snug">
            Trades over $100,000 USDC from anywhere on Polymarket in the last 24 hours. Not financial advice.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden px-4" style={{ height: '302px' }}>
        <div className="animate-scroll-up group-hover/phone:[animation-play-state:paused]" style={{ animationDuration: '20s' }}>
          {doubled.map((trade, i) => (
            <TradeCardItem key={i} trade={trade} />
          ))}
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #111115)' }}
        />
      </div>
    </>
  )
}

// ── Markets (new in 1.4) ─────────────────────────────────────────────────
// Every busy market graded on how much qualified evidence backs one outcome
// over the last 24h. A measurement of whale buying — never a forecast.
const MARKET_SIGNALS = [
  {
    market: 'LoL: Karmine Corp vs Team Heretics — Game 2 Winner',
    lean: 'Karmine Corp',
    score: '82',
    band: 'Strong signal',
    price: '95¢',
    evidence: '$61K from 14 qualified wallets · bought avg 85¢, now 95¢',
    meta: 'Avg Copy Score 86 · Bots excluded',
    ago: 'as of 3m ago',
    strong: true,
  },
  {
    market: 'San Francisco Giants vs. Texas Rangers',
    lean: 'Texas Rangers',
    score: '63',
    band: 'Moderate signal',
    price: '53¢',
    evidence: '$18K from 9 qualified wallets · bought avg 51¢, now 53¢',
    meta: 'Avg Copy Score 88 · Bots excluded',
    ago: 'as of 2m ago',
    strong: false,
  },
  {
    market: 'Fed rate cut in September 2026?',
    lean: 'Yes',
    score: '74',
    band: 'Strong signal',
    price: '66¢',
    evidence: '$140K from 11 qualified wallets · bought avg 61¢, now 66¢',
    meta: 'Avg Copy Score 91 · Bots excluded',
    ago: 'as of 8m ago',
    strong: true,
  },
]

function MarketSignalCard({ m }: { m: (typeof MARKET_SIGNALS)[number] }) {
  return (
    <div
      className={`rounded-xl p-2.5 mb-2 border ${
        m.strong ? 'border-ps-green bg-ps-green/[0.06]' : 'border-white/[0.09] bg-white/[0.03]'
      }`}
    >
      <p className="text-[11px] font-bold text-ps-text leading-tight mb-1.5 line-clamp-2">{m.market}</p>
      <div className="flex items-end gap-2 mb-1.5">
        <div className="min-w-0 flex-1">
          <p className="text-[7px] font-bold uppercase tracking-widest text-ps-muted leading-none mb-1">
            Smart money lean
          </p>
          <p className="text-[13px] font-extrabold text-ps-text leading-none truncate">{m.lean}</p>
        </div>
        <div
          className={`text-center rounded-lg border px-2 py-1 flex-shrink-0 ${
            m.strong ? 'border-ps-green/60 bg-ps-green/[0.08]' : 'border-white/[0.14]'
          }`}
        >
          <p className={`text-[13px] font-extrabold leading-none ${m.strong ? 'text-ps-green' : 'text-ps-text'}`}>
            {m.score}
            <span className="text-[8px] text-ps-muted font-bold">/100</span>
          </p>
          <p
            className={`text-[6px] font-bold uppercase tracking-wider leading-none mt-1 ${
              m.strong ? 'text-ps-green' : 'text-ps-muted'
            }`}
          >
            {m.band}
          </p>
        </div>
      </div>
      <p className="text-[8px] text-ps-muted leading-snug mb-1">
        Market price <span className="font-mono font-bold text-ps-text">{m.price}</span> at signal time
      </p>
      <p className="text-[8px] text-ps-muted leading-snug">{m.evidence}</p>
      <div className="flex items-center gap-1 mt-1">
        <span className="text-[7px] text-ps-muted/70">{m.meta}</span>
        <span className="text-[7px] text-ps-muted/70 ml-auto">{m.ago}</span>
      </div>
    </div>
  )
}

function MarketsScreen() {
  return (
    <>
      <SignalTabs active="Markets" />
      <div className="flex items-center gap-1.5 px-4 mb-2">
        <span className="text-[8px] font-bold uppercase tracking-widest text-ps-muted">Sort</span>
        {['Strength', 'Volume', 'Smart $'].map((s) => (
          <span
            key={s}
            className={`text-[9px] px-2 py-0.5 rounded-full border ${
              s === 'Strength'
                ? 'font-semibold text-blue-400 border-blue-500/60 bg-blue-500/10'
                : 'text-ps-muted border-white/[0.06] bg-white/[0.04]'
            }`}
          >
            {s}
          </span>
        ))}
      </div>
      <div className="px-4">
        <p className="text-[11px] font-bold text-ps-text leading-tight">Where smart money went</p>
        <p className="text-[8px] text-ps-muted leading-snug mt-0.5">
          Measured whale buying over the last 24h &mdash; not a prediction.
        </p>
        <p className="text-[8px] text-ps-muted/60 leading-snug mb-2">
          15 of 250 scanned markets currently qualify &middot; updated 3m ago
        </p>
        {MARKET_SIGNALS.map((m) => (
          <MarketSignalCard key={m.market} m={m} />
        ))}
      </div>
    </>
  )
}

// Market detail — the full evidence breakdown behind a single lean.
const MARKET_DETAIL = {
  category: 'MLB',
  market: 'San Francisco Giants vs. Texas Rangers',
  lean: 'Texas Rangers',
  score: '66',
  price: '53¢',
  factors: [
    { label: 'Independent wallets', pct: 52 },
    { label: 'Wallet track record', pct: 96 },
    { label: 'Money behind it', pct: 33 },
    { label: 'One-sidedness', pct: 85 },
    { label: 'Recency', pct: 85 },
  ],
}

function MarketDetailScreen() {
  const m = MARKET_DETAIL
  return (
    <div className="px-4">
      <div className="flex items-center gap-2 mb-2">
        <ArrowLeft size={13} weight="bold" className="text-ps-green flex-shrink-0" />
        <div className="min-w-0">
          <p className="text-[12px] font-bold text-ps-text leading-tight">Market</p>
          <p className="text-[8px] text-ps-muted leading-tight">{m.category}</p>
        </div>
      </div>
      <p className="text-[11px] font-bold text-ps-text leading-tight mb-2">{m.market}</p>

      {/* Smart money lean */}
      <div className="rounded-xl border border-ps-green bg-ps-green/[0.06] p-2.5 mb-2">
        <div className="flex items-end gap-2 mb-1.5">
          <div className="min-w-0 flex-1">
            <p className="text-[7px] font-bold uppercase tracking-widest text-ps-muted leading-none mb-1">
              Smart money lean
            </p>
            <p className="text-[14px] font-extrabold text-ps-text leading-none truncate">{m.lean}</p>
          </div>
          <div className="text-center rounded-lg border border-ps-green/60 px-2 py-1 flex-shrink-0">
            <p className="text-[13px] font-extrabold text-ps-green leading-none">
              {m.score}
              <span className="text-[8px] text-ps-muted font-bold">/100</span>
            </p>
            <p className="text-[6px] font-bold uppercase tracking-wider text-ps-green leading-none mt-1">
              Strong signal
            </p>
          </div>
        </div>
        <p className="text-[8px] text-ps-muted leading-snug mb-1">
          Market price <span className="font-mono font-bold text-ps-text">{m.price}</span> at signal time
          &middot; 2m ago
        </p>
        <p className="text-[8px] text-ps-muted leading-snug mb-1">
          These wallets paid an average of 51&cent;; the outcome trades at 53&cent; now &mdash; so the
          market has moved toward them since.
        </p>
        <p className="text-[8px] text-ps-muted/70 leading-snug">
          $18K of qualified volume from 9 wallets &middot; Avg Copy Score 88 &middot; Bots excluded
        </p>
      </div>

      {/* Signal strength breakdown */}
      <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-2.5 mb-2">
        <p className="text-[11px] font-bold text-ps-text leading-tight mb-0.5">
          Signal strength {m.score}/100
        </p>
        <p className="text-[7px] text-ps-muted leading-snug mb-2">
          How much qualified evidence backs this lean &mdash; not a probability, and not a
          prediction about how the market resolves.
        </p>
        <div className="space-y-1.5">
          {m.factors.map((f) => (
            <div key={f.label} className="flex items-center gap-2">
              <span className="text-[8px] text-ps-text w-[74px] flex-shrink-0 leading-tight whitespace-nowrap">
                {f.label}
              </span>
              <div className="h-1 flex-1 rounded-full bg-white/[0.07] overflow-hidden">
                <div className="h-full rounded-full bg-ps-green" style={{ width: `${f.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 24h price chart */}
      <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-2.5">
        <div className="flex items-baseline gap-2 mb-1">
          <p className="text-[10px] font-bold text-ps-text leading-none">{m.lean} &middot; last 24h</p>
          <span className="text-[8px] font-mono text-ps-muted ml-auto">{m.price} now</span>
        </div>
        <svg viewBox="0 0 100 28" preserveAspectRatio="none" className="w-full h-9">
          <path
            d="M0,22 L18,22 L18,17 L42,17 L42,19 L64,19 L64,14 L82,14 L82,4 L100,4"
            fill="none"
            stroke="#18b974"
            strokeWidth="1.2"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          {[
            [18, 22],
            [64, 19],
            [92, 4],
          ].map(([cx, cy]) => (
            <circle key={cx} cx={cx} cy={cy} r="1.6" fill="#18b974" />
          ))}
        </svg>
      </div>
    </div>
  )
}

// ── Big open positions (new in 1.4) ──────────────────────────────────────
// $1M+ books whales are still holding, ranked by capital committed.
const OPEN_POSITIONS = [
  {
    address: '0x2c33...0563',
    held: 'held 3d',
    market: '2026 Balance of Power: D Senate, D House',
    side: 'No',
    cost: '$5.0M',
    now: '$5.5M',
    pnl: '+11%',
    entry: '50¢',
  },
  {
    address: '0xa2cd...2ba0',
    held: 'held 3d',
    market: 'Will the US confirm that aliens exist before 2027?',
    side: 'No',
    cost: '$1.3M',
    now: '$1.4M',
    pnl: '+8%',
    entry: '87¢',
  },
  {
    address: '0x6b19...c410',
    held: 'held 9d',
    market: 'Fed rate cut in September 2026?',
    side: 'Yes',
    cost: '$2.4M',
    now: '$2.7M',
    pnl: '+13%',
    entry: '66¢',
  },
]

function PositionCard({ p }: { p: (typeof OPEN_POSITIONS)[number] }) {
  return (
    <div className="relative rounded-xl p-2.5 mb-2 border border-white/[0.06] bg-white/[0.03] overflow-hidden">
      <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-500" />
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="flex items-center gap-1 text-[7px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
          <Wallet size={7} weight="fill" />
          Position
        </span>
        <span className="text-[9px] font-mono font-semibold text-ps-green truncate">{p.address}</span>
        <span className="text-[8px] text-ps-muted ml-auto flex-shrink-0">{p.held}</span>
      </div>
      <p className="text-[11px] font-semibold text-ps-text leading-tight mb-1.5 line-clamp-2">{p.market}</p>
      <span
        className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded-md mb-2 ${
          p.side === 'No' ? 'bg-red-500/15 text-red-400' : 'bg-ps-green/15 text-ps-green'
        }`}
      >
        {p.side}
      </span>
      <div className="grid grid-cols-4 gap-1 pt-1.5 border-t border-white/[0.06]">
        {[
          { label: 'Cost basis', value: p.cost, green: false },
          { label: 'Value now', value: p.now, green: false },
          { label: 'P&L', value: p.pnl, green: true },
          { label: 'Entry', value: p.entry, green: false },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-[6px] uppercase tracking-wider text-ps-muted leading-none mb-1">{s.label}</p>
            <p
              className={`text-[10px] font-extrabold leading-none font-mono ${
                s.green ? 'text-ps-green' : 'text-ps-text'
              }`}
            >
              {s.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PositionsScreen() {
  const doubled = [...OPEN_POSITIONS, ...OPEN_POSITIONS]
  return (
    <>
      <SignalTabs active="Signals" />
      <div className="flex items-center gap-2 px-4 mb-2">
        <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/40">
          Positions
        </span>
        <span className="text-[10px] text-ps-muted px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
          $1M+ min
        </span>
        <span className="ml-auto w-6 h-6 rounded-full border border-ps-green/50 flex items-center justify-center flex-shrink-0">
          <FadersHorizontal size={11} weight="bold" className="text-ps-green" />
        </span>
      </div>
      <div className="px-4 mb-1.5">
        <p className="text-[8px] text-ps-muted leading-snug">
          Open books whales are still holding, ranked by capital committed.
        </p>
      </div>
      <div className="relative overflow-hidden px-4" style={{ height: '318px' }}>
        <div className="animate-scroll-up group-hover/phone:[animation-play-state:paused]" style={{ animationDuration: '22s' }}>
          {doubled.map((p, i) => (
            <PositionCard key={i} p={p} />
          ))}
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #111115)' }}
        />
      </div>
    </>
  )
}

function WalletsScreen() {
  return (
    <>
      <div className="flex gap-2 px-4 mb-2.5">
        <span className="text-[10px] text-ps-muted px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
          Tracked <span className="font-mono">2/&infin;</span>
        </span>
        <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-ps-green/10 text-ps-green border border-ps-green/40">
          Suggested Wallets
        </span>
      </div>
      <div className="flex gap-1.5 px-4 mb-1.5">
        {['Today', 'Weekly', 'Monthly', 'All Time'].map((period) => (
          <span
            key={period}
            className={`text-[9px] px-2.5 py-1 rounded-full border whitespace-nowrap ${
              period === 'Monthly'
                ? 'font-semibold text-ps-green border-ps-green/40 bg-ps-green/10'
                : 'text-ps-muted border-white/[0.06] bg-white/[0.04]'
            }`}
          >
            {period}
          </span>
        ))}
      </div>
      {/* Sort options — ROI and Copy Score rank by edge, not just raw profit */}
      <div className="flex items-center gap-1.5 px-4 mb-2.5 flex-wrap">
        {WALLET_SORTS.map((sort) => (
          <span
            key={sort}
            className={`text-[9px] px-2.5 py-1 rounded-full border whitespace-nowrap ${
              sort === 'ROI'
                ? 'font-semibold text-blue-400 border-blue-500/60 bg-blue-500/10'
                : 'text-ps-muted border-white/[0.06] bg-white/[0.04]'
            }`}
          >
            {sort}
          </span>
        ))}
      </div>
      <div className="px-4 space-y-2">
        {SUGGESTED_WALLETS.map((w) => (
          <div
            key={w.rank}
            className="flex items-center gap-2.5 rounded-xl p-2.5 bg-white/[0.03] border border-white/[0.06]"
          >
            <span className="text-[9px] font-mono font-bold text-ps-muted bg-white/[0.05] rounded-md px-1.5 py-1">
              #{w.rank}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <p className="text-[11px] font-bold text-ps-text truncate leading-tight">{w.name}</p>
                {w.bot && (
                  <span className="flex items-center gap-0.5 text-[7px] font-bold px-1 py-px rounded bg-ps-orange/15 text-ps-orange border border-ps-orange/30 flex-shrink-0">
                    <Robot size={7} weight="fill" />
                    BOT
                  </span>
                )}
              </div>
              <p className="text-[9px] font-mono text-ps-green leading-tight">
                {w.roi} · {w.pnl}
              </p>
            </div>
            <span className="flex items-center gap-0.5 text-[9px] font-semibold px-2.5 py-1 rounded-full text-ps-green border border-ps-green/40 flex-shrink-0">
              <Plus size={8} weight="bold" />
              Follow
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

function AiScreen() {
  return (
    <div className="flex flex-col px-4" style={{ height: '404px' }}>
      <div className="flex-1 space-y-3 pt-1 overflow-hidden">
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-md px-3 py-2.5 bg-ps-green text-ps-black text-[10px] font-medium leading-relaxed">
            {AI_QUESTION}
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[92%] rounded-2xl rounded-bl-md px-3 py-2.5 bg-white/[0.05] border border-white/[0.07] text-[10px] text-ps-text leading-relaxed">
            <p className="font-bold text-ps-text mb-1">Conflicting signals explained</p>
            <TypeText text={AI_ANSWER} speed={11} startDelay={700} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 py-3">
        <div className="flex-1 bg-white/[0.05] rounded-full px-3 py-2 border border-white/[0.07]">
          <span className="text-[10px] text-ps-muted">Ask about whale activity...</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-ps-green flex items-center justify-center flex-shrink-0">
          <ArrowUp size={12} weight="bold" className="text-ps-black" />
        </div>
      </div>
    </div>
  )
}

// Redesigned wallet profile — mirrors Polymarket. Demo data from a flagged bot
// wallet so the screen showcases the bot detection that powers the Bot Filter.
const WALLET_DETAIL = {
  initial: 'S',
  name: 'swisstony',
  address: '0x204f...5e14',
  active: 'active 21s ago',
  pnl: '+$476,928',
  pnlSub: 'Past day · via Polymarket',
  ranges: ['1D', '1W', '1M', '1Y', 'YTD', 'ALL'],
  stats: [
    { value: '$6.7M', label: 'Positions Value', green: false },
    { value: '$712K', label: 'Biggest Win',     green: true  },
    { value: '480',   label: 'Predictions',      green: false },
    { value: '100%',  label: 'Win Rate',         green: true  },
  ],
  botScore: '92',
  flags: ['4,048 trades/day', 'Active across 99 markets at once', '28% of fills share the same second'],
}

function WalletDetailScreen() {
  const w = WALLET_DETAIL
  return (
    <div className="px-4">
      {/* Back row + identity */}
      <div className="flex items-center gap-2 mb-2.5">
        <ArrowLeft size={13} weight="bold" className="text-ps-green flex-shrink-0" />
        <div className="w-7 h-7 rounded-full border border-ps-green/50 flex items-center justify-center flex-shrink-0">
          <span className="text-[11px] font-bold text-ps-green">{w.initial}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-bold text-ps-text leading-tight truncate">{w.name}</p>
          <p className="text-[8px] font-mono text-ps-muted leading-tight truncate">{w.address} · {w.active}</p>
        </div>
        <span className="flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full bg-ps-orange/15 text-ps-orange border border-ps-orange/30 flex-shrink-0">
          <Robot size={9} weight="fill" />
          BOT
        </span>
      </div>

      {/* Profit / Loss card */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 mb-2.5">
        <div className="flex items-center gap-1 mb-1.5">
          <span className="text-[9px] font-semibold text-ps-muted mr-auto">Profit / Loss</span>
          {w.ranges.map((r, i) => (
            <span
              key={r}
              className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-md ${
                i === 0 ? 'bg-ps-green/20 text-ps-green' : 'text-ps-muted'
              }`}
            >
              {r}
            </span>
          ))}
        </div>
        <p className="text-[26px] leading-none font-extrabold text-ps-green tracking-tight">{w.pnl}</p>
        <p className="text-[8px] text-ps-muted mt-1 mb-2">{w.pnlSub}</p>
        <svg viewBox="0 0 100 36" preserveAspectRatio="none" className="w-full h-12">
          <defs>
            <linearGradient id="wdFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(24,185,116,0.35)" />
              <stop offset="100%" stopColor="rgba(24,185,116,0)" />
            </linearGradient>
          </defs>
          <line x1="0" y1="31" x2="100" y2="31" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M0,30 L13,29 L18,8 L54,7 L100,5 L100,36 L0,36 Z" fill="url(#wdFill)" />
          <path d="M0,30 L13,29 L18,8 L54,7 L100,5" fill="none" stroke="#18b974" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-4 gap-1 mb-2.5">
        {w.stats.map((s) => (
          <div key={s.label} className="rounded-lg bg-white/[0.03] border border-white/[0.05] px-1 py-1.5 text-center">
            <p className={`text-[11px] font-extrabold leading-none ${s.green ? 'text-ps-green' : 'text-ps-text'}`}>{s.value}</p>
            <p className="text-[7px] text-ps-muted leading-tight mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Bot detection card */}
      <div className="rounded-xl border border-ps-orange/30 bg-ps-orange/[0.08] p-3 mb-2.5">
        <div className="flex items-center gap-2 mb-1.5">
          <Robot size={15} weight="fill" className="text-ps-orange flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-ps-orange leading-tight">Likely Bot</p>
            <p className="text-[8px] text-ps-muted leading-tight">Trades like automated software</p>
          </div>
          <span className="text-[10px] font-bold text-ps-orange border border-ps-orange/40 rounded-full px-2 py-0.5 flex-shrink-0">
            {w.botScore}<span className="text-ps-muted text-[8px]">/100</span>
          </span>
        </div>
        <p className="text-[7px] font-bold uppercase tracking-widest text-ps-muted mb-1">Why this wallet was flagged</p>
        <div className="space-y-0.5">
          {w.flags.map((f) => (
            <div key={f} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-ps-orange flex-shrink-0" />
              <span className="text-[9px] text-ps-text">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Track action */}
      <div className="flex items-center gap-2">
        <button className="flex items-center justify-center gap-1 flex-1 py-2 rounded-full bg-ps-green text-ps-black text-[11px] font-bold">
          <Plus size={11} weight="bold" /> Track Wallet
        </button>
        <span className="text-[8px] text-ps-muted font-mono flex-shrink-0">62 / &infin; slots</span>
      </div>
    </div>
  )
}

// Flagship analysis screen. Demo data mirrors a genuinely strong human wallet so
// the Copy Score reads as a real "Strong record" rather than a placeholder.
const COPY_SCORE_WALLET = {
  initial: 'T',
  name: 'texasdolly',
  address: '0x2e69...858d',
  score: '94',
  verdict: 'Strong record',
  metrics: [
    { value: '+23.9¢/sh', label: 'Edge' },
    { value: '+128%', label: 'ROI' },
    { value: '1.7', label: 'Consistency' },
    { value: '131d', label: 'Entry lead' },
  ],
  style: ['Scales into positions', '58% early entries', 'Holds to resolution'],
  categories: [
    { name: 'Politics', meta: '93% win · 28', pnl: '+$941K', pct: 100 },
    { name: 'Crypto', meta: '78% win · 14', pnl: '+$212K', pct: 58 },
    { name: 'Tech', meta: '100% win · 2', pnl: '+$64.2K', pct: 30 },
  ],
}

function CopyScoreScreen() {
  const w = COPY_SCORE_WALLET
  return (
    <div className="px-4">
      {/* Identity */}
      <div className="flex items-center gap-2 mb-2.5">
        <ArrowLeft size={13} weight="bold" className="text-ps-green flex-shrink-0" />
        <div className="w-7 h-7 rounded-full border border-ps-green/50 flex items-center justify-center flex-shrink-0">
          <span className="text-[11px] font-bold text-ps-green">{w.initial}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-bold text-ps-text leading-tight truncate">{w.name}</p>
          <p className="text-[8px] font-mono text-ps-muted leading-tight truncate">{w.address}</p>
        </div>
        <span className="flex items-center gap-1 text-[8px] font-bold px-2 py-0.5 rounded-full bg-ps-green/15 text-ps-green border border-ps-green/30 flex-shrink-0">
          <ShieldCheck size={9} weight="fill" />
          Human
        </span>
      </div>

      {/* Copy Score */}
      <div className="rounded-xl border border-ps-green/30 bg-ps-green/[0.07] p-3 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-ps-green/15 border border-ps-green/30 flex items-center justify-center flex-shrink-0">
            <ChartLineUp size={14} weight="bold" className="text-ps-green" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-bold text-ps-text leading-tight">Copy Score</p>
            <p className="text-[9px] text-ps-green leading-tight">{w.verdict}</p>
          </div>
          <span className="text-[15px] font-extrabold text-ps-green border border-ps-green/40 rounded-full px-2.5 py-0.5 flex-shrink-0">
            {w.score}
            <span className="text-ps-muted text-[8px] font-bold">/100</span>
          </span>
        </div>
      </div>

      {/* Metric grid */}
      <div className="grid grid-cols-4 gap-1 mb-2">
        {w.metrics.map((m) => (
          <div key={m.label} className="rounded-lg bg-white/[0.03] border border-white/[0.05] px-1 py-1.5 text-center">
            <p className="text-[10px] font-extrabold leading-none text-ps-green">{m.value}</p>
            <p className="text-[7px] text-ps-muted leading-tight mt-1">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Position style */}
      <div className="flex flex-wrap gap-1 mb-2.5">
        {w.style.map((s) => (
          <span key={s} className="text-[8px] text-ps-muted px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.07]">
            {s}
          </span>
        ))}
      </div>

      {/* Performance by category */}
      <p className="text-[7px] font-bold uppercase tracking-widest text-ps-muted mb-1.5">
        Performance by category
      </p>
      <div className="space-y-1.5 mb-2">
        {w.categories.map((c) => (
          <div key={c.name}>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[10px] font-bold text-ps-text">{c.name}</span>
              <span className="text-[8px] text-ps-muted ml-auto">{c.meta}</span>
              <span className="text-[10px] font-bold text-ps-green">{c.pnl}</span>
            </div>
            <div className="h-1 rounded-full bg-white/[0.06] mt-1 overflow-hidden">
              <div className="h-full rounded-full bg-ps-green" style={{ width: `${c.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="text-[7px] text-ps-muted italic leading-snug">
        Based on 72 resolved positions (public data). Past performance doesn&rsquo;t
        predict future results.
      </p>
    </div>
  )
}

// Clusters got their own view in 1.4, and a much higher bar to fire: four
// proven wallets (was three), a higher Copy Score floor, and a minimum size.
const CLUSTERS = [
  {
    wallets: '4 smart wallets',
    total: '$62K',
    ago: '2m ago',
    market: 'Will Spain win on 2026-07-19?',
    side: 'BUY Yes @ 43¢',
    avg: 'avg score 84',
    legs: ['0xe16d...5e30 · $28K', '0xc44f...d49f · $14K', '0xa187...7fd4 · $12K', '0x7b02...9c61 · $8K'],
  },
  {
    wallets: '5 smart wallets',
    total: '$140K',
    ago: '38m ago',
    market: 'Fed rate cut in September 2026?',
    side: 'BUY Yes @ 66¢',
    avg: 'avg score 91',
    legs: ['0xb8c2...91ea · $61K', '0x4280...7f21 · $34K', '0x9c11...20aa · $25K', '+2 more'],
  },
]

function ClustersScreen() {
  return (
    <>
      <SignalTabs active="Clusters" />
      <div className="px-4 mb-2">
        <div className="flex items-center gap-2 bg-white/[0.05] rounded-xl px-3 py-2 border border-white/[0.07]">
          <MagnifyingGlass size={11} className="text-ps-muted flex-shrink-0" />
          <span className="text-[10px] text-ps-muted flex-1 truncate">Search by trader or market...</span>
        </div>
      </div>

      <div className="px-4">
        <p className="text-[11px] font-bold text-ps-text leading-tight">Smart Money Clusters</p>
        <p className="text-[8px] text-ps-muted leading-snug mt-0.5 mb-2">
          4+ proven wallets, independently, same side, same market &mdash; above a minimum size.
        </p>
        {/* Cluster cards — deliberately blue to separate them from orange signals */}
        {CLUSTERS.map((c) => (
          <div key={c.market} className="rounded-xl border border-blue-500 bg-blue-500/[0.07] p-2.5 mb-2">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-4 h-4 rounded-md bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <UsersThree size={9} weight="fill" className="text-blue-400" />
              </div>
              <span className="text-[10px] font-bold text-blue-400">
                {c.wallets} · {c.total}
              </span>
              <span className="text-[8px] text-ps-muted ml-auto">{c.ago}</span>
            </div>
            <p className="text-[11px] font-semibold text-ps-text leading-tight mb-1.5">{c.market}</p>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-ps-green/15 text-ps-green">
                {c.side}
              </span>
              <span className="text-[8px] text-ps-muted">{c.avg}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {c.legs.map((l) => (
                <span
                  key={l}
                  className="text-[7px] font-mono text-ps-muted px-1.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.07]"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const TRADE_DETAIL = {
  market: 'Will Argentina win on 2026-07-19?',
  outcome: 'No',
  when: 'Jul 19 at 12:44',
  stats: [
    { label: 'Size', value: '$234,568.42', green: false },
    { label: 'To win', value: '$82,415.93', green: true },
    { label: 'Entry price', value: '74¢', green: false },
    { label: 'Implied prob.', value: '74.0%', green: false },
  ],
}

function TradeDetailScreen() {
  return (
    <div className="px-4">
      <div className="flex items-center gap-2 mb-2.5">
        <ArrowLeft size={13} weight="bold" className="text-ps-green flex-shrink-0" />
        <p className="text-[12px] font-bold text-ps-text leading-tight">Trade Detail</p>
      </div>

      <div className="rounded-xl border border-ps-orange/40 bg-ps-orange/[0.08] px-2.5 py-2 mb-2.5 flex items-start gap-1.5">
        <Warning size={11} weight="fill" className="text-ps-orange flex-shrink-0 mt-px" />
        <p className="text-[9px] font-bold text-ps-orange leading-snug">
          High Conviction — trade exceeds $100,000 USDC
        </p>
      </div>

      <div className="flex items-center gap-2 mb-2.5">
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-ps-green/15 text-ps-green tracking-wider">
          BUY
        </span>
        <span className="text-[9px] text-ps-muted ml-auto">{TRADE_DETAIL.when}</span>
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-2.5 mb-2">
        <p className="text-[7px] font-bold uppercase tracking-widest text-ps-muted mb-1">Market</p>
        <p className="text-[11px] font-semibold text-ps-text leading-tight mb-1.5">{TRADE_DETAIL.market}</p>
        <span className="text-[9px] font-medium px-2 py-0.5 rounded-md bg-ps-green/15 text-ps-green">
          {TRADE_DETAIL.outcome}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-1 mb-2">
        {TRADE_DETAIL.stats.map((s) => (
          <div key={s.label} className="rounded-lg bg-white/[0.03] border border-white/[0.05] px-2 py-1.5">
            <p className="text-[7px] uppercase tracking-wider text-ps-muted leading-none mb-1">{s.label}</p>
            <p className={`text-[12px] font-extrabold leading-none ${s.green ? 'text-ps-green' : 'text-ps-text'}`}>
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {/* Expected-value estimate */}
      <div className="rounded-xl border border-ps-green/25 bg-ps-green/[0.06] p-2.5">
        <div className="flex items-center gap-1.5 mb-1">
          <ChartLineUp size={10} weight="bold" className="text-ps-green" />
          <p className="text-[7px] font-bold uppercase tracking-widest text-ps-muted">
            Trader&rsquo;s historical edge
          </p>
        </div>
        <p className="text-[18px] font-extrabold text-ps-green leading-none mb-1">
          +$6.3k <span className="text-[9px] font-bold text-ps-muted">(+2.0¢/share)</span>
        </p>
        <p className="text-[7px] text-ps-muted leading-snug">
          If this trade performs like this wallet&rsquo;s past record, a position this size
          would have returned about that much beyond the market&rsquo;s implied odds. Based on
          14 resolved positions at similar prices.
        </p>
      </div>
    </div>
  )
}

const NAME_RESULTS = [
  { initial: 'P', name: 'Poly7-meta4', address: '0x95b6...50a9' },
  { initial: 'P', name: 'Poly-1718557509562', address: '0xf9a4...30a6' },
  { initial: 'J', name: 'Jon-Poly', address: '0x97ba...27c3' },
  { initial: 'P', name: 'Poly-Master-Trade', address: '0xe6a5...412f' },
]

function AddWalletScreen() {
  return (
    <div className="px-4">
      <div className="flex items-center mb-2.5">
        <p className="text-[14px] font-extrabold text-ps-text leading-tight">Add Wallet</p>
        <X size={13} weight="bold" className="text-ps-muted ml-auto" />
      </div>

      <div className="flex items-center gap-2 bg-white/[0.05] rounded-xl px-3 py-2 border border-white/[0.09] mb-2.5">
        <MagnifyingGlass size={11} className="text-ps-muted flex-shrink-0" />
        <span className="text-[11px] font-medium text-ps-text flex-1">poly</span>
        <X size={10} weight="bold" className="text-ps-muted" />
      </div>

      <div className="rounded-xl border border-white/[0.07] overflow-hidden mb-2.5">
        {NAME_RESULTS.map((r, i) => (
          <div
            key={r.name}
            className={`flex items-center gap-2 px-2.5 py-2 ${i > 0 ? 'border-t border-white/[0.06]' : ''}`}
          >
            <div className="w-6 h-6 rounded-full bg-ps-green/15 border border-ps-green/30 flex items-center justify-center flex-shrink-0">
              <span className="text-[9px] font-bold text-ps-green">{r.initial}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold text-ps-text leading-tight truncate">{r.name}</p>
              <p className="text-[8px] font-mono text-ps-muted leading-tight truncate">{r.address}</p>
            </div>
            <span className="text-[9px] font-bold text-ps-green flex-shrink-0">Use</span>
          </div>
        ))}
      </div>

      <p className="text-[8px] text-ps-muted text-center mb-2">— or paste an address —</p>
      <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2">
        <span className="text-[9px] text-ps-muted">Wallet address (0x...)</span>
      </div>
    </div>
  )
}

const SCREENS: Record<PhoneScreen, () => JSX.Element> = {
  feed: FeedScreen,
  signals: SignalsScreen,
  markets: MarketsScreen,
  marketDetail: MarketDetailScreen,
  positions: PositionsScreen,
  wallets: WalletsScreen,
  walletDetail: WalletDetailScreen,
  copyScore: CopyScoreScreen,
  clusters: ClustersScreen,
  tradeDetail: TradeDetailScreen,
  addWallet: AddWalletScreen,
  ai: AiScreen,
}

// Which bottom-nav tab lights up for screens reached from inside another tab.
const NAV_PARENT: Partial<Record<PhoneScreen, PhoneScreen>> = {
  walletDetail: 'wallets',
  copyScore: 'wallets',
  addWallet: 'wallets',
  clusters: 'signals',
  markets: 'signals',
  marketDetail: 'signals',
  positions: 'signals',
  tradeDetail: 'feed',
}

const NAV_ITEMS: { id: PhoneScreen | 'profile'; label: string; Icon: typeof Rss }[] = [
  { id: 'feed', label: 'Feed', Icon: Rss },
  { id: 'wallets', label: 'Wallets', Icon: Wallet },
  { id: 'signals', label: 'Signals', Icon: Lightning },
  { id: 'ai', label: 'AI', Icon: Robot },
  { id: 'profile', label: 'Profile', Icon: User },
]

interface PhoneMockupProps {
  screen?: PhoneScreen
  className?: string
}

export default function PhoneMockup({ screen = 'feed', className = '' }: PhoneMockupProps) {
  const Screen = SCREENS[screen]

  return (
    <div
      className={`group/phone relative w-[270px] h-[560px] rounded-[42px] overflow-hidden ${className}`}
      style={{
        background: '#111115',
        border: '1.5px solid rgba(255,255,255,0.11)',
        boxShadow:
          '0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
      }}
    >
      {/* Dynamic island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 rounded-full bg-black z-10" />

      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pb-1" style={{ paddingTop: '14px' }}>
        <span className="text-[11px] font-semibold text-ps-text font-mono">11:43</span>
        <div className="flex items-center gap-1 text-ps-text">
          <WifiHigh size={11} weight="fill" />
          <BatteryFull size={13} weight="fill" />
        </div>
      </div>

      {/* App header */}
      <div className="flex items-center gap-2 px-4 py-2">
        <div className="w-7 h-7 rounded-full bg-ps-black border border-ps-green/30 flex items-center justify-center overflow-hidden">
          <img src={logoIcon} alt="Polyscope logo" width={20} height={20} className="w-5 h-5 object-contain" />
        </div>
        <div>
          <p className="text-[11px] font-bold tracking-wide text-ps-text leading-none">POLYSCOPE</p>
          <p className="text-[9px] text-ps-muted leading-none mt-0.5">Pro</p>
        </div>
        <span className="ml-auto flex items-center gap-1 text-[8px] font-bold px-2 py-1 rounded-full text-ps-green border border-ps-green/40">
          <Robot size={8} weight="fill" />
          Bots hidden
        </span>
      </div>

      {/* Screen content with animated transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={screen}
          initial={isPrerendering ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
        >
          <Screen />
        </motion.div>
      </AnimatePresence>

      {/* Bottom nav bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-3 px-2 border-t border-white/[0.06] z-10"
        style={{ background: '#111115' }}
      >
        {NAV_ITEMS.map(({ id, label, Icon }) => {
          // Detail screens are reached from inside a tab, so keep that tab lit.
          const active = id === (NAV_PARENT[screen] ?? screen)
          return (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <Icon size={14} weight={active ? 'fill' : 'regular'} className={active ? 'text-ps-green' : 'text-ps-muted'} />
              <span className={`text-[8px] font-medium ${active ? 'text-ps-green' : 'text-ps-muted'}`}>
                {label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
