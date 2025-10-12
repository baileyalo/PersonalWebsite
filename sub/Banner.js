import React, { useContext, useState } from "react";
import styles from "../styles/banner.module.css";
import Linkedin from "../svg/linkedin.js";
import Github from "../svg/github.js";
import { Contexto } from "../appContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInLeft, slideInRight, staggerContainer, staggerItem, hoverScale, floatingAnimation } from "../utils/animations";

export default function Banner() {
  const name = "Alwayne Bailey";
  const email = "baileyalwayne@gmail.com";
  const { setIsOpen } = useContext(Contexto);
  const [imgSrc, setImgSrc] = useState("https://blue-late-parrotfish-488.mypinata.cloud/ipfs/bafybeie53kkb5dziuuxsxv43pmnxoyjdgj527ltmrxb4zcbrmr22ue4ira");
  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className={`${styles.banner} section`}>
      <div className={`${styles.bannerCont} container`}>
        <motion.div 
          className={styles.bannerContLeft}
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {name}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer & Blockchain Enthusiast
            <br />
            <span className="gradient-text">Building the Future of Web3</span>
          </motion.h2>
          
          <motion.div 
            className={styles.techStack}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            [ REACT.JS / JAVASCRIPT / TYPESCRIPT / REACT NATIVE / REST API / NODE.JS / SOLIDITY / GRAPHQL / AWS / WEB3 ]
          </motion.div>
          
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span>📧</span>
            <a href={`mailto:${email}`}>{email}</a>
          </motion.div>
          
          <motion.div 
            className={styles.buttons}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              onClick={openModal} 
              className={`${styles.but} btn btn-primary`}
              variants={staggerItem}
              {...hoverScale}
            >
              CONTACT ME
            </motion.button>
            <motion.button 
              className={`${styles.but} btn btn-secondary`}
              variants={staggerItem}
              {...hoverScale}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/baileyalo"
              >
                VIEW PORTFOLIO
              </a>
            </motion.button>
          </motion.div>
          
          <motion.div 
            className={styles.socialButtons}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              className={styles.svgBut}
              variants={staggerItem}
              {...hoverScale}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/alwayne-bailey/"
                aria-label="LinkedIn Profile"
              >
                <Linkedin />
              </a>
            </motion.button>
            <motion.button 
              className={styles.svgBut}
              variants={staggerItem}
              {...hoverScale}
            >
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://github.com/baileyalo"
                aria-label="GitHub Profile"
              >
                <Github />
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.bannerContRight}
          variants={slideInRight}
          // initial="hidden"
          animate="visible"
          {...floatingAnimation}
        >
          {/* Use Next.js Image for better external image handling (domain allowed in next.config.js) */}
          { /* Wrap Next/Image with motion to keep hover animation */ }
          {React.createElement(motion(Image), {
            alt: "Alwayne Bailey - Software Engineer",
            src: imgSrc,
            width: 400,
            height: 400,
            style: { objectFit: "cover", borderRadius: "50%" },
            onError: () => setImgSrc("https://ui-avatars.com/api/?name=AB&size=200&background=random&color=fff&bold=true"),
            loading: "eager",
            whileHover: { scale: 1.05 },
            transition: { duration: 0.3 },
          })}
        </motion.div>
      </div>
    </section>
  );
}
