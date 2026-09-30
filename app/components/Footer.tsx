'use client'

export default function Footer() {
  return (
    <footer className="bg-void text-paper px-5 sm:px-8 py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="font-headline font-extrabold text-xl">PUNIT</span>
        <p className="font-mono text-[11px] tracking-wider uppercase text-paper/40">
          Next.js · Framer Motion · 2026
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-lime hover:text-paper transition-colors"
        >
          Back to top
        </button>
      </div>
    </footer>
  )
}
