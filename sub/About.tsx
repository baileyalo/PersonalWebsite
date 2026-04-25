import { ExternalLink } from 'lucide-react';

export default function About(): JSX.Element {
  const email: string = 'baileyalwayne@gmail.com';
  const linkClassName =
    'text-accent-color underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-1';
  return (
    <section className="container" aria-labelledby="about-heading">
      <div className="sectionCont sectionContAbout">
        <div id="about" className="target" aria-hidden="true"></div>
        <header>
          <h2 id="about-heading">About me</h2>
          <h3>
            My name is Alwayne Bailey,
            <br />
            <span className="colorRed">
              TechOps Engineer | Software Engineer | Web3 Engineer | Technical Support Specialist |
              Customer Support | Banker | Teacher
            </span>
          </h3>
        </header>
        <p>
          A TechOps Engineer and Software Engineer with 4+ years of experience building scalable
          applications, combined with 8+ years in financial services and client-facing roles. I
          specialize in developing full-stack solutions using React, Node.js, and AWS, with a
          growing focus on fintech systems and Web3 technologies. My work spans designing system
          architecture, refactoring legacy code, integrating APIs, and delivering reliable,
          user-focused applications. What sets me apart is my ability to bridge technical
          development with client needs. With a background in technical support and client services
          across SaaS and B2B platforms, I understand how to build systems that are not only
          functional—but intuitive, scalable, and aligned with real user problems. I also bring
          hands-on experience in blockchain development, particularly within the Solana ecosystem,
          where I’ve worked on building secure and efficient decentralized applications. Before
          transitioning into tech, I spent over 8 years in financial services, giving me strong
          domain knowledge in fintech environments and a deep understanding of customer experience.
        </p>
        <div className="mt-4 mb-4 rounded-lg border border-border-color bg-card-bg/40 p-4">
          <h4 className="mb-3 text-base font-semibold text-text-primary">Core Skills</h4>
          <ul className="space-y-2 text-text-secondary">
            <li className="leading-relaxed">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                JavaScript
              </a>{' '}
              /{' '}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                TypeScript
              </a>{' '}
              (
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                React
              </a>
              ,{' '}
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Node.js
              </a>
              ,{' '}
              <a
                href="https://reactnative.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                React Native
              </a>
              )
            </li>
            <li className="leading-relaxed">
              <a
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                AWS
              </a>
              ,{' '}
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                MongoDB
              </a>
              ,{' '}
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                PostgreSQL
              </a>
            </li>
            <li className="leading-relaxed">
              <a
                href="https://restfulapi.net/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                REST APIs
              </a>
            </li>
            <li className="leading-relaxed">
              Web3 / Blockchain (
              <a
                href="https://solana.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Solana
              </a>
              ,{' '}
              <a
                href="https://ethereum.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Ethereum
              </a>
              ,{' '}
              <a
                href="https://www.binance.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Binance
              </a>
              ,{' '}
              <a
                href="https://www.coinbase.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Coinbase
              </a>
              )
            </li>
          </ul>
        </div>
        <p>
          I’m passionate about building impactful technology and continuously learning. I’m open to
          opportunities where I can contribute to innovative teams across technical support,
          engineering, fintech, and Web3.
        </p>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <strong className="text-text-primary">Email:</strong>
          <a href={`mailto:${email}`} className="inline-flex items-center gap-1 text-accent-color">
            <span aria-hidden>📧</span>
            <span>{email}</span>
          </a>
          <span className="text-text-secondary">|</span>
          <span>Projects:</span>
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/baileyalo"
              className="inline-flex items-center gap-1"
            >
              Github
              <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
            </a>
          </strong>
          <span> | </span>
          <span>Profile:</span>
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/alwayne-bailey/"
              className="inline-flex items-center gap-1"
            >
              LinkedIn
              <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
            </a>
          </strong>{' '}
          profile.
        </p>
      </div>
    </section>
  );
}
