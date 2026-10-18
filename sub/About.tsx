const coreSkills = [
  'JavaScript / TypeScript (React, Node.js, React Native)',
  'AWS, MongoDB, PostgreSQL',
  'REST APIs',
  'Web3 / Blockchain (Solana, Ethereum, Binance, Coinbase)',
  'Client solutions and technical support (monitoring, debugging, data patch, optimization)',
] as const;

export default function About(): JSX.Element {
  return (
    <section className="container" aria-labelledby="about-heading">
      <div className="sectionCont sectionContAbout">
        <div id="about" className="target" aria-hidden="true"></div>
        <header>
          <h2 id="about-heading">About</h2>
        </header>
        <div className="aboutBio">
          <p className="aboutLead">
            I’m a TechOps Engineer and Software Engineer with 4+ years of experience building
            scalable applications, combined with 8+ years in financial services and client-facing
            roles.
          </p>
          <p>
            I specialize in developing full-stack solutions using React, Node.js, and AWS, with a
            growing focus on fintech systems and Web3 technologies. My work spans designing system
            architecture, refactoring legacy code, integrating APIs, and delivering reliable,
            user-focused applications.
          </p>
          <p>
            What sets me apart is my ability to bridge technical development with client needs. With
            a background in technical support and client services across SaaS and B2B platforms, I
            understand how to build systems that are not only functional—but intuitive, scalable,
            and aligned with real user problems.
          </p>
          <p>
            I also bring hands-on experience in blockchain development, particularly within the
            Solana ecosystem, where I’ve worked on building secure and efficient decentralized
            applications.
          </p>
          <p>
            Before transitioning into tech, I spent over 8 years in financial services, giving me
            strong domain knowledge in fintech environments and a deep understanding of customer
            experience.
          </p>
          <h3 className="text-base font-semibold mb-3">Core skills</h3>
          <ul className="aboutSkills">
            {coreSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <p>
            I’m passionate about building impactful technology and continuously learning. I’m open
            to opportunities where I can contribute to innovative teams across technical support,
            engineering, fintech, and Web3.
          </p>
        </div>
      </div>
    </section>
  );
}
