'use client'

import { useEffect, useRef } from 'react'

export default function SiteBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      if (reduce.matches) {
        video.pause()
        video.style.opacity = '0'
      } else {
        video.style.opacity = '1'
        video.play().catch(() => {})
      }
    }

    apply()
    reduce.addEventListener('change', apply)
    return () => reduce.removeEventListener('change', apply)
  }, [])

  return (
    <div className="site-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full scale-110 object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#0a0a0a]/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_-10%,rgba(216,255,62,0.22),transparent_42%),radial-gradient(ellipse_at_100%_80%,rgba(216,255,62,0.12),transparent_40%)]" />
      <div className="site-orb site-orb-a" />
      <div className="site-orb site-orb-b" />
      <div className="site-grain absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/70" />
    </div>
  )
}
