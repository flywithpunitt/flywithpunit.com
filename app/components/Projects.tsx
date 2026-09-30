'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    num: '01',
    title: 'Matt & Richi',
    category: 'Real Estate / Web Design',
    url: 'https://mattandrichi.au',
    desc: 'A modern digital presence built for a real-estate business, focused on their brand, properties, and visual storytelling.',
  },
  {
    num: '02',
    title: 'Advisens',
    category: 'FinTech / Platform',
    url: 'https://www.advisens.com',
    desc: 'A platform built around helping users prepare for and navigate financial advice.',
  },
  {
    num: '03',
    title: 'H2O-K',
    category: 'E-commerce / Shopify',
    url: 'https://shoph2ok.com',
    desc: 'An e-commerce experience for a skincare brand, from product discovery through the shopping experience.',
  },
  {
    num: '04',
    title: 'Velvére',
    category: 'Fashion / E-commerce',
    url: 'https://velvereofficial.com',
    desc: 'An e-commerce website for an activewear brand, built around its visual identity, collections, and shopping experience.',
  },
  {
    num: '05',
    title: 'Host Company',
    category: 'E-commerce / Retail',
    url: 'https://hostcompany.shop/',
    desc: 'An e-commerce experience for a premium tableware brand, built around its products and visual identity.',
  },
  {
    num: '06',
    title: 'Car Marketplace',
    category: 'Marketplace / Web App',
    url: 'https://car-market-place-gamma.vercel.app/',
    desc: 'A car marketplace experience focused on browsing and discovering vehicles.',
  },
]

export default function Projects() {
  const [active, setActive] = useState<string | null>('01')

  return (
    <section id="projects" className="bg-paper text-ink py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between gap-4 mb-8 sm:mb-12">
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase">03 / Work</span>
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-dust">Selected</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16">
          <h2 className="lg:col-span-7 font-headline font-extrabold text-[clamp(2.4rem,8vw,5rem)] tracking-tight leading-[0.92]">
            Some things I&apos;ve built.
          </h2>
          <p className="lg:col-span-5 text-ink/55 text-sm sm:text-base leading-relaxed max-w-md lg:pb-2">
            A mix of client work, products, and experiments — some public, some kept behind closed doors.
          </p>
        </div>

        <div className="border-t border-ink/15">
          {projects.map((project, i) => {
            const open = active === project.num
            return (
              <motion.div
                key={project.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`border-b border-ink/15 transition-colors duration-300 ${
                  open ? 'bg-lime' : 'hover:bg-ink/[0.03]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(open ? null : project.num)}
                  className="w-full text-left py-5 sm:py-7 px-1 sm:px-2"
                  aria-expanded={open}
                >
                  <div className="flex items-start sm:items-end gap-3 sm:gap-6">
                    <span className="font-mono text-[11px] sm:text-xs w-7 sm:w-8 pt-2 sm:pt-0 text-ink/40 shrink-0">
                      {project.num}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                        <span className="font-headline font-extrabold text-[clamp(1.55rem,5vw,3rem)] tracking-tight leading-none">
                          {project.title}
                        </span>
                        <span className="text-xs sm:text-sm text-ink/55 pb-0.5 sm:pb-1">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`mt-1 sm:mt-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        open
                          ? 'border-ink/25 bg-ink text-lime rotate-45'
                          : 'border-ink/15 text-ink/50'
                      }`}
                      aria-hidden
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pb-8 pl-10 sm:pl-14 pr-2 sm:pr-4 max-w-2xl">
                        <p className="text-ink/75 text-sm sm:text-base leading-relaxed mb-5">
                          {project.desc}
                        </p>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-4 py-2.5 text-sm font-medium hover:bg-ink/85 transition-colors"
                          onClick={e => e.stopPropagation()}
                        >
                          Visit site
                          <span aria-hidden>→</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
