import Head from 'next/head';
import { useContext } from 'react';
import { Copyright } from 'lucide-react';
import { Contexto } from '../appContext';
import { EMAIL, maskEmail } from '../constants';
import BackToTop from '../components/BackToTop';
import ThemeToggle from '../components/ThemeToggle';
import AboutMe from '../sub/About';
import Banner from '../sub/Banner';
import Contact from '../sub/Contact';
import Education from '../sub/Education';
import Experience from '../sub/Experience';
import NavBar from '../sub/NavBar';
import Projects from '../sub/Projects';
import Skills from '../sub/Skills';

const SITE_URL = 'https://alwaynebailey.netlify.app';
const PAGE_TITLE =
  'Alwayne Bailey — TechOps Engineer / Escalation Engineer / Software Engineer / Teacher';
const PAGE_DESCRIPTION =
  'Alwayne Bailey is a TechOps Engineer, Escalation Engineer, Software Engineer, and Teacher building full-stack products, with a focus on fintech and Web3.';
const PORTRAIT =
  'https://blue-late-parrotfish-488.mypinata.cloud/ipfs/bafybeie53kkb5dziuuxsxv43pmnxoyjdgj527ltmrxb4zcbrmr22ue4ira';

export default function Home(): JSX.Element {
  const context = useContext(Contexto);
  if (!context) {
    throw new Error('Home must be used within ContextoProvider');
  }
  const { navResOpen, setNavResOpen } = context;
  const closeNavRes = (): void => {
    if (navResOpen) setNavResOpen(false);
  };

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:site_name" content="Alwayne Bailey" />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={PORTRAIT} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={PORTRAIT} />
        <meta
          name="keywords"
          content="Alwayne Bailey, TechOps Engineer, Escalation Engineer, Software Engineer, Teacher, React, TypeScript, Node.js, AWS, Fintech, Web3, Solana"
        />
      </Head>

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ThemeToggle />
      <NavBar />
      <BackToTop />

      <main id="main-content" onClick={closeNavRes} tabIndex={-1}>
        <Banner />
        <Projects />
        <section className="container" aria-label="Experience and education">
          <Experience />
          <Education />
        </section>
        <AboutMe />
        <Skills />
        <Contact />

        <footer className="footer" aria-label="Site footer">
          <div className="container flex flex-col items-center gap-3 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
            <p className="mb-0 font-semibold text-text-primary">Alwayne Bailey</p>
            <p className="mb-0 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <a href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center">
                {maskEmail()}
              </a>
              <span aria-hidden className="text-text-muted">
                ·
              </span>
              <a
                href="https://github.com/baileyalo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center"
              >
                GitHub
              </a>
              <span aria-hidden className="text-text-muted">
                ·
              </span>
              <a
                href="https://www.linkedin.com/in/alwayne-bailey/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center"
              >
                LinkedIn
              </a>
            </p>
            <p className="mb-0 text-sm">
              <Copyright className="inline w-4 h-4 mr-1" aria-hidden />
              <span>{new Date().getFullYear()} </span>
              <span className="font-semibold">ABTekz.</span> All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
