import Head from 'next/head';
import dynamic from 'next/dynamic';
import NavBar from '../sub/NavBar';
import Banner from '../sub/Banner';
import AboutMe from '../sub/About';
import Education from '../sub/Education';
import Experience from '../sub/Experience';
import Skills from '../sub/Skills';
import Projects from '../sub/Projects';
import ThemeToggle from '../components/ThemeToggle';
import { Contexto } from '../appContext';
import { useContext } from 'react';
import { Copyright } from 'lucide-react';
import NetlifyFormHidden from '../components/NetlifyFormHidden';
import BackToTop from '../components/BackToTop';

const Modal = dynamic(() => import('../components/modal'), { ssr: false });

export default function Home(): JSX.Element {
  const context = useContext(Contexto);
  if (!context) {
    throw new Error('Home must be used within ContextoProvider');
  }
  const { navResOpen, setNavResOpen, setIsOpen } = context;
  const closeNavRes = (): void => {
    if (navResOpen) setNavResOpen(false);
  };

  return (
    <>
      <Head>
        <title>Mr. Alwayne Bailey - TechOps / Software Engineer | Teacher | Web 3</title>
        {/* <link
          rel="image_src"
          href="https://blue-late-parrotfish-488.mypinata.cloud/ipfs/bafybeie53kkb5dziuuxsxv43pmnxoyjdgj527ltmrxb4zcbrmr22ue4ira"
        /> */}
        <meta
          name="description"
          content="TechOps Engineer / Software Engineer | Teacher | Blockchain Enthusiast specializing in React.js, TypeScript, Node.js, Solidity, and Web3 technologies. Building the future of decentralized applications."
        />
        <meta
          property="og:title"
          content="Alwayne Bailey - TechOps Engineer / Software Engineer | Teacher | Blockchain Enthusiast"
        />
        <meta property="og:site_name" content="Alwayne Bailey Portfolio" />
        <meta
          property="og:description"
          content="TechOps Engineer / Software Engineer | Teacher | Blockchain Enthusiast building innovative web3 solutions"
        />
        <meta property="og:type" content="profile" />
        {/* <meta
          property="og:image"
          content="https://blue-late-parrotfish-488.mypinata.cloud/ipfs/bafybeie53kkb5dziuuxsxv43pmnxoyjdgj527ltmrxb4zcbrmr22ue4ira"
        /> */}
        <meta property="og:image:width" content="1580" />
        <meta property="og:image:height" content="790" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta
          name="twitter:image"
          content="https://blue-late-parrotfish-488.mypinata.cloud/ipfs/bafybeie53kkb5dziuuxsxv43pmnxoyjdgj527ltmrxb4zcbrmr22ue4ira"
        /> */}
        <meta
          name="keywords"
          content="TechOps Engineer, Software Engineer, Teacher, Blockchain Enthusiast, React.js, JavaScript, TypeScript, Solidity, Web3, Ethereum, Solana, DeFi, Smart Contracts"
        />
      </Head>

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="skip-link focus:top-0 focus:left-0 focus:absolute focus:z-[2000] focus:bg-accent-color focus:text-white focus:p-2 focus:rounded transition-all duration-200 -top-10 left-0 absolute"
      >
        Skip to main content
      </a>
      <ThemeToggle />
      <Modal />
      <NavBar />
      <BackToTop />

      <NetlifyFormHidden />

      <main id="main-content" onClick={closeNavRes} tabIndex={-1}>
        <Banner />
        <AboutMe />

        <section className="container" aria-label="Experience and education">
          <div className="rowFlexRes breakExpEduc">
            <Experience />
            <Education />
          </div>
        </section>

        <Skills />

        <Projects />

        <footer className="footer" aria-label="Site footer">
          <p className="mb-2">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="text-accent-color font-medium underline underline-offset-2 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-color focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary-bg)] rounded"
            >
              Get in touch
            </button>
          </p>
          <p>
            <Copyright className="inline w-4 h-4 mr-1" aria-hidden />
            <span>{new Date().getFullYear()} </span>
            <span className="font-semibold">ABTech.</span> All rights reserved
          </p>
        </footer>
      </main>
    </>
  );
}
