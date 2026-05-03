import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiCheckboxCircleFill, RiArrowRightLine, RiCalendarLine, RiMailLine } from 'react-icons/ri'

export default function ThankYou() {
  const [params] = useSearchParams()
  const type = params.get('type') // 'payment' | 'booking'
  const pkg = params.get('package')

  const isPayment = type === 'payment'

  return (
    <div className="min-h-screen bg-[#fafaf8] flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full text-center">

        {/* Success animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-brand-green/10 flex items-center justify-center">
              <RiCheckboxCircleFill className="text-brand-green" size={56} />
            </div>
            {/* Rings */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-brand-green"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="font-syne font-bold text-brand-dark text-4xl mb-4">
            {isPayment ? 'Payment Successful! 🎉' : "You're Booked! 🙌"}
          </h1>

          {isPayment ? (
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Welcome to the <span className="font-semibold text-brand-green">{pkg || 'Growth'} Package</span>! Check your inbox for your onboarding details and next steps. We'll be in touch within 24 hours.
            </p>
          ) : (
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Your free strategy call request has been received. We'll review your details and send you a confirmation email within 24 hours to finalize your slot.
            </p>
          )}

          {/* Info cards */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 text-left">
              <RiMailLine className="text-brand-green mb-3" size={22} />
              <p className="font-syne font-semibold text-brand-dark text-sm mb-1">Check Your Email</p>
              <p className="text-gray-500 text-xs">Confirmation sent to your inbox with all details.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 text-left">
              <RiCalendarLine className="text-brand-green mb-3" size={22} />
              <p className="font-syne font-semibold text-brand-dark text-sm mb-1">
                {isPayment ? 'Onboarding Call' : 'Strategy Call'}
              </p>
              <p className="text-gray-500 text-xs">
                {isPayment ? "We'll schedule your kick-off session." : 'We confirm your slot within 24 hours.'}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="btn-shine flex items-center justify-center gap-2 bg-brand-green text-white px-7 py-3.5 rounded-full font-syne font-bold text-sm hover:bg-[#0d9e6e] transition-colors"
            >
              Back to Home
              <RiArrowRightLine size={16} />
            </Link>
            <Link
              to="/portfolio"
              className="flex items-center justify-center gap-2 border border-gray-200 text-brand-dark px-7 py-3.5 rounded-full font-syne font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}