import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import logoIcon from '../assets/logo-icon.png'

const NAV_SECTIONS = [
  { label: 'Features', anchor: 'features' },
  { label: 'How It Works', anchor: 'how-it-works' },
  { label: 'Pricing', anchor: 'pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Section links scroll on home; navigate home+anchor from other pages
  function sectionHref(anchor: string) {
    return isHome ? `#${anchor}` : `${import.meta.env.BASE_URL}#${anchor}`
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logoIcon} alt="Polyscope logo" className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
            <span className="font-bold text-lg tracking-tight text-ps-text">
              POLYSCOPE
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_SECTIONS.map(({ label, anchor }) => (
              <a
                key={label}
                href={sectionHref(anchor)}
                className="text-sm font-medium text-ps-muted hover:text-ps-text transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <Link
              to="/contact"
              className="text-sm font-medium text-ps-muted hover:text-ps-text transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={sectionHref('download')}
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
          mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        } glass border-t border-white/5`}
      >
        <div className="px-5 py-4 flex flex-col gap-4">
          {NAV_SECTIONS.map(({ label, anchor }) => (
            <a
              key={label}
              href={sectionHref(anchor)}
              className="text-sm font-medium text-ps-muted hover:text-ps-text transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <Link
            to="/contact"
            className="text-sm font-medium text-ps-muted hover:text-ps-text transition-colors py-1"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <a
            href={sectionHref('download')}
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
