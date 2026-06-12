'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'NeuraFlow',
    subtitle: 'AI-Powered Task Manager',
    description:
      'A next-gen productivity app powered by GPT-4 that learns your work patterns and auto-prioritizes tasks. Features real-time collaboration, smart scheduling, and deep analytics.',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL', 'Prisma'],
    color: '#7c3aed',
    accent: '#a78bfa',
    year: '2024',
    status: 'Live',
    metrics: ['2K+ users', '99.9% uptime', '< 200ms load'],
    gradient: 'from-violet-900/40 to-violet-600/10',
    featured: true,
  },
  {
    id: 2,
    title: 'Prism UI',
    subtitle: 'Design System Library',
    description:
      'A premium React component library with 80+ components, dark/light themes, and accessibility-first design. Used by 500+ developers.',
    tags: ['React', 'Storybook', 'Radix UI', 'Tailwind', 'TypeScript'],
    color: '#06b6d4',
    accent: '#67e8f9',
    year: '2024',
    status: 'Open Source',
    metrics: ['500+ devs', '80+ components', '4.9★ rating'],
    gradient: 'from-cyan-900/40 to-cyan-600/10',
    featured: true,
  },
  {
    id: 3,
    title: 'TradeVault',
    subtitle: 'Crypto Portfolio Tracker',
    description:
      'Real-time crypto portfolio management with DeFi analytics, tax optimization, and multi-wallet support. Integrates with 50+ exchanges.',
    tags: ['React', 'Node.js', 'WebSockets', 'MongoDB', 'Chart.js'],
    color: '#f59e0b',
    accent: '#fcd34d',
    year: '2023',
    status: 'Live',
    metrics: ['$2M+ tracked', '50+ exchanges', '1K+ wallets'],
    gradient: 'from-amber-900/40 to-amber-600/10',
    featured: false,
  },
  {
    id: 4,
    title: 'DevSync',
    subtitle: 'Developer Collaboration Hub',
    description:
      'Real-time code collaboration platform with AI-assisted code review, automated PR workflows, and team analytics.',
    tags: ['Next.js', 'Socket.io', 'Docker', 'Redis', 'GitHub API'],
    color: '#10b981',
    accent: '#6ee7b7',
    year: '2023',
    status: 'Beta',
    metrics: ['100+ teams', '10K+ PRs', '40% faster reviews'],
    gradient: 'from-emerald-900/40 to-emerald-600/10',
    featured: false,
  },
  {
    id: 5,
    title: 'Void CMS',
    subtitle: 'Headless Content Platform',
    description:
      'A blazing-fast headless CMS with a visual builder, multi-language support, and CDN integration. Deploy content anywhere.',
    tags: ['Rust', 'React', 'GraphQL', 'PostgreSQL', 'Cloudflare'],
    color: '#ec4899',
    accent: '#f9a8d4',
    year: '2024',
    status: 'Live',
    metrics: ['10K+ pages', '< 50ms API', '99.99% uptime'],
    gradient: 'from-pink-900/40 to-pink-600/10',
    featured: false,
  },
  {
    id: 6,
    title: 'LensAI',
    subtitle: 'Visual Search Engine',
    description:
      'AI-powered image search and classification engine. Upload any image and find similar products, scenes, or faces instantly.',
    tags: ['Python', 'FastAPI', 'PyTorch', 'React', 'AWS S3'],
    color: '#8b5cf6',
    accent: '#c4b5fd',
    year: '2024',
    status: 'Live',
    metrics: ['1M+ searches', '95% accuracy', '< 1s response'],
    gradient: 'from-purple-900/40 to-purple-600/10',
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative glass rounded-2xl overflow-hidden border border-white/5 card-noise"
    >
      {/* Hover gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Glow border on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${project.color}40` }}
      />

      <div className="relative p-8">
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-xs font-mono tracking-wider px-3 py-1 rounded-full border"
                style={{ color: project.accent, borderColor: `${project.color}30`, background: `${project.color}15` }}
              >
                {project.status}
              </span>
              <span className="text-white/30 text-xs font-mono">{project.year}</span>
            </div>
            <h3 className="text-2xl font-black text-white group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-white/40 text-sm mt-1">{project.subtitle}</p>
          </div>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/40 group-hover:border-white/20 group-hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Metrics */}
        <div className="flex gap-4 mb-6">
          {project.metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-sm font-bold" style={{ color: project.accent }}>{metric}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md text-white/50 transition-colors duration-200 group-hover:text-white/70"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />
    </motion.div>
  )
}

function FeaturedProject({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative glass rounded-3xl overflow-hidden border border-white/5 card-noise`}
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`}
        animate={{ opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative p-10 lg:p-14">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ color: project.accent, background: `${project.color}20`, border: `1px solid ${project.color}40` }}
              >
                ✦ Featured Project
              </span>
              <span
                className="text-xs font-mono px-3 py-1 rounded-full border"
                style={{ color: project.accent, borderColor: `${project.color}30` }}
              >
                {project.status}
              </span>
            </div>

            <h3 className="text-4xl lg:text-5xl font-black text-white mb-2">{project.title}</h3>
            <p className="text-lg font-medium mb-4" style={{ color: project.accent }}>{project.subtitle}</p>
            <p className="text-white/60 leading-relaxed mb-8 max-w-2xl">{project.description}</p>

            <div className="flex flex-wrap gap-6 mb-8">
              {project.metrics.map((metric, i) => (
                <div key={i}>
                  <div className="text-2xl font-black" style={{ color: project.accent }}>{metric.split(' ')[0]}</div>
                  <div className="text-white/40 text-xs">{metric.split(' ').slice(1).join(' ')}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1.5 rounded-lg text-white/60"
                  style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: `linear-gradient(135deg, ${project.color}, ${project.accent}50)` }}
              >
                View Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold glass border border-white/10 text-white/70 hover:text-white hover:border-white/25 transition-all"
              >
                GitHub
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Visual preview placeholder */}
          <div className="lg:w-80 h-60 lg:h-auto rounded-2xl overflow-hidden relative">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                border: `1px solid ${project.color}20`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-60">{'⬡'}</div>
                <div className="text-white/30 text-sm">{project.title}</div>
              </div>
            </div>
            {/* Animated dots */}
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: project.accent,
                  left: `${20 + (i % 3) * 30}%`,
                  top: `${20 + Math.floor(i / 3) * 30}%`,
                  opacity: 0.3,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background orb */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.8) 0%, transparent 70%)', filter: 'blur(100px)' }}
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
            <span className="text-amber-400/60 font-mono text-sm tracking-[0.3em]">03.</span>
            <span className="h-px flex-1 max-w-20 bg-gradient-to-r from-amber-500/50 to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg text-lg">
            Products I&apos;ve built from idea to launch
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-6 mb-16">
          {featured.map(project => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>

        {/* Other projects grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/40 text-sm font-mono tracking-wider uppercase mb-8"
        >
          — Other Projects
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
