export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden scroll-mt-20">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-[position:75%_center] sm:bg-[position:65%_center] grayscale"
        style={{ backgroundImage: "url('/videos/hero-architecture.png')" }}
      />

      {/* Gradient overlay — solid behind text, fades toward the image's detail */}
      {/* Gradient overlay — flat wash on mobile, directional fade on desktop */}
<div className="absolute inset-0 bg-white/70 sm:bg-gradient-to-r sm:from-white sm:via-white/40 sm:to-transparent" />

      {/* Content — sits above both layers */}
      <div className="relative z-10 px-6 lg:px-12 max-w-3xl">
        <p className="text-lg text-neutral-500 mb-2">Hello, I'm</p>
        <h1 className="text-5xl font-bold mb-2">Michael Ben-Ikheloah</h1>
        <h2 className="text-2xl text-neutral-500 mb-6">
          Computer Engineer | Software Developer | Cybersecurity
        </h2>
        <p className="text-neutral-600 leading-relaxed">
          I build full-stack web applications and secure systems — from
          government-grade platforms to client sites and personal projects — with
          a growing focus on clean, thoughtful frontend engineering.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="#projects"
            className="inline-block bg-neutral-900 text-white rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:bg-accent active:translate-y-0"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-block border border-neutral-900 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-neutral-900 hover:text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}