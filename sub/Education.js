// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

export default function Education() {
  return (
    <section className="sectionCont sectionContEducation">
      <div id="education" className="target"></div>
      <header>
        <h2>Education</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              {/* <h5>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2021 - 2022
                </span>
              </h5> */}
              <h3>Graduate Certificate</h3>
              <h4>George Brown College, Toronto Canada</h4>
              <ul>
                <li>
                  <span className="colorBlue">- </span>
                  <span>Blockchain Development</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              {/* <h5>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2017 - 2019
                </span>
              </h5> */}
              <h3>Graduate Certificate</h3>
              <h4>IBT College, Toronto Canada.</h4>
              <ul>
                <li>
                  <span className="colorBlue">- </span>
                  <span>Network Engineering</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              {/* <h5>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2010 - 2015
                </span>
              </h5> */}
              <h3>Bachelor of Education</h3>
              <h4>University of Technology, Kingston Jamaica</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Business and Computer Science</span>
                </li>
              </ul>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
}