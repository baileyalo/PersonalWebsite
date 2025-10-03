import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { useEffect } from "react";
import { ContextoProvider } from "../appContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import Modal from "react-modal";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Set up Modal app element for accessibility
    Modal.setAppElement("#__next");
    
    // Touch event handler for iOS Safari
    const touchHandler = () => {};
    document.addEventListener("touchstart", touchHandler, { passive: true });
    
    return () => {
      document.removeEventListener("touchstart", touchHandler);
    };
  }, []);

  return (
    <ThemeProvider>
      <ContextoProvider>
        <>
          <Head>
            {/* Use circular SVG favicon (local) which embeds the existing external image URL */}
            <link rel="icon" href="https://green-difficult-vulture-434.mypinata.cloud/ipfs/QmbK992cBygK3FSwYMjCGAKD5823k2XD3pceBDCvLowYJe" />
            {/* Fallback for browsers that don't support SVG favicons can be the original image */}
            <link rel="alternate icon" href="https://green-difficult-vulture-434.mypinata.cloud/ipfs/QmbK992cBygK3FSwYMjCGAKD5823k2XD3pceBDCvLowYJe" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
            />
            <meta name="author" content="Alwayne Bailey" />
            <meta name="theme-color" content="#00d4ff" />
            <meta name="color-scheme" content="dark light" />
          </Head>

          <Component {...pageProps} />
        </>
      </ContextoProvider>
    </ThemeProvider>
  );
}

export default MyApp;