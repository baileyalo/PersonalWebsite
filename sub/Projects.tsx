import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ProjectVisual {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  problem: string;
  built: string;
  result: string;
  url: string;
  tags: string[];
  visuals: ProjectVisual[];
}

const PROJECTS: Project[] = [
  {
    title: 'Tekz Automated Bot Platform',
    problem: 'Crypto operations were split across exchanges and a separate payment provider.',
    built:
      'A sandbox platform that connects Binance, Coinbase, and Stripe, built with React, Node.js, PostgreSQL, and AWS.',
    result: 'The integrated flow is available in a staging environment.',
    url: 'https://staging.abtekz.com/',
    tags: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'],
    visuals: [{ src: '/icon.png', alt: 'Tekz platform mark' }],
  },
  {
    title: 'European Football League Table',
    problem: 'League position and scores lived in separate places.',
    built: 'A React app that shows live scores and standings for major European leagues.',
    result: 'Premier League, La Liga, and Serie A are readable in one view.',
    url: 'https://euleague.netlify.app/',
    tags: ['React', 'TypeScript', 'API'],
    visuals: [
      { src: '/PremierLeague.png', alt: 'Premier League' },
      { src: '/LaLiga.png', alt: 'La Liga' },
      { src: '/SerieA.png', alt: 'Serie A' },
    ],
  },
];

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="container" aria-labelledby="projects-heading">
      <div className="sectionCont">
        <header>
          <h2 id="projects-heading">Selected work</h2>
        </header>
        <div className="flex flex-col gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.url}
              className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] items-stretch rounded-xl border border-border-color bg-card-bg p-5 sm:p-6"
            >
              <div className="flex items-center justify-center gap-3 rounded-lg bg-secondary-bg border border-border-color min-h-[140px] p-4">
                {project.visuals.map((visual) => (
                  <Image
                    key={visual.src}
                    src={visual.src}
                    alt={visual.alt}
                    width={72}
                    height={72}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-md object-contain"
                  />
                ))}
              </div>
              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary mb-0">{project.title}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 self-start min-h-11 px-3 rounded-md border border-accent-color/40 text-sm font-medium text-accent-color hover:bg-accent-color/10"
                  >
                    Live site
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
                <dl className="space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-medium text-text-primary">Problem</dt>
                    <dd className="text-text-secondary">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-text-primary">What I built</dt>
                    <dd className="text-text-secondary">{project.built}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-text-primary">Result</dt>
                    <dd className="text-text-secondary">{project.result}</dd>
                  </div>
                </dl>
                <ul className="flex flex-wrap gap-2 mt-4" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full border border-border-color text-text-secondary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
