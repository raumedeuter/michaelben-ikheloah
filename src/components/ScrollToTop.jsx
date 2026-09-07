import { useState, useEffect } from 'react'
import { Rocket } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [launching, setLaunching] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleClick() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setLaunching(true)
    setTimeout(
      () => {
        document.getElementById('hero').scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' })
        setLaunching(false)
      },
      prefersReduced ? 0 : 300
    )
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-neutral-900 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-accent hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Rocket
        className={`w-4 h-4 text-white transition-transform duration-300 ${
          launching ? '-translate-y-2 -translate-x-0.5 -rotate-12 scale-90' : 'rotate-0'
        }`}
      />
    </button>
  )
}