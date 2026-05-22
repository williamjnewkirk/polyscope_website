import { WifiHigh, BatteryFull, MagnifyingGlass, Funnel, Rss, Wallet, Lightning, Robot, User } from '@phosphor-icons/react'
import logoIcon from '../assets/logo-icon.png'

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
  { alias: 'LaBradfordSmith22', address: '0x9495...9a27', action: 'BUY', market: 'Connecticut Sun vs. Seattle Storm', outcome: 'Connecticut Sun', size: '$808.00', price: '30¢', time: '2h ago' },
  { alias: 'surfandturf', address: '0x4280...7f21', action: 'BUY', market: 'Will Iran-US nuclear deal be reached by Aug 31?', outcome: 'Yes', size: '$3,200.00', price: '44¢', time: '3h ago' },
  { alias: 'bossoskil1', address: '0x1a83...c912', action: 'BUY', market: 'Will Trump say "Strait" or "Hormuz" with Xi?', outcome: 'No', size: '$5,418.00', price: '72¢', time: '4h ago' },
  { alias: 'LaBradfordSmith22', address: '0x9495...9a27', action: 'BUY', market: 'Connecticut Sun vs. Seattle Storm', outcome: 'Connecticut Sun', size: '$600.00', price: '52¢', time: '2h ago' },
  { alias: 'Pestle', address: '0x7ec1...3f04', action: 'BUY', market: 'Texas Rangers vs. Houston Astros', outcome: 'Rangers', size: '$1,240.00', price: '46¢', time: '5h ago' },
  { alias: 'surfandturf', address: '0x4280...7f21', action: 'BUY', market: 'S&P 500 closes above 5,800 this week?', outcome: 'Yes', size: '$2,900.00', price: '61¢', time: '6h ago' },
]

const SIGNAL_TRADES: TradeCardData[] = [
  { alias: '0x6fec...3be3', address: '0x6fec...3be3', action: 'BUY', market: 'Will Trump say "Strait" or "Hormuz" during events with Xi Jinping?', outcome: 'No', size: '$143,782.07', price: '100¢', time: '2h ago', highConviction: true },
  { alias: '0x90ca...1a4b', address: '0x90ca...1a4b', action: 'BUY', market: 'Will Trump say "Iran" during events with Xi Jinping?', outcome: 'No', size: '$98,450.00', price: '88¢', time: '3h ago', highConviction: true },
  { alias: '0x2d47...f88a', address: '0x2d47...f88a', action: 'BUY', market: 'UFC 315 — Oliveira vs Chandler, winner?', outcome: 'Oliveira', size: '$112,000.00', price: '54¢', time: '5h ago', highConviction: true },
  { alias: '0xb8c2...91ea', address: '0xb8c2...91ea', action: 'BUY', market: 'Fed rate cut in September 2025?', outcome: 'Yes', size: '$187,400.00', price: '66¢', time: '7h ago', highConviction: true },
  { alias: '0x3a5f...dd2c', address: '0x3a5f...dd2c', action: 'BUY', market: 'Will S&P 500 close above 5,900 this month?', outcome: 'Yes', size: '$103,600.00', price: '72¢', time: '9h ago', highConviction: true },
]

function TradeCardItem({ trade }: { trade: TradeCardData }) {
  return (
    <div
      className={`rounded-xl p-3 mb-2 border ${
        trade.highConviction
          ? 'bg-orange-950/30 border-ps-orange/25'
          : 'bg-white/[0.03] border-white/[0.06]'
      }`}
    >
      {trade.highConviction && (
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-[9px] font-bold tracking-wider text-ps-orange uppercase">
            High Conviction
          </span>
        </div>
      )}
      <div className="flex items-start justify-between mb-1.5">
        <span className={`text-[10px] font-medium truncate max-w-[60%] ${trade.highConviction ? 'text-ps-muted' : 'text-ps-green'}`}>
          {trade.alias}
        </span>
        <span
          className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
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
        <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-ps-green/15 text-ps-green">
          {trade.outcome}
        </span>
        <span className="text-[10px] font-mono font-medium text-ps-text">{trade.size}</span>
        <span className="text-[9px] text-ps-muted font-mono">@ {trade.price}</span>
        <span className="text-[9px] text-ps-muted ml-auto">{trade.time}</span>
      </div>
    </div>
  )
}

