interface Role {
  period: string;
  title: string;
  org: string;
  points: string[];
}

const ROLES: Role[] = [
  {
    period: '2024 – 2025',
    title: 'Client Support Analyst',
    org: 'RepRisk · North America, remote',
    points: [
      'Onboarded and offboarded B2B clients through a secure transition process.',
      'Tested and debugged REST API integrations so clients could connect reliably.',
      'Wrote SQL for reporting and kept SFTP transfers and automated data feeds consistent.',
    ],
  },
  {
    period: '2022 – 2024',
    title: 'Software Developer',
    org: 'Helios Creator Inc. · North America, remote',
    points: [
      'Built and maintained products with Solana, React, React Native, Node.js, and AWS.',
      'Designed core architecture and the API structure for web and mobile Web3.',
      'Shipped releases to the App Store, Play Store, and Solana dApp Store.',
      'Refactored legacy code so more of the codebase could be reused.',
    ],
  },
  {
    period: '2020 – 2022',
    title: 'Technical Support Specialist',
    org: 'Rogers Communications · Toronto',
    points: [
      'Verified and updated customer network settings, including TCP/IP.',
      'Kept monthly business satisfaction and customer satisfaction above 90%.',
      'Documented dispatch work and used internal reporting to support other teams.',
    ],
  },
  {
    period: '2010 – 2016',
    title: 'Lead Bank Teller',
    org: 'Sagicor Bank Jamaica · Kingston',
    points: [
      'Maintained a high standard of service on each client interaction.',
      'Managed branch cash with the Bank of Jamaica and internal departments.',
      'Handled complex transactions and escalations within set limits.',
    ],
  },
];

export default function Experience(): JSX.Element {
  return (
    <section id="experience" className="sectionCont" aria-labelledby="experience-heading">
      <header>
        <h2 id="experience-heading">Experience</h2>
      </header>
      <ol className="relative border-l border-border-color ml-2 space-y-10">
        {ROLES.map((role) => (
          <li key={role.period + role.title} className="ml-6 relative">
            <span
              className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-accent-color"
              aria-hidden
            />
            <p className="text-sm text-text-muted mb-1">{role.period}</p>
            <h3 className="text-lg font-semibold mb-0.5">{role.title}</h3>
            <p className="text-text-secondary mb-3">{role.org}</p>
            <ul className="space-y-2">
              {role.points.map((point) => (
                <li key={point} className="text-text-secondary leading-relaxed pl-4 relative">
                  <span
                    className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent-color"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
