import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { RiArrowRightLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const stats = [
  {
    value: 120,
    suffix: '+',
    label: 'Stores Launched',
    desc: 'Shopify stores built and optimized from scratch',
    color: 'from-[#0a7e59] to-[#0d9e6e]',
  },
  {
    value: 340,
    suffix: '%',
    label: 'Avg. Revenue Growth',
    desc: 'Average increase in client revenue within 6 months',
    color: 'from-[#0e3134] to-[#163e42]',
  },
  {
    value: 5,
    suffix: 'x',
    label: 'Average ROAS',
    desc: 'Return on ad spend across paid campaigns',
    color: 'from-[#0a7e59] to-[#0d9e6e]',
  },
  {
    value: 200,
    suffix: '+',
    label: 'Happy Clients',
    desc: 'Entrepreneurs and brands scaled worldwide',
    color: 'from-[#0e3134] to-[#163e42]',
  },
]

function CountUp({ target, suffix, isInView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'rgb(14, 64, 59)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-green-300 text-sm font-semibold font-syne uppercase tracking-wider">By The Numbers</span>
          </div>
          <h2 className="font-syne font-bold text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}>
            Results That Speak for Themselves
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every number represents a real entrepreneur who trusted the process and saw their brand transform.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              {/* Card */}
              <div
                className="relative rounded-3xl p-7 overflow-hidden h-full"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-3xl`} />

                {/* Number */}
                <div
                  className="font-syne font-bold mb-3 leading-none"
                  style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                    color: 'rgba(255,255,255,0.95)',
                  }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} isInView={isInView} />
                </div>

                <p className="font-syne font-bold text-white text-base mb-2">{stat.label}</p>
                <p className="text-white/45 text-sm leading-snug">{stat.desc}</p>

                {/* Decorative circle */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white/5 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/45 text-base mb-5">
            Ready to add your name to these numbers?
          </p>
          <Link
            to="/book-call"
            className="btn-shine inline-flex items-center gap-2 bg-white text-[rgb(14,64,59)] px-7 py-3.5 rounded-full font-syne font-bold text-sm hover:bg-white/90 transition-colors"
          >
            Start Your Growth Journey
            <RiArrowRightLine size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}