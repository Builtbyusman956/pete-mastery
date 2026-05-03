import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiAddLine, RiSubtractLine, RiArrowRightLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: "What's included in the 3 core packages — and can I buy without a call?",
    a: "Yes — the 3 packages (Launch, Scale, and Elite) are available for instant purchase directly on this site via Flutterwave. Each package is a complete, scoped deliverable. For anything outside the packages — custom SEO retainers, social media management, paid ad management — those require a free discovery call first so we can scope and price accurately for your specific situation.",
  },
  {
    q: "How long does it take to see results?",
    a: "It depends on the service. A Shopify store setup is typically completed within 7–14 days. Brand identity work takes 5–10 days. For growth services like SEO and social media marketing, you should expect to see meaningful traction within 60–90 days — though most clients report early wins like increased traffic and engagement within the first 30 days.",
  },
  {
    q: "Do you only work with Shopify, or can you help with other platforms?",
    a: "My primary focus and deepest expertise is Shopify — it's the platform I recommend for 95% of e-commerce businesses. However, brand identity, marketing strategy, SEO, and paid ads work applies across all platforms. If you're on WooCommerce or another platform, we can still help with everything outside of store setup. The discovery call is the best place to explore this.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "I work with entrepreneurs and small-to-medium e-commerce brands at all stages — from first-time founders launching their first Shopify store, to existing brands doing $10K–$100K/month who want to accelerate growth. Industries include fashion, beauty, health & wellness, home goods, tech accessories, and more. If you sell physical or digital products online, we can help.",
  },
  {
    q: "What happens after I book a call or purchase a package?",
    a: "After booking a call, you'll receive a confirmation email within 24 hours with your scheduled slot details. After purchasing a package, you'll get an onboarding email within 24 hours with a questionnaire and next steps. Either way, every engagement starts with a kick-off session where we align on goals, timelines, and deliverables before any work begins.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="py-24 px-6" style={{ background: 'rgb(14, 64, 59)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

          {/* Left — sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-green-300 text-sm font-semibold font-syne uppercase tracking-wider">FAQ</span>
            </div>

            <h2
              className="font-syne font-bold text-white mb-5 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              Questions?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-[#5ef5c0]">
                We've Got Answers.
              </span>
            </h2>

            <p className="text-white/50 text-base leading-relaxed mb-8">
              Everything you need to know before working together. Don't see your question here? Just ask.
            </p>

            {/* Stats pill */}
            <div
              className="inline-flex items-center gap-4 rounded-2xl px-5 py-4 mb-8"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <div className="text-center">
                <p className="font-syne font-bold text-white text-xl">24h</p>
                <p className="text-white/40 text-xs">Response time</p>
              </div>
              <div className="w-px h-10" style={{ background: 'rgba(255,255,255,0.10)' }} />
              <div className="text-center">
                <p className="font-syne font-bold text-white text-xl">Free</p>
                <p className="text-white/40 text-xs">Discovery call</p>
              </div>
              <div className="w-px h-10" style={{ background: 'rgba(255,255,255,0.10)' }} />
              <div className="text-center">
                <p className="font-syne font-bold text-white text-xl">5★</p>
                <p className="text-white/40 text-xs">Avg. rating</p>
              </div>
            </div>

            <Link
              to="/book-call"
              className="btn-shine flex items-center justify-center gap-2 bg-white text-[rgb(14,64,59)] px-6 py-3.5 rounded-full font-syne font-bold text-sm hover:bg-white/90 transition-colors w-fit"
            >
              Still have questions? Book a Call
              <RiArrowRightLine size={16} />
            </Link>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: isOpen ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.04)',
                    border: isOpen ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                  >
                    <span className="font-syne font-semibold text-base leading-snug text-white">
                      {faq.q}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: isOpen ? '#0d9e6e' : 'rgba(255,255,255,0.08)',
                        color: 'white',
                      }}
                    >
                      {isOpen ? <RiSubtractLine size={16} /> : <RiAddLine size={16} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <p className="px-7 pb-6 text-white/60 text-sm leading-relaxed font-dm">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}