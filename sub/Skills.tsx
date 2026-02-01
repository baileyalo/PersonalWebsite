import Skill from "../components/skill";
import CircularProg from "../components/circularProg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { slideUp, staggerContainer, staggerItem, fadeIn } from "../utils/animations";
import { useReducedMotion } from "../utils/useReducedMotion";

interface SkillData {
  name: string;
  progress: string;
  url: string;
}

interface CircularSkillData {
  name: string;
  progress: number;
}

export default function Skills(): JSX.Element {
  const TechSkills: SkillData[] = [
    { name: "HTML", progress: "90", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", progress: "90", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", progress: "90", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", progress: "90", url: "https://www.typescriptlang.org/" },
    { name: "Solidity", progress: "85", url: "https://soliditylang.org/" },
    { name: "React Js", progress: "90", url: "https://reactjs.org/" },
    { name: "React Native", progress: "90", url: "https://reactnative.dev/" },
    { name: "Node js", progress: "90", url: "https://nodejs.org/" },
    { name: "Express js", progress: "90", url: "https://expressjs.com/" },
    { name: "GraphQL", progress: "85", url: "https://graphql.org/" },
    { name: "MongoDB", progress: "90", url: "https://www.mongodb.com/" },
    { name: "MySQL", progress: "90", url: "https://www.mysql.com/" },
    { name: "PostgreSQL", progress: "90", url: "https://www.postgresql.org/" },
    { name: "Git", progress: "90", url: "https://git-scm.com/" },
  ];
  
  const overallCirSkills: CircularSkillData[] = [
    { name: "Technical & Customer Support", progress: 90 },
    { name: "Mobile & Web App Development", progress: 90 },
    { name: "Database Management", progress: 85 },
    { name: "Cloud Management", progress: 85 },
    { name: "Web3 Development", progress: 90 }
  ];
  
  const softSkills: string[] = [
    "TeamWork",
    "Communication", 
    "Critical thinking",
    "Problem-solving",
    "Adaptability",
    "Accountability",
    "Time Management",
  ];
  
  const softwareSkills: SkillData[] = [
    { name: "VS-CODE", progress: "90", url: "https://code.visualstudio.com/" },
    { name: "ANDROID-STUDIO", progress: "90", url: "https://developer.android.com/studio" },
    { name: "AWS", progress: "90", url: "https://aws.amazon.com/" },
    { name: "GITHUB", progress: "90", url: "https://github.com/" },
    { name: "CLICK-UP", progress: "90", url: "https://clickup.com/" },
    { name: "SLACK", progress: "90", url: "https://slack.com/" },
    { name: "JIRA", progress: "90", url: "https://www.atlassian.com/software/jira" },
    { name: "POSTMAN", progress: "90", url: "https://www.postman.com/" },
    { name: "FIGMA", progress: "85", url: "https://www.figma.com/" },
    { name: "SALESFORCE", progress: "90", url: "https://www.salesforce.com/" },
    { name: "ZENDESK", progress: "85", url: "https://www.zendesk.com/" },
    { name: "SOLANA", progress: "90", url: "https://solana.com/" },
    { name: "ETHEREUM", progress: "85", url: "https://ethereum.org/" },
    { name: "HYPERLEDGER-FABRIC", progress: "65", url: "https://www.hyperledger.org/use/fabric" },
    { name: "TRUFFLE", progress: "85", url: "https://trufflesuite.com/" },
    { name: "HARDHAT", progress: "80", url: "https://hardhat.org/" },
    { name: "GANACHE", progress: "90", url: "https://trufflesuite.com/ganache/" },
    { name: "IPFS", progress: "90", url: "https://ipfs.tech/" },
    { name: "WEB3-RPC", progress: "90", url: "https://web3js.readthedocs.io/" },
  ];

  const reducedMotion = useReducedMotion();
  const motionTransition = reducedMotion ? { duration: 0 } : undefined;

  return (
    <motion.section
      className="container"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={motionTransition}
      aria-labelledby="skills-heading"
    >
      <div className="sectionCont sectionContSkills">
        <div id="skills" className="target" aria-hidden="true"></div>
        <motion.header
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={motionTransition}
        >
          <h2 id="skills-heading">Skills</h2>
        </motion.header>
        
        <div className="rowFlexRes breakMainTechOverall">
          <motion.div
            className="cardContainer"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={motionTransition ?? { delay: 0.2 }}
          >
            <div className="card">
              <h3 className="text-center">Tech | Frameworks</h3>
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
            transition={motionTransition ?? { delay: 0.4 }}
          >
            <div className="card">
              <h3 className="text-center">Coverage</h3>
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
                        transition={motionTransition}
                        whileHover={reducedMotion ? undefined : { x: 4, transition: { duration: 0.2 } }}
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
                        transition={motionTransition}
                        whileHover={reducedMotion ? undefined : { x: 4, transition: { duration: 0.2 } }}
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
                        transition={motionTransition}
                        whileHover={reducedMotion ? undefined : { x: 4, transition: { duration: 0.2 } }}
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
          transition={motionTransition ?? { delay: 0.6 }}
        >
          <div className="card">
            <h3 className="text-center">Software Tools</h3>
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
