import Skill from "../components/skill";
import CircularProg from "../components/circularProg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { slideUp, staggerContainer, staggerItem, fadeIn } from "../utils/animations";

export default function Skills() {
  const TechSkills = [
    { name: "HTML", progress: "90" },
    { name: "CSS", progress: "90" },
    { name: "JavaScript", progress: "90" },
    { name: "TypeScript", progress: "90" },
    { name: "Solidity", progress: "85" },
    { name: "React Js", progress: "90" },
    { name: "React Native", progress: "90" },
    { name: "Node js", progress: "90" },
    { name: "Express js", progress: "90" },
    { name: "GraphQL", progress: "85" },
    { name: "MongoDB", progress: "90" },
    { name: "MySQL", progress: "90" },
    { name: "PostgreSQL", progress: "90" },
    { name: "Git", progress: "90" },
  ];
  
  const overallCirSkills = [
    { name: "Technical & Customer Support", progress: "90" },
    { name: "Mobile & Web App Development", progress: "90" },
    { name: "Database Management", progress: "85" },
    { name: "Cloud Management", progress: "80" },
  ];
  
  const softSkills = [
    "TeamWork",
    "Communication", 
    "Critical thinking",
    "Problem-solving",
    "Adaptability",
    "Accountability",
    "Time Management",
  ];
  
  const softwareSkills = [
    { name: "VS-CODE", progress: "90" },
    { name: "ANDROID-STUDIO", progress: "90" },
    { name: "AWS", progress: "80" },
    { name: "GITHUB", progress: "90" },
    { name: "CLICK-UP", progress: "90" },
    { name: "JIRA", progress: "80" },
    { name: "POSTMAN", progress: "80" },
    { name: "FIGMA", progress: "85" },
    { name: "SALESFORCE", progress: "85" },
    { name: "ZENDESK", progress: "85" },
    { name: "SOLANA", progress: "80" },
    { name: "ETHEREUM", progress: "65" },
    { name: "HYPERLEDGER-FABRIC", progress: "65" },
    { name: "TRUFFLE", progress: "85" },
    { name: "HARDHAT", progress: "80" },
    { name: "GANACHE", progress: "90" },
    { name: "IPFS", progress: "90" },
    { name: "WEB3-RPC", progress: "80" },
  ];

  return (
    <motion.section 
      className="container"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="containerCont sectionCont sectionContSkills">
        <div id="skills" className="target"></div>
        <motion.header
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Skills</h2>
        </motion.header>
        
        <div className="rowFlexRes breakMainTechOverall">
          <motion.div 
            className="cardContainer"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="card">
              <h3>Tech | Frameworks</h3>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {TechSkills.map((skill, index) => (
                  <Skill key={index} skill={skill} index={index} />
                ))}
              </motion.ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="cardContainer"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="card">
              <h3>Coverage</h3>
              <motion.ul 
                className="rowFlexRes breakOverall"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {overallCirSkills.map((skill, index) => (
                  <CircularProg key={index} skill={skill} index={index} />
                ))}
              </motion.ul>
              
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <li>
                  <ul className="rowFlexRes">
                    {softSkills.slice(0, 2).map((skill, index) => (
                      <motion.li 
                        key={index}
                        variants={staggerItem}
                        whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      >
                        <FontAwesomeIcon color="var(--accent-color)" icon={faCheck} />{" "}
                        <span style={{ opacity: "0.9" }}>{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ul className="rowFlexRes">
                    {softSkills.slice(3, 5).map((skill, index) => (
                      <motion.li 
                        key={index}
                        variants={staggerItem}
                        whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      >
                        <FontAwesomeIcon color="var(--accent-color)" icon={faCheck} />{" "}
                        <span style={{ opacity: "0.9" }}>{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ul className="rowFlexRes">
                    {softSkills.slice(5, 8).map((skill, index) => (
                      <motion.li 
                        key={index}
                        variants={staggerItem}
                        whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      >
                        <FontAwesomeIcon color="var(--accent-color)" icon={faCheck} />{" "}
                        <span style={{ opacity: "0.9" }}>{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="cardContainer"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="card">
            <h3>Software Tools</h3>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {softwareSkills.map((skill, index) => (
                <Skill key={index} skill={skill} index={index} />
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
