import styles from "../styles/banner.module.css";
import Linkedin from "../svg/linkedin.js";
import Github from "../svg/github.js";
import { useContext } from "react";
import { Contexto } from "../appContext";

export default function Banner() {
  const name = "Alwayne O. Bailey";
  const email = "baileyalwayne@gmail.com";
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className={`container ${styles.banner}`}>
      <div className={`containerCont ${styles.bannerCont}`}>
        <section className={styles.bannerContLeft}>
          <h1>{name}</h1>
          <h2>
            Software Engineer |
            <span className={styles.brH2}>
              <br />
            </span>{" "}
            Bachelor of Education |
            <span className={styles.brH2}>
              <br />
            </span>{" "}
            Graduate Certificate
          </h2>
          <h3>
            [ REACT.JS / HTML / CSS / JS / TS / GRAPHQL / SOLIDITY / NODE.JS / REACT
            NATIVE / MONGODB / MYSQL / AWS]
          </h3>
          <h3>
            <a href={`mailto:${email}`}>{email}</a>
          </h3>
          <br />
          <div className={`${styles.buttons}`}>
            <div>
              {/* <button  className={`${styles.but}`}>
                <a
                // target="_blank"
                // href="https://gateway.pinata.cloud/ipfs/QmaqbyaWSkibyX57qSHKPk1GU3m4q5oTY3VygCiHN5bjCJ"
                >
                  DOWNLOAD RESUME
                </a>
              </button> */}
              <button className={`${styles.svgBut}`}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/alwayne-bailey/"
                >
                  <Linkedin />
                </a>
              </button>
              <button className={`${styles.svgBut}`}>
                <a target="_blank" href="https://github.com/baileyalo">
                  <Github />
                </a>
              </button>
            </div>

            <button onClick={openModal} className={`${styles.but}`}>
              CONTACT ME
            </button>
          </div>
        </section>
        <figure className={styles.bannerContRight}>
          <img alt="Alwayne Bailey" src="/profile.jpg" />
        </figure>
      </div>
    </section>
  );
}
