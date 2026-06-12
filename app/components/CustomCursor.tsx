'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const posRef = useRef({ x: 0, y: 0 })
  const followerPosRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
      }
    }

    const animateFollower = () => {
      followerPosRef.current.x += (posRef.current.x - followerPosRef.current.x) * 0.12
      followerPosRef.current.y += (posRef.current.y - followerPosRef.current.y) * 0.12
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPosRef.current.x - 20}px, ${followerPosRef.current.y - 20}px)`
      }
      rafRef.current = requestAnimationFrame(animateFollower)
    }

    const handlePointerOver = () => setIsPointer(true)
    const handlePointerOut = () => setIsPointer(false)
    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    const interactives = document.querySelectorAll('a, button, [data-cursor]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handlePointerOver)
      el.addEventListener('mouseleave', handlePointerOut)
    })

    rafRef.current = requestAnimationFrame(animateFollower)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none will-change-transform"
        style={{ transition: 'opacity 0.3s' }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isPointer ? 'w-3 h-3 bg-white' : 'w-3 h-3 bg-violet-400'
          } ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none will-change-transform"
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isPointer
              ? 'w-10 h-10 border-white/60 scale-150'
              : 'w-10 h-10 border-violet-400/40'
          } ${isHidden ? 'opacity-0' : 'opacity-100'}`}
          style={{
            background: isPointer ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
          }}
        />
      </div>
    </>
  )
}
