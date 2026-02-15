import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ContextoProvider } from "../appContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import Modal from "react-modal";
import { AppProps } from "next/app";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Modal.setAppElement("#__next");
    const touchHandler = () => {};
    document.addEventListener("touchstart", touchHandler, { passive: true });
    return () => document.removeEventListener("touchstart", touchHandler);
  }, []);

  return (
    <ThemeProvider>
      <ContextoProvider>
        <div className={`${inter.className} ${inter.variable} ${jetbrainsMono.variable}`}>
          <Head>
            {/* Use circular SVG favicon (local) which embeds the existing external image URL */}
            <link rel="icon" href="" />
            {/* Fallback for browsers that don't support SVG favicons can be the original image */}
            <link rel="alternate icon" href="https://ui-avatars.com/api/?name=AB&size=200&background=random&color=fff&bold=true" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Mr. Alwayne Bailey" />
            <meta name="theme-color" content="#00d4ff" />
            <meta name="color-scheme" content="dark light" />
          </Head>

          <Component {...pageProps} />
        </div>
      </ContextoProvider>
    </ThemeProvider>
  );
}

export default MyApp;