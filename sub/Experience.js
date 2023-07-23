import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

export default function Experience() {
  return (
    <section className="sectionCont sectionContExperience">
      <div id="experience" className="target"></div>
      <header>
        <h2>Experience</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
          <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2022 - Present
                </span>
              </h5>
              <h3>Software Engineer</h3>
              <h4>Helios Creator Inc. Toronto, Canada</h4>
              <ul>
                <li>
                  <span className="colorBlue">- </span>
                  <span>Build features and applications with a mobile responsive design </span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{' '}
                  <span>Build the front-end of applications through appealing visual design using React</span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{' '}
                  <span>Write effective APIs</span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{' '}
                  <span>  Troubleshoot, debug and upgrade software</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2019 - 2022
                </span>
              </h5>
              <h3>Technical Support Specialist</h3>
              <h4>Rogers Communications Inc. Toronto, Canada</h4>
              <ul>
                <li>
                  <span className="colorBlue">- </span>
                  <span>Providing, verifying, and/or modifying network settings (TCP/IP)</span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{' '}
                  <span>Maintain 90% monthly KPIs on business satisfaction</span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{' '}
                  <span>Maintain 90% accuracy on ticket escalations across core service areas</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2010 -2016
                </span>
              </h5>
              <h3>Head Bank Teller</h3>
              <h4>Sagicor Bank Jamaica(Formerly RBC Royal Bank Jamaica) Kingston, Jamaica</h4>
              <ul>
                <li>
                  <span className="colorBlue">- </span>
                  <span> Maintain 95% in transactions processing</span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{' '}
                  <span>Maintain and manage branch cash liaising with Bank of Jamaica (BOJ) and other departments</span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{' '}
                  <span> Cross-trained as Superuser for core system upgrade and exposed to the software lifecycle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}