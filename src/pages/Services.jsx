import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  RiShoppingBagLine, RiPaletteLine, RiSearchLine, RiInstagramLine,
  RiMailLine, RiBarChartLine, RiArrowRightLine, RiCheckLine,
  RiMegaphoneLine, RiTrophyLine
} from 'react-icons/ri'

const services = [
  {
    icon: RiShoppingBagLine,
    title: 'Shopify Store Setup',
    tagline: 'Launch-ready in days, not months',
    description: 'Complete Shopify store build from scratch — theme customization, product pages, payment setup, apps integration, and mobile optimization. Everything you need to sell from day one.',
    features: ['Custom theme design', 'Product page optimization', 'Payment gateway setup', 'App integrations', 'Mobile-first build', 'Speed optimization'],
    color: '#0d9e6e',
  },
  {
    icon: RiPaletteLine,
    title: 'Brand Identity & Logo',
    tagline: 'A brand that commands attention',
    description: 'From logo design to complete visual identity systems — color palettes, typography, brand guidelines, and all the assets you need to show up consistently and professionally.',
    features: ['Logo design (3 concepts)', 'Brand color system', 'Typography selection', 'Brand guidelines PDF', 'Social media kit', 'Business card design'],
    color: '#5ef5c0',
  },
  {
    icon: RiSearchLine,
    title: 'SEO Optimization',
    tagline: 'Get found. Get traffic. Get sales.',
    description: 'Full SEO strategy and implementation for your Shopify store — keyword research, on-page optimization, technical SEO, content strategy, and link-building that drives organic traffic.',
    features: ['Keyword research', 'On-page SEO', 'Technical SEO audit', 'Content strategy', 'Link building', 'Monthly reporting'],
    color: '#0d9e6e',
  },
  {
    icon: RiInstagramLine,
    title: 'Social Media Marketing',
    tagline: 'Build an audience that buys',
    description: 'Strategic social media management across Instagram, TikTok, and Facebook — content creation, community management, and growth strategies that turn followers into customers.',
    features: ['Content calendar', 'Graphic design', 'Caption writing', 'Community management', 'Story/Reel creation', 'Analytics reports'],
    color: '#5ef5c0',
  },
  {
    icon: RiBarChartLine,
    title: 'Growth Funnels',
    tagline: 'Systems that sell while you sleep',
    description: 'Custom sales funnels built to convert — landing pages, upsell flows, abandoned cart recovery, and retargeting sequences that maximize every visitor\'s value.',
    features: ['Landing page design', 'Upsell/cross-sell flows', 'Abandoned cart recovery', 'Retargeting setup', 'A/B testing', 'Conversion optimization'],
    color: '#0d9e6e',
  },
  {
    icon: RiMailLine,
    title: 'Email Marketing',
    tagline: 'Your highest-ROI marketing channel',
    description: 'Full email marketing setup and management — welcome flows, post-purchase sequences, win-back campaigns, and broadcast emails that drive repeat revenue.',
    features: ['Welcome sequence', 'Post-purchase flow', 'Win-back campaign', 'Newsletter setup', 'List segmentation', 'Performance tracking'],
    color: '#5ef5c0',
  },
  {
    icon: RiMegaphoneLine,
    title: 'Paid Advertising',
    tagline: 'Paid ads that actually pay off',
    description: 'Meta Ads, Google Ads, and TikTok Ads management — full campaign setup, audience research, creative strategy, and ongoing optimization to maximize your ad spend ROAS.',
    features: ['Meta Ads (FB/IG)', 'Google Shopping Ads', 'TikTok Ads', 'Audience research', 'Creative strategy', 'Weekly optimization'],
    color: '#0d9e6e',
  },
  {
    icon: RiTrophyLine,
    title: 'Brand Strategy & Consulting',
    tagline: 'Expert guidance at every stage',
    description: '1-on-1 brand strategy sessions to map out your positioning, target market, competitive advantage, and go-to-market plan. Get clarity on exactly what to do and in what order.',
    features: ['Brand positioning', 'Market research', 'Competitor analysis', 'Go-to-market plan', 'Pricing strategy', 'Growth roadmap'],
    color: '#5ef5c0',
  },
]

export default function Services() {
  return (
    <div style={{ background: 'rgb(14, 64, 59)' }}>

      {/* Header */}
      <section className="dark-mesh-bg pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <RiMegaphoneLine className="text-green-400" size={14} />
            <span className="text-green-300 text-sm font-medium">Everything You Need to Scale</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-syne font-bold text-white mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Services Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-[#5ef5c0]">
              E-Commerce Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl mx-auto mb-8"
          >
            From store launch to multi-6-figure brand — every service is designed to move the needle on your bottom line.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 rounded-full px-4 py-2"
          >
            <span className="text-amber-300 text-sm">
              💡 All services require a discovery call first — except our 3 core packages
            </span>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-3xl p-8 group hover:scale-[1.01] transition-transform duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: `${s.color}20`, border: `1px solid ${s.color}40` }}
                    >
                      <Icon size={24} style={{ color: s.color }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-syne font-bold text-white text-xl mb-1">{s.title}</h3>
                      <p className="text-sm font-semibold mb-3" style={{ color: s.color }}>{s.tagline}</p>
                      <p className="text-white/50 text-sm leading-relaxed mb-5">{s.description}</p>

                      <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                            <RiCheckLine size={14} style={{ color: s.color, flexShrink: 0 }} />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/book-call"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-3"
                        style={{ color: s.color }}
                      >
                        Book a Call to Get Started
                        <RiArrowRightLine size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Packages CTA */}
      <section
        className="py-20 px-6"
        style={{
          background: 'rgba(0,0,0,0.2)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-green-400 font-semibold mb-4 uppercase tracking-wider text-sm">Ready to buy now?</p>
          <h2 className="font-syne font-bold text-white text-3xl mb-4">
            Check Our 3 Core Packages
          </h2>
          <p className="text-white/55 mb-8 text-lg">
            Instant checkout — no call required. Pick the package that fits your stage of growth.
          </p>
          <Link
            to="/"
            onClick={() => setTimeout(() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' }), 100)}
            className="btn-shine inline-flex items-center gap-2 bg-white text-[rgb(14,64,59)] px-8 py-4 rounded-full font-syne font-bold text-base hover:bg-white/90 transition-colors"
          >
            View Packages & Pricing
            <RiArrowRightLine size={18} />
          </Link>
        </div>
      </section>

    </div>
  )
}