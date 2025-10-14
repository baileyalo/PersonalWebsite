// import { Contexto } from "../appContext";
// import { useContext } from "react";

// export default function Hamburger(): JSX.Element {
//   const context = useContext(Contexto);
//   if (!context) {
//     throw new Error('Hamburger must be used within ContextoProvider');
//   }
//   const { navResOpen, setNavResOpen } = context;
//   const toggleNavRes = (): void => {
//     setNavResOpen(!navResOpen);
//   };
//   return (
//     <section onClick={toggleNavRes} className="flex">
//       <ul className="m-[0.86rem] z-[3] border-[0.86px] border-text p-0 px-[0.344rem] cursor-pointer bg-[hsla(0,0%,100%,0.2)] rounded-[0.172rem]">
//         <li className={`m-[0.344rem] w-[1.978rem] h-[0.215rem] bg-text rounded-[0.43rem] transition-transform duration-500 ${navResOpen ? 'translate-y-[0.552206rem] rotate-45' : ''}`}></li>
//         <li className={`m-[0.344rem] w-[1.978rem] h-[0.215rem] bg-text rounded-[0.43rem] transition-transform duration-500 ${navResOpen ? '-translate-x-[3.44rem]' : ''}`}></li>
//         <li className={`m-[0.344rem] w-[1.978rem] h-[0.215rem] bg-text rounded-[0.43rem] transition-transform duration-500 ${navResOpen ? '-translate-y-[0.552206rem] -rotate-45' : ''}`}></li>
//       </ul>
//     </section>
//   );
// }

// Hamburger.tsx
import { useContext } from "react";
import { Contexto } from "../appContext";

export default function Hamburger() {
  const context = useContext(Contexto);

  if (!context) {
         throw new Error('Hamburger must be used within ContextoProvider');
       }
  const { navResOpen, setNavResOpen } = context;

  const toggleNav = () => setNavResOpen(!navResOpen);

  return (
    <button
      onClick={toggleNav}
      className="flex flex-col justify-center items-center p-3 z-[1002]"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`block w-2.5 h-2.5 bg-white rounded-full my-1 transition-transform duration-300
            ${navResOpen && i === 0 ? 'translate-y-1.5 rotate-45' : ''}
            ${navResOpen && i === 1 ? 'opacity-0' : ''}
            ${navResOpen && i === 2 ? '-translate-y-1.5 -rotate-45' : ''}`}
        ></span>
      ))}
    </button>
  );
}
