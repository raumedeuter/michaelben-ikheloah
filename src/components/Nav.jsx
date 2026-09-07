import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

const socialLinks = [
  { name: "Twitter", url: "https://x.com/raumedeuter?s=11" }, // fill in your real handle
  { name: "Instagram", url: "https://instagram.com/YOUR_HANDLE" },
  {
    name: "LinkedIn",
    url: "http://www.linkedin.com/in/michael-ben-ikheloah-a3324b2a7",
  },
];
function HamburgerIcon({ open }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between">
      <span className={`h-0.5 bg-white transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
      <span className={`h-0.5 bg-white transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-4 self-end'}`} />
      <span className={`h-0.5 bg-white transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
    </div>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = links
      .filter((l) => !l.external)
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  function renderDesktopLink(link) {
    if (link.label === "Resume") {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-neutral-900 text-neutral-900 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 hover:bg-accent hover:border-accent hover:text-white"
        >
          Resume
        </a>
      );
    }
    return (
      <a
        href={link.href}
        className="relative py-1 text-neutral-900 hover:text-accent transition-colors"
      >
        {link.label}
        <span
          className={`absolute left-1/2 -translate-x-1/2 -bottom-1 w-1.5 h-1.5 rounded-full bg-accent transition-all duration-300 scale-0 group-hover:scale-100 ${
            activeSection === link.href ? "scale-100" : ""
          }`}
        />
      </a>
    );
  }

  function renderMobileLink(link) {
    if (link.label === "Resume") {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="group inline-flex items-center gap-2 border bg-neutral-900 text-white rounded-full px-6 py-2.5 text-2xl font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent hover:border-accent hover:text-white active:translate-y-0 ml-4"
        >
          Resume
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      );
    }

    return (
      <a
        href={link.href}
        onClick={() => setMenuOpen(false)}
        className="group flex items-center gap-3 transition-colors hover:text-accent"
      >
        <span className="w-2.5 flex justify-center shrink-0">
          <span
            className={`w-2.5 h-2.5 rounded-full bg-accent transition-opacity duration-300 ${
              activeSection === link.href ? "opacity-100" : "opacity-0"
            }`}
          />
        </span>
        <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
          {link.label}
        </span>
      </a>
    );
  }

  // function HamburgerIcon() {
  //   return (
  //     <div className="relative w-6 h-5 flex flex-col justify-between">
  //       <span
  //         className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
  //       />
  //       <span
  //         className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4 self-end"}`}
  //       />
  //       <span
  //         className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`}
  //       />
  //     </div>
  //   );
  // }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur border-b border-neutral-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 py-6">
          <a
            href="#hero"
            className="font-semibold tracking-tight text-lg sm:text-base text-neutral-900"
          >
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
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="hidden sm:flex w-12 h-12 rounded-full bg-neutral-900 items-center justify-center shadow-lg hover:bg-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          )}

          {/* Mobile: always the circular hamburger, regardless of scroll */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center shadow-lg hover:bg-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      {/* Slide-out panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[70] flex flex-col transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6 text-2xl text-neutral-400 transition-all duration-200 hover:text-neutral-900 hover:rotate-90"
        >
          ×
        </button>

        {/* Upper content area */}
        <div className="flex-1 flex flex-col justify-center px-10">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-3">
            Navigation
          </p>
          <div className="w-10 h-px bg-neutral-200 mb-8" />

          <ul className="space-y-5">
            {links
              .filter((l) => l.label !== "Resume")
              .map((link) => (
                <li
                  key={link.href}
                  className="text-4xl font-bold leading-tight"
                >
                  {renderMobileLink(link)}
                </li>
              ))}
          </ul>

          <div className="mt-10">
            {renderMobileLink(links.find((l) => l.label === "Resume"))}
          </div>
        </div>

        {/* Lower content area — Social */}
        <div className="px-10 pb-10">
          <div className="w-10 h-px bg-neutral-200 mb-3" />
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-3">
            Social
          </p>
          <div className="flex items-center gap-3 text-sm text-neutral-600">
            {socialLinks.map((social, i) => (
              <span key={social.name} className="flex items-center gap-3">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {social.name}
                </a>
                {i < socialLinks.length - 1 && (
                  <span className="text-neutral-300">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
