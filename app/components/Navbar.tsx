'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about', id: 'about', num: '01' },
  { label: 'Skills', href: '#skills', id: 'skills', num: '02' },
  { label: 'Work', href: '#projects', id: 'projects', num: '03' },
  { label: 'Clients', href: '#clients', id: 'clients', num: '04' },
  { label: 'Contact', href: '#contact', id: 'contact', num: '05' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map(link => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[]

    if (!sections.length) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.25, 0.5] }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (href: string) => {
    setOpen(false)
    const el = document.getElementById(href.replace('#', ''))
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4 pointer-events-none">
        <div
          className={`pointer-events-auto mx-auto max-w-7xl flex items-center justify-between gap-3 rounded-full px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-300 ${
            mounted && scrolled
              ? 'bg-void/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]'
              : 'bg-void/40 backdrop-blur-md border border-white/5'
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 pl-1.5 sm:pl-2 group"
            aria-label="Back to top"
          >
            <span className="relative flex h-2 w-2">
              <span className="live-dot absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
            </span>
            <span className="font-headline font-extrabold tracking-tight text-lg sm:text-xl text-paper group-hover:text-lime transition-colors">
              PUNIT
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {links.map(link => {
              const isActive = active === link.id
              return (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className={`relative rounded-full px-3.5 py-2 text-[11px] font-mono uppercase tracking-[0.2em] transition-colors ${
                    isActive ? 'text-ink' : 'text-paper/55 hover:text-paper'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-lime"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go('#contact')}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-lime text-ink px-4 py-2 text-[11px] font-mono uppercase tracking-[0.18em] font-bold hover:bg-paper transition-colors"
            >
              Let&apos;s talk
              <span aria-hidden>→</span>
            </button>

            <button
              onClick={() => setOpen(v => !v)}
              className="lg:hidden relative w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className="sr-only">Menu</span>
              <span className="relative w-4 h-3.5 flex flex-col justify-between">
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-[1.5px] w-full bg-paper origin-center"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-[1.5px] w-full bg-paper"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-[1.5px] w-full bg-paper origin-center"
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <button
              className="absolute inset-0 bg-void/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-label="Close menu overlay"
            />

            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-3 top-3 bottom-3 sm:inset-x-5 sm:top-4 sm:bottom-4 rounded-[28px] bg-lime text-ink p-5 sm:p-7 flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-ink" />
                  <span className="font-headline font-extrabold text-xl">PUNIT</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-ink/15 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em]"
                >
                  Close
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-1">
                {links.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => go(link.href)}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.08 }}
                    className="group flex items-baseline gap-4 text-left py-2 border-b border-ink/10 last:border-0"
                  >
                    <span className="font-mono text-xs text-ink/45 w-7">{link.num}</span>
                    <span className="font-headline font-extrabold text-[clamp(2.4rem,12vw,4rem)] leading-none tracking-tight group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-ink/10">
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink/50">
                  Open for roles &amp; freelance
                </p>
                <button
                  onClick={() => go('#contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-lime px-5 py-3 text-sm font-medium"
                >
                  Let&apos;s talk
                  <span aria-hidden>→</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
