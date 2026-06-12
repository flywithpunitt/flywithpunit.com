'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['about', 'skills', 'projects', 'experience', 'contact']
      const current = sections.find(section => {
        const el = document.getElementById(section)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      setActiveSection(current || '')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 transition-all duration-500 ${
          scrolled
            ? 'py-3 glass border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold tracking-tight">
              <span className="gradient-text">P</span>
              <span className="text-white/90">unit</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-violet-400'
                    : 'text-white/60 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 ${
                  activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => handleNavClick('#contact')}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium glass border border-violet-500/30 text-violet-300 hover:border-violet-400/60 hover:text-white hover:bg-violet-500/10 transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Hire Me
          </motion.button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-6 h-px bg-white origin-center transition-all"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? -10 : 0 }}
              className="block w-6 h-px bg-white"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-6 h-px bg-white origin-center transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 px-6 md:hidden"
            style={{ background: 'rgba(5, 5, 8, 0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col gap-6 pt-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-3xl font-bold text-white/80 hover:text-white transition-colors duration-200"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <span className="text-violet-500/60 text-base font-mono mr-3">0{i + 1}.</span>
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick('#contact')}
                className="mt-4 px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-violet-600 to-cyan-600 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Let&apos;s Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
