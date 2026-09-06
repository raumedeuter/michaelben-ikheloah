import { useState, useEffect, useRef } from 'react'

export default function ParallaxBackground({ image, position = 'center' }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let ticking = false

    function updateOffset() {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const speed = 0.15
      setOffset(rect.top * speed)
      ticking = false
    }

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(updateOffset)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover will-change-transform"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPosition: position,
          transform: `translateY(${offset}px)`,
          height: '130%',
          top: '-15%',
        }}
      />
    </div>
  )
}