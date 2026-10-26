import scrollIt from '../components/helpers';
import Hamburger from '../components/hamburger';
import { Contexto } from '../appContext';
import { useContext, useEffect, useRef, useState } from 'react';
import {
  SECTION_IDS,
  NAV_LINKS,
  INTERSECTION_OBSERVER_ROOT_MARGIN,
  INTERSECTION_OBSERVER_THRESHOLDS,
  type NavLink,
} from '../constants';

export default function NavBar(): JSX.Element {
  const context = useContext(Contexto);
  if (!context) {
    throw new Error('NavBar must be used within ContextoProvider');
  }
  const { navResOpen, setNavResOpen } = context;
  const [activeSection, setActiveSection] = useState<string>('');
  const ratiosRef = useRef<Record<string, number>>({});
  const menuRef = useRef<HTMLUListElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    SECTION_IDS.forEach((id) => {
      ratiosRef.current[id] = 0;
    });
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (id) ratiosRef.current[id] = entry.intersectionRatio;
        }
        const entries_ = Object.entries(ratiosRef.current);
        const best = entries_.reduce((a, b) => (a[1] >= b[1] ? a : b));
        setActiveSection(best[1] > 0 ? `#${best[0]}` : '');
      },
      {
        rootMargin: INTERSECTION_OBSERVER_ROOT_MARGIN,
        threshold: [...INTERSECTION_OBSERVER_THRESHOLDS],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (navResOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [navResOpen]);

  // Keep page chrome out of the tab order while the drawer is open
  useEffect(() => {
    const main = document.getElementById('main-content');
    const themeToggle = document.querySelector<HTMLElement>('[data-theme-toggle]');
    if (navResOpen) {
      main?.setAttribute('inert', '');
      themeToggle?.setAttribute('inert', '');
    } else {
      main?.removeAttribute('inert');
      themeToggle?.removeAttribute('inert');
    }
    return () => {
      main?.removeAttribute('inert');
      themeToggle?.removeAttribute('inert');
    };
  }, [navResOpen]);

  // Escape, focus trap, and restore focus to the hamburger
  useEffect(() => {
    if (navResOpen) {
      wasOpenRef.current = true;
      const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>('a');
      firstLink?.focus();

      const onKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
          event.preventDefault();
          setNavResOpen(false);
          return;
        }
        if (event.key !== 'Tab') return;

        const toggle = document.querySelector<HTMLButtonElement>(
          'button[aria-controls="navBarResUl"]'
        );
        const links = menuRef.current
          ? Array.from(menuRef.current.querySelectorAll<HTMLElement>('a'))
          : [];
        const focusables = [toggle, ...links].filter(Boolean) as HTMLElement[];
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      };

      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }

    if (wasOpenRef.current) {
      wasOpenRef.current = false;
      const toggle = document.querySelector<HTMLButtonElement>(
        'button[aria-controls="navBarResUl"]'
      );
      toggle?.focus();
    }
  }, [navResOpen, setNavResOpen]);

  const handleResLink = (link: NavLink): void => {
    const element = document.querySelector(link.target);
    if (element) {
      window.history.replaceState(null, '', link.target);
      scrollIt(element as HTMLElement);
    }
    if (navResOpen) setNavResOpen(false);
  };

  const handleDeskLink = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink): void => {
    e.preventDefault();
    const element = document.querySelector(link.target);
    if (element) {
      window.history.replaceState(null, '', link.target);
      scrollIt(element as HTMLElement);
    }
  };

  return (
    <>
      <Hamburger />
      {navResOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm md:hidden"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setNavResOpen(false);
          }}
        />
      )}
      <nav
        className={`fixed top-0 left-0 z-[1001] block md:hidden ${
          navResOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-label="Main navigation"
      >
        <ul
          ref={menuRef}
          id="navBarResUl"
          aria-hidden={!navResOpen}
          className={`fixed top-0 left-0 w-[min(280px,85vw)] min-w-[240px] h-[100dvh] max-h-[100dvh] overflow-y-auto bg-primary-bg backdrop-blur-[20px] border-r border-border-color flex flex-col transition-all duration-normal z-[1001] ${
            navResOpen ? 'translate-x-0' : '-translate-x-full opacity-0'
          }`}
          style={{ paddingTop: 'max(4.5rem, calc(env(safe-area-inset-top) + 3.5rem))' }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.target} className="w-full border-b border-border-color">
              <a
                href={link.target}
                tabIndex={navResOpen ? 0 : -1}
                onClick={(e) => {
                  e.preventDefault();
                  handleResLink(link);
                }}
                className={`block px-6 sm:px-8 py-4 sm:py-5 min-h-11 font-medium text-sm sm:text-base cursor-pointer transition-colors duration-fast hover:text-accent-color hover:bg-accent-color/10 ${
                  activeSection === link.target
                    ? 'text-accent-color font-semibold'
                    : 'text-text-secondary'
                }`}
                aria-current={activeSection === link.target ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] bg-primary-bg/95 backdrop-blur-[20px] border-b border-border-color transition-all duration-normal hidden md:block"
        aria-label="Main navigation"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="container flex justify-center items-center py-4 pr-24">
          <ul className="flex items-center gap-1 lg:gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.target} className="relative">
                <a
                  href={link.target}
                  onClick={(e) => handleDeskLink(e, link)}
                  className={`flex items-center px-3 py-2.5 min-h-11 font-medium text-sm cursor-pointer transition-colors duration-fast rounded-md hover:text-accent-color ${
                    activeSection === link.target ? 'text-accent-color' : 'text-text-secondary'
                  }`}
                  aria-current={activeSection === link.target ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
