'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const socials = [
  {
    name: 'GitHub',
    handle: '@punit',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: '#ffffff',
  },
  {
    name: 'LinkedIn',
    handle: 'in/punit',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#0A66C2',
  },
  {
    name: 'Twitter',
    handle: '@punit_dev',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: '#000000',
  },
  {
    name: 'Email',
    handle: 'punit@dev.io',
    href: 'mailto:punit@dev.io',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: '#7c3aed',
  },
]

const inputClass =
  'w-full bg-white/3 border border-white/8 rounded-xl px-5 py-4 text-white placeholder-white/25 text-sm focus:border-violet-500/60 focus:bg-white/5 transition-all duration-300 outline-none'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1800))
    setStatus('sent')
    setTimeout(() => {
      setStatus('idle')
      setFormState({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.8) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-violet-500/50" />
            <span className="text-violet-400/60 font-mono text-sm tracking-[0.3em]">05.</span>
            <span className="h-px flex-1 max-w-20 bg-gradient-to-r from-violet-500/50 to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-lg">
            Got a project in mind? Want to collaborate? Or just want to say hi?
            I&apos;m always open to new conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability card */}
            <div className="glass rounded-2xl p-6 border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold text-sm">Available for Work</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Currently open to full-time positions and select freelance projects.
                Response time: under 24 hours.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <div className="text-white/40 text-xs font-mono tracking-wider uppercase mb-4">— Find me here</div>
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-white/15 group transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white/60 group-hover:text-white transition-colors shrink-0"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    {social.icon}
                  </div>
                  <div>
                    <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">{social.name}</div>
                    <div className="text-white/30 text-xs font-mono">{social.handle}</div>
                  </div>
                  <svg className="w-4 h-4 text-white/20 group-hover:text-white/60 ml-auto transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 border border-white/5 card-noise relative overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6"
                    >
                      <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-white/50">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={formState.name}
                          onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          required
                          className={inputClass}
                        />
                        {focused === 'name' && (
                          <motion.div
                            layoutId="focus-ring"
                            className="absolute inset-0 rounded-xl border border-violet-500/60 pointer-events-none"
                          />
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formState.email}
                          onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          required
                          className={inputClass}
                        />
                        {focused === 'email' && (
                          <motion.div
                            layoutId="focus-ring"
                            className="absolute inset-0 rounded-xl border border-violet-500/60 pointer-events-none"
                          />
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Subject"
                        value={formState.subject}
                        onChange={e => setFormState(s => ({ ...s, subject: e.target.value }))}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                        required
                        className={inputClass}
                      />
                      {focused === 'subject' && (
                        <motion.div
                          layoutId="focus-ring"
                          className="absolute inset-0 rounded-xl border border-violet-500/60 pointer-events-none"
                        />
                      )}
                    </div>

                    <div className="relative">
                      <textarea
                        placeholder="Tell me about your project..."
                        rows={5}
                        value={formState.message}
                        onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        required
                        className={`${inputClass} resize-none`}
                      />
                      {focused === 'message' && (
                        <motion.div
                          layoutId="focus-ring"
                          className="absolute inset-0 rounded-xl border border-violet-500/60 pointer-events-none"
                        />
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group relative w-full py-4 rounded-xl font-semibold text-white overflow-hidden"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600" />
                      <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative flex items-center justify-center gap-3">
                        {status === 'sending' ? (
                          <>
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </>
                        )}
                      </span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
