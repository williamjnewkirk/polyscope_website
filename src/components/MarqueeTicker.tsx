const MARKETS = [
  'US × Iran Diplomatic Meeting by June 30',
  'Texas Rangers vs. Houston Astros',
  'Will Trump say "Strait" or "Hormuz" with Xi?',
  'Connecticut Sun vs. Seattle Storm',
  'S&P 500 closes above 5,800 this week',
  'UFC 315 — Oliveira vs. Chandler',
  'Iran-US Nuclear Deal by Aug 31',
  'Fed rate cut in September',
  'Will NATO invoke Article 5 in 2025',
  'Bitcoin closes above $120k this quarter',
  'MLS Cup 2025 winner',
]

export default function MarqueeTicker() {
  const doubled = [...MARKETS, ...MARKETS]

  return (
    <div className="relative bg-ps-surface border-y border-white/[0.06] py-4 overflow-hidden">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #111115, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #111115, transparent)' }} />

      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {doubled.map((market, i) => (
          <span key={i} className="flex items-center gap-3 mx-4">
            <span className="w-1 h-1 rounded-full bg-ps-green flex-shrink-0" />
            <span className="text-xs text-ps-muted font-medium tracking-wide">{market}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
