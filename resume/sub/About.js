import { useContext } from 'react';
import { Contexto } from '../appContext';

export default function About() {
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }

  const email = 'baileyalwayne@gmail.com';
  return (
    <section className="container">
      <div className="containerCont sectionCont sectionContAbout">
        <div id="about" className="target"></div>
        <header>
          <h2>About me</h2>
          <h3>
            My name is Alwayne Bailey,{' '}
            <span className="colorRed">Blockchain Developer | Full Stack Developer | Educator</span>
          </h3>
        </header>

        <p>
        A dedicated and result-oriented professional possessing knowledge 
        of troubleshooting and programming, seeking a position as a Blockchain Engineer, 
        in efforts to make the most of my coding and troubleshooting skills and leverage 
        the goals and ambitions of the organization.
        </p>
        <p>         
          Email:
          <strong>
            <a href={`mailto:${email}`}> 📧{email}</a>
          </strong>
          ; projects that I have worked on {' '}
          <strong >
            <a target="_blank" href="https://github.com/baileyalo">
              github
            </a>
          </strong>{' '}
          and visit my{' '}
          <strong>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alwayne-bailey/"
            >
              linkedin
            </a>
          </strong>{' '}
          profile.
        </p>
      </div>
    </section>
  );
}