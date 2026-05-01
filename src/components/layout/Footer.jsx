import { Link } from 'react-router-dom'
import {
  RiLeafLine,
  RiInstagramLine,
  RiTiktokLine,
  RiFacebookBoxLine,
  RiWhatsappLine,
  RiArrowRightUpLine,
  RiMailLine,
  RiMapPinLine,
} from 'react-icons/ri'

const socials = [
  { icon: <RiWhatsappLine />,    href: '#', label: 'WhatsApp',  color: '#22c55e' },
  { icon: <RiInstagramLine />,   href: '#', label: 'Instagram', color: '#1A7A4A' },
  { icon: <RiTiktokLine />,      href: '#', label: 'TikTok',    color: '#EDF5F0' },
  { icon: <RiFacebookBoxLine />, href: '#', label: 'Facebook',  color: '#60a5fa' },
]

const footerLinks = {
  Services: [
    { label: 'Shopify Store Setup', to: '/services' },
    { label: 'Brand Identity',      to: '/services' },
    { label: 'Growth Funnels',      to: '/services' },
    { label: 'Social Media Mktg',   to: '/services' },
    { label: 'SEO & Paid Ads',      to: '/services' },
  ],
  Company: [
    { label: 'Portfolio',   to: '/portfolio' },
    { label: 'Packages',    to: '/#packages' },
    { label: 'Book a Call', to: '/book-a-call' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#060A08] border-t border-[#1A7A4A]/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#1A7A4A]/60 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#1A7A4A]/03 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">

        {/* Brand column */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-2 group w-fit">
            <span className="w-9 h-9 rounded-lg bg-[#1A7A4A] flex items-center justify-center text-white text-lg shadow-lg shadow-[#1A7A4A]/30">
              <RiLeafLine />
            </span>
            <span className="font-bold text-lg text-[#EDF5F0]" style={{ fontFamily: "'Syne', sans-serif" }}>
              Pete<span className="text-[#1A7A4A]">Mastery</span>
            </span>
          </Link>

          <p className="text-[#6B8F78] text-sm leading-relaxed max-w-[240px]">
            Helping entrepreneurs build brands that sell — with Shopify, strategy, and systems that scale.
          </p>

          <a href="mailto:hello@petemastery.com" className="flex items-center gap-2 text-[#A8C4B0] hover:text-[#1A7A4A] text-sm transition-colors duration-200">
            <RiMailLine className="text-[#1A7A4A] flex-shrink-0" />
            hello@petemastery.com
          </a>

          <div className="flex items-center gap-2 text-[#6B8F78] text-sm">
            <RiMapPinLine className="text-[#1A7A4A] flex-shrink-0" />
            Available Worldwide
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2 mt-1">
            {socials.map(({ icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-[#1A7A4A]/15 flex items-center justify-center text-[#6B8F78] transition-all duration-200 text-base"
                onMouseEnter={e => { e.currentTarget.style.color = color; e.currentTarget.style.background = `${color}15`; e.currentTarget.style.borderColor = `${color}40` }}
                onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; e.currentTarget.style.borderColor = '' }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, items]) => (
          <div key={heading} className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A7A4A]" style={{ fontFamily: "'Syne', sans-serif" }}>
              {heading}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {items.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-[#6B8F78] hover:text-[#EDF5F0] text-sm transition-colors duration-200 flex items-center gap-1 group">
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#1A7A4A]">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CTA card */}
        <div className="flex flex-col">
          <div className="rounded-2xl border border-[#1A7A4A]/20 bg-[#111A15] p-6 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A7A4A] bg-[#1A7A4A]/10 px-3 py-1 rounded-full w-fit">
              Free Discovery Call
            </span>
            <h4 className="text-[#EDF5F0] font-bold text-base leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
              Ready to grow your brand?
            </h4>
            <p className="text-[#6B8F78] text-sm leading-relaxed">
              Let's talk about your goals and build a plan that actually works.
            </p>
            <Link
              to="/book-a-call"
              className="flex items-center justify-center gap-1.5 bg-[#1A7A4A] hover:bg-[#22A65C] text-white text-sm font-semibold py-2.5 px-4 rounded-full transition-all duration-300 shadow-lg shadow-[#1A7A4A]/25 hover:-translate-y-0.5 mt-1"
            >
              Book a Call
              <RiArrowRightUpLine />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#EDF5F0]/05 mt-4 relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6B8F78] text-xs">© {year} PeteMastery. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[#6B8F78] hover:text-[#A8C4B0] text-xs transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-[#6B8F78] hover:text-[#A8C4B0] text-xs transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}