import { ExternalLink } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { EMAIL, maskEmail } from '../constants';

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="container" aria-labelledby="contact-heading">
      <div className="sectionCont">
        <header>
          <h2 id="contact-heading">Contact</h2>
        </header>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] items-start">
          <div className="max-w-[36ch]">
            <p className="text-text-secondary leading-relaxed">
              Open to TechOps Engineer, Escalation Engineer, Software Engineer, and Teacher roles.
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a href={`mailto:${EMAIL}`}>{maskEmail()}</a>
              </li>
              <li>
                <a
                  href="https://github.com/baileyalo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  GitHub
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alwayne-bailey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  LinkedIn
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
