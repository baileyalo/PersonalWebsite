import Head from "next/head";
import NavBar from "../sub/navBar";
import Banner from "../sub/banner";
import AboutMe from "../sub/aboutMe";
import Education from "../sub/education";
import Experience from "../sub/experience";
import Skills from "../sub/skills";
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
          content="Hey, this is my personal website. You can take a look at my resume, download my CV and see how you can contact me."
        />
        <meta property="og:title" content="Francisco Pantoja" />
        <meta property="og:site_name" content="Francisco Pantoja" />
        <meta property="og:url" content="https://franciscopantojag.me" />
        <meta
          property="og:description"
          content="Hey, this is my personal website. You can take a look at my resume, download my CV and see how you can contact me"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://franciscopantojag.me/images/ogImage.jpg"
        />
        <meta property="og:image:width" content="1580"/>
        <meta property="og:image:height" content="790"/>
        <meta name="twitter:image" content="https://franciscopantojag.me/images/ogImage.jpg"/>
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