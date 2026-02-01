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
import { Copyright } from "lucide-react";

export default function Home(): JSX.Element {
  const context = useContext(Contexto);
  if (!context) {
    throw new Error('Home must be used within ContextoProvider');
  }
  const { navResOpen, setNavResOpen } = context;
  const closeNavRes = (): void => {
    if (navResOpen) {
      setNavResOpen(false);
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
          content="Software Engineer | Educator | Blockchain Enthusiast building innovative web3 solutions"
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
      
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ThemeToggle />
      <Modal />
      <NavBar />

      {/* Hidden form so Netlify Forms detects it at build time (modal form is client-rendered) */}
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" className="hidden" aria-hidden="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="phoneNumber" />
        <textarea name="message" />
      </form>

      <main id="main-content" onClick={closeNavRes}>
        <Banner />
        <AboutMe />

        <section className="container" aria-label="Experience and education">
          <div className="rowFlexRes breakExpEduc">
            <Experience />
            <Education />
          </div>
        </section>

        <Skills />

        <footer className="footer" aria-label="Site footer">
          <p>
            <Copyright className="inline w-4 h-4 mr-1" aria-hidden /> {new Date().getFullYear()} A.B. All rights reserved
          </p>
        </footer>
      </main>
    </>
  );
}
