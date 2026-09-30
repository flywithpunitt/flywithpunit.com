'use client'

const chapters = [
  {
    label: '01',
    title: 'The beginning',
    body: [
      'I started with a computer and a lot more curiosity than knowledge.',
      'There were plenty of moments where I had absolutely no idea what I was doing. Things broke. Projects failed. Plans changed. There were days when I questioned whether I was actually good enough to do any of this.',
      'But I kept coming back. One project became another. Learning became building. Building became working with people. And slowly, the things that once felt impossible started becoming things I could figure out.',
      'That process changed me more than any particular technology ever could.',
    ],
  },
  {
    label: '02',
    title: 'The part nobody sees',
    body: [
      'From the outside, progress can look very clean. It isn’t.',
      'There were long nights, failed ideas, financial pressure, uncertainty, deadlines, rejection, and plenty of moments where I had to keep moving without knowing exactly where I was going.',
      'I’ve had things work out. I’ve also had things completely fall apart. Both taught me something.',
      'The wins gave me confidence. The difficult parts gave me perspective. And I think I needed both.',
    ],
  },
  {
    label: '03',
    title: 'Somewhere along the way',
    body: [
      'I started making money from the things I was building. Then I started working with real businesses. Then came bigger projects, bigger responsibilities, and problems that couldn’t be solved by simply following a tutorial.',
      'That was probably one of the biggest changes for me.',
      'I stopped thinking only about “Can I build this?” and started thinking about “Will this actually help someone?”',
      'That difference matters.',
    ],
  },
  {
    label: '04',
    title: 'I’m still becoming',
    body: [
      'I don’t think I’ve reached some final version of myself. I don’t really want to.',
      'There are still places I want to see, things I want to build, people I want to meet, risks I want to take, and a ridiculous number of things I still don’t know.',
      'Maybe that’s the point.',
      'I’m not trying to have the perfect story. I’m trying to have a story worth remembering.',
    ],
  },
]

export default function About() {
  return (
    <section id="about" className="bg-paper text-ink py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between gap-4 mb-10 sm:mb-14">
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase">01 / About</span>
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-dust">The person</span>
        </div>

        {/* Intro */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 sm:mb-20">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-dust mb-4">More than the code</p>
            <h2 className="font-headline font-extrabold text-[clamp(2.4rem,8vw,5.5rem)] leading-[0.92] tracking-tight mb-6 sm:mb-8">
              More than
              <br />
              the code.
            </h2>
            <p className="font-headline font-bold text-2xl sm:text-3xl text-ink/90 mb-5"> hiii
              I&apos;m Punit :)
            </p>
            <div className="space-y-4 text-[15px] sm:text-lg text-ink/70 leading-relaxed max-w-2xl">
              <p>I&apos;m a Developer, but that&apos;s probably the least interesting thing about me.</p>
              <p>The code is just one part of the story.</p>
              <p>
                Before the projects, the clients, the late nights, the wins, and the things I&apos;m still
                figuring out - there was just a kid who wanted to make something of himself.
              </p>
              <p>I didn&apos;t have everything figured out. Honestly, I still don&apos;t.</p>
              <p>
                But I&apos;ve always had this thing in me that makes it hard to sit still. If I don&apos;t know
                something, I want to understand it. If I can&apos;t do something, I want to learn how. And if
                someone tells me something can&apos;t be done, my first instinct is usually to ask,{' '}
                <em className="text-ink not-italic font-semibold">“Why not?”</em>
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
            <div className="rounded-[22px] sm:rounded-[28px] bg-ink text-paper p-6 sm:p-8 flex-1">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-lime mb-4">Today</p>
              <p className="font-headline font-extrabold text-2xl sm:text-3xl leading-tight mb-5">
                Still building.
                <br />
                Still learning.
                <br />
                Still becoming.
              </p>
              <p className="text-sm sm:text-base text-paper/60 leading-relaxed">
                Still making mistakes. Still chasing bigger goals. And still trying to become someone
                my younger self would be proud of.
              </p>
            </div>
            <div className="rounded-[22px] sm:rounded-[28px] bg-lime text-ink p-6 sm:p-8">
              <p className="font-headline font-extrabold text-xl sm:text-2xl leading-tight">
                The developer is only one part of that.
              </p>
              <p className="mt-3 font-headline font-bold text-lg sm:text-xl">
                There&apos;s a lot more to come.
              </p>
            </div>
          </aside>
        </div>

        {/* Chapters */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {chapters.map((chapter) => (
            <article
              key={chapter.label}
              className="rounded-[22px] sm:rounded-[28px] border border-ink/8 bg-white/40 p-6 sm:p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="font-mono text-[11px] tracking-[0.2em] text-dust">{chapter.label}</span>
                <span className="h-px flex-1 bg-ink/10" />
              </div>
              <h3 className="font-headline font-extrabold text-2xl sm:text-3xl tracking-tight mb-4 sm:mb-5">
                {chapter.title}
              </h3>
              <div className="space-y-3 text-sm sm:text-[15px] text-ink/65 leading-relaxed">
                {chapter.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
