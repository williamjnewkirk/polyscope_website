import { useEffect, useState } from 'react'
import { List, X } from '@phosphor-icons/react'

function ScopeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="17" stroke="#18B974" strokeWidth="2" />
      <circle cx="20" cy="20" r="8" stroke="#18B974" strokeWidth="1.2" opacity="0.45" />
      <line x1="20" y1="3" x2="20" y2="9" stroke="#18B974" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="31" x2="20" y2="37" stroke="#18B974" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="20" x2="9" y2="20" stroke="#18B974" strokeWidth="2" strokeLinecap="round" />
      <line x1="31" y1="20" x2="37" y2="20" stroke="#18B974" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 22 C10 16 14.5 12 20 13.5 C25.5 12 30 16 30 22 L28 25 Q20 29 12 25 Z" fill="#18B974" opacity="0.88" />
      <circle cx="20" cy="13" r="1.8" fill="#D4612E" />
    </svg>
  )
}

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <ScopeIcon className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
            <span className="font-bold text-lg tracking-tight text-ps-text">
              POLYSCOPE
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ps-muted hover:text-ps-text transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#download"
              className="px-5 py-2 rounded-full bg-ps-green text-ps-black text-sm font-semibold hover:bg-opacity-90 active:scale-[0.97] transition-all duration-200"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-ps-muted hover:text-ps-text transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } glass border-t border-white/5`}
      >
        <div className="px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ps-muted hover:text-ps-text transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="mt-2 px-5 py-2.5 rounded-full bg-ps-green text-ps-black text-sm font-semibold text-center active:scale-[0.97] transition-all duration-200"
            onClick={() => setMobileOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  )
}
