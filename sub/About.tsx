import { useContext } from 'react';
import { ExternalLink } from 'lucide-react';
import { Contexto } from '../appContext';

export default function About(): JSX.Element {
  const context = useContext(Contexto);
  if (!context) {
    throw new Error('About must be used within ContextoProvider');
  }
  const { setIsOpen } = context;

  function openModal(): void {
    setIsOpen(true);
  }

  const email: string = 'baileyalwayne@gmail.com';
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
              Software Engineer | TechOps Engineer |Technical Support Specialist | Customer Support
              Specialist | Web3 Developer | Banker | Teacher
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
          Core Skills: • JavaScript / Typescript (React, Node.js, React Native) • AWS, MongoDB,
          PostgreSQL • REST APIs • Web3 / Blockchain (Solana, Ethereum, Binance, Coinbase) • Client
          solutions & technical support ( Monitoring, Debugging, Data Patch, Optimization ) I’m
          passionate about building impactful technology and continuously learning. I’m open to
          opportunities where I can contribute to innovative teams across technical support,
          engineering, fintech, and Web3.
        </p>
        <p>
          Email:
          <strong>
            <a href={`mailto:${email}`}> 📧{email}</a>
          </strong>
          ; projects that I have worked on{' '}
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
          </strong>{' '}
          and visit my{' '}
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/alwayne-bailey/"
              className="inline-flex items-center gap-1"
            >
              linkedin
              <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
            </a>
          </strong>{' '}
          profile.
        </p>
      </div>
    </section>
  );
}
