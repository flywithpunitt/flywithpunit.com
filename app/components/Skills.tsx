'use client'

import { motion } from 'framer-motion'

const groups = [
  {
    name: 'Frontend',
    num: '01',
    accent: '#d8ff3e',
    blurb: 'Interfaces that feel sharp and move with intent.',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vue'],
  },
  {
    name: 'Backend',
    num: '02',
    accent: '#f3efe4',
    blurb: 'APIs, data, and systems that stay fast as they grow.',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST'],
  },
  {
    name: 'Ops',
    num: '03',
    accent: '#8fbc9a',
    blurb: 'Ship it, host it, keep it alive without drama.',
    items: ['Docker', 'Git', 'AWS', 'Vercel', 'Linux', 'CI/CD'],
  },
]

const creative = [
  {
    title: 'Video Editing',
    line: 'Cuts, pacing, sound — stories that actually land.',
  },
  {
    title: 'AI Video Generation',
    line: 'Gen tools turned into client-ready motion, not demos.',
  },
  {
    title: 'Motion Design',
    line: 'UI motion and brand films that feel alive on first play.',
  },
]

const tickerA = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'Video Editing', 'MongoDB', 'Docker', 'AWS', 'Figma', 'Motion Design',
]

const tickerB = [
  'AI Video', 'Framer Motion', 'GraphQL', 'Prisma', 'Vercel', 'Tailwind',
  'Linux', 'CI/CD', 'Vue', 'Git', 'WebAssembly', 'System Design',
]

export default function Skills() {
  return (
    <section id="skills" className="bg-void text-paper py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-14">
        <div className="flex items-baseline justify-between gap-4 mb-6 sm:mb-8">
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-lime">02 / Skills</span>
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-paper/35">The toolkit</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <h2 className="lg:col-span-7 font-headline font-extrabold text-[clamp(2.4rem,8vw,5rem)] leading-[0.92] tracking-tight">
            Tools I actually
            <br />
            <span className="text-lime">ship with.</span>
          </h2>
          <p className="lg:col-span-5 text-paper/55 text-sm sm:text-base leading-relaxed max-w-md lg:pb-2">
            Code, systems, and creative media. Not a padded resume list —
            the stack I use when something needs to leave the building.
          </p>
        </div>
      </div>

      {/* Dual marquees */}
      <div className="mb-12 sm:mb-16 space-y-0 border-y border-white/10">
        <div className="overflow-hidden border-b border-white/10 bg-lime/[0.03]">
          <div className="flex marquee-track w-max">
            {[0, 1].map(copy => (
              <div key={copy} className="flex items-center py-4 sm:py-5">
                {tickerA.map(item => (
                  <span key={`${copy}-${item}`} className="flex items-center">
                    <span className="px-5 sm:px-7 font-headline font-extrabold text-3xl sm:text-5xl lg:text-6xl text-paper">
                      {item}
                    </span>
                    <span className="text-lime text-2xl sm:text-3xl">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex marquee-track-rev w-max">
            {[0, 1].map(copy => (
              <div key={copy} className="flex items-center py-4 sm:py-5">
                {tickerB.map(item => (
                  <span key={`${copy}-${item}`} className="flex items-center">
                    <span className="px-5 sm:px-7 font-headline font-extrabold text-3xl sm:text-5xl lg:text-6xl text-paper/30">
                      {item}
                    </span>
                    <span className="text-paper/15 text-2xl sm:text-3xl">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Stack categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {groups.map((group, i) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[22px] sm:rounded-[28px] border border-white/8 bg-[#121212] p-5 sm:p-6 overflow-hidden hover:border-white/18 transition-colors duration-300"
            >
              <div
                className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: group.accent }}
              />

              <div className="flex items-start justify-between gap-3 mb-5">
                <div>
                  <span
                    className="font-mono text-[11px] tracking-[0.22em] uppercase block mb-2"
                    style={{ color: group.accent }}
                  >
                    {group.num} / {group.name}
                  </span>
                  <p className="text-sm text-paper/50 leading-relaxed">{group.blurb}</p>
                </div>
                <span
                  className="font-headline font-extrabold text-4xl leading-none opacity-15 group-hover:opacity-35 transition-opacity"
                  style={{ color: group.accent }}
                >
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-paper/80 transition-all duration-200 hover:border-lime/40 hover:text-lime hover:bg-lime/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Creative — featured lane */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[22px] sm:rounded-[28px] border border-lime/35 bg-lime/[0.06] p-5 sm:p-7 overflow-hidden"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-lime/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/3 opacity-[0.07]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #d8ff3e 0 2px, transparent 2px 18px)',
            }}
            aria-hidden
          />

          <div className="relative flex flex-wrap items-end justify-between gap-4 mb-6 sm:mb-8">
            <div className="max-w-xl">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-lime">
                  04 / Creative
                </span>
                <span className="rounded-full bg-lime text-ink px-2.5 py-0.5 font-mono text-[10px] tracking-wider uppercase font-bold">
                  New lane
                </span>
              </div>
              <h3 className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-paper mb-2">
                When the product needs a story.
              </h3>
              <p className="text-sm sm:text-base text-paper/50 leading-relaxed">
                Motion, edit, and AI video — the creative side that sits next to the code.
              </p>
            </div>
            <span className="font-headline font-extrabold text-6xl sm:text-7xl leading-none text-lime/20">
              CR
            </span>
          </div>

          <div className="relative grid sm:grid-cols-3 gap-3">
            {creative.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.28 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group/skill rounded-2xl border border-lime/20 bg-void/50 p-4 sm:p-5 hover:border-lime/50 hover:bg-lime/[0.12] transition-colors duration-300"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-lime/70 mb-3 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-headline font-bold text-lg sm:text-xl text-paper mb-2 group-hover/skill:text-lime transition-colors">
                  {skill.title}
                </p>
                <p className="text-sm text-paper/45 leading-relaxed">{skill.line}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 sm:mt-10 rounded-[22px] sm:rounded-[28px] border border-white/8 bg-[#121212] p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-lime mb-2">Always learning</p>
            <p className="text-paper/60 text-sm sm:text-base max-w-xl leading-relaxed">
              Right now: AI/ML in product surfaces, WebAssembly, system design that doesn&apos;t fall over —
              and pushing how far AI video can go in real client work.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            {['AI / ML', 'WebAssembly', 'System Design'].map(tag => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase text-paper/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
