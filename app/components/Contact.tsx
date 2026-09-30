'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const channels = [
  { name: 'Email', value: 'flywithpunit@gmail.com', href: 'mailto:flywithpunit@gmail.com' },
  { name: 'Phone', value: '+91 98915 45852', href: 'tel:+919891545852' },
  { name: 'LinkedIn', value: 'flywithpunit', href: 'https://linkedin.com/in/flywithpunit' },
  { name: 'Twitter', value: '@flywithpunit', href: 'https://twitter.com/flywithpunit' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setError(data?.error || 'Could not send. Try again or email me directly.')
        setStatus('error')
        return
      }

      setStatus('sent')
      setForm({ name: '', email: '', message: '', company: '' })
      window.setTimeout(() => setStatus('idle'), 4200)
    } catch {
      setError('Network issue. Try again or email me directly.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-lime text-ink py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between gap-4 mb-8 sm:mb-10">
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase">
            05 / Contact
          </span>
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-ink/45">
            Say hello
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 font-headline font-extrabold text-[clamp(3.2rem,14vw,8.5rem)] leading-[0.82] tracking-tight"
          >
            LET&apos;S
            <br />
            TALK.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="lg:col-span-5 lg:pb-3"
          >
            <p className="text-ink/70 text-sm sm:text-base leading-relaxed max-w-md mb-5">
              A product idea, a role, or just a hello. I read everything.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ink/[0.04] px-3.5 py-2">
              <span className="live-dot w-2 h-2 rounded-full bg-ink" />
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink/70">
                Usually replies in under 24h
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 sm:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 rounded-[22px] sm:rounded-[28px] border border-ink/10 bg-ink/[0.04] p-5 sm:p-6"
          >
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink/45 mb-5">
              Direct lines
            </p>
            <div className="space-y-1">
              {channels.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 rounded-2xl px-3 py-3.5 -mx-1 hover:bg-ink/[0.06] transition-colors"
                >
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45 mb-1">
                      {item.name}
                    </div>
                    <div className="font-headline font-bold text-lg sm:text-xl truncate group-hover:translate-x-0.5 transition-transform">
                      {item.value}
                    </div>
                  </div>
                  <span
                    className="w-9 h-9 rounded-full border border-ink/15 flex items-center justify-center shrink-0 opacity-50 group-hover:opacity-100 group-hover:bg-ink group-hover:text-lime group-hover:border-ink transition-all"
                    aria-hidden
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 rounded-[22px] sm:rounded-[28px] bg-ink text-paper p-5 sm:p-7 lg:p-8"
          >
            {status === 'sent' ? (
              <div className="min-h-[320px] sm:min-h-[360px] flex flex-col justify-center">
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-lime mb-4">
                  Sent
                </p>
                <p className="font-headline font-extrabold text-4xl sm:text-5xl leading-[0.95] tracking-tight">
                  Got it.
                  <br />
                  I&apos;ll write back.
                </p>
                <p className="mt-5 text-paper/50 text-sm max-w-sm leading-relaxed">
                  Your note just landed in my inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5 sm:space-y-6">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper/40">
                    Drop a note
                  </p>
                  <p className="font-mono text-[10px] tracking-wider uppercase text-paper/30">
                    Goes to my inbox
                  </p>
                </div>

                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={e => setForm(s => ({ ...s, company: e.target.value }))}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="hidden"
                />

                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/40">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="What should I call you?"
                    value={form.name}
                    onChange={e => setForm(s => ({ ...s, name: e.target.value }))}
                    className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-lime py-3 text-base sm:text-lg text-paper placeholder:text-paper/30 transition-colors"
                  />
                </label>

                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/40">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                    className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-lime py-3 text-base sm:text-lg text-paper placeholder:text-paper/30 transition-colors"
                  />
                </label>

                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/40">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="What are we making?"
                    value={form.message}
                    onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                    className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-lime py-3 text-base sm:text-lg text-paper placeholder:text-paper/30 resize-none transition-colors"
                  />
                </label>

                {status === 'error' && error && (
                  <p className="text-sm text-red-300">{error}</p>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-lime text-ink px-6 py-3.5 font-headline font-bold text-base hover:bg-paper transition-colors disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send it'}
                    <span aria-hidden>→</span>
                  </button>
                  <a
                    href="mailto:flywithpunit@gmail.com"
                    className="text-sm text-paper/45 hover:text-lime transition-colors"
                  >
                    or email directly →
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
