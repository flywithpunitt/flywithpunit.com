'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timeline = [
  {
    year: '2021',
    title: 'Started Coding Journey',
    desc: 'Fell in love with programming, building small tools and exploring the world of software.',
    icon: '🌱',
  },
  {
    year: '2022',
    title: 'First Full-Stack Project',
    desc: 'Shipped a production-ready web app serving 500+ users. Learned React, Node.js, and MongoDB.',
    icon: '🚀',
  },
  {
    year: '2023',
    title: 'Freelancing & Growth',
    desc: 'Helped multiple clients build their digital presence. Mastered modern tooling and DevOps.',
    icon: '💼',
  },
  {
    year: '2024',
    title: 'Going Deeper',
    desc: 'Diving into system design, performance optimization, and building developer tools.',
    icon: '⚡',
  },
  {
    year: '2025+',
    title: 'What\'s Next',
    desc: 'Building ambitious products, contributing to open source, and sharing knowledge with the community.',
    icon: '✦',
  },
]

const values = [
  { title: 'Performance', desc: 'Every millisecond matters. I obsess over speed.', icon: '⚡' },
  { title: 'Design', desc: 'Beautiful products that delight users every interaction.', icon: '✦' },
  { title: 'Clean Code', desc: 'Readable, maintainable, and elegant solutions.', icon: '◈' },
  { title: 'Impact', desc: 'Building things that genuinely make a difference.', icon: '🎯' },
]

function TimelineItem({ item, index }: { item: typeof timeline[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: index * 0.1 }}
      className="relative flex gap-6 group"
    >
      {/* Line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
          className="w-10 h-10 rounded-full glass border border-violet-500/40 flex items-center justify-center text-lg z-10 group-hover:border-violet-500 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300"
        >
          {item.icon}
        </motion.div>
        {index < timeline.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
            className="w-px flex-1 mt-2 origin-top"
            style={{ background: 'linear-gradient(to bottom, rgba(124,58,237,0.5), transparent)' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-8 flex-1">
        <div className="text-xs font-mono text-violet-400/80 mb-1 tracking-wider">{item.year}</div>
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-300 transition-colors">{item.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.8) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-violet-400/60 font-mono text-sm tracking-[0.3em]">01.</span>
            <span className="h-px flex-1 max-w-20 bg-gradient-to-r from-violet-500/50 to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg text-lg">
            The story behind the developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-2xl p-8 mb-8 border border-white/5 relative overflow-hidden card-noise"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,1) 0%, transparent 70%)', filter: 'blur(30px)' }}
              />
              <h3 className="text-2xl font-bold text-white mb-4">Hey, I&apos;m Punit 👋</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                I&apos;m a passionate software developer and digital creator who loves turning complex problems
                into elegant solutions. I specialize in building full-stack web applications that combine
                powerful functionality with stunning user experiences.
              </p>
              <p className="text-white/60 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open
                source projects, or designing interfaces that make people go &ldquo;wow&rdquo;. I believe great
                software is an art form.
              </p>
            </motion.div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass rounded-xl p-5 border border-white/5 hover:border-violet-500/30 group transition-all duration-300 hover:bg-violet-500/5"
                >
                  <div className="text-2xl mb-3">{val.icon}</div>
                  <div className="text-white font-semibold text-sm mb-1">{val.title}</div>
                  <div className="text-white/40 text-xs leading-relaxed">{val.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-white/40 text-sm font-mono tracking-wider uppercase mb-8">— Journey</div>
            {timeline.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
