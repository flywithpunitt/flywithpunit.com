'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold"
          >
            <span className="gradient-text">P</span>
            <span className="text-white/50">unit</span>
          </motion.div>

          {/* Center text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/30 text-sm text-center"
          >
            Built with{' '}
            <span className="text-violet-400">Next.js</span>,{' '}
            <span className="text-cyan-400">Framer Motion</span> &{' '}
            <span className="text-amber-400">passion</span>
            {' '}· &copy; {new Date().getFullYear()} Punit
          </motion.p>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-white/30 hover:text-white/70 transition-colors text-sm group"
          >
            Back to top
            <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
