'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about', num: '01' },
  { label: 'Skills', href: '#skills', num: '02' },
  { label: 'Work', href: '#projects', num: '03' },
  { label: 'Experience', href: '#experience', num: '04' },
  { label: 'Contact', href: '#contact', num: '05' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className={`flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 transition-colors ${
          mounted && scrolled ? 'bg-void/80 backdrop-blur-md border-b border-white/5' : ''
        }`}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-headline font-extrabold tracking-tight text-xl sm:text-2xl text-paper"
          >
            PUNIT
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="text-[11px] font-mono uppercase tracking-[0.22em] text-paper/70 hover:text-paper transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[11px] font-mono uppercase tracking-[0.22em] text-paper"
          >
            Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-lime text-ink px-6 py-6 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <span className="font-headline font-extrabold text-2xl">PUNIT</span>
              <button
                onClick={() => setOpen(false)}
                className="text-[11px] font-mono uppercase tracking-[0.22em]"
              >
                Close
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => go(link.href)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.15 }}
                  className="text-left font-headline font-extrabold text-6xl leading-none"
                >
                  <span className="font-mono text-sm font-normal mr-3">{link.num}</span>
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
