'use client'

import { motion } from 'framer-motion'

const jobs = [
  {
    role: 'Senior Software Engineer',
    company: 'TechNova Labs',
    period: '2024 — Now',
    type: 'Full-time',
    points: [
      'Led frontend architecture for a SaaS used by 100K+ people',
      'Cut bundle size 40% and landed Core Web Vitals in the top 10%',
      'Mentored 5 engineers and shipped realtime features on Redis',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'PixelForge Studio',
    period: '2023 — 2023',
    type: 'Full-time',
    points: [
      'Shipped 12 major features for 50K+ designers',
      'Built a live collaborative canvas and Stripe at $500K/mo',
      'Dropped infra cost 35% on AWS',
    ],
  },
  {
    role: 'Independent Consultant',
    company: 'Freelance',
    period: '2022 — 2023',
    type: 'Contract',
    points: [
      '8 client products across commerce, fintech, and SaaS',
      'Custom checkouts, live market dashboards, weekly reports',
      '100% of clients came back or referred someone',
    ],
  },
  {
    role: 'Junior Dev + TA',
    company: 'CodeCraft Academy',
    period: '2021 — 2022',
    type: 'Part-time',
    points: [
      'Internal LMS for 1,200+ students',
      'Taught JS to beginners and wrote 50+ project kits',
      'Found out I like mentoring as much as shipping',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative bg-void/70 text-paper py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <span className="font-mono text-xs tracking-[0.28em] uppercase text-lime">04 / Experience</span>
          <span className="font-mono text-xs tracking-[0.28em] uppercase text-paper/35">The trail</span>
        </div>

        <h2 className="font-headline font-extrabold text-5xl sm:text-7xl tracking-tight leading-[0.92] mb-16">
          Where the work happened.
        </h2>

        <div>
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid lg:grid-cols-12 gap-4 lg:gap-8 py-10 border-t border-white/10"
            >
              <div className="lg:col-span-3 font-mono text-xs tracking-widest uppercase text-lime pt-2">
                {job.period}
              </div>
              <div className="lg:col-span-4">
                <div className="font-headline font-extrabold text-3xl leading-tight">{job.role}</div>
                <div className="mt-2 text-paper/55">
                  {job.company} · {job.type}
                </div>
              </div>
              <ul className="lg:col-span-5 space-y-2 text-paper/65">
                {job.points.map(point => (
                  <li key={point} className="pl-4 border-l border-lime/60">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
