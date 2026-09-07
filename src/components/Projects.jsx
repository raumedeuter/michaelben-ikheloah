import { useState, useRef } from "react";
import { Code2, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

function ProjectVideo({ src, poster, title }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [isTouch] = useState(
    () => window.matchMedia("(hover: none) and (pointer: coarse)").matches,
  );

  function handleEnter() {
    if (isTouch) return;
    setPlaying(true);
    videoRef.current.play();
  }

  function handleLeave() {
    if (isTouch) return;
    setPlaying(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }

  function handleTap() {
    if (!isTouch) return;
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    } else {
      setPlaying(true);
      videoRef.current.play();
    }
  }

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleTap}
      className="relative w-full rounded-lg overflow-hidden cursor-pointer"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        className="w-full rounded-lg"
        aria-label={title}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
          playing ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <span className="text-white text-sm font-medium tracking-wide">
          {isTouch ? "Tap to preview" : "Hover to preview"}
        </span>
      </div>
    </div>
  );
}

function CornerFrame() {
  const corner =
    "absolute w-6 h-6 border-neutral-200 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:border-accent";
  return (
    <>
      <span className={`${corner} top-0 left-0 border-t-2 border-l-2`} />
      {/* <span className={`${corner} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} /> */}
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2`} />
    </>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative scroll-mt-20">
      <div className="dot-grid absolute inset-0 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 py-24">
        <Reveal>
          <h2 className="text-2xl font-bold mb-8">Projects Archive</h2>
        </Reveal>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <Reveal
              key={project.id}
              className={`group relative flex flex-col ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"} gap-8 items-center mb-20 p-8`}
            >
              <CornerFrame />

              <div className="w-full sm:w-1/2">
                {project.video ? (
                  <ProjectVideo
                    src={project.video}
                    poster={project.image}
                    title={project.title}
                  />
                ) : (
                  project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-lg"
                    />
                  )
                )}
              </div>

              <div
                className={`w-full sm:w-1/2 ${isEven ? "sm:text-left" : "sm:text-right"}`}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-neutral-600 mb-4">{project.description}</p>
                <ul
                  className={`flex flex-wrap gap-2 text-xs text-neutral-500 mb-5 ${isEven ? "" : "sm:justify-end"}`}
                >
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border border-neutral-200 rounded px-2 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className={`flex gap-3 ${isEven ? "" : "sm:justify-end"}`}>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium border border-neutral-900 rounded-full px-4 py-2 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-neutral-900 hover:text-white"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium border border-neutral-200 rounded-full px-4 py-2 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-neutral-900"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}

        {showAll && (
          <Reveal className="mt-16 divide-y divide-neutral-200">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="py-5 flex justify-between items-center flex-wrap gap-2"
              >
                <div>
                  <h4 className="font-medium">{project.title}</h4>
                  <p className="text-sm text-neutral-500">
                    {project.stack.join(" · ")}
                  </p>
                </div>
                <div className="flex gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline"
                    >
                      View →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source on GitHub`}
                      className="text-sm underline"
                    >
                      Code →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Reveal>
        )}

        {otherProjects.length > 0 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mx-auto block border border-neutral-900 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-neutral-900 hover:text-white mt-10"
          >
            {showAll ? "See Less" : "See More Projects"}
          </button>
        )}
      </div>
    </section>
  );
}
