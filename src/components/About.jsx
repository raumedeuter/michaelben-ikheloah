import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-neutral-50 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Reveal>
          <h2 className="text-2xl font-bold mb-8">About</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="text-neutral-600 leading-relaxed space-y-4">
            <p>
              I'm a Computer Engineering graduate from Afe Babalola University,
              where my final-year project involved designing and implementing a
              1.8kWh remotely controlled lithium-ion battery bank system.
              Working at the intersection of hardware and software gave me an
              appreciation for understanding systems beyond just the code that
              runs them.
            </p>
            <p>
              Since 2022, I've been building my professional experience at
              Pyrich Group Limited, where I began as an intern and now serve as
              a Software Developer. I've contributed to software solutions
              including the Labour Market Information System, alongside client
              projects and internal systems.
            </p>
            <p>
              I also gained hands-on cybersecurity experience as an intern at
              Hagital Consulting, working with penetration testing and
              vulnerability assessment.
            </p>
            <p>
              Today, my interests sit at the intersection of software
              engineering, systems, and cybersecurity. Having worked across
              full-stack development, hardware engineering, and security has
              shaped how I approach problems: I enjoy building things,
              understanding how they work beneath the surface, and thinking
              about how they can be made more reliable, secure, and useful.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
