import { Link } from 'react-router-dom'
import logoIcon from '../assets/logo-icon.png'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Company: [
    { label: 'Join Waitlist', href: '#download' },
    { label: 'Support', href: '/support', isRoute: true },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy', isRoute: true },
    { label: 'Terms of Service', href: '/terms', isRoute: true },
    { label: 'EULA', href: '/eula', isRoute: true },
  ],
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.732-8.844L2.25 2.25h7.052l4.26 5.633L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

const socials = [
  { label: 'X',         href: 'https://x.com/PolyscopeApp',              Icon: XIcon },
  { label: 'TikTok',    href: 'https://www.tiktok.com/@polyscopeapp',    Icon: TikTokIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/polyscopeapp/', Icon: InstagramIcon },
]

export default function Footer() {
  return (
    <footer className="bg-ps-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <a href="#" className="flex items-center gap-2.5">
              <img src={logoIcon} alt="Polyscope logo" className="w-6 h-6" />
              <span className="font-bold text-base tracking-tight text-ps-text">POLYSCOPE</span>
            </a>
            <p className="text-xs text-ps-muted leading-relaxed">
              Real-time Polymarket whale intelligence on iOS. Independently
              built by one developer who watches the whales so you don't have to.
            </p>
            <div className="flex items-center gap-2 mt-1">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-ps-muted hover:text-ps-green hover:border-ps-green/30 transition-colors"
                  aria-label={`Follow on ${label}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-3 gap-8 md:pl-16">
            {(Object.entries(footerLinks) as [string, { label: string; href: string; isRoute?: boolean }[]][]).map(([group, links]) => (
              <div key={group}>
                <p className="text-[11px] font-bold uppercase tracking-widest text-ps-muted mb-3">{group}</p>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.isRoute ? (
                        <Link to={link.href} className="text-xs text-ps-muted hover:text-ps-text transition-colors">
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} className="text-xs text-ps-muted hover:text-ps-text transition-colors">
                          {link.label}
                        </a>
                      )}
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
            Data sourced from Polymarket's public APIs · Not affiliated with Polymarket
          </p>
        </div>
      </div>
    </footer>
  )
}
