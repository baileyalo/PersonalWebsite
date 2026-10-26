import { Contexto } from '../appContext';
import { useContext } from 'react';

export default function Hamburger(): JSX.Element {
  const context = useContext(Contexto);
  if (!context) {
    throw new Error('Hamburger must be used within ContextoProvider');
  }
  const { navResOpen, setNavResOpen } = context;
  const toggleNavRes = (): void => {
    setNavResOpen(!navResOpen);
  };
  return (
    <button
      type="button"
      onClick={toggleNavRes}
      className="fixed z-[1003] cursor-pointer hamburger-button block md:hidden pointer-events-auto min-h-11 min-w-11 inline-flex items-center justify-center rounded-md border border-border-color bg-card-bg backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-accent-color focus-visible:outline-offset-2"
      style={{
        top: 'max(1rem, env(safe-area-inset-top))',
        left: 'max(1rem, env(safe-area-inset-left))',
      }}
      aria-label={navResOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={navResOpen}
      aria-controls="navBarResUl"
    >
      <span className="w-6 h-6 flex flex-col justify-center items-center space-y-1" aria-hidden>
        <span
          className={`block w-5 h-0.5 bg-text-secondary rounded-full transition-all duration-300 ${
            navResOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-text-secondary rounded-full transition-all duration-300 ${
            navResOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-text-secondary rounded-full transition-all duration-300 ${
            navResOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </span>
    </button>
  );
}
