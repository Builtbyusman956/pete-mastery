import { motion } from 'framer-motion'
import { RiArrowRightLine, RiExternalLinkLine, RiShoppingBagLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'LuxeThreads Fashion',
    niche: 'Fashion & Apparel',
    service: 'Shopify Setup + Brand Identity',
    result: '+312% revenue in 90 days',
    metric: '$142K',
    metricLabel: 'Monthly Revenue',
    tags: ['Shopify', 'Branding', 'SEO'],
    color: '#0a7e59',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  },
  {
    id: 2,
    title: 'FitCore Supplements',
    niche: 'Health & Wellness',
    service: 'Growth Funnel + Paid Ads',
    result: '5x ROAS on Meta Ads',
    metric: '$89K',
    metricLabel: 'Monthly Revenue',
    tags: ['Funnels', 'Meta Ads', 'Email'],
    color: '#0e3134',
    img: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&q=80',
  },
  {
    id: 3,
    title: 'HomeNest Decor',
    niche: 'Home & Living',
    service: 'Full Brand Identity + SEO',
    result: '0 to 50K monthly visitors',
    metric: '50K',
    metricLabel: 'Monthly Visitors',
    tags: ['SEO', 'Content', 'Branding'],
    color: '#0a7e59',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
  },
  {
    id: 4,
    title: 'GlowSkin Beauty',
    niche: 'Beauty & Skincare',
    service: 'Social Media + Shopify',
    result: '200K TikTok followers in 60 days',
    metric: '200K',
    metricLabel: 'TikTok Followers',
    tags: ['TikTok', 'Instagram', 'Shopify'],
    color: '#0e3134',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
  },
  {
    id: 5,
    title: 'TechCarry Accessories',
    niche: 'Tech Accessories',
    service: 'Store Redesign + Email Flows',
    result: '38% increase in repeat buyers',
    metric: '38%',
    metricLabel: 'Repeat Purchase Rate',
    tags: ['Email', 'CRO', 'Shopify'],
    color: '#0a7e59',
    img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&q=80',
  },
  {
    id: 6,
    title: 'PetPals Store',
    niche: 'Pet Products',
    service: 'Brand Identity + Full Launch',
    result: 'Sold out first product run in 2 weeks',
    metric: '2 Wks',
    metricLabel: 'Sold Out Time',
    tags: ['Launch', 'Branding', 'SEO'],
    color: '#0e3134',
    img: 'https://images.unsplash.com/photo-1601758124096-519ed9f12ac9?w=600&q=80',
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Header */}
      <section className="dark-mesh-bg pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <RiShoppingBagLine className="text-green-400" size={14} />
            <span className="text-green-300 text-sm font-medium">Case Studies & Results</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-syne font-bold text-white mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Real Brands. Real Results.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl mx-auto"
          >
            Every project tells a story of transformation — from idea to thriving e-commerce brand.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 card-lift"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Metric badge */}
                  <div
                    className="absolute bottom-4 left-4 rounded-xl px-3 py-2 text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    <p className="font-syne font-bold text-xl leading-none">{p.metric}</p>
                    <p className="text-white/75 text-xs">{p.metricLabel}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-medium text-brand-green uppercase tracking-wider mb-2">{p.niche}</p>
                  <h3 className="font-syne font-bold text-brand-dark text-xl mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{p.service}</p>

                  <div className="bg-gray-50 rounded-xl px-4 py-3 mb-4">
                    <p className="text-brand-dark font-semibold text-sm">📈 {p.result}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-syne font-bold text-brand-dark text-3xl mb-4">Want results like these?</h2>
          <p className="text-gray-500 mb-8">Book a free strategy call and let's map out your brand's growth plan.</p>
          <Link
            to="/book-call"
            className="btn-shine inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-full font-syne font-bold text-base hover:bg-[#0d9e6e] transition-colors"
          >
            Book a Free Strategy Call
            <RiArrowRightLine size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}