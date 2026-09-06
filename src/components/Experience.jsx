import { useState } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import Reveal from "./Reveal";
import ParallaxBackground from "./ParallaxBackground";

const experience = [
  {
    type: "work",
    role: "NYSC — Software Developer",
    company: "Pyrich Group Limited",
    period: "Dec 2025 — Present",
    description:
      "Serving my National Youth Service at the organization that shaped my early career, continuing work on government and client platforms.",
  },
  {
    type: "work",
    role: "Software Development Intern",
    company: "Pyrich Group Limited",
    period: "Mar 2024 — Sep 2024",
    description:
      "Contributed to the frontend of the Labour Market Information System (LMIS), supported the NSITF Enterprise Business Suite, and documented NIWA user manuals.",
  },
  {
    type: "work",
    role: "Cybersecurity Intern (Remote)",
    company: "Hagital Consulting",
    period: "Jan 2024 — Jun 2024",
    description:
      "Ran ethical hacking simulations and vulnerability assessments using Burp Suite, Metasploit, Wireshark, and Nmap.",
  },
  {
    type: "work",
    role: "Computer Engineering Intern",
    company: "P2E Technologies",
    period: "Jul 2023 — Oct 2023",
    description:
      "Provided infrastructure support — Veritas Backup Exec, Windows Server, VMware — and assisted with EBS module testing during NSITF promotion exams.",
  },
  {
    type: "work",
    role: "Software Development Intern",
    company: "Pyrich Group Limited",
    period: "Jul 2022 — Oct 2022",
    description:
      "First internship — completed responsive web design certification projects, registered MDA codes on the FCC portal, and critiqued UI/UX for the NELEX project.",
  },
  {
    type: "education",
    role: "B.Eng Computer Engineering",
    company: "Afe Babalola University",
    period: "Sep 2020 — Oct 2025",
    description:
      "Graduated with a thesis on designing and implementing an IoT-based 1.8kWh remote-controlled lithium-ion battery bank system.",
  },
];

const certifications = [
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC²",
    file: "/certs/ISC2 CC Certificate.pdf",
  },
  {
    name: "Certificate in Cybersecurity",
    issuer: "Hagital Consulting",
    file: "/certs/Michael Ben-Ikheloah.pdf",
  },
  {
    name: "Certificate in Cybersecurity (GRC)",
    issuer: "Hagital Consulting",
    file: "/certs/Michael Ben-Ikheloah 2.pdf",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    file: "/certs/Responsive Web Design Certification.png",
  },
  {
    name: "Linux Operating System",
    issuer: "Great Learning",
    file: "/certs/Linux certificate.png",
  },
];

const skillCategories = {
  Development: [
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "JavaScript", icon: "/icons/js.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
    { name: "TypeScript", icon: "/icons/ts-logo.svg" },
    { name: "Node.js", icon: "/icons/node.png" },
    { name: "PostgreSQL", icon: "/icons/postgresql.png" },
  ],
  Cybersecurity: [
    { name: "Kali Linux", icon: "/icons/kali-dragon-icon.svg" },
    { name: "Ubuntu", icon: "/icons/ubuntu.png" },
    { name: "Nmap", icon: "/icons/nmap.svg" },
    { name: "Burp Suite", icon: "/icons/burpsuite.png" },
    { name: "Metasploit", icon: "/icons/metasploit-og.png" },
    { name: "Linux", icon: "/icons/linux.png" },
  ],
  Tools: [
    { name: "Git", icon: "/icons/git.png" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "Vite", icon: "/icons/vite.svg" },
    { name: "Vercel", icon: "/icons/vercel-icon-light.svg" },
    { name: "Postman", icon: "/icons/postman.png" },
    { name: "VMware", icon: "/icons/vmware-logo-grey.svg" },
  ],
  Electronics: [
    { name: "Arduino", icon: "/icons/arduino.png" },
    { name: "Altium Circuit Maker", icon: "/icons/altium-circuitmaker.svg" },
    { name: "Matlab", icon: "/icons/matlab.png" },
  ],
};

export default function Experience() {
  const categories = Object.keys(skillCategories);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="experience" className="bg-neutral-50 scroll-mt-20">
      {/* Full-width background wrapper — sibling of the constrained div, spans the whole section */}
      <div className="relative overflow-hidden mb-24">
        <ParallaxBackground image="/videos/staircase.jpg" position="50% top" />

        <div className="absolute inset-0 bg-white/80" />
        <div className="max-w-3xl mx-auto px-6 pt-24">
          <Reveal>
            <h2 className="text-2xl font-bold mb-8">Experience</h2>
          </Reveal>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-20">
          {/* Desktop — existing centered alternating timeline, untouched */}
          <div className="hidden sm:block relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200" />
            <div className="space-y-8">
              {experience.map((job, index) => {
                const isEven = index % 2 === 0;
                const Icon =
                  job.type === "education" ? GraduationCap : Briefcase;

                return (
                  <Reveal
                    key={job.role}
                    className={`group relative flex ${isEven ? "flex-row" : "flex-row-reverse"} items-center gap-6 rounded-lg transition-colors hover:bg-white/60 p-4 -m-4`}
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                      <Icon className="w-5 h-5 text-white transition-transform duration-300" />
                    </div>

                    <div
                      className={`w-1/2 ${isEven ? "pr-12 text-right" : "pl-12"}`}
                    >
                      <h3 className="font-semibold">{job.role}</h3>
                      <p className="text-sm text-neutral-500 mb-1">
                        {job.company}
                      </p>
                      <p className="text-neutral-600 text-sm">
                        {job.description}
                      </p>
                    </div>

                    <div
                      className={`w-1/2 flex items-center ${isEven ? "pl-12 justify-start" : "pr-12 justify-end"}`}
                    >
                      <span className="text-sm text-neutral-500">
                        {job.period}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Mobile — left-aligned line, dots, content to the right */}
          <div className="sm:hidden relative px-2">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-neutral-500" />
            <div className="space-y-6">
              {experience.map((job) => {
                const Icon =
                  job.type === "education" ? GraduationCap : Briefcase;
                return (
                  <Reveal
                    key={job.role}
                    className="group relative pl-10 rounded-lg transition-colors hover:bg-white/70 p-4 -ml-4"
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center z-10 shadow-sm transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                      <Icon className="w-4 h-4 text-white transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold">{job.role}</h3>
                    <p className="text-sm text-neutral-500 mb-1">
                      {job.company} · {job.period}
                    </p>
                    <p className="text-neutral-600 text-sm">
                      {job.description}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-24">
        <Reveal>
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex gap-2 mb-8 border-b border-neutral-200 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === category
                    ? "border-neutral-900 text-neutral-900"
                    : "border-transparent text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 gap-x-6 gap-y-10 mb-24">
            {skillCategories[activeTab].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-xs text-neutral-600">{skill.name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h2 className="text-2xl font-bold mb-8">Certifications</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <Reveal key={cert.name}>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 border border-neutral-200 rounded-lg p-5 transition-colors hover:border-accent"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center transition-colors group-hover:bg-accent">
                  <Award className="w-5 h-5 text-neutral-700 transition-colors group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">{cert.issuer}</p>
                  <span className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-accent whitespace-nowrap mt-0.5">
                    View credential
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
