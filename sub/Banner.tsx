import { Mail } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import scrollIt from '../components/helpers';
import { EMAIL } from '../constants';
import Github from '../svg/github';
import Linkedin from '../svg/linkedin';

const PORTRAIT =
  'https://blue-late-parrotfish-488.mypinata.cloud/ipfs/bafybeie53kkb5dziuuxsxv43pmnxoyjdgj527ltmrxb4zcbrmr22ue4ira';

export default function Banner(): JSX.Element {
  const [imgSrc, setImgSrc] = useState(PORTRAIT);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    window.history.replaceState(null, '', `#${id}`);
    scrollIt(element);
  };

  return (
    <header aria-label="Profile introduction" className="section flex items-center pt-28 pb-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        <div className="flex-1 max-w-xl order-2 md:order-1">
          <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.05] mb-4 text-text-primary">
            Alwayne Bailey
          </h1>
          <p className="text-sm font-medium tracking-wide text-accent-color mb-3">
            TechOps Engineer / Escalation Engineer / Software Engineer / Teacher
          </p>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-[42rem]">
            I build and maintain reliable full-stack products, with a focus on fintech and Web3 and
            also teach business and computer studies.
          </p>
          <div className="flex gap-3 flex-wrap mb-8">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(event) => scrollToSection(event, 'contact')}
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="btn btn-secondary"
              onClick={(event) => scrollToSection(event, 'projects')}
            >
              See selected work
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border-color text-text-secondary hover:text-accent-color hover:border-accent-color"
              aria-label="Email Alwayne Bailey"
            >
              <Mail className="w-4 h-4" aria-hidden />
            </a>
            <a
              href="https://www.linkedin.com/in/alwayne-bailey/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border-color text-text-secondary hover:text-accent-color hover:border-accent-color"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/baileyalo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border-color text-text-secondary hover:text-accent-color hover:border-accent-color"
            >
              <Github />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 shrink-0">
          <Image
            alt="Alwayne Bailey"
            src={imgSrc}
            width={320}
            height={320}
            priority
            onError={() =>
              setImgSrc(
                'https://ui-avatars.com/api/?name=AB&size=320&background=111111&color=ffffff&bold=true'
              )
            }
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border border-border-color"
          />
        </div>
      </div>
    </header>
  );
}
