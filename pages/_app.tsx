import '../styles/globals.css';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ContextoProvider } from '../appContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import Modal from 'react-modal';
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

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [error] = React.useState<Error | null>(null);
  // Optionally, use componentDidCatch in a class for more advanced error handling
  if (error) {
    return (
      <div role="alert" className="p-6 m-6 bg-red-100 text-red-700 rounded-lg text-center">
        <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
        <pre className="whitespace-pre-wrap break-all">{error.message}</pre>
      </div>
    );
  }
  return <>{children}</>;
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

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
              <link rel="icon" href="/icons.png" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="author" content="Mr. Alwayne Bailey" />
              <meta name="theme-color" content="#00d4ff" />
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
