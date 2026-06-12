'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    company: 'TechNova Labs',
    role: 'Senior Software Engineer',
    period: 'Jan 2024 – Present',
    type: 'Full-time',
    description:
      'Leading frontend architecture for a SaaS platform serving 100K+ users. Reduced bundle size by 40% and improved Core Web Vitals scores to top 10% across the industry.',
    highlights: [
      'Architected a micro-frontend system with Next.js and Module Federation',
      'Mentored team of 5 junior engineers',
      'Implemented real-time features using WebSockets and Redis',
      'Reduced API response times by 60% through strategic caching',
    ],
    color: '#7c3aed',
    accent: '#a78bfa',
    logo: 'TN',
  },
  {
    company: 'PixelForge Studio',
    role: 'Full Stack Developer',
    period: 'Mar 2023 – Dec 2023',
    type: 'Full-time',
    description:
      'Built end-to-end features for a creative tools platform used by 50K+ designers. Shipped 12 major features and maintained 99.9% uptime.',
    highlights: [
      'Built real-time collaborative canvas with operational transforms',
      'Integrated Stripe payments processing $500K+ monthly',
      'Designed and implemented RESTful + GraphQL APIs',
      'Reduced infrastructure costs by 35% through AWS optimization',
    ],
    color: '#06b6d4',
    accent: '#67e8f9',
    logo: 'PF',
  },
  {
    company: 'FreelanceDev',
    role: 'Independent Consultant',
    period: 'Aug 2022 – Feb 2023',
    type: 'Freelance',
    description:
      'Delivered 8 client projects across e-commerce, fintech, and SaaS domains. Built long-term client relationships with 100% satisfaction rate.',
    highlights: [
      'Built 3 e-commerce platforms with custom checkout flows',
      'Developed a fintech dashboard with real-time market data',
      'Created automated reporting systems saving clients 20hrs/week',
      'Consulted on tech stack decisions for 2 startups',
    ],
    color: '#f59e0b',
    accent: '#fcd34d',
    logo: 'FL',
  },
  {
    company: 'CodeCraft Academy',
    role: 'Junior Developer & Teaching Assistant',
    period: 'Jun 2021 – Jul 2022',
    type: 'Part-time',
    description:
      'Started career building internal tools while teaching web development to 200+ students. Discovered passion for mentoring alongside engineering.',
    highlights: [
      'Built internal LMS platform used by 1,200+ students',
      'Taught JavaScript fundamentals to beginner cohorts',
      'Created 50+ coding exercises and project templates',
      'Contributed to open source curriculum materials',
    ],
    color: '#10b981',
    accent: '#6ee7b7',
    logo: 'CC',
  },
]

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: index * 0.1 }}
      className="relative flex gap-6 lg:gap-10"
    >
      {/* Left column: timeline */}
      <div className="flex flex-col items-center w-16 shrink-0">
        {/* Company logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-black z-10 shrink-0"
          style={{
            background: `linear-gradient(135deg, ${exp.color}30, ${exp.color}10)`,
            border: `1px solid ${exp.color}40`,
            color: exp.accent,
            boxShadow: `0 0 20px ${exp.color}20`,
          }}
        >
          {exp.logo}
        </motion.div>
        {/* Vertical line */}
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
            className="w-px flex-1 mt-3 origin-top"
            style={{ background: `linear-gradient(to bottom, ${exp.color}40, transparent)` }}
          />
        )}
      </div>

      {/* Right column: content */}
      <div className={`pb-12 flex-1 ${index < experiences.length - 1 ? '' : ''}`}>
        <div className="glass rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 group card-noise">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl font-black text-white group-hover:text-white">{exp.role}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-semibold" style={{ color: exp.accent }}>{exp.company}</span>
                <span className="text-white/20">·</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ color: exp.accent, background: `${exp.color}15`, border: `1px solid ${exp.color}25` }}
                >
                  {exp.type}
                </span>
              </div>
            </div>
            <span className="text-white/40 text-sm font-mono shrink-0">{exp.period}</span>
          </div>

          <p className="text-white/50 text-sm leading-relaxed mb-6">{exp.description}</p>

          {/* Highlights */}
          <div className="space-y-2">
            {exp.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                className="flex items-start gap-3 text-sm text-white/50 group-hover:text-white/60 transition-colors"
              >
                <span className="mt-0.5 shrink-0 w-1 h-1 rounded-full mt-2" style={{ background: exp.color }} />
                {highlight}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-1/4 bottom-0 w-96 h-96 rounded-full pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.6) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-emerald-400/60 font-mono text-sm tracking-[0.3em]">04.</span>
            <span className="h-px flex-1 max-w-20 bg-gradient-to-r from-emerald-500/50 to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight">
            Experience <span className="gradient-text">&</span> Journey
          </h2>
          <p className="text-white/40 mt-4 max-w-lg text-lg">
            Where I&apos;ve worked and what I&apos;ve built
          </p>
        </motion.div>

        <div className="max-w-4xl">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
