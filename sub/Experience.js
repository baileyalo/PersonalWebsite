import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

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
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2022 - Present{" "}
                </span>
              </h5>
              <h3>Software Developer</h3>
              <h4>Helios Creator Inc. Toronto, Canada.</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>
                    Maintain and develop application with Solana, React.js,
                    React Native, MongoDB, PostgreSQL, AWS, Node.js, Python.{" "}
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    {" "}
                    Design the architecture of core components and redesign of
                    existing components to build a maintainable code base.
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    {" "}
                    Lead in the building and design of API routes structure for
                    both web and mobile for web3.
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Spearheaded deploying updates to Appstore , Play store and
                    Solana Dapp store.
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Liaise with external venders with integration and
                    implementation of different third party frameworks.
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Collaborate closely and be responsive to inquiries from
                    internal providers to handle and ensure the timeliness and
                    quality of outputs
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Enhance code quality by refactoring legacy code base for
                    better reuse-ability.
                  </span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2019 - 2022{" "}
                </span>
              </h5>
              <h3>Technical Support Specialist</h3>
              <h4>Rogers Communications Inc. Toronto, Canada.</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>
                    Providing, verifying, and/or modifying network settings
                    (TCP/IP)
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Maintain 90% monthly KPIs on business satisfaction
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Recommending solutions- Connect customers with the right
                    self serve tools proactively suggest other options.
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Empowering customers to understand and utilize Roger’s
                    product suite.
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Track and document all dispatch transactions in tracking
                    tool and follow-up with internal teams.
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Leveraging Rogers reporting to assist internal teams with
                    data collection.
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Maintain customer satisfaction rating above 90% through
                    telephone, email and chat.
                  </span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2010 -2016{" "}
                </span>
              </h5>
              <h3>Lead Bank Teller</h3>
              <h4>
                Sagicor Bank Jamaica(Formerly RBC Royal Bank Jamaica) Kingston,
                Jamaica.
              </h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>
                    • Client Engagement- Maintain high level of customer
                    satisfaction for each client on each interaction.
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Maintain and manage branch cash liaising with Bank of
                    Jamaica (BOJ) and other departments
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Completes complex & diverse tasks within given rules/limits
                    and may include handling escalations from other employees.
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Assist with daily branch closures and maintenance of
                    infrastructure
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Product Knowledge- Expert in Banks comprehensive financial
                    products and services.
                  </span>
                </li>
                <li>
                  <span className="colorRed">- </span>{" "}
                  <span>
                    Assists in processing more complex transactions and customer
                    requests.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
