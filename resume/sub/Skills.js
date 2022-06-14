

import Skill from "../components/skill";
import CircularProg from "../components/circularProg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const TechSkills = [
    { name: "HTML", progress: "80" },
    { name: "CSS", progress: "80" },
    { name: "JavaScript", progress: "75" },
    { name: "React", progress: "70" },
    { name: "SOLIDITY", progress: "75" },
    { name: "Git / GitHub", progress: "50" },
  ];
  const overallCirSkills = [
    { name: "Web Development", progress: "70" },
    { name: "Database Management", progress: "50" },
    { name: "Blockchain", progress: "55" },
  ];
  const softSkills = [
    "TeamWork",
    "Communication",
    "Problem Solving Skills",
  ];
  const softwareSkills = [
    { name: "VS Code", progress: "80" },
    { name: "NODE JS", progress: "70" },
    { name: "MONGODB", progress: "50" },
    { name: "ETHEREUM", progress: "65" },
    { name: "TRUFFLE", progress: "75" },
    { name: "HARDHAT", progress: "70" },
    { name: "GANACHE", progress: "70" },
    { name: "PINATA", progress: "70" },
  ];
  return (
    <section className="container">
      <div className="containerCont sectionCont  sectionContSkills">
        <header>
          <h2>Skills</h2>
        </header>
        <div className="rowFlexRes breakMainTechOverall">
          <div className="cardContainer">
            <div className="card">
              <h3>Tech | Frameworks</h3>
              <ul>
                {TechSkills.map((skill, pos) => (
                  <Skill key={pos} skill={skill} 
              
                 />
                ))}
              </ul>
            </div>
          </div>
          <div className="cardContainer">
            <div className="card">
              <h3>Coverage</h3>
              <ul className="rowFlexRes breakOverall">
                {overallCirSkills.map((skill, pos) => (
                  <CircularProg key={pos} skill={skill} />
                ))}
              </ul>
              <ul>
                <li>
                  <ul className="rowFlexRes">
                    {softSkills.slice(0, 2).map((skill, pos) => (
                      <li key={pos}>
                        <FontAwesomeIcon color="var(--red)" icon={faCheck} />{" "}
                        <span style={{ opacity: "0.9" }}>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ul className="rowFlexRes">
                    {softSkills.slice(2, 4).map((skill, pos) => (
                      <li key={pos}>
                        <FontAwesomeIcon color="var(--red)" icon={faCheck} />{" "}
                        <span style={{ opacity: "0.9" }}>{`${skill}`}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="card">
            <h3>Software Tools</h3>
            <ul>
              {softwareSkills.map((skill, pos) => (
                <Skill key={pos} skill={skill} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}