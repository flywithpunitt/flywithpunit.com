'use client'

import { motion, type Variants } from 'framer-motion'

const tiles: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const tile: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const stats = [
  { value: '3+', label: 'Years building' },
  { value: '45+', label: 'Shipped projects' },
  { value: '37+', label: 'Happy clients' },
]

export default function Hero() {
  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-void text-paper px-4 sm:px-6 pt-24 sm:pt-28 pb-6 sm:pb-8">
      <motion.div
        variants={tiles}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-6 lg:grid-cols-12 gap-3"
      >
        {/* Main headline */}
        <motion.div
          variants={tile}
          className="col-span-6 lg:col-span-8 min-w-0 overflow-hidden rounded-[22px] sm:rounded-[28px] bg-paper text-ink p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8 sm:gap-10 min-h-[280px] sm:min-h-[380px]"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-dust">
              Software developer · Digital creator
            </span>
          </div>

          <div>
            <h1 className="font-headline font-extrabold leading-[0.92] tracking-[-0.04em] text-[clamp(1.7rem,7.8vw,4.35rem)] break-words">
              I BUILD
              <br />
              PRODUCTS
              <br />
              PEOPLE
              <br />
              <span className="inline bg-lime px-1 sm:px-2 box-decoration-clone">REMEMBER</span>
            </h1>
            <p className="mt-5 sm:mt-6 max-w-md text-sm sm:text-base text-ink/65 leading-relaxed">
              From concept to clickable product. I handle the design, code, and polish
              so you can focus on building momentum.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <button
                onClick={() => jump('projects')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-paper px-5 py-3 text-sm font-medium hover:bg-ink/90 transition-colors"
              >
                See my work
                <span aria-hidden>→</span>
              </button>
              <button
                onClick={() => jump('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 text-ink px-5 py-3 text-sm font-medium hover:border-ink/40 transition-colors"
              >
                Book a chat
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right column — personality tiles */}
        <div className="col-span-6 lg:col-span-4 min-w-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          <motion.div
            variants={tile}
            className="rounded-[22px] sm:rounded-[28px] bg-[#161616] border border-white/8 p-5 sm:p-6 flex flex-col justify-between gap-6 min-h-[150px]"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="live-dot w-2 h-2 rounded-full bg-lime" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-lime">Available</span>
              </div>
              <span className="font-mono text-[10px] tracking-wider uppercase text-paper/35">&lt; 24h reply</span>
            </div>
            <div>
              <p className="font-headline font-bold text-xl sm:text-2xl leading-tight text-paper">
                Open for roles &amp; select freelance work.
              </p>
              <p className="mt-2 text-sm text-paper/55 leading-relaxed">
                Full-time or a sharp build. If the idea&apos;s real, I&apos;m in.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={tile}
            className="rounded-[22px] sm:rounded-[28px] bg-[#161616] border border-white/8 p-5 sm:p-6 flex flex-col justify-between gap-5 min-h-[150px]"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/40">How I work</span>
            <div className="flex flex-wrap gap-2">
              {['Ship fast', 'Design taste', 'Clean code', 'Founder energy'].map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-paper/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-paper/55 leading-relaxed">
              Obsessed with products that feel obvious once you use them.
            </p>
          </motion.div>

          <motion.button
            variants={tile}
            onClick={() => jump('projects')}
            className="sm:col-span-2 lg:col-span-1 rounded-[22px] sm:rounded-[28px] bg-lime text-ink p-5 sm:p-6 text-left flex flex-col justify-between gap-6 min-h-[150px] group"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase">Featured</span>
              <span className="w-9 h-9 rounded-full bg-ink/10 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>
            <div>
              <div className="font-headline font-extrabold text-2xl sm:text-3xl leading-none mb-1">NeuraFlow</div>
              <div className="text-sm text-ink/70">AI task manager that learns your week</div>
            </div>
          </motion.button>
        </div>

        {/* Stats + CTA */}
        {stats.map(stat => (
          <motion.div
            key={stat.label}
            variants={tile}
            className="col-span-2 lg:col-span-3 rounded-[22px] sm:rounded-[28px] bg-[#161616] border border-white/8 p-4 sm:p-6"
          >
            <div className="font-headline font-extrabold text-3xl sm:text-5xl leading-none">{stat.value}</div>
            <div className="mt-2 font-mono text-[9px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-paper/45 leading-snug">
              {stat.label}
            </div>
          </motion.div>
        ))}

        <motion.button
          variants={tile}
          onClick={() => jump('contact')}
          className="col-span-6 lg:col-span-3 rounded-[22px] sm:rounded-[28px] bg-paper text-ink p-5 sm:p-6 flex items-end justify-between group min-h-[100px] sm:min-h-[120px]"
        >
          <span className="font-headline font-extrabold text-xl sm:text-2xl leading-none text-left">
            Let&apos;s
            <br />
            talk
          </span>
          <span className="w-11 h-11 rounded-full bg-ink text-lime flex items-center justify-center group-hover:rotate-45 transition-transform shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </span>
        </motion.button>
      </motion.div>

      <div className="max-w-7xl mx-auto mt-3 overflow-hidden rounded-[22px] sm:rounded-[28px] bg-[#161616] border border-white/8">
        <div className="flex marquee-track w-max">
          {[0, 1].map(copy => (
            <div key={copy} className="flex items-center py-3.5 sm:py-4">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Figma', 'AWS', 'Framer Motion', 'Docker'].map(item => (
                <span key={`${copy}-${item}`} className="flex items-center">
                  <span className="px-5 sm:px-6 font-headline font-bold text-lg sm:text-xl text-paper/80">{item}</span>
                  <span className="text-lime">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
