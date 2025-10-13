import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
import { staggerItem } from "../utils/animations";

interface SkillData {
  name: string;
  progress: number | string;
  url?: string;
}

interface SkillProps {
  skill: SkillData;
  index: number;
}

export default function Skill({ skill, index }: SkillProps): JSX.Element {
  return (
    <motion.li
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02, 
        x: 8,
        transition: { duration: 0.2 } 
      }}
    >
      <div className="rowFlexRes">
        <span>
          {skill.url ? (
            <a 
              href={skill.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'inherit', 
                textDecoration: 'none',
                borderBottom: '1px dotted currentColor'
              }}
            >
              {skill.name}
            </a>
          ) : (
            skill.name
          )}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 + (index * 0.1) }}
        >
          {skill.progress}
          {"%"}
        </motion.span>
      </div>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
        viewport={{ once: true }}
      >
        <ProgressBar
          completed={typeof skill.progress === 'string' ? parseInt(skill.progress) : skill.progress}
          bgColor={"var(--accent-color)"}
          baseBgColor={"var(--border-color)"}
          width={"100%"}
          height={"0.5rem"}
          labelSize={"0"}
          borderRadius={"var(--radius-full)"}
          animateOnRender={true}
          transitionDuration={"0.8s"}
        />
      </motion.div>
    </motion.li>
  );
}