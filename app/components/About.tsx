'use client'

const years = [
  { year: '2021', title: 'Started coding', desc: 'Fell in love with programming and built small tools every week.' },
  { year: '2022', title: 'First full-stack ship', desc: 'A production app for 500+ users. React, Node, MongoDB.' },
  { year: '2023', title: 'Freelance years', desc: 'Helped clients get online. Learned modern tooling and DevOps.' },
  { year: '2024', title: 'Going deeper', desc: 'System design, performance, and developer tools.' },
  { year: '2025', title: 'What\'s next', desc: 'Ambitious products, open source, and teaching what I know.' },
]

export default function About() {
  return (
    <section id="about" className="bg-paper text-ink py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <span className="font-mono text-xs tracking-[0.28em] uppercase">01 / About</span>
          <span className="font-mono text-xs tracking-[0.28em] uppercase text-dust">The person</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-headline font-extrabold text-5xl sm:text-7xl leading-[0.92] tracking-tight mb-10">
              A developer who treats software like an art form.
            </h2>
            <div className="space-y-5 text-lg text-ink/70 max-w-xl leading-relaxed">
              <p>
                I&apos;m Punit. I turn messy problems into products that feel obvious once you use them.
                Full-stack apps, sharp interfaces, and systems that stay fast as they grow.
              </p>
              <p>
                When I&apos;m not shipping, I&apos;m in Figma, in a new repo, or writing the kind of code
                I won&apos;t hate in six months.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-0">
            {[
              ['01', 'Performance', 'Every millisecond is a design decision.'],
              ['02', 'Taste', 'If it isn\'t delightful, it isn\'t done.'],
              ['03', 'Clarity', 'Code people can read. Products people can feel.'],
              ['04', 'Impact', 'I build things that actually get used.'],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex gap-5 py-5 border-t border-ink/10">
                <span className="font-mono text-xs text-dust w-8 shrink-0 pt-1">{num}</span>
                <div>
                  <div className="font-headline font-bold text-xl">{title}</div>
                  <div className="text-ink/60 mt-1">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ink/10">
          {years.map((item) => (
            <div
              key={item.year}
              className="bg-paper p-5"
            >
              <div className="font-mono text-xs text-dust mb-3">{item.year}</div>
              <div className="font-headline font-bold text-lg mb-2">{item.title}</div>
              <div className="text-sm text-ink/60 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
