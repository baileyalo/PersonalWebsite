import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
import { staggerItem } from "../utils/animations";

export default function Skill({ skill, index }) {
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
        <span>{skill.name}</span>
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
          completed={skill.progress}
          bgcolor={"var(--accent-color)"}
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