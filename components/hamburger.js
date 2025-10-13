import { Contexto } from "../appContext";
import { useContext } from "react";

export default function Hamburger() {
  const { navResOpen, setNavResOpen } = useContext(Contexto);
  const toggleNavRes = () => {
    setNavResOpen((prev) => !prev);
  };
  return (
    <section onClick={toggleNavRes} className="flex">
      <ul className="m-[0.86rem] z-[3] border-[0.86px] border-text p-0 px-[0.344rem] cursor-pointer bg-[hsla(0,0%,100%,0.2)] rounded-[0.172rem]">
        <li className={`m-[0.344rem] w-[1.978rem] h-[0.215rem] bg-text rounded-[0.43rem] transition-transform duration-500 ${navResOpen ? 'translate-y-[0.552206rem] rotate-45' : ''}`}></li>
        <li className={`m-[0.344rem] w-[1.978rem] h-[0.215rem] bg-text rounded-[0.43rem] transition-transform duration-500 ${navResOpen ? '-translate-x-[3.44rem]' : ''}`}></li>
        <li className={`m-[0.344rem] w-[1.978rem] h-[0.215rem] bg-text rounded-[0.43rem] transition-transform duration-500 ${navResOpen ? '-translate-y-[0.552206rem] -rotate-45' : ''}`}></li>
      </ul>
    </section>
  );
}