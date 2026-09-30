'use client'

import { motion } from 'framer-motion'

const featured = {
  quote:
    "Punit didn't just build a site. He got the brand, the properties, and the way we want people to feel when they land on the page. It finally looks like us.",
  name: 'James',
  role: 'Co-founder, QuestVD',
  mark: '01',
}

const quotes = [
  {
    quote:
      "Clear thinking, fast shipping, and zero fluff. He treated the product like it was his own, which is exactly what you want when you're building something real.",
    name: 'Aanya',
    role: 'Product lead, FinTech',
    mark: '02',
  },
  {
    quote:
      "From first look to checkout, everything felt intentional. Our store finally matches the product. and customers notice.",
    name: 'Karan',
    role: 'Founder, E-commerce',
    mark: '03',
  },
]

export default function Testimonials() {
  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="clients" className="bg-void text-paper py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between gap-4 mb-8 sm:mb-12">
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-lime">
            04 / Clients
          </span>
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-paper/35">
            Out loud
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-paper/55 mb-5">
              Testimonials
            </p>
            <h2 className="font-headline font-extrabold text-[clamp(2.5rem,7vw,4.75rem)] tracking-tight leading-[0.92] max-w-3xl">
              What clients
              <br />
              <span className="text-lime">actually say.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-5 lg:items-start lg:pb-2">
            <p className="text-paper/55 text-sm sm:text-base leading-relaxed max-w-md">
              They came with an idea and a deadline. We shipped something real —
              and they still talk about it.
            </p>
            <button
              onClick={() => jump('contact')}
              className="inline-flex items-center gap-2 shrink-0 rounded-full bg-lime text-ink px-5 py-3 text-sm font-medium hover:bg-paper transition-colors self-start"
            >
              Book a chat
              <span
                className="w-7 h-7 rounded-full bg-ink/10 flex items-center justify-center"
                aria-hidden
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Bento quotes */}
        <div className="grid lg:grid-cols-12 gap-3 sm:gap-4">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative rounded-[22px] sm:rounded-[28px] bg-lime text-ink p-6 sm:p-8 flex flex-col justify-between min-h-[320px] sm:min-h-[420px] overflow-hidden"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 font-headline font-extrabold text-[10rem] leading-none text-ink/[0.06] select-none"
              aria-hidden
            >
              ”
            </div>

            <div className="relative flex items-center justify-between gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink/50">
                {featured.mark} / Featured
              </span>
              <span className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M7.17 13.4c1.66 0 2.99 1.35 2.99 3.02S8.83 19.45 7.17 19.45 4.18 18.1 4.18 16.42c0-.4.07-.78.2-1.13C5.1 12.3 7.4 10.5 10.3 9.7l.7 1.7c-1.9.55-3.4 1.7-3.83 2Z" />
                  <path d="M16.83 13.4c1.66 0 2.99 1.35 2.99 3.02s-1.33 3.03-2.99 3.03-2.99-1.35-2.99-3.03c0-.4.07-.78.2-1.13.72-2.99 3.02-4.79 5.92-5.59l.7 1.7c-1.9.55-3.4 1.7-3.83 2Z" />
                </svg>
              </span>
            </div>

            <blockquote className="relative font-headline font-bold text-xl sm:text-2xl lg:text-[1.7rem] leading-snug tracking-tight mb-10">
              {featured.quote}
            </blockquote>

            <div className="relative flex items-center gap-3 mt-auto">
              <div className="w-11 h-11 rounded-full bg-ink text-lime flex items-center justify-center font-headline font-extrabold text-sm">
                {featured.name.slice(0, 1)}
              </div>
              <div>
                <p className="font-headline font-bold text-base leading-none">{featured.name}</p>
                <p className="mt-1.5 text-sm text-ink/55">{featured.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Side quotes */}
          <div className="lg:col-span-7 grid gap-3 sm:gap-4">
            {quotes.map((item, i) => (
              <motion.div
                key={item.mark}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-[22px] sm:rounded-[28px] border border-white/8 bg-[#121212] p-5 sm:p-7 overflow-hidden hover:border-white/18 transition-colors duration-300"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-lime/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden
                />

                <div className="relative flex flex-col sm:flex-row sm:items-stretch gap-5 sm:gap-8">
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-lime/70 mb-4 block">
                      {item.mark} / Note
                    </span>
                    <p className="text-paper/80 text-sm sm:text-base leading-relaxed">
                      “{item.quote}”
                    </p>
                  </div>

                  <div className="sm:w-40 shrink-0 flex sm:flex-col items-center sm:items-end sm:justify-end gap-3 sm:text-right border-t sm:border-t-0 sm:border-l border-white/8 pt-4 sm:pt-0 sm:pl-6">
                    <div className="w-10 h-10 rounded-full bg-paper/10 text-paper flex items-center justify-center font-headline font-extrabold text-sm">
                      {item.name.slice(0, 1)}
                    </div>
                    <div>
                      <p className="font-headline font-bold text-sm leading-none">{item.name}</p>
                      <p className="mt-1.5 text-xs text-paper/45 leading-snug">{item.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom CTA strip */}
            <motion.button
              type="button"
              onClick={() => jump('contact')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[22px] sm:rounded-[28px] border border-white/8 bg-[#121212] p-5 sm:p-6 flex items-center justify-between gap-4 text-left group hover:border-lime/35 transition-colors duration-300"
            >
              <div>
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-lime mb-2">
                  Your turn
                </p>
                <p className="font-headline font-bold text-lg sm:text-xl leading-tight">
                  Got a product to ship?
                </p>
              </div>
              <span className="w-11 h-11 rounded-full bg-lime text-ink flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
