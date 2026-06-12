'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const roles = [
  'Software Developer',
  'Digital Creator',
  'Full-Stack Engineer',
  'UI/UX Enthusiast',
  'Open Source Contributor',
]

const floatingElements = [
  { icon: '⚡', delay: 0, x: '10%', y: '20%' },
  { icon: '🚀', delay: 0.5, x: '85%', y: '15%' },
  { icon: '💎', delay: 1, x: '75%', y: '70%' },
  { icon: '✦', delay: 1.5, x: '15%', y: '75%' },
  { icon: '◈', delay: 2, x: '50%', y: '85%' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb-1 absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.8) 0%, transparent 70%)',
            top: '-10%',
            left: '-10%',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="orb-2 absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.8) 0%, transparent 70%)',
            bottom: '0%',
            right: '-5%',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="orb-3 absolute w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.8) 0%, transparent 70%)',
            top: '40%',
            left: '50%',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating icons */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl pointer-events-none select-none"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.4, 0.2, 0.4],
            scale: [0, 1, 0.95, 1],
            y: [0, -15, 5, -15],
          }}
          transition={{
            delay: el.delay + 1,
            duration: 6,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          {el.icon}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/60 text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new opportunities
          <span className="text-violet-400">→</span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
          >
            <h1 className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter leading-none">
              <span className="gradient-text-2">Punit</span>
            </h1>
          </motion.div>
        </div>

        {/* Subtitle row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <span className="text-white/40 text-lg sm:text-xl font-light">I am a</span>
          <div className="relative h-8 overflow-hidden min-w-[280px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-semibold gradient-text"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting immersive digital experiences at the intersection of design and engineering.
          I build products that feel as good as they look.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600" />
            <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.button>

          <motion.button
            onClick={scrollToAbout}
            className="group px-8 py-4 rounded-full font-semibold text-white/80 glass border border-white/10 hover:border-violet-500/40 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              About Me
              <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-8 sm:gap-16 mt-16"
        >
          {[
            { value: '3+', label: 'Years Exp.' },
            { value: '20+', label: 'Projects' },
            { value: '10+', label: 'Clients' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-black gradient-text">{stat.value}</div>
              <div className="text-white/40 text-xs sm:text-sm mt-1 font-medium tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs font-medium tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-violet-500/60 to-transparent"
        />
      </motion.button>
    </section>
  )
}
