import React, { useContext, useState } from "react";
import Linkedin from "../svg/linkedin";
import Github from "../svg/github";
import { Contexto } from "../appContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInLeft, slideInRight, staggerContainer, staggerItem, hoverScale, floatingAnimation } from "../utils/animations";

export default function Banner(): JSX.Element {
  const name: string = "Alwayne Bailey";
  const email: string = "baileyalwayne@gmail.com";
  const context = useContext(Contexto);
  if (!context) {
    throw new Error('Banner must be used within ContextoProvider');
  }
  const { setIsOpen } = context;
  const [imgSrc, setImgSrc] = useState<string>("https://blue-late-parrotfish-488.mypinata.cloud/ipfs/bafybeie53kkb5dziuuxsxv43pmnxoyjdgj527ltmrxb4zcbrmr22ue4ira");
  
  function openModal(): void {
    setIsOpen(true);
  }

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden section before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(ellipse_at_top,rgba(102,126,234,0.1)_0%,transparent_50%)] before:pointer-events-none">
      <div className="container flex items-center justify-between gap-16 py-16 relative z-10">
        <motion.div 
          className="flex-1 max-w-[600px]"
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[1.1] mb-4 bg-gradient-primary bg-clip-text text-transparent relative"
          >
            {name}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[clamp(1.25rem,3vw,1.75rem)] font-normal text-text-secondary mb-6 leading-[1.4]"
          >
            Software Engineer & Blockchain Enthusiast
            <br />
            <span className="gradient-text">Building the Future of Web3</span>
          </motion.h2>
          
          <motion.div 
            className="font-mono text-[clamp(0.875rem,2vw,1rem)] text-accent-color bg-[rgba(0,212,255,0.1)] px-4 py-2 rounded-md border-l-4 border-accent-color mb-6 tracking-wide"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            [ REACT.JS / JAVASCRIPT / TYPESCRIPT / REACT NATIVE / REST API / NODE.JS / SOLIDITY / GRAPHQL / AWS / WEB3 ]
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2 text-base text-text-secondary mb-8 transition-colors duration-fast hover:text-accent-color"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span>📧</span>
            <a href={`mailto:${email}`} className="transition-colors duration-fast">{email}</a>
          </motion.div>
          
          <motion.div 
            className="flex gap-4 flex-wrap mb-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              onClick={openModal} 
              className="btn btn-primary"
              variants={staggerItem}
              {...hoverScale}
            >
              CONTACT ME
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
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
            className="flex gap-4 mt-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              className="flex items-center justify-center w-12 h-12 bg-card-bg border border-border-color rounded-full cursor-pointer transition-all duration-normal relative overflow-hidden hover:-translate-y-0.5 hover:border-accent-color hover:shadow-[0_4px_20px_rgba(0,212,255,0.2)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-accent before:opacity-0 before:transition-opacity before:duration-normal before:rounded-full hover:before:opacity-10"
              variants={staggerItem}
              {...hoverScale}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/alwayne-bailey/"
                aria-label="LinkedIn Profile"
                className="flex items-center justify-center w-full h-full text-text-secondary transition-colors duration-fast relative z-10 hover:text-accent-color"
              >
                <Linkedin />
              </a>
            </motion.button>
            <motion.button 
              className="flex items-center justify-center w-12 h-12 bg-card-bg border border-border-color rounded-full cursor-pointer transition-all duration-normal relative overflow-hidden hover:-translate-y-0.5 hover:border-accent-color hover:shadow-[0_4px_20px_rgba(0,212,255,0.2)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-accent before:opacity-0 before:transition-opacity before:duration-normal before:rounded-full hover:before:opacity-10"
              variants={staggerItem}
              {...hoverScale}
            >
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://github.com/baileyalo"
                aria-label="GitHub Profile"
                className="flex items-center justify-center w-full h-full text-text-secondary transition-colors duration-fast relative z-10 hover:text-accent-color"
              >
                <Github />
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-shrink-0 w-80 h-80 relative before:content-[''] before:absolute before:-top-5 before:-left-5 before:-right-5 before:-bottom-5 before:bg-gradient-accent before:rounded-full before:opacity-10 before:animate-pulse"
          variants={slideInRight}
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
            className: "w-full h-full object-cover rounded-full border-4 border-accent-color relative z-10 transition-transform duration-normal hover:scale-105"
          })}
        </motion.div>
      </div>
    </section>
  );
}
