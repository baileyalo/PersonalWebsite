interface Credential {
  year: string;
  title: string;
  school: string;
  href?: string;
  note: string;
}

const CREDENTIALS: Credential[] = [
  {
    year: '2021',
    title: 'Graduate Diploma (Honors), Blockchain Development',
    school: 'George Brown College, Toronto',
    href: 'https://www.georgebrown.ca/',
    note: 'Build and Deployed web3 applications using Solidity, Next.js, and React.',
  },
  {
    year: '2019',
    title: 'Graduate Diploma (Honors), Network Engineering',
    school: 'IBT College, Toronto',
    note: 'Configured Windows Server, routing, and virtualized Ubuntu environments.',
  },
  {
    year: '2016',
    title: 'Bachelor of Education, Business Administration and Computer Science',
    school: 'University of Technology, Kingston',
    href: 'https://www.utech.edu.jm/',
    note: 'Combined business administration and computer science with programming, data structures, and web development.',
  },
];

export default function Education(): JSX.Element {
  return (
    <section id="education" className="sectionCont" aria-labelledby="education-heading">
      <header>
        <h2 id="education-heading">Education</h2>
      </header>
      <ul className="divide-y divide-border-color border-y border-border-color">
        {CREDENTIALS.map((item) => (
          <li key={item.year} className="py-5 grid gap-1 md:grid-cols-[4.5rem_minmax(0,1fr)]">
            <p className="text-sm text-text-muted md:pt-1">{item.year}</p>
            <div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.school}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <p className="text-accent-color mb-1">{item.school}</p>
              )}
              <p className="text-text-secondary mt-1 mb-0 max-w-[70ch]">{item.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
