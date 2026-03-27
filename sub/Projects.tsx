import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Bot Platform",
    description:
      "Bot Platform leveraging crypto integrated with Binance, Coinbase and Stripe — currently sandbox version.",
    url: "https://d39c8b0zoc8fe5.cloudfront.net/",
    tags: ["Crypto", "Binance", "Coinbase", "Stripe", "React", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Docker"],
  },
];

export default function Projects(): JSX.Element {
  return (
    <section className="container" aria-labelledby="projects-heading">
      <div className="sectionCont">
        <div id="projects" className="target" aria-hidden="true"></div>
        <header>
          <h2 id="projects-heading">Projects</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group bg-card-bg border border-border-color rounded-xl p-6 transition-all duration-normal hover:border-accent-color hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,212,255,0.15)]"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-color transition-colors duration-fast">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 shrink-0 text-text-secondary group-hover:text-accent-color transition-colors duration-fast mt-1" aria-hidden />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-[rgba(0,212,255,0.1)] text-accent-color border border-[rgba(0,212,255,0.2)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
