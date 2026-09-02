import Reveal from "./Reveal";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Raumedeuter",
    icon: "/icons/github.svg",
  },
  {
    name: "LinkedIn",
    url: "http://www.linkedin.com/in/michael-ben-ikheloah-a3324b2a7",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/YOUR_HANDLE",
    icon: "/icons/instagram.svg",
  }, // add your real handle
  {
    name: "Twitter",
    url: "https://x.com/raumedeuter?s=11",
    icon: "/icons/twitter x.svg",
  }, // add your real handle
  {
    name: "Substack",
    url: "https://open.substack.com/pub/raumedeuter",
    icon: "/icons/substack.svg",
  }, // add your real handle
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-neutral-100 border-t border-accent/30 scroll-mt-20"
    >
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <Reveal>
          <p className="text-sm text-neutral-500 mb-3 uppercase tracking-widest">
            Get In Touch
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Let's build something <span className="text-accent">great</span>.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-neutral-600 mb-10 max-w-md mx-auto">
            I'm currently open to new opportunities — feel free to reach out so
            we can collaborate.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <a
            href="mailto:mikeeben10@gmail.com"
            className="group inline-flex items-center gap-2 text-lg font-medium hover:border-accent hover:text-accent transition-colors mb-16"
          >
            mikeeben10@gmail.com
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center transition-all hover:border-accent hover:-translate-y-1"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
