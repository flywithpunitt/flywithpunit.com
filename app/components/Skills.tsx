'use client'

import { motion } from 'framer-motion'

const groups = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vue'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST'],
  },
  {
    name: 'Ops',
    items: ['Docker', 'Git', 'AWS', 'Vercel', 'Linux', 'CI/CD'],
  },
]

const ticker = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'Docker', 'AWS', 'Figma', 'Git', 'Linux', 'GraphQL', 'Prisma',
]

export default function Skills() {
  return (
    <section id="skills" className="bg-void text-paper py-24 sm:py-32 overflow-hidden">
      <div className="px-5 sm:px-8 max-w-7xl mx-auto mb-16 flex items-baseline justify-between">
        <span className="font-mono text-xs tracking-[0.28em] uppercase text-lime">02 / Skills</span>
        <span className="font-mono text-xs tracking-[0.28em] uppercase text-paper/35">The toolkit</span>
      </div>

      <div className="border-y border-white/10 mb-16 overflow-hidden">
        <div className="flex marquee-track w-max">
          {[0, 1].map(copy => (
            <div key={copy} className="flex items-center py-6">
              {ticker.map(item => (
                <span key={`${copy}-${item}`} className="flex items-center">
                  <span className="px-7 font-headline font-extrabold text-4xl sm:text-6xl text-paper">{item}</span>
                  <span className="text-lime text-3xl">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 sm:px-8 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {groups.map((group, i) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <div className="font-mono text-xs tracking-[0.22em] uppercase text-lime mb-6">{group.name}</div>
            <ul className="space-y-3">
              {group.items.map(item => (
                <li key={item} className="font-headline font-bold text-2xl border-b border-white/8 pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <p className="px-5 sm:px-8 max-w-7xl mx-auto mt-16 text-paper/45 text-sm max-w-xl">
        Right now: AI/ML in product surfaces, WebAssembly, and system design that doesn&apos;t fall over.
      </p>
    </section>
  )
}
