import { Link } from 'react-router-dom'
import {
  RiArrowRightUpLine,
  RiPlayCircleLine,
  RiShieldCheckLine,
  RiStore2Line,
  RiLineChartLine,
  RiStarFill,
  RiCheckboxCircleFill,
} from 'react-icons/ri'
import { SiShopify } from 'react-icons/si'

const badges = [
  { icon: <RiCheckboxCircleFill />, text: 'Shopify Partner' },
  { icon: <RiCheckboxCircleFill />, text: '150+ Stores Built' },
  { icon: <RiCheckboxCircleFill />, text: '$3M+ Revenue Generated' },
]

const floatingCards = [
  {
    icon: <RiStore2Line />,
    label: 'Store Launched',
    value: '3x Revenue',
    color: 'text-[#1A7A4A]',
    bg: 'bg-[#1A7A4A]/10',
  },
  {
    icon: <RiLineChartLine />,
    label: 'Brand Growth',
    value: '+260% Traffic',
    color: 'text-[#F0A500]',
    bg: 'bg-[#F0A500]/10',
  },
  {
    icon: <RiShieldCheckLine />,
    label: 'Client Satisfied',
    value: '100% Rate',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060A08] pt-28 pb-20">

      {/* Background */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#1A7A4A]/08 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#F0A500]/05 blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#EDF5F0 1px, transparent 1px), linear-gradient(90deg, #EDF5F0 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060A08] to-transparent pointer-events-none z-10" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div className="flex flex-col gap-7">

            {/* Badge */}
            <div className="flex items-center gap-2 w-fit">
              <span className="flex items-center gap-2 bg-[#111A15] border border-[#1A7A4A]/25 text-[#EDF5F0] text-xs font-semibold px-4 py-2 rounded-full">
                <SiShopify className="text-[#1A7A4A] text-sm" />
                Shopify Expert & Brand Strategist
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1
                className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.0] tracking-tight text-[#EDF5F0] mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Master Your
                <br />
                Brand &{' '}
                <span className="relative inline-block">
                  <span
                    className="relative z-10"
                    style={{
                      background: 'linear-gradient(120deg, #22A65C 0%, #F0A500 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Scale Fast
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M1 5.5 C 40 1, 80 8, 120 4, 160 1, 180 6, 199 4" stroke="#1A7A4A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-[#A8C4B0] text-lg leading-relaxed max-w-lg">
              I help entrepreneurs launch and grow winning Shopify stores — from brand identity and store setup to growth funnels, SEO, and marketing that converts.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3">
              {badges.map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 text-xs text-[#A8C4B0] font-medium">
                  <span className="text-[#1A7A4A] text-sm">{icon}</span>
                  {text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/#packages"
                className="flex items-center gap-2 bg-[#1A7A4A] hover:bg-[#22A65C] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-[#1A7A4A]/30 hover:-translate-y-0.5 text-sm"
              >
                View Packages
                <RiArrowRightUpLine className="text-lg" />
              </Link>
              <Link
                to="/book-a-call"
                className="flex items-center gap-2 border border-[#1A7A4A]/30 hover:border-[#1A7A4A]/70 text-[#EDF5F0] hover:text-[#1A7A4A] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm"
              >
                <RiPlayCircleLine className="text-lg" />
                Book Free Call
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2.5">
                {['#1A7A4A', '#F0A500', '#22A65C', '#6B8F78', '#111A15'].map((bg, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#060A08] flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: bg, zIndex: 5 - i }}
                  >
                    {['AJ', 'KO', 'BM', 'SF', '+'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {Array(5).fill(0).map((_, i) => (
                    <RiStarFill key={i} className="text-[#F0A500] text-xs" />
                  ))}
                </div>
                <p className="text-[#6B8F78] text-xs">
                  Trusted by <span className="text-[#EDF5F0] font-semibold">150+ entrepreneurs</span> worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right: Dashboard visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-[#1A7A4A]/15 blur-3xl rounded-3xl scale-110 pointer-events-none" />

              <div className="relative bg-[#111A15] border border-[#1A7A4A]/20 rounded-3xl p-8 shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-[#6B8F78] text-xs font-medium mb-1">Dashboard Overview</p>
                    <h3 className="text-[#EDF5F0] font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>
                      Brand Performance
                    </h3>
                  </div>
                  <span className="flex items-center gap-1.5 bg-emerald-400/10 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Monthly Revenue', value: '$32,400', change: '+28%' },
                    { label: 'Conversion Rate', value: '4.2%',    change: '+0.9%' },
                    { label: 'Store Traffic',   value: '8.7K',    change: '+54%' },
                    { label: 'Avg Order Value', value: '$114',    change: '+22%' },
                  ].map(({ label, value, change }) => (
                    <div key={label} className="bg-[#0D1410] rounded-xl p-4 border border-[#EDF5F0]/05">
                      <p className="text-[#6B8F78] text-xs mb-1.5">{label}</p>
                      <p className="text-[#EDF5F0] font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>{value}</p>
                      <p className="text-xs font-semibold mt-1 text-emerald-400">{change} this month</p>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div className="bg-[#0D1410] rounded-xl p-4 border border-[#EDF5F0]/05">
                  <p className="text-[#6B8F78] text-xs mb-3">Weekly Sales</p>
                  <div className="flex items-end gap-2 h-16">
                    {[35, 60, 40, 75, 55, 85, 70].map((h, i) => (
                      <div key={i} className="flex-1">
                        <div
                          className="w-full rounded-t-md transition-all duration-500"
                          style={{
                            height: `${h}%`,
                            background: i === 5
                              ? 'linear-gradient(180deg, #22A65C, #1A7A4A)'
                              : 'rgba(26,122,74,0.25)',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <span key={i} className="text-[#6B8F78] text-xs flex-1 text-center">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            {floatingCards.map(({ icon, label, value, color, bg }, i) => (
              <div
                key={label}
                className={`absolute bg-[#111A15] border border-[#EDF5F0]/08 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl backdrop-blur
                  ${i === 0 ? '-left-12 top-12' : i === 1 ? '-right-10 top-1/3' : '-left-8 bottom-16'}`}
                style={{ animation: `float ${4 + i}s ease-in-out infinite`, animationDelay: `${i * 0.6}s` }}
              >
                <span className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center text-base flex-shrink-0`}>
                  {icon}
                </span>
                <div>
                  <p className="text-[#6B8F78] text-[10px] leading-none mb-1">{label}</p>
                  <p className="text-[#EDF5F0] font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}