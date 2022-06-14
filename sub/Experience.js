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
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2019 - Present
                </span>
              </h5>
              <h3>Technical Support Specialist</h3>
              <h4>Rogers Communications Inc.</h4>
              <ul>
                <li>
                  <span className="colorBlue">- </span>
                  <span>Providing, verifying, and/or modifying network settings (TCP/IP)</span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{' '}
                  <span>Maintain 90% monthly KPIs on customer satisfaction</span>
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
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2018 -2019
                </span>
              </h5>
              <h3>IT TECHNICAL SUPPORT SPECIALIST</h3>
              <h4>Total Credit Recovery</h4>
              <ul>
                <li>
                  <span className="colorBlue">- </span>
                  <span>Configure and install new employee workstations across all departments</span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{' '}
                  <span>Maintain 90% accuracy on ticket escalation</span>
                </li>
                <li>
                  <span className="colorBlue">- </span>{' '}
                  <span>Configure and maintain Active Directory and GPO</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2010 -2016
                </span>
              </h5>
              <h3>Head Teller</h3>
              <h4>Sagicor Bank Jamaica(Formerly RBC Royal Bank Jamaica)</h4>
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