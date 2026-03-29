import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: 'Bot Platform',
    description:
      'Bot Platform leveraging crypto integrated with Binance, Coinbase and Stripe — [SANDBOX].',
    url: 'https://d39c8b0zoc8fe5.cloudfront.net/',
    tags: [
      'Crypto',
      'Binance',
      'Coinbase',
      'Stripe',
      'React',
      'TypeScript',
      'Node.js',
      'AWS',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    title: 'European Football League Table',
    description: 'European Football League Table displaying real-time scores and standings',
    url: 'https://euleague.netlify.app/',
    tags: ['Football', 'React', 'TypeScript', 'Netlify', 'API Integration'],
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
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-color transition-colors duration-fast">
                    {project.title}
                  </h3>
                  {project.tags.includes('Crypto') && (
                    <img
                      src="/icon.png"
                      alt="Bot Platform Icon"
                      className="w-7 h-7 rounded-md bg-[#151c28] border border-border-color mb-4"
                    />
                  )}
                  {project.tags.includes('Football') && (
                    <>
                      <img
                        src="/PremierLeague.png"
                        alt="Football League Table Icon"
                        className="w-7 h-7 rounded-md bg-[#151c28] border border-border-color mb-4"
                      />
                      <img
                        src="/LaLiga.png"
                        alt="Football League Table Icon"
                        className="w-7 h-7 rounded-md bg-[#151c28] border border-border-color mb-4"
                      />
                      <img
                        src="/SerieA.png"
                        alt="Football League Table Icon"
                        className="w-7 h-7 rounded-md bg-[#151c28] border border-border-color mb-4"
                      />
                    </>
                  )}
                </div>
                <ExternalLink
                  className="w-4 h-4 shrink-0 text-text-secondary group-hover:text-accent-color transition-colors duration-fast mt-1"
                  aria-hidden
                />
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
