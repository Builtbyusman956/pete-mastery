import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  RiCalendarLine, RiArrowRightLine, RiCheckLine,
  RiTimeLine, RiUserLine, RiMailLine, RiPhoneLine,
  RiGlobalLine, RiMessage2Line
} from 'react-icons/ri'

const steps = [
  {
    num: '01',
    title: 'Book Your Call',
    desc: 'Fill out the form and choose a time that works for you.',
    icon: RiCalendarLine,
  },
  {
    num: '02',
    title: 'Strategy Session',
    desc: "We hop on a free 30-min call to understand your brand and goals.",
    icon: RiTimeLine,
  },
  {
    num: '03',
    title: 'Custom Plan',
    desc: 'You receive a tailored action plan with clear next steps and pricing.',
    icon: RiCheckLine,
  },
]

const services = [
  'Shopify Store Setup',
  'Brand Identity & Logo',
  'SEO Optimization',
  'Social Media Marketing',
  'Growth Funnels',
  'Email Marketing',
  'Paid Advertising',
  'Brand Strategy',
  'Other / Not Sure',
]

export default function BookCall() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', website: '', service: '', message: '', budget: ''
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.service) e.service = 'Please select a service'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    navigate('/thank-you?type=booking')
  }

  const field = (id, label, icon, type = 'text', placeholder = '') => {
    const Icon = icon
    return (
      <div>
        <label className="block text-sm font-medium text-white/80 mb-2 font-syne">{label}</label>
        <div className="relative">
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
          <input
            type={type}
            value={form[id]}
            onChange={(e) => setForm({ ...form, [id]: e.target.value })}
            placeholder={placeholder}
            className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm transition-colors outline-none font-dm bg-white/10 text-white placeholder-white/30
              ${errors[id] ? 'border-red-400/60' : 'border-white/15 focus:border-green-400'}
              hover:border-white/25`}
          />
        </div>
        {errors[id] && <p className="text-red-400 text-xs mt-1">{errors[id]}</p>}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0e413c]">
      {/* Header */}
      <section className="dark-mesh-bg pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <RiCalendarLine className="text-green-400" size={14} />
            <span className="text-green-300 text-sm font-medium">Free 30-Minute Strategy Call</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-syne font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Let's Build Your Brand Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-lg mx-auto"
          >
            Tell us about your business and we'll craft a growth strategy tailored to your goals.
          </motion.p>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-green-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-green-400/60 font-syne">{s.num}</span>
                    <h3 className="font-syne font-bold text-white text-base mt-0.5 mb-1">{s.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/8 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/15 shadow-xl"
          >
            <h2 className="font-syne font-bold text-white text-2xl mb-2">Book Your Free Call</h2>
            <p className="text-white/55 text-sm mb-8">We respond within 24 hours to confirm your slot.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {field('name', 'Full Name *', RiUserLine, 'text', 'John Doe')}
                {field('email', 'Email Address *', RiMailLine, 'email', 'john@example.com')}
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {field('phone', 'Phone / WhatsApp', RiPhoneLine, 'tel', '+1 234 567 8900')}
                {field('website', 'Current Website (if any)', RiGlobalLine, 'url', 'https://yourstore.com')}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2 font-syne">Service Interested In *</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-colors outline-none appearance-none font-dm bg-white/10 text-white
                    ${errors.service ? 'border-red-400/60' : 'border-white/15 focus:border-green-400'}`}
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="" className="bg-[#0e413c]">Select a service...</option>
                  {services.map((s) => <option key={s} value={s} className="bg-[#0e413c]">{s}</option>)}
                </select>
                {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2 font-syne">Monthly Budget Range</label>
                <div className="flex flex-wrap gap-2">
                  {['Under $500', '$500–$1,500', '$1,500–$5,000', '$5,000+'].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setForm({ ...form, budget: b })}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                        form.budget === b
                          ? 'bg-brand-green text-white border-brand-green'
                          : 'bg-white/10 text-white/70 border-white/15 hover:border-green-400/50 hover:text-white'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2 font-syne">Tell Us About Your Brand</label>
                <div className="relative">
                  <RiMessage2Line className="absolute left-4 top-4 text-white/30" size={16} />
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What's your business, current challenges, and what you're hoping to achieve..."
                    rows={4}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/15 focus:border-green-400 bg-white/10 text-white placeholder-white/30 text-sm transition-colors outline-none resize-none font-dm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-shine w-full flex items-center justify-center gap-2 bg-brand-green text-white py-4 rounded-2xl font-syne font-bold text-base hover:bg-[#0d9e6e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Booking your call...
                  </>
                ) : (
                  <>
                    Book My Free Strategy Call
                    <RiArrowRightLine size={18} />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-white/35">
                No commitment required. We'll confirm via email within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}