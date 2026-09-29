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
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1400))
    setStatus('sent')
    setTimeout(() => {
      setStatus('idle')
      setForm({ name: '', email: '', message: '' })
    }, 3200)
  }

  return (
    <section id="contact" className="bg-lime text-ink py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <span className="font-mono text-xs tracking-[0.28em] uppercase">05 / Contact</span>
          <span className="font-mono text-xs tracking-[0.28em] uppercase text-ink/50">Say hello</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline font-extrabold text-[16vw] sm:text-8xl lg:text-9xl leading-[0.8] tracking-tight mb-16"
        >
          LET&apos;S
          <br />
          TALK.
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-lg text-ink/75 max-w-sm">
              A product idea, a role, or just a hello. I read everything.
            </p>
            <div className="space-y-4">
              {channels.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block group"
                >
                  <div className="font-mono text-[11px] uppercase tracking-widest text-ink/50">{item.name}</div>
                  <div className="font-headline font-bold text-2xl group-hover:translate-x-1 transition-transform">
                    {item.value}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-7 space-y-4">
            {status === 'sent' ? (
              <div className="h-full min-h-[280px] flex items-center">
                <p className="font-headline font-extrabold text-5xl leading-none">
                  Got it.
                  <br />
                  I&apos;ll write back.
                </p>
              </div>
            ) : (
              <>
                <input
                  required
                  placeholder="Name"
                  value={form.name}
                  onChange={e => setForm(s => ({ ...s, name: e.target.value }))}
                  className="w-full bg-transparent border-b-2 border-ink/20 focus:border-ink py-4 text-lg placeholder:text-ink/35"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                  className="w-full bg-transparent border-b-2 border-ink/20 focus:border-ink py-4 text-lg placeholder:text-ink/35"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="What are we making?"
                  value={form.message}
                  onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                  className="w-full bg-transparent border-b-2 border-ink/20 focus:border-ink py-4 text-lg placeholder:text-ink/35 resize-none"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-4 px-8 py-4 bg-ink text-lime font-headline font-extrabold text-xl hover:translate-x-1 transition-transform"
                >
                  {status === 'sending' ? 'Sending…' : 'Send it →'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
