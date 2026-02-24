import scrollIt from "../components/helpers";
import Hamburger from "../components/hamburger";
import { Contexto } from "../appContext";
import { useContext, useEffect, useRef, useState } from "react";
import {
  SECTION_IDS,
  NAV_LINKS,
  CONTACT_TARGET,
  INTERSECTION_OBSERVER_ROOT_MARGIN,
  INTERSECTION_OBSERVER_THRESHOLDS,
  type NavLink,
} from "../constants";

export default function NavBar(): JSX.Element {
  const context = useContext(Contexto);
  if (!context) {
    throw new Error('NavBar must be used within ContextoProvider');
  }
  const { navResOpen, setNavResOpen, setIsOpen } = context;
  const [activeSection, setActiveSection] = useState<string>("");
  const ratiosRef = useRef<Record<string, number>>({});

  // Intersection Observer: highlight nav link for the section currently in view
  useEffect(() => {
    SECTION_IDS.forEach((id) => {
      ratiosRef.current[id] = 0;
    });
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (id) ratiosRef.current[id] = entry.intersectionRatio;
        }
        const entries_ = Object.entries(ratiosRef.current);
        const best = entries_.reduce((a, b) => (a[1] >= b[1] ? a : b));
        setActiveSection(best[1] > 0 ? `#${best[0]}` : "");
      },
      { rootMargin: INTERSECTION_OBSERVER_ROOT_MARGIN, threshold: [...INTERSECTION_OBSERVER_THRESHOLDS] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (navResOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [navResOpen]);
  const handleResLink = (link: NavLink): void => {
    if (link.target === CONTACT_TARGET) {
      setIsOpen(true);
      if (navResOpen) setNavResOpen(false);
      return;
    }
    const element = document.querySelector(link.target);
    if (element) {
      window.history.replaceState(null, "", link.target);
      scrollIt(element as HTMLElement);
    }
    if (navResOpen) setNavResOpen(false);
  };

  const handleDeskLink = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink): void => {
    e.preventDefault();
    if (link.target === CONTACT_TARGET) {
      setIsOpen(true);
      return;
    }
    const element = document.querySelector(link.target);
    if (element) {
      window.history.replaceState(null, "", link.target);
      scrollIt(element as HTMLElement);
    }
  };

  return (
    <>
      <Hamburger />
      <nav className="fixed top-0 left-0 z-[1001] block md:hidden pointer-events-none" aria-label="Main navigation">
        <ul
          id="navBarResUl"
          className={`fixed top-0 left-0 w-[280px] max-w-[85vw] min-w-[240px] h-screen bg-[rgba(26,26,26,0.98)] backdrop-blur-[20px] border-r border-border-color flex flex-col pt-16 transition-all duration-normal z-[1001] ${
            navResOpen ? "left-0 pointer-events-auto" : "-left-full opacity-0 pointer-events-none"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.target} className="w-full border-b border-white/5">
              <a
                href={link.target}
                onClick={(e) => {
                  e.preventDefault();
                  handleResLink(link);
                }}
                className={`block px-6 sm:px-8 py-4 sm:py-6 font-medium text-sm sm:text-base uppercase tracking-wide cursor-pointer transition-all duration-fast relative hover:text-accent-color hover:bg-[rgba(0,132,255,0.1)] active:bg-[rgba(0,132,255,0.2)] ${
                  activeSection === link.target ? "text-accent-color font-semibold" : "text-text-secondary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Overlay to close menu when clicking outside */}
        {navResOpen && (
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] cursor-default"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setNavResOpen(false);
            }}
          />
        )}
      </nav>
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(10,10,10,0.95)] backdrop-blur-[20px] border-b border-border-color transition-all duration-normal hidden md:block" aria-label="Main navigation">
        <div className="container flex justify-center items-center py-4">
          <ul className="flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.target} className="relative">
                <a
                  href={link.target}
                  onClick={(e) => handleDeskLink(e, link)}
                  className={`flex items-center px-4 py-2 font-medium text-sm uppercase tracking-wide cursor-pointer transition-all duration-fast rounded-md relative overflow-hidden hover:text-accent-color hover:bg-[rgba(0,132,255,0.1)] before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:bg-gradient-accent before:transition-all before:duration-normal before:-translate-x-1/2 hover:before:w-4/5 ${
                    activeSection === link.target
                      ? "text-accent-color before:w-4/5"
                      : "text-text-secondary before:w-0"
                  }`}
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
