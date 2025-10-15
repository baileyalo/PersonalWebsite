import { Contexto } from "../appContext";
import { useContext } from "react";

export default function Hamburger(): JSX.Element {
  const context = useContext(Contexto);
  if (!context) {
    throw new Error('Hamburger must be used within ContextoProvider');
  }
  const { navResOpen, setNavResOpen } = context;
  const toggleNavRes = (e: React.MouseEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    setNavResOpen(!navResOpen);
  };
  return (
    <section 
      onClick={toggleNavRes} 
      className="fixed top-4 left-4 z-[1003] cursor-pointer hamburger-button block md:hidden pointer-events-auto"
      aria-label="Toggle navigation menu"
    >
      <div className="p-2 border border-text-secondary/30 bg-[hsla(0,0%,100%,0.1)] backdrop-blur-sm rounded-md hover:bg-[hsla(0,0%,100%,0.2)] transition-all duration-fast">
        <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
          <span 
            className={`block w-5 h-0.5 bg-text-secondary rounded-full transition-all duration-300 ${
              navResOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span 
            className={`block w-5 h-0.5 bg-text-secondary rounded-full transition-all duration-300 ${
              navResOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span 
            className={`block w-5 h-0.5 bg-text-secondary rounded-full transition-all duration-300 ${
              navResOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </div>
      </div>
    </section>
  );
}