
import scrollIt from "../components/helpers";
import Hamburger from "../components/hamburger";
import { Contexto } from "../appContext";
import { useContext } from "react";

export default function NavBar() {
  const { navResOpen, setNavResOpen } = useContext(Contexto);
  const handleResLink = (link) => {
    scrollIt(document.querySelector(link.target));
    if (navResOpen) {
      setNavResOpen(() => false);
    }
  };

  const navLinks = [
    {
      label: "about me",
      target: "#about",
    },
    {
      label: "experience",
      target: "#experience",
    },    
    {
      label: "education",
      target: "#education",
    },        
    {
      label: "skills",
      target: "#skills",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 z-[1001] block md:hidden">
        <Hamburger />
        <ul
          id="navBarResUl"
          className={`fixed top-0 left-0 w-[280px] h-screen bg-[rgba(26,26,26,0.98)] backdrop-blur-[20px] border-r border-border-color flex flex-col pt-20 transition-all duration-slow z-[1001] ${
            navResOpen ? "left-0" : "-left-full"
          }`}
        >
          {navLinks.map((link, b) => (
            <li key={b} className="w-full border-b border-white/5">
              <a 
                onClick={() => handleResLink(link)}
                className="block px-8 py-6 text-text-secondary font-medium text-base uppercase tracking-wide cursor-pointer transition-all duration-fast relative hover:text-accent-color hover:bg-[rgba(0,132,255,0.1)]"
              >
                {link.label ?? link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(10,10,10,0.95)] backdrop-blur-[20px] border-b border-border-color transition-all duration-normal hidden md:block">
        <div className="container flex justify-center items-center py-4">
          <ul className="flex items-center gap-12">
            {navLinks.map((link, b) => (
              <li key={b} className="relative">
                <a
                  onClick={() => scrollIt(document.querySelector(link.target))}
                  className="flex items-center px-4 py-2 font-medium text-sm uppercase tracking-wide text-text-secondary cursor-pointer transition-all duration-fast rounded-md relative overflow-hidden hover:text-accent-color hover:bg-[rgba(0,132,255,0.1)] before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-gradient-accent before:transition-all before:duration-normal before:-translate-x-1/2 hover:before:w-4/5"
                >
                  {link.label ?? link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}