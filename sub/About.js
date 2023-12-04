import { useContext } from "react";
import { Contexto } from "../appContext";

export default function About() {
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }

  const email = "baileyalwayne@gmail.com";
  return (
    <section className="container">
      <div className="containerCont sectionCont sectionContAbout">
        <div id="about" className="target"></div>
        <header>
          <h2>About me</h2>
          <h3>
            My name is Alwayne Bailey,
            <br />
            <span className="colorRed">
              Front-End Developer | Blockchain Developer | Banker | Educator
            </span>
          </h3>
        </header>

        <p>
          Meticulous Professional with 3+ years of experience designing, testing
          and developing software solutions. In-depth understanding of web
          technologies with focus on delivering innovative business solutions. With 7+
          years experience in financial services providing exceptional customer
          service and cash management and 2+ years experience in Technical
          Support. Excels in fast-paced, high-energy and deadline-driven
          environment with willingness to take on additional tasks.
        </p>
        <p>
          Email:
          <strong>
            <a href={`mailto:${email}`}> 📧{email}</a>
          </strong>
          ; projects that I have worked on{" "}
          <strong>
            <a target="_blank" href="https://github.com/baileyalo">
              github
            </a>
          </strong>{" "}
          and visit my{" "}
          <strong>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alwayne-bailey/"
            >
              linkedin
            </a>
          </strong>{" "}
          profile.
        </p>
      </div>
    </section>
  );
}
