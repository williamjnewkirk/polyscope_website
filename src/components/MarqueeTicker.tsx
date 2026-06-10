const MARKETS = [
  { name: 'Birmingham: Mark Lajal vs Leandro Riedi',  prob: '36%', up: true  },
  { name: 'Colorado Rockies vs. Los Angeles Angels',  prob: '99%', up: true  },
  { name: 'Putin out as President by Dec 31, 2026',   prob: '9%',  up: false },
  { name: 'MicroStrategy sells any Bitcoin by May 31', prob: '1%', up: null  },
  { name: 'S&P 500 closes above 6,100 this week',     prob: '63%', up: true  },
  { name: 'UFC 316 — Dvalishvili vs O’Malley',        prob: '54%', up: true  },
  { name: 'Iran-US Nuclear Deal by Aug 31',           prob: '44%', up: true  },
  { name: 'Fed rate cut in September 2026',           prob: '71%', up: false },
  { name: 'Bitcoin Up or Down — June 2, 1:35AM ET',   prob: '99%', up: true  },
  { name: 'Bitcoin closes above $120k this quarter',  prob: '38%', up: true  },
  { name: 'MLS Cup 2026 winner',                      prob: '12%', up: null  },
]

export default function MarqueeTicker() {
  const doubled = [...MARKETS, ...MARKETS]

  return (
    <div className="marquee-paused relative bg-ps-surface border-y border-white/[0.06] py-3.5 overflow-hidden">
      {/* Pinned live label */}
      <div className="hidden sm:flex absolute left-0 top-0 bottom-0 z-20 w-40 items-center pl-5 bg-ps-surface border-r border-white/[0.06]">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ps-green animate-pulse-dot" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-ps-muted whitespace-nowrap">Live markets</span>
        </span>
      </div>
      {/* Fade masks */}
      <div className="absolute left-0 sm:left-40 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #111115, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #111115, transparent)' }} />

      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {doubled.map((market, i) => (
          <span key={i} className="flex items-center gap-3 mx-5">
            <span className="w-1 h-1 rounded-full bg-ps-green/60 flex-shrink-0" />
            <span className="text-xs text-ps-muted font-medium tracking-wide">{market.name}</span>
            <span
              className={`text-xs font-mono font-semibold tabular-nums ${
                market.up === true
                  ? 'text-ps-green'
                  : market.up === false
                  ? 'text-red-400'
                  : 'text-ps-muted/70'
              }`}
            >
              {market.prob}
              {market.up === true && ' ↑'}
              {market.up === false && ' ↓'}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
