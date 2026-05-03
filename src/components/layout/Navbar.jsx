import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMenuLine, RiCloseLine, RiArrowRightUpLine } from 'react-icons/ri'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Book a Call', to: '/book-call' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0e3134]/97 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-brand-green flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <span className="text-white font-syne font-bold text-base leading-none">E</span>
            </div>
            <div className="leading-none">
              <span className={`font-syne font-bold text-lg tracking-tight transition-colors text-white`}>
                Mastery<span className="text-brand-green" style={{ color: scrolled ? 'var(--brand-green)' : '#5ef5c0' }}>Pete</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.slice(0, -1).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors animated-underline ${
                    isActive ? 'text-green-400' : 'text-white/75 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/book-call"
              className="hidden md:flex items-center gap-1.5 btn-shine bg-brand-green text-white px-5 py-2.5 rounded-full text-sm font-semibold font-syne hover:bg-[#0d9e6e] transition-colors"
            >
              Book a Call
              <RiArrowRightUpLine className="text-base" />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#0e3134] flex flex-col p-8 pt-20">

              <div className="flex flex-col gap-2 mt-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `block py-3.5 px-4 rounded-xl text-lg font-syne font-semibold transition-colors ${
                          isActive
                            ? 'bg-brand-green/20 text-green-300'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  to="/book-call"
                  className="flex items-center justify-center gap-2 btn-shine w-full bg-brand-green text-white py-4 rounded-2xl font-syne font-bold text-base"
                >
                  Book a Free Call
                  <RiArrowRightUpLine size={18} />
                </Link>
                <p className="text-center text-white/40 text-xs mt-4">No commitment required</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}