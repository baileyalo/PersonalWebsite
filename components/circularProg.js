import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { scaleIn } from "../utils/animations";

export default function CircularProg({ skill, index }) {
  return (
    <motion.li 
      className="circleSkillContainer"
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.5 + (index * 0.2),
          type: "spring",
          stiffness: 100
        }}
        viewport={{ once: true }}
      >
        <CircularProgressbar
          value={skill.progress}
          text={`${skill.progress}%`}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 + (index * 0.2) }}
        viewport={{ once: true }}
      >
        {skill.name}
      </motion.div>
    </motion.li>
  );
}