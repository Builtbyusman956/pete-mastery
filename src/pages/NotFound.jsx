import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiArrowLeftLine, RiHome2Line } from 'react-icons/ri'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafaf8] flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 */}
          <div className="relative mb-8">
            <p
              className="font-syne font-bold text-center select-none"
              style={{
                fontSize: 'clamp(7rem, 20vw, 12rem)',
                lineHeight: 1,
                background: 'linear-gradient(135deg, #0a7e59 0%, #0e3134 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                opacity: 0.15,
              }}
            >
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="font-syne font-bold text-brand-dark text-3xl mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="btn-shine flex items-center justify-center gap-2 bg-brand-green text-white px-7 py-3.5 rounded-full font-syne font-bold text-base hover:bg-[#0d9e6e] transition-colors"
            >
              <RiHome2Line size={18} />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 border border-gray-200 text-brand-dark px-7 py-3.5 rounded-full font-syne font-semibold text-base hover:bg-gray-50 transition-colors"
            >
              <RiArrowLeftLine size={18} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}