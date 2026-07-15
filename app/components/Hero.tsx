'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const roles = [
  'Software Developer',
  'Full-Stack Engineer',
  'UI/UX Enthusiast',
  'Digital Creator',
  'Open Source Contributor',
]

const orbitBadges = [
  { label: 'React', color: '#61dafb', angle: 0 },
  { label: 'Next.js', color: '#e2e8f0', angle: 72 },
  { label: 'TypeScript', color: '#60a5fa', angle: 144 },
  { label: 'Node.js', color: '#86efac', angle: 216 },
  { label: 'Python', color: '#fde68a', angle: 288 },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 120])
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
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb-1 absolute w-[800px] h-[800px] rounded-full opacity-[0.12]"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.9) 0%, transparent 65%)',
            top: '-25%', left: '-20%', filter: 'blur(90px)',
          }}
        />
        <div
          className="orb-2 absolute w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.9) 0%, transparent 65%)',
            bottom: '-15%', right: '-15%', filter: 'blur(90px)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center">

          {/* LEFT — Text */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-white/10 text-white/55 text-xs font-medium mb-10 tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
              <span className="text-violet-400/70 ml-1">→</span>
            </motion.div>

            {/* Name heading */}
            <div className="overflow-hidden mb-1">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="text-white/35 text-xl font-light tracking-widest uppercase mb-3"
              >
                Hello, I&apos;m
              </motion.p>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="text-[5.5rem] sm:text-[7rem] lg:text-[8rem] xl:text-[9rem] font-black tracking-tighter leading-none"
              >
                <span className="gradient-text-2">Punit</span>
              </motion.h1>
            </div>

            {/* Role cycling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-px bg-gradient-to-r from-violet-500/80 to-transparent shrink-0" />
              <div className="relative h-7 overflow-hidden min-w-[240px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 32, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -32, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-0 flex items-center text-lg font-semibold gradient-text"
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
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/45 text-base max-w-lg mb-10 leading-[1.8]"
            >
              Crafting immersive digital experiences at the intersection of design and
              engineering. I build products that feel as good as they look.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-3.5 rounded-full font-semibold text-white overflow-hidden text-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)' }} />
                <span className="relative flex items-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>

              <motion.button
                onClick={scrollToAbout}
                className="group px-8 py-3.5 rounded-full font-semibold text-white/65 glass border border-white/10 hover:border-violet-500/45 hover:text-white transition-all duration-300 text-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="flex items-center gap-2">
                  About Me
                  <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-10"
            >
              {[
                { value: '3+', label: 'Years Exp.' },
                { value: '20+', label: 'Projects' },
                { value: '10+', label: 'Clients' },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl sm:text-4xl font-black gradient-text leading-none mb-1">{stat.value}</div>
                  <div className="text-white/35 text-[10px] font-semibold tracking-[0.2em] uppercase">{stat.label}</div>
                </div>
              ))}
              <div className="h-8 w-px bg-white/10 mx-2" />
              <div className="flex -space-x-2">
                {['#7c3aed', '#06b6d4', '#f59e0b'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background glass" style={{ background: `${c}30`, borderColor: `${c}60` }} />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-background glass flex items-center justify-center text-[9px] font-bold text-white/50"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  +7
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Orbital visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[380px] h-[380px] xl:w-[440px] xl:h-[440px]">
              {/* Outer dashed ring — slow CW */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{ border: '1px dashed rgba(124,58,237,0.25)' }}
              />

              {/* Mid dashed ring — CCW */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[40px] rounded-full"
                style={{ border: '1px dashed rgba(6,182,212,0.2)' }}
              />

              {/* Solid glow ring */}
              <div
                className="absolute inset-[80px] rounded-full"
                style={{
                  border: '1px solid rgba(124,58,237,0.45)',
                  boxShadow: '0 0 50px rgba(124,58,237,0.2), inset 0 0 50px rgba(124,58,237,0.08)',
                }}
              />

              {/* Center avatar circle */}
              <motion.div
                animate={{ boxShadow: ['0 0 40px rgba(124,58,237,0.3)', '0 0 80px rgba(124,58,237,0.5)', '0 0 40px rgba(124,58,237,0.3)'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[110px] rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.35) 0%, rgba(6,182,212,0.2) 100%)',
                  border: '1.5px solid rgba(124,58,237,0.6)',
                }}
              >
                <span className="text-5xl xl:text-6xl font-black gradient-text select-none">P</span>
              </motion.div>

              {/* Orbiting tech badges */}
              {orbitBadges.map((badge, i) => {
                const rad = (badge.angle * Math.PI) / 180
                const r = 190
                const cx = 190
                const cy = 190
                const bw = 72
                const bh = 26
                const lx = cx + Math.cos(rad) * r - bw / 2
                const ly = cy + Math.sin(rad) * r - bh / 2
                return (
                  <motion.div
                    key={badge.label}
                    className="absolute px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md border"
                    style={{
                      left: lx,
                      top: ly,
                      width: bw,
                      textAlign: 'center',
                      borderColor: `${badge.color}35`,
                      color: badge.color,
                      background: `${badge.color}12`,
                    }}
                    animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{
                      duration: 2.8 + i * 0.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.4,
                    }}
                  >
                    {badge.label}
                  </motion.div>
                )
              })}

              {/* Decorative corner dots */}
              {[45, 135, 225, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180
                const r = 138
                const cx = 190
                const cy = 190
                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      left: cx + Math.cos(rad) * r - 4,
                      top: cy + Math.sin(rad) * r - 4,
                      background: i % 2 === 0 ? 'rgba(124,58,237,0.8)' : 'rgba(6,182,212,0.8)',
                      boxShadow: i % 2 === 0 ? '0 0 8px rgba(124,58,237,0.9)' : '0 0 8px rgba(6,182,212,0.9)',
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                )
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 hover:text-white/55 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-violet-500/70 to-transparent"
        />
      </motion.button>
    </section>
  )
}
