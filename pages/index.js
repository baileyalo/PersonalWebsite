import Head from "next/head";
import NavBar from "../sub/NavBar";
import Banner from "../sub/Banner";
import AboutMe from "../sub/About";
import Education from "../sub/Education";
import Experience from "../sub/Experience";
import Skills from "../sub/Skills";
import Modal from "../components/modal";
import { Contexto } from "../appContext";
import { useContext } from "react";


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
        <title>Alwayne Bailey</title>
        <link rel="image_src" href="https://franciscopantojag.me/images/ogImage.jpg" />
        <meta
          name="description"
          content="This is a website showcasing my skills and experiences"
        />
        <meta property="og:title" content="Alwayne Bailey" />
        <meta property="og:site_name" content="Alwayne Bailey" />
      
        <meta
          property="og:description"
          content="This is a website showcasing my skills and experiences"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://gateway.pinata.cloud/ipfs/QmVgNRoSLhT5nRdxtpkAEAaXMC5NNdJevENWxe74s6a13s"
        />
        <meta property="og:image:width" content="1580"/>
        <meta property="og:image:height" content="790"/>
        <meta name="twitter:image" content="https://gateway.pinata.cloud/ipfs/QmVgNRoSLhT5nRdxtpkAEAaXMC5NNdJevENWxe74s6a13s"/>
      </Head>
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
      </main>
    </>
  );
}