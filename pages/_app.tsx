import '../styles/globals.css';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ContextoProvider } from '../appContext';
import ErrorBoundary from '../components/ErrorBoundary';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AppProps } from 'next/app';
import scrollIt from '../components/helpers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Scroll to section when page loads or route changes
  useEffect(() => {
    const hash = router.asPath.split('#')[1];
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollIt(el);
        });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [router.asPath]);

  // Announce route changes for screen readers
  const announceRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (announceRef.current) {
      announceRef.current.textContent = document.title;
    }
  }, [router.asPath]);

  return (
    <ThemeProvider>
      <ContextoProvider>
        <ErrorBoundary>
          <div className={`${inter.className} ${inter.variable} ${jetbrainsMono.variable}`}>
            <Head>
              <link rel="icon" href="/initial.png" type="image/png" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, viewport-fit=cover"
              />
              <meta name="author" content="Alwayne Bailey" />
              <meta name="theme-color" content="#0a0a0a" />
              <meta name="color-scheme" content="dark light" />
            </Head>
            {/* Visually hidden live region for route announcements */}
            <div ref={announceRef} aria-live="polite" aria-atomic="true" className="sr-only" />
            <Component {...pageProps} />
          </div>
        </ErrorBoundary>
      </ContextoProvider>
    </ThemeProvider>
  );
}

export default MyApp;
