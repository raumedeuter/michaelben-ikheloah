import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
  { href: '/resume.pdf', label: 'Resume', external: true },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const sections = links
      .filter((l) => !l.external)
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  function renderDesktopLink(link) {
    if (link.label === 'Resume') {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-neutral-900 text-neutral-900 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 hover:bg-accent hover:border-accent hover:text-white"
        >
          Resume
        </a>
      )
    }
    return (
      <a href={link.href} className="relative py-1 text-neutral-900 hover:text-accent transition-colors">
        {link.label}
        <span
          className={`absolute left-1/2 -translate-x-1/2 -bottom-1 w-1.5 h-1.5 rounded-full bg-accent transition-all duration-300 scale-0 group-hover:scale-100 ${
            activeSection === link.href ? 'scale-100' : ''
          }`}
        />
      </a>
    )
  }

  function renderMobileLink(link) {
    if (link.label === 'Resume') {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">
          {link.label}
        </a>
      )
    }
    return (
      <a href={link.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-accent transition-colors">
        <span className={`w-2.5 h-2.5 rounded-full bg-accent transition-opacity ${activeSection === link.href ? 'opacity-100' : 'opacity-0'}`} />
        {link.label}
      </a>
    )
  }

  function HamburgerIcon() {
    return (
      <div className="relative w-6 h-5 flex flex-col justify-between">
        <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
        <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4 self-end'}`} />
        <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
      </div>
    )
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur border-b border-neutral-200 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 py-6">
          <a href="#hero" className="font-semibold tracking-tight text-lg sm:text-base text-neutral-900">
            Michael B.
          </a>

          {/* Desktop: full link list, only when NOT scrolled */}
          {!scrolled && (
            <ul className="hidden sm:flex items-center gap-6 text-sm font-medium">
              {links.map((link) => (
                <li key={link.href} className="group">
                  {renderDesktopLink(link)}
                </li>
              ))}
            </ul>
          )}

          {/* Desktop: circular hamburger, only once scrolled */}
          {scrolled && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="hidden sm:flex w-12 h-12 rounded-full bg-neutral-900 items-center justify-center shadow-lg hover:bg-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <HamburgerIcon />
            </button>
          )}

          {/* Mobile: always the circular hamburger, regardless of scroll */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center shadow-lg hover:bg-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <HamburgerIcon />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[70] flex flex-col justify-center px-10 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="absolute top-6 right-6 text-3xl">
          ×
        </button>
        <ul className="space-y-6">
          {links.map((link) => (
            <li key={link.href} className={link.label === 'Resume' ? 'mt-4' : 'text-4xl font-bold'}>
              {renderMobileLink(link)}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}