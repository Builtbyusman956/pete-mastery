import { Link } from 'react-router-dom'
import {
  RiInstagramLine, RiTwitterXLine, RiLinkedinBoxLine, RiYoutubeLine,
  RiTiktokLine, RiArrowRightUpLine, RiMailLine, RiMapPinLine
} from 'react-icons/ri'

const socials = [
  { icon: RiInstagramLine, href: '#', label: 'Instagram' },
  { icon: RiTwitterXLine, href: '#', label: 'Twitter/X' },
  { icon: RiLinkedinBoxLine, href: '#', label: 'LinkedIn' },
  { icon: RiYoutubeLine, href: '#', label: 'YouTube' },
  { icon: RiTiktokLine, href: '#', label: 'TikTok' },
]

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Book a Call', to: '/book-call' },
]

const services = [
  'Shopify Store Setup',
  'Brand Identity & Logo',
  'SEO Optimization',
  'Social Media Marketing',
  'Growth Funnels',
  'Email Marketing',
]

export default function Footer() {
  return (
    <footer className="bg-[#0e3134] text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-green/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative">

        {/* Top CTA Bar */}
        <div className="bg-brand-green/15 border border-brand-green/30 rounded-2xl p-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-syne font-bold text-2xl text-white mb-1">
              Ready to scale your brand?
            </h3>
            <p className="text-white/60 text-sm">Let's build something great together.</p>
          </div>
          <Link
            to="/book-call"
            className="btn-shine flex items-center gap-2 bg-brand-green px-7 py-3.5 rounded-full font-syne font-bold text-white hover:bg-[#0d9e6e] transition-colors whitespace-nowrap shrink-0"
          >
            Book a Free Call
            <RiArrowRightUpLine size={18} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-brand-green flex items-center justify-center">
                <span className="text-white font-syne font-bold text-base">E</span>
              </div>
              <span className="font-syne font-bold text-lg">
                Mastery<span className="text-green-400">Pete</span>
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Helping entrepreneurs build powerful brands through Shopify, strategic marketing, and growth-driven systems.
            </p>
            <div className="flex items-center gap-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand-green hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syne font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/65 hover:text-white text-sm transition-colors animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-syne font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-white/65 hover:text-white text-sm transition-colors animated-underline"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <RiMailLine className="text-brand-green mt-0.5 shrink-0" size={16} />
                <a href="mailto:hello@ecomexpert.com" className="text-white/65 hover:text-white text-sm transition-colors break-all">
                  hello@ecomexpert.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <RiMapPinLine className="text-brand-green mt-0.5 shrink-0" size={16} />
                <span className="text-white/65 text-sm">Remote — Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} PeteMastery. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}