import Skill from '../components/skill';
import CircularProg from '../components/circularProg';
import { Check, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideUp, staggerContainer, staggerItem, fadeIn } from '../utils/animations';
import { useReducedMotion } from '../utils/useReducedMotion';

export interface SkillData {
  name: string;
  progress: number | string;
  url?: string;
}

interface CircularSkillData {
  name: string;
  progress: number;
}

export default function Skills(): JSX.Element {
  const TechSkills: SkillData[] = [
    { name: 'HTML', progress: '90', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', progress: '90', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    {
      name: 'JavaScript',
      progress: '90',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    { name: 'TypeScript', progress: '90', url: 'https://www.typescriptlang.org/' },
    { name: 'Solidity', progress: '85', url: 'https://soliditylang.org/' },
    { name: 'React Js', progress: '90', url: 'https://reactjs.org/' },
    { name: 'React Native', progress: '90', url: 'https://reactnative.dev/' },
    { name: 'Node js', progress: '90', url: 'https://nodejs.org/' },
    { name: 'Express js', progress: '90', url: 'https://expressjs.com/' },
    { name: 'GraphQL', progress: '85', url: 'https://graphql.org/' },
    { name: 'MongoDB', progress: '90', url: 'https://www.mongodb.com/' },
    { name: 'MySQL', progress: '90', url: 'https://www.mysql.com/' },
    { name: 'PostgreSQL', progress: '90', url: 'https://www.postgresql.org/' },
    { name: 'Git', progress: '90', url: 'https://git-scm.com/' },
  ];

  const overallCirSkills: CircularSkillData[] = [
    { name: 'Technical & Customer Support Analysis', progress: 90 },
    { name: 'Mobile & Web App Development', progress: 90 },
    { name: 'Database Management', progress: 85 },
    { name: 'Cloud Management', progress: 85 },
    { name: 'Web3 Development', progress: 90 },
  ];

  const softSkills: string[] = [
    'TeamWork',
    'Communication',
    'Critical thinking',
    'Problem-solving',
    'Adaptability',
    'Accountability',
    'Time Management',
  ];

  const workflowEnv: { name: string; url: string }[] = [
    { name: 'Agile / Scrum', url: 'https://www.scrum.org/' },
    { name: 'CI/CD', url: 'https://www.redhat.com/en/topics/devops/what-is-ci-cd' },
    { name: 'Docker', url: 'https://www.docker.com/' },
    { name: 'REST APIs', url: 'https://restfulapi.net/' },
    { name: 'Linux / Bash', url: 'https://www.gnu.org/software/bash/' },
    { name: 'Netlify / Vercel', url: 'https://www.netlify.com/' },
    { name: 'Render', url: 'https://render.com/' },
    { name: 'Upstash', url: 'https://upstash.com/' },
    { name: 'Eukpay', url: 'https://eukpay.com/' },
    { name: 'CloudWatch', url: 'https://aws.amazon.com/cloudwatch/' },
    { name: 'Coralogix', url: 'https://coralogix.com/' },
    { name: 'incident.io', url: 'https://incident.io/' },
  ];

  const softwareSkills: SkillData[] = [
    { name: 'VS-CODE', progress: '90', url: 'https://code.visualstudio.com/' },
    { name: 'ANDROID-STUDIO', progress: '90', url: 'https://developer.android.com/studio' },
    { name: 'AWS', progress: '90', url: 'https://aws.amazon.com/' },
    { name: 'GITHUB', progress: '90', url: 'https://github.com/' },
    { name: 'CLICK-UP', progress: '90', url: 'https://clickup.com/' },
    { name: 'SLACK', progress: '90', url: 'https://slack.com/' },
    { name: 'JIRA', progress: '90', url: 'https://www.atlassian.com/software/jira' },
    { name: 'POSTMAN', progress: '90', url: 'https://www.postman.com/' },
    { name: 'FIGMA', progress: '85', url: 'https://www.figma.com/' },
    { name: 'SALESFORCE', progress: '90', url: 'https://www.salesforce.com/' },
    { name: 'ZENDESK', progress: '85', url: 'https://www.zendesk.com/' },
    { name: 'SOLANA', progress: '90', url: 'https://solana.com/' },
    { name: 'ETHEREUM', progress: '85', url: 'https://ethereum.org/' },
    { name: 'HYPERLEDGER-FABRIC', progress: '65', url: 'https://www.hyperledger.org/use/fabric' },
    { name: 'TRUFFLE', progress: '85', url: 'https://trufflesuite.com/' },
    { name: 'HARDHAT', progress: '80', url: 'https://hardhat.org/' },
    { name: 'GANACHE', progress: '90', url: 'https://trufflesuite.com/ganache/' },
    { name: 'IPFS', progress: '90', url: 'https://ipfs.tech/' },
    { name: 'WEB3-RPC', progress: '90', url: 'https://web3js.readthedocs.io/' },
  ];

  const reducedMotion = useReducedMotion();
  const motionTransition = reducedMotion ? { duration: 0 } : undefined;

  return (
    <motion.section
      className="container"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
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
                    {softSkills.slice(0, 3).map((skill, index) => (
                      <motion.li
                        key={index}
                        variants={staggerItem}
                        transition={motionTransition}
                        whileHover={
                          reducedMotion ? undefined : { x: 4, transition: { duration: 0.2 } }
                        }
                      >
                        <Check
                          className="inline w-4 h-4 shrink-0 text-[var(--accent-color)]"
                          aria-hidden
                        />{' '}
                        <span style={{ opacity: '0.9' }}>{skill}</span>
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
                        whileHover={
                          reducedMotion ? undefined : { x: 4, transition: { duration: 0.2 } }
                        }
                      >
                        <Check
                          className="inline w-4 h-4 shrink-0 text-[var(--accent-color)]"
                          aria-hidden
                        />{' '}
                        <span style={{ opacity: '0.9' }}>{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ul className="rowFlexRes">
                    {softSkills.slice(5, 7).map((skill, index) => (
                      <motion.li
                        key={index}
                        variants={staggerItem}
                        transition={motionTransition}
                        whileHover={
                          reducedMotion ? undefined : { x: 4, transition: { duration: 0.2 } }
                        }
                      >
                        <Check
                          className="inline w-4 h-4 shrink-0 text-[var(--accent-color)]"
                          aria-hidden
                        />{' '}
                        <span style={{ opacity: '0.9' }}>{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="cardContainer cardContainerSoftwareTools"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={motionTransition ?? { delay: 0.6 }}
        >
          <div className="card cardSoftwareToolsList">
            <h3 className="text-center">Software Tools</h3>
            <motion.ul
              className="softwareToolsGrid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {softwareSkills.map((skill, index) => (
                <Skill key={skill.url} skill={skill} index={index} />
              ))}
            </motion.ul>
          </div>
          <div className="card cardWorkflowEnv">
            <h3 className="text-center">Platforms & Tooling</h3>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {workflowEnv.map((item, index) => (
                <motion.li
                  key={item.url}
                  variants={staggerItem}
                  transition={motionTransition}
                  whileHover={reducedMotion ? undefined : { x: 4, transition: { duration: 0.2 } }}
                >
                  <Check
                    className="inline w-4 h-4 shrink-0 text-[var(--accent-color)]"
                    aria-hidden
                  />{' '}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-primary)] no-underline border-b border-dotted border-current hover:opacity-90 inline-flex items-center gap-1"
                  >
                    {item.name}
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
