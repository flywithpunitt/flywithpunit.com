'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    num: '01',
    title: 'NeuraFlow',
    subtitle: 'AI-powered task manager',
    year: '2024',
    status: 'Live',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL'],
    desc: 'GPT-4 learns how you work, then ranks the day for you. Real-time collab, smart scheduling, deep analytics.',
    metrics: ['2K+ users', '99.9% uptime', '<200ms'],
  },
  {
    num: '02',
    title: 'Prism UI',
    subtitle: 'Design system library',
    year: '2024',
    status: 'Open Source',
    tags: ['React', 'Storybook', 'Radix', 'Tailwind'],
    desc: '80+ accessible components, light and dark, used by 500+ developers who were tired of rebuilding buttons.',
    metrics: ['500+ devs', '80+ components', '4.9★'],
  },
  {
    num: '03',
    title: 'TradeVault',
    subtitle: 'Crypto portfolio tracker',
    year: '2023',
    status: 'Live',
    tags: ['React', 'Node.js', 'WebSockets', 'MongoDB'],
    desc: 'Live portfolios, DeFi analytics, tax-aware views, 50+ exchanges in one place.',
    metrics: ['$2M+ tracked', '50+ exchanges', '1K+ wallets'],
  },
  {
    num: '04',
    title: 'DevSync',
    subtitle: 'Developer collaboration hub',
    year: '2023',
    status: 'Beta',
    tags: ['Next.js', 'Socket.io', 'Docker', 'Redis'],
    desc: 'AI-assisted reviews, automated PR flow, and team analytics that actually get read.',
    metrics: ['100+ teams', '10K+ PRs', '40% faster'],
  },
  {
    num: '05',
    title: 'Void CMS',
    subtitle: 'Headless content platform',
    year: '2024',
    status: 'Live',
    tags: ['Rust', 'React', 'GraphQL', 'PostgreSQL'],
    desc: 'Visual builder, many languages, CDN baked in. Content that lands anywhere, fast.',
    metrics: ['10K+ pages', '<50ms API', '99.99%'],
  },
  {
    num: '06',
    title: 'LensAI',
    subtitle: 'Visual search engine',
    year: '2024',
    status: 'Live',
    tags: ['Python', 'FastAPI', 'PyTorch', 'React'],
    desc: 'Drop an image. Find the product, the place, or the face. Instantly.',
    metrics: ['1M+ searches', '95% accuracy', '<1s'],
  },
]

export default function Projects() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="projects" className="bg-paper text-ink py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <span className="font-mono text-xs tracking-[0.28em] uppercase">03 / Work</span>
          <span className="font-mono text-xs tracking-[0.28em] uppercase text-dust">Selected</span>
        </div>

        <h2 className="font-headline font-extrabold text-5xl sm:text-7xl tracking-tight leading-[0.92] mb-16 max-w-4xl">
          Things I made that left the building.
        </h2>

        <div className="border-t border-ink/15">
          {projects.map((project, i) => {
            const open = active === project.num
            return (
              <motion.button
                key={project.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActive(open ? null : project.num)}
                className={`w-full text-left border-b border-ink/15 py-6 sm:py-8 transition-colors ${
                  open ? 'bg-lime px-4 sm:px-6 -mx-0' : 'hover:bg-ink/[0.03]'
                }`}
              >
                <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
                  <span className="font-mono text-xs w-8 text-ink/40">{project.num}</span>
                  <span className="font-headline font-extrabold text-3xl sm:text-5xl tracking-tight flex-1 min-w-[200px]">
                    {project.title}
                  </span>
                  <span className="text-sm text-ink/55 hidden sm:block">{project.subtitle}</span>
                  <span className="font-mono text-xs uppercase tracking-widest">{project.year}</span>
                </div>
                {open && (
                  <div className="mt-6 pl-0 sm:pl-14 max-w-3xl">
                    <p className="text-ink/75 leading-relaxed mb-5">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map(tag => (
                        <span key={tag} className="font-mono text-[11px] uppercase tracking-wider border border-ink/20 px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-6 font-headline font-bold">
                      {project.metrics.map(m => (
                        <span key={m}>{m}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
