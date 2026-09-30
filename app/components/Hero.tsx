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

export default function Hero() {
  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-void text-paper px-4 sm:px-6 pt-24 pb-6">
      <motion.div
        variants={tiles}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 gap-3 auto-rows-auto"
      >
        <motion.div
          variants={tile}
          className="col-span-12 lg:col-span-8 min-w-0 overflow-hidden min-h-[340px] sm:min-h-[420px] rounded-[28px] bg-paper text-ink p-7 sm:p-10 flex flex-col justify-between"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-dust">
            Software developer · Digital creator
          </p>
          <h1 className="font-headline font-extrabold leading-[0.86] tracking-tight text-[clamp(2.4rem,5.4vw,4.35rem)]">
            I BUILD
            <br />
            PRODUCTS
            <br />
            PEOPLE
            <br />
            <span className="inline-block bg-lime px-2 max-w-full">REMEMBER.</span>
          </h1>
        </motion.div>

        <div className="col-span-12 lg:col-span-4 min-w-0 relative z-10 grid grid-cols-2 lg:grid-cols-1 gap-3">
          <motion.div
            variants={tile}
            className="rounded-[28px] bg-[#161616] border border-white/8 p-6 flex flex-col justify-between min-h-[160px]"
          >
            <div className="flex items-center gap-2">
              <span className="live-dot w-2 h-2 rounded-full bg-lime" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-lime">Available</span>
            </div>
            <p className="text-sm text-paper/70 leading-relaxed">
              Open for full-time roles and a few freelance builds. Reply in under 24 hours.
            </p>
          </motion.div>

          <motion.button
            variants={tile}
            onClick={() => jump('projects')}
            className="rounded-[28px] bg-lime text-ink p-6 text-left flex flex-col justify-between min-h-[160px] group"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase">Selected work</span>
            <div>
              <div className="font-headline font-extrabold text-3xl leading-none mb-1">NeuraFlow</div>
              <div className="text-sm text-ink/70">AI task manager →</div>
            </div>
          </motion.button>
        </div>

        <motion.div
          variants={tile}
          className="col-span-6 sm:col-span-4 lg:col-span-3 rounded-[28px] bg-[#161616] border border-white/8 p-6"
        >
          <div className="font-headline font-extrabold text-5xl leading-none">3+</div>
          <div className="mt-2 font-mono text-[11px] tracking-[0.18em] uppercase text-paper/45">Years building</div>
        </motion.div>

        <motion.div
          variants={tile}
          className="col-span-6 sm:col-span-4 lg:col-span-3 rounded-[28px] bg-[#161616] border border-white/8 p-6"
        >
          <div className="font-headline font-extrabold text-5xl leading-none">20+</div>
          <div className="mt-2 font-mono text-[11px] tracking-[0.18em] uppercase text-paper/45">Shipped projects</div>
        </motion.div>

        <motion.div
          variants={tile}
          className="col-span-12 sm:col-span-4 lg:col-span-3 rounded-[28px] bg-[#161616] border border-white/8 p-6"
        >
          <div className="font-headline font-extrabold text-5xl leading-none">10+</div>
          <div className="mt-2 font-mono text-[11px] tracking-[0.18em] uppercase text-paper/45">Happy clients</div>
        </motion.div>

        <motion.button
          variants={tile}
          onClick={() => jump('contact')}
          className="col-span-12 lg:col-span-3 rounded-[28px] bg-paper text-ink p-6 flex items-end justify-between group min-h-[120px]"
        >
          <span className="font-headline font-extrabold text-2xl leading-none">
            Let&apos;s
            <br />
            talk
          </span>
          <span className="w-11 h-11 rounded-full bg-ink text-lime flex items-center justify-center group-hover:rotate-45 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </span>
        </motion.button>
      </motion.div>

      <div className="max-w-7xl mx-auto mt-3 overflow-hidden rounded-[28px] bg-[#161616] border border-white/8">
        <div className="flex marquee-track w-max">
          {[0, 1].map(copy => (
            <div key={copy} className="flex items-center py-4">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Figma', 'AWS', 'Framer Motion', 'Docker'].map(item => (
                <span key={`${copy}-${item}`} className="flex items-center">
                  <span className="px-6 font-headline font-bold text-xl text-paper/80">{item}</span>
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
