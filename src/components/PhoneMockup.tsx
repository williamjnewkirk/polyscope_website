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
  Plus,
} from '@phosphor-icons/react'
import logoIcon from '../assets/logo-icon.png'
import TypeText from './fx/TypeText'
import { isPrerendering } from '../lib/prerender'

export type PhoneScreen = 'feed' | 'signals' | 'wallets' | 'ai'

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

const SUGGESTED_WALLETS = [
  { rank: 1, name: '0x4f2', pnl: '+$98,029' },
  { rank: 2, name: 'ferrariChampions2...', pnl: '+$95,677' },
  { rank: 3, name: 'afghj2421', pnl: '+$82,991' },
  { rank: 4, name: 'Vatrer', pnl: '+$71,426' },
  { rank: 5, name: 'TrevorPlovdivBulga...', pnl: '+$61,452' },
  { rank: 6, name: 'Bonereaper', pnl: '+$54,300' },
]

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

function SignalsScreen() {
  const doubled = [...SIGNAL_TRADES, ...SIGNAL_TRADES]
  return (
    <>
      <div className="flex gap-2 px-4 mb-2">
        <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-ps-green/15 text-ps-green border border-ps-green/25">
          Newest
        </span>
        <span className="text-[10px] text-ps-muted px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
          Highest $
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
      <div className="relative overflow-hidden px-4" style={{ height: '330px' }}>
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
      <div className="flex gap-1.5 px-4 mb-2.5">
        {['Today', 'Weekly', 'Monthly', 'All Time'].map((period, i) => (
          <span
            key={period}
            className={`text-[9px] px-2.5 py-1 rounded-full border whitespace-nowrap ${
              i === 0
                ? 'font-semibold text-ps-green border-ps-green/40 bg-ps-green/10'
                : 'text-ps-muted border-white/[0.06] bg-white/[0.04]'
            }`}
          >
            {period}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between px-4 mb-2.5">
        <span className="text-[9px] font-semibold text-ps-text px-2.5 py-1 rounded-full bg-white/[0.07] border border-white/[0.10]">
          Profit/Loss
        </span>
        <span className="flex items-center gap-1 text-[9px] font-semibold text-ps-green px-2.5 py-1 rounded-full border border-ps-green/40">
          <Plus size={8} weight="bold" />
          Follow All
        </span>
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
              <p className="text-[11px] font-bold text-ps-text truncate leading-tight">{w.name}</p>
              <p className="text-[10px] font-mono text-ps-green leading-tight">{w.pnl} today</p>
            </div>
            {w.rank <= 2 ? (
              <span className="text-[9px] font-semibold px-2.5 py-1 rounded-full bg-ps-green/15 text-ps-green border border-ps-green/30">
                Tracking
              </span>
            ) : (
              <span className="flex items-center gap-0.5 text-[9px] font-semibold px-2.5 py-1 rounded-full text-ps-green border border-ps-green/40">
                <Plus size={8} weight="bold" />
                Follow
              </span>
            )}
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

const SCREENS: Record<PhoneScreen, () => JSX.Element> = {
  feed: FeedScreen,
  signals: SignalsScreen,
  wallets: WalletsScreen,
  ai: AiScreen,
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
          <img src={logoIcon} alt="Polyscope logo" className="w-5 h-5 object-contain" />
        </div>
        <div>
          <p className="text-[11px] font-bold tracking-wide text-ps-text leading-none">POLYSCOPE</p>
          <p className="text-[9px] text-ps-muted leading-none mt-0.5">Premium</p>
        </div>
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
          const active = id === screen
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
