import { useContext } from "react";
import { ExternalLink } from "lucide-react";
import { Contexto } from "../appContext";

export default function About(): JSX.Element {
  const context = useContext(Contexto);
  if (!context) {
    throw new Error('About must be used within ContextoProvider');
  }
  const { setIsOpen } = context;

  function openModal(): void {
    setIsOpen(true);
  }

  const email: string = "baileyalwayne@gmail.com";
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
              Software Engineer | TechOps Engineer |Technical Support Specialist | Customer Support Specialist | Web3 Developer | Banker | Educator
            </span>
          </h3>
        </header>
        <p>
          A meticulous, motivated, hardworking professional with 4 + years of experience designing, testing
          and developing software solutions. In-depth understanding of web
          technologies with focus on delivering innovative business solutions. With 8 +
          years experience in financial services providing exceptional customer
          service, client and cash management and 4 + years experience in Technical Customer
          Support in a team environment. Excels in fast-paced, high-energy and deadline-driven
          environment with willingness to take on additional tasks. Adept at
          troubleshooting and resolving complex technical issues. Strong
          communication skills with ability to explain technical information to
          non-technical users. Proven ability to work independently as well as
          collaboratively in a team setting. 
        </p>
        <p>
          Email:
          <strong>
            <a href={`mailto:${email}`}> 📧{email}</a>
          </strong>
          ; projects that I have worked on{" "}
          <strong>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/baileyalo" className="inline-flex items-center gap-1">
              Github
              <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
            </a>
          </strong>{" "}
          and visit my{" "}
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
          </strong>{" "}
          profile.
        </p>
      </div>
    </section>
  );
}
