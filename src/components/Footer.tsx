function ScopeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
      <circle cx="16" cy="16" r="13.5" stroke="#18B974" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="6.5" stroke="#18B974" strokeWidth="1" opacity="0.4" />
      <line x1="16" y1="2.5" x2="16" y2="6.5" stroke="#18B974" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="16" y1="25.5" x2="16" y2="29.5" stroke="#18B974" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="2.5" y1="16" x2="6.5" y2="16" stroke="#18B974" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="25.5" y1="16" x2="29.5" y2="16" stroke="#18B974" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 17.5 C8 13.5 11.5 10.5 16 11.5 C20.5 10.5 24 13.5 24 17.5 L22 20 Q16 23 10 20 Z" fill="#18B974" opacity="0.85" />
      <circle cx="16" cy="11" r="1.4" fill="#D4612E" />
    </svg>
  )
}

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Company: [
    { label: 'Join Waitlist', href: '#download' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Disclaimer', href: '#' },
  ],
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.732-8.844L2.25 2.25h7.052l4.26 5.633L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ps-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <a href="#" className="flex items-center gap-2.5">
              <ScopeIcon />
              <span className="font-bold text-base tracking-tight text-ps-text">POLYSCOPE</span>
            </a>
            <p className="text-xs text-ps-muted leading-relaxed">
              Real-time Polymarket whale intelligence on iOS &amp; Android. Data sourced
              from Polygon blockchain via Polymarket CTF Exchange V2.
            </p>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ps-muted hover:text-ps-text transition-colors w-fit mt-1"
              aria-label="Follow on X"
            >
              <XIcon />
              <span className="text-xs font-medium">Follow on X</span>
            </a>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-3 gap-8 md:pl-16">
            {(Object.entries(footerLinks) as [string, { label: string; href: string }[]][]).map(([group, links]) => (
              <div key={group}>
                <p className="text-[11px] font-bold uppercase tracking-widest text-ps-muted mb-3">{group}</p>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-ps-muted hover:text-ps-text transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Disclaimer chip */}
          <div className="flex-shrink-0">
            <div className="rounded-xl border border-white/[0.07] bg-ps-card p-4 max-w-[200px]">
              <p className="text-[10px] text-ps-muted leading-relaxed">
                Polyscope provides market data only. Nothing on this platform
                constitutes financial advice. Do your own research.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-ps-muted">
            &copy; {new Date().getFullYear()} Polyscope. All rights reserved.
          </p>
          <p className="text-[11px] text-ps-muted/50">
            Trade data from Polygon blockchain · Not affiliated with Polymarket
          </p>
        </div>
      </div>
    </footer>
  )
}
