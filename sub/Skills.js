

import Skill from "../components/skill";
import CircularProg from "../components/circularProg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const TechSkills = [
    { name: "HTML", progress: "90" },
    { name: "CSS", progress: "90" },
    { name: "JavaScript", progress: "90" },
    { name: "TypeScript", progress: "85" },
    { name: "React Js", progress: "85" },
    { name: "NODE JS", progress: "85" },
    { name: "React Native", progress: "90" },
    { name: "SOLIDITY", progress: "85" },
    { name: "Git", progress: "90" },
  ];
  const overallCirSkills = [
    { name: "Web Development", progress: "90" },
    { name: "App Development", progress: "90" },
    { name: "Database Management", progress: "70" },
    { name: "Blockchain", progress: "85" },
  ];
  const softSkills = [
    "TeamWork",
    "Communication",
    "Critical thinking",
    "Problem-solving",
    "Flexibility",
  ];
  const softwareSkills = [
    { name: "VS CODE", progress: "90" },
    { name: "AWS", progress: "80" },
    { name: "SOLANA", progress: "80" },
    { name: "MONGODB-COMPASS", progress: "85" },
    { name: "ETHEREUM", progress: "65" },
    { name: "TRUFFLE", progress: "85" },
    { name: "HARDHAT", progress: "80" },
    { name: "GANACHE", progress: "90" },
    { name: "IPFS", progress: "90" },
    { name: "POSTMAN", progress: "80" },
    { name: "ANDROID STUDIO", progress: "90" },
    { name: "CLICK-UP", progress: "80" },
    { name: "GITHUB", progress: "90" },
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