'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const blob = blobRef.current
    if (!wrap || !blob) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let x = 0
    let y = 0
    let raf = 0
    let queued = false

    const paint = () => {
      queued = false
      wrap.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const move = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (!queued) {
        queued = true
        raf = requestAnimationFrame(paint)
      }
    }

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      blob.classList.toggle('is-hover', !!target?.closest('a, button, input, textarea, [data-cursor]'))
    }

    const leave = () => {
      wrap.style.opacity = '0'
    }
    const enter = () => {
      wrap.style.opacity = '1'
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="cursor-wrap pointer-events-none fixed top-0 left-0 z-[99999] hidden md:block"
    >
      <div ref={blobRef} className="cursor-blob" />
    </div>
  )
}