interface PhoneMockupProps {
  screen?: 'feed' | 'signals'
  className?: string
}

export default function PhoneMockup({ screen = 'feed', className = '' }: PhoneMockupProps) {
  const trades = screen === 'signals' ? SIGNAL_TRADES : FEED_TRADES
  const doubled = [...trades, ...trades]

  return (
    <div
      className={`relative w-[270px] h-[560px] rounded-[42px] overflow-hidden ${className}`}
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
      <div className="flex items-center justify-between px-6 pt-3 pb-1" style={{ paddingTop: '14px' }}>
        <span className="text-[11px] font-semibold text-ps-text font-mono">12:00</span>
        <div className="flex items-center gap-1 text-ps-text">
          <WifiHigh size={11} weight="fill" />
          <BatteryFull size={13} weight="fill" />
        </div>
      </div>

      {/* App header */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-ps-black border border-ps-green/30 flex items-center justify-center overflow-hidden">
            <img src={logoIcon} alt="Polyscope logo" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-wide text-ps-text leading-none">POLYSCOPE</p>
            <p className="text-[9px] text-ps-green leading-none mt-0.5">{screen === 'signals' ? 'Signals' : 'Premium'}</p>
          </div>
        </div>
        {screen === 'signals' && (
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-ps-orange/15 text-ps-orange border border-ps-orange/20">
            {SIGNAL_TRADES.length} alerts
          </span>
        )}
      </div>

      {/* Search bar (feed only) */}
      {screen === 'feed' && (
        <div className="px-4 mb-2">
          <div className="flex items-center gap-2 bg-white/[0.05] rounded-xl px-3 py-2 border border-white/[0.07]">
            <MagnifyingGlass size={11} className="text-ps-muted flex-shrink-0" />
            <span className="text-[10px] text-ps-muted flex-1 truncate">Search by trader or market...</span>
            <Funnel size={11} className="text-ps-muted flex-shrink-0" />
          </div>
        </div>
      )}

      {/* Sort pills (feed only) */}
      {screen === 'feed' && (
        <div className="flex gap-2 px-4 mb-3">
          <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-ps-green/15 text-ps-green border border-ps-green/25">
            Newest
          </span>
          <span className="text-[10px] text-ps-muted px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
            Highest $
          </span>
        </div>
      )}

      {/* Signal header (signals only) */}
      {screen === 'signals' && (
        <div className="mx-4 mb-3 p-2.5 rounded-xl bg-ps-orange/10 border border-ps-orange/20">
          <p className="text-[9px] text-ps-orange leading-snug">
            Trades over $100,000 USDC from anywhere on Polymarket in the last 24 hours. Large positions may signal high-conviction activity. Not financial advice.
          </p>
        </div>
      )}

      {/* Scrolling trade feed */}
      <div className="relative flex-1 overflow-hidden px-4" style={{ height: screen === 'feed' ? '360px' : '390px' }}>
        <div
          className={`animate-scroll-up`}
          style={{ animationDuration: screen === 'signals' ? '16s' : '22s' }}
        >
          {doubled.map((trade, i) => (
            <TradeCardItem key={i} trade={trade} />
          ))}
        </div>

        {/* Fade mask at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #111115)' }}
        />
      </div>

      {/* Bottom nav bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-3 px-2 border-t border-white/[0.06]" style={{ background: '#111115' }}>
        {[
          { label: 'Feed',    active: screen === 'feed',    Icon: Rss },
          { label: 'Wallets', active: false,                Icon: Wallet },
          { label: 'Signals', active: screen === 'signals', Icon: Lightning },
          { label: 'AI',      active: false,                Icon: Robot },
          { label: 'Profile', active: false,                Icon: User },
        ].map(({ label, active, Icon }) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <Icon size={14} weight={active ? 'fill' : 'regular'} className={active ? 'text-ps-green' : 'text-ps-muted'} />
            <span className={`text-[8px] font-medium ${active ? 'text-ps-green' : 'text-ps-muted'}`}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
