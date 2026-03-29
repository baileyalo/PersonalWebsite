import { FORM_NAME } from '../constants';

/**
 * Hidden form so Netlify's build parser detects the form (required when the
 * real contact form is client-rendered inside a modal).
 */
export default function NetlifyFormHidden(): JSX.Element {
  return (
    <form
      name={FORM_NAME}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="hidden"
      aria-hidden="true"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="phoneNumber" />
      <textarea name="message" />
    </form>
  );
}
