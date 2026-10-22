import { ExternalLink } from 'lucide-react';

interface Skill {
  name: string;
  url: string;
}

interface SkillGroup {
  label: string;
  skills: Skill[];
}

const GROUPS: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { name: 'React', url: 'https://react.dev/' },
      { name: 'React Native', url: 'https://reactnative.dev/' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', url: 'https://nodejs.org/' },
      { name: 'Express', url: 'https://expressjs.com/' },
      { name: 'GraphQL', url: 'https://graphql.org/' },
      { name: 'REST APIs', url: 'https://restfulapi.net/' },
      { name: 'SQL', url: 'https://www.iso.org/standard/76583.html' },
    ],
  },
  {
    label: 'Data',
    skills: [
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
      { name: 'MongoDB', url: 'https://www.mongodb.com/' },
      { name: 'MySQL', url: 'https://www.mysql.com/' },
    ],
  },
  {
    label: 'Cloud and delivery',
    skills: [
      { name: 'AWS', url: 'https://aws.amazon.com/' },
      { name: 'Docker', url: 'https://www.docker.com/' },
      { name: 'Git', url: 'https://git-scm.com/' },
      { name: 'GitHub', url: 'https://github.com/' },
      { name: 'CI/CD', url: 'https://www.redhat.com/en/topics/devops/what-is-ci-cd' },
      { name: 'Linux', url: 'https://www.kernel.org/' },
      { name: 'Coralogix', url: 'https://coralogix.com/' },
      { name: 'incident.io', url: 'https://incident.io/' },
    ],
  },
  {
    label: 'Web3',
    skills: [
      { name: 'Solidity', url: 'https://soliditylang.org/' },
      { name: 'Solana', url: 'https://solana.com/' },
      { name: 'Ethereum', url: 'https://ethereum.org/' },
      { name: 'Hardhat', url: 'https://hardhat.org/' },
      { name: 'IPFS', url: 'https://ipfs.tech/' },
      { name: 'MetaMask', url: 'https://metamask.io/' },
      { name: 'Phantom', url: 'https://phantom.com/' },
      { name: 'Squads', url: 'https://squads.so/' },
    ],
  },
  {
    label: 'Support tools',
    skills: [
      { name: 'Salesforce', url: 'https://www.salesforce.com/' },
      { name: 'Zendesk', url: 'https://www.zendesk.com/' },
      { name: 'Jira', url: 'https://www.atlassian.com/software/jira' },
      { name: 'Slack', url: 'https://slack.com/' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Kafka / Confluent', url: 'https://www.confluent.io/' },
      { name: 'Event Store', url: 'https://www.eventstore.com/' },
      { name: 'Postman', url: 'https://www.postman.com/' },
      { name: 'DBeaver', url: 'https://dbeaver.io/' },
      { name: 'Redis Insight', url: 'https://redis.io/insight/' },
      { name: 'VS Code', url: 'https://code.visualstudio.com/' },
    ],
  },
];

export default function Skills(): JSX.Element {
  return (
    <section id="skills" className="container scroll-mt-20" aria-labelledby="skills-heading">
      <div className="sectionCont">
        <header>
          <h2 id="skills-heading">Skills</h2>
        </header>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="text-base font-semibold mb-3">{group.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <a
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full border border-border-color text-text-secondary hover:text-accent-color hover:border-accent-color"
                    >
                      {skill.name}
                      <ExternalLink className="w-3 h-3 shrink-0 opacity-70" aria-hidden />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
