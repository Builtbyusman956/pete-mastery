import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  RiArrowRightLine, RiPlayCircleLine, RiShoppingBagLine,
  RiLineChartLine, RiStarFill
} from 'react-icons/ri'

const floatingStats = [
  { icon: RiShoppingBagLine, label: 'Stores Launched', value: '120+', color: 'bg-brand-green' },
  { icon: RiLineChartLine, label: 'Avg Revenue Growth', value: '340%', color: 'bg-[#0e3134]' },
]

const avatars = [
  'https://i.pravatar.cc/40?img=1',
  'https://i.pravatar.cc/40?img=5',
  'https://i.pravatar.cc/40?img=8',
  'https://i.pravatar.cc/40?img=12',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dark-mesh-bg">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#0d9e6e]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-medium font-dm">
                Shopify & Brand Growth Expert
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-syne font-bold text-white leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Turn Your Brand
              <br />
              Into a{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-[#5ef5c0]">
                  Revenue Machine
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C60 3 120 10 180 6C240 2 280 8 298 5"
                    stroke="#0a7e59"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/65 text-lg leading-relaxed max-w-lg mb-10 font-dm"
            >
              I help entrepreneurs launch, grow, and scale their e-commerce brands using Shopify, strategic funnels, SEO, and powerful brand marketing that converts.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                to="/#packages"
                className="btn-shine flex items-center justify-center gap-2 bg-brand-green text-white px-7 py-4 rounded-full font-syne font-bold text-base hover:bg-[#0d9e6e] transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View Packages
                <RiArrowRightLine size={18} />
              </Link>
              <Link
                to="/book-call"
                className="flex items-center justify-center gap-2 border border-white/25 text-white px-7 py-4 rounded-full font-syne font-semibold text-base hover:bg-white/10 transition-colors"
              >
                <RiPlayCircleLine size={18} />
                Book Free Call
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Client"
                    className="w-9 h-9 rounded-full border-2 border-[#0e3134] object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <RiStarFill key={i} className="text-yellow-400" size={12} />
                  ))}
                </div>
                <p className="text-white/55 text-sm font-dm">
                  Trusted by <span className="text-white font-medium">200+ entrepreneurs</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — visual cards */}
          <div className="hidden lg:block relative h-[520px]">

            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute top-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-7"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white/50 text-xs font-dm uppercase tracking-wider mb-1">Monthly Revenue</p>
                  <p className="font-syne font-bold text-white text-3xl">$84,320</p>
                </div>
                <div className="bg-green-400/20 border border-green-400/30 text-green-300 px-3 py-1.5 rounded-full text-sm font-semibold">
                  +127% ↑
                </div>
              </div>

              {/* Chart bars */}
              <div className="flex items-end gap-2 h-24 mb-4">
                {[40, 55, 45, 70, 60, 85, 75, 90, 80, 100, 88, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5 + i * 0.04, duration: 0.4 }}
                    style={{ height: `${h}%`, originY: 1 }}
                    className={`flex-1 rounded-sm ${
                      i === 11 ? 'bg-green-400' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                {[
                  { label: 'Orders', val: '1,234' },
                  { label: 'Conv. Rate', val: '4.8%' },
                  { label: 'AOV', val: '$68' },
                ].map(({ label, val }) => (
                  <div key={label} className="text-center">
                    <p className="font-syne font-bold text-white text-lg">{val}</p>
                    <p className="text-white/40 text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating stat cards */}
            {floatingStats.map(({ icon: Icon, label, value, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                style={{ bottom: i === 0 ? '60px' : '20px', left: i === 0 ? '0px' : undefined, right: i === 1 ? '0px' : undefined }}
                className="absolute bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3"
              >
                <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
                  <Icon className="text-white" size={18} />
                </div>
                <div>
                  <p className="font-syne font-bold text-brand-dark text-xl leading-none">{value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}