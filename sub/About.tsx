import { ExternalLink } from 'lucide-react';

const roles = [
  'TechOps Engineer',
  'Software Engineer',
  'Web3 Engineer',
  'Technical Support',
  'Customer Support',
  'Banker',
  'Teacher',
] as const;

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
          <h3>My name is Alwayne Bailey</h3>
          <ul className="aboutRoleChips" aria-label="Roles">
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </header>
        <div className="aboutBio">
          <p className="aboutLead">
            TechOps and Software Engineer with 6+ years building scalable apps, plus 8+ years in
            financial services and client-facing roles.
          </p>
          <p>
            I specialize in full-stack solutions with{' '}
            <strong className="aboutHighlight">React</strong>,{' '}
            <strong className="aboutHighlight">Node.js</strong>, and{' '}
            <strong className="aboutHighlight">AWS</strong>, with a growing focus on{' '}
            <strong className="aboutHighlight">fintech</strong> and Web3. My work spans system
            architecture, legacy refactoring, API integration, and reliable, user-focused
            applications.
          </p>
          <p>
            What sets me apart is bridging technical development with client needs—from SaaS and B2B
            support into products that feel intuitive and solve real problems. I also have hands-on{' '}
            <strong className="aboutHighlight">Solana</strong> experience building secure dApps,
            grounded in earlier financial-services work and a strong sense of customer experience.
          </p>
        </div>
        <div className="mt-4 mb-4 rounded-lg border border-border-color bg-card-bg/40 p-4">
          <h4 className="mb-3 text-base font-semibold text-text-primary text-center">
            Core Tools & Technologies
          </h4>
          <ul className="space-y-2 text-text-secondary">
            <li className="leading-relaxed flex items-center gap-1 justify-center">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                JavaScript
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>{' '}
              |
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                TypeScript
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>{' '}
              |
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                React
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>
              |{' '}
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Node.js
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>
              |{' '}
              <a
                href="https://reactnative.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                React Native
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>
            </li>
            <li className="leading-relaxed flex items-center gap-1 justify-center">
              <a
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                AWS
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>
              |{' '}
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                MongoDB
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>
              |{' '}
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                PostgreSQL
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>
            </li>
            <li className="leading-relaxed flex items-center gap-1 justify-center">
              <a
                href="https://restfulapi.net/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                REST APIs
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>
            </li>
            <li className="leading-relaxed flex items-center gap-1 justify-center">
              <a
                href="https://solana.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Solana
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>
              |{' '}
              <a
                href="https://ethereum.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Ethereum
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>
              |{' '}
              <a
                href="https://www.binance.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Binance
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>
              |{' '}
              <a
                href="https://www.coinbase.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Coinbase
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
              </a>
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
