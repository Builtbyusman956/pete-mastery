import { motion } from 'framer-motion'
import {
  RiShieldCheckLine, RiMedalLine, RiThumbUpLine, RiCustomerService2Line
} from 'react-icons/ri'
import { SiShopify, SiMeta, SiGoogle, SiMailchimp, SiTiktok } from 'react-icons/si'

const platforms = [
  { icon: SiShopify,   name: 'Shopify',    color: '#96BF48' },
  { icon: SiMeta,      name: 'Meta Ads',   color: '#74aaff' },
  { icon: SiGoogle,    name: 'Google',     color: '#7eb8ff' },
  { icon: SiTiktok,    name: 'TikTok',     color: '#ff6b8a' },
  { icon: SiMailchimp, name: 'Mailchimp',  color: '#FFE01B' },
]

const trust = [
  { icon: RiShieldCheckLine,      value: '100%',      label: 'Satisfaction' },
  { icon: RiMedalLine,            value: 'Certified', label: 'Shopify Partner' },
  { icon: RiThumbUpLine,          value: '5★',        label: '200+ Reviews' },
  { icon: RiCustomerService2Line, value: '24h',       label: 'Support' },
]

export default function TrustBar() {
  return (
    <section
      className="relative overflow-hidden py-8 md:py-16"
      style={{
        background: 'linear-gradient(135deg, rgb(10, 52, 47) 0%, rgb(14, 72, 65) 50%, rgb(8, 44, 40) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Background glow orbs — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        <div style={{
          position: 'absolute', top: '-60px', left: '15%',
          width: '340px', height: '340px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(150,191,72,0.10) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-40px', right: '10%',
          width: '280px', height: '280px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(116,170,255,0.10) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }} />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col gap-6 md:gap-10">

        {/* Label — desktop only */}
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="hidden md:block text-center text-xs font-semibold uppercase"
          style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.22em' }}
        >
          Trusted integrations &amp; verified by the best
        </motion.p>

        {/* Platform icons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex items-center justify-center gap-3 md:gap-10 flex-wrap"
        >
          {platforms.map(({ icon: Icon, name, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex flex-col items-center gap-1.5 group cursor-default"
            >
              <div
                className="flex items-center justify-center rounded-xl md:rounded-2xl"
                style={{
                  width: 44, height: 44,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                }}
              >
                <Icon size={20} style={{ color }} className="transition-all duration-300 group-hover:drop-shadow-lg" />
              </div>
              <span className="text-[10px] md:text-xs font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative divider */}
        <div className="relative flex items-center justify-center">
          <div style={{
            width: '100%', height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)',
          }} />
          <div style={{
            position: 'absolute', width: 6, height: 6, borderRadius: '50%',
            background: 'rgba(255,255,255,0.18)',
            boxShadow: '0 0 8px 2px rgba(255,255,255,0.10)',
          }} />
        </div>

        {/* Trust stats — always a horizontal row, equal-width on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-4 md:flex md:flex-wrap md:justify-center gap-2 md:gap-6"
        >
          {trust.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
              whileHover={{ y: -2, scale: 1.02 }}
              className="flex flex-col items-center justify-center gap-1 rounded-xl md:rounded-2xl px-2 py-3 md:flex-row md:items-center md:gap-3 md:px-6 md:py-4"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'default',
              }}
            >
              <div
                className="flex items-center justify-center rounded-lg shrink-0"
                style={{
                  width: 28, height: 28,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
              >
                <Icon size={12} style={{ color: 'rgba(255,255,255,0.65)' }} />
              </div>
              <div className="flex flex-col items-center md:items-start min-w-0">
                <span
                  className="text-sm md:text-xl font-black leading-tight"
                  style={{ color: 'rgba(255,255,255,0.96)', fontFamily: "'Syne', sans-serif" }}
                >
                  {value}
                </span>
                <span
                  className="text-[9px] md:text-xs font-medium leading-tight text-center md:text-left"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}