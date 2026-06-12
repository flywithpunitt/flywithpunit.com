'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    category: 'Frontend',
    color: '#7c3aed',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 82 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    category: 'Backend',
    color: '#06b6d4',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 85 },
      { name: 'REST / GraphQL', level: 90 },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: '#f59e0b',
    skills: [
      { name: 'Docker', level: 78 },
      { name: 'Git / GitHub', level: 94 },
      { name: 'AWS / Vercel', level: 76 },
      { name: 'Linux', level: 80 },
      { name: 'CI/CD', level: 74 },
    ],
  },
]

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Git', icon: '🌿' },
  { name: 'Linux', icon: '🐧' },
]

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="text-xs font-mono"
          style={{ color }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: index * 0.1 }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.8) 0%, transparent 70%)', filter: 'blur(80px)' }}
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
            <span className="text-cyan-400/60 font-mono text-sm tracking-[0.3em]">02.</span>
            <span className="h-px flex-1 max-w-20 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg text-lg">
            Tools and technologies I wield
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(i)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === i
                  ? 'text-white'
                  : 'glass border border-white/10 text-white/50 hover:text-white hover:border-white/20'
              }`}
              style={activeCategory === i ? {
                background: `linear-gradient(135deg, ${cat.color}40, ${cat.color}20)`,
                border: `1px solid ${cat.color}60`,
                boxShadow: `0 0 20px ${cat.color}30`,
              } : {}}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skill bars */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 border border-white/5 card-noise"
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-2 h-8 rounded-full"
                style={{ background: skillCategories[activeCategory].color }}
              />
              <h3 className="text-white font-bold text-xl">{skillCategories[activeCategory].category}</h3>
            </div>
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skillCategories[activeCategory].color}
                  index={i}
                />
              ))}
            </div>
          </motion.div>

          {/* Tech stack grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/40 text-sm font-mono tracking-wider uppercase mb-6"
            >
              — Full Tech Stack
            </motion.div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05, type: 'spring', stiffness: 150 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="glass rounded-xl p-4 border border-white/5 hover:border-white/15 text-center group cursor-default transition-all duration-300 hover:bg-white/5"
                >
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="text-white/60 text-xs font-medium group-hover:text-white/90 transition-colors">{tech.name}</div>
                </motion.div>
              ))}
            </div>

            {/* Extra info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 glass rounded-xl p-6 border border-violet-500/20 bg-violet-500/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎓</span>
                <span className="text-white font-semibold">Always Learning</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Currently exploring AI/ML integration, WebAssembly, and advanced system design patterns.
                Tech evolves fast — so do I.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
