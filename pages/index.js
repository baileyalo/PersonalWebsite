import Head from "next/head";
import NavBar from "../sub/NavBar";
import Banner from "../sub/Banner";
import AboutMe from "../sub/About";
import Education from "../sub/Education";
import Experience from "../sub/Experience";
import Skills from "../sub/Skills";
import Modal from "../components/modal";
import ThemeToggle from "../components/ThemeToggle";
import { Contexto } from "../appContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  const { navResOpen, setNavResOpen } = useContext(Contexto);
  const closeNavRes = () => {
    if (navResOpen) {
      setNavResOpen(() => false);
    }
  };
  
  return (
    <>
      <Head>
        <title>Mr. Alwayne Bailey - Software Engineer | Educator | Blockchain Enthusiast</title>
        {/* <link
          rel="image_src"
          href="https://blue-late-parrotfish-488.mypinata.cloud/ipfs/bafybeie53kkb5dziuuxsxv43pmnxoyjdgj527ltmrxb4zcbrmr22ue4ira"
        /> */}
        <meta
          name="description"
          content="Software Engineer & Blockchain Enthusiast specializing in React.js, TypeScript, Node.js, Solidity, and Web3 technologies. Building the future of decentralized applications."
        />
        <meta property="og:title" content="Alwayne Bailey - Software Engineer" />
        <meta property="og:site_name" content="Alwayne Bailey Portfolio" />
        <meta
          property="og:description"
          content="Software Engineer | Educator | Blockchain Enthusias building innovative web3 solutions"
        />
        <meta property="og:type" content="profile" />
        {/* <meta
          property="og:image"
          content="https://blue-late-parrotfish-488.mypinata.cloud/ipfs/bafybeie53kkb5dziuuxsxv43pmnxoyjdgj527ltmrxb4zcbrmr22ue4ira"
        /> */}
        <meta property="og:image:width" content="1580" />
        <meta property="og:image:height" content="790" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        {/* <meta
          name="twitter:image"
          content="https://blue-late-parrotfish-488.mypinata.cloud/ipfs/bafybeie53kkb5dziuuxsxv43pmnxoyjdgj527ltmrxb4zcbrmr22ue4ira"
        /> */}
        <meta name="keywords" content="Software Engineer, blockchain, web3, react, javascript, typescript, solidity, defi, smart contracts" />
      </Head>
      
      <ThemeToggle />
      <Modal />
      <NavBar />
      
      <main onClick={closeNavRes}>
        <Banner />
        <AboutMe />
        
        <section className="container">
          <div className="containerCont rowFlexRes breakExpEduc">
            <Experience />
            <Education />
          </div>
        </section>
        
        <div id="skills" className="target"></div>
        <Skills />
        
        <footer className="footer">
          <p>
            <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} Alwayne Bailey. All rights reserved
          </p>
        </footer>
      </main>
    </>
  );
}
