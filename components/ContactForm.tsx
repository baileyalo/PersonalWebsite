import emailjs from '@emailjs/browser';
import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import { EMAIL_REGEX, FORM_NAME, SUBMIT_MESSAGES, VALIDATION } from '../constants';
import { delay } from './helpers';
import SpinningWheel from './spinningWheel';

interface ContactFormData {
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
  userMessage: string;
}

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

const EMPTY_FORM: ContactFormData = {
  userName: '',
  userEmail: '',
  userPhoneNumber: '',
  userMessage: '',
};

function validateName(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return VALIDATION.NAME_REQUIRED;
  if (trimmed.length < VALIDATION.NAME_MIN_LENGTH) return VALIDATION.NAME_MIN;
  return '';
}

function validateEmail(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return VALIDATION.EMAIL_REQUIRED;
  if (!EMAIL_REGEX.test(trimmed)) return VALIDATION.EMAIL_INVALID;
  return '';
}

function validateMessage(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return VALIDATION.MESSAGE_REQUIRED;
  if (trimmed.length < VALIDATION.MESSAGE_MIN_LENGTH) return VALIDATION.MESSAGE_MIN;
  return '';
}

function validateField(id: keyof ContactFormData, value: string): string {
  if (id === 'userName') return validateName(value);
  if (id === 'userEmail') return validateEmail(value);
  if (id === 'userMessage') return validateMessage(value);
  return '';
}

const fieldClass = (invalid: boolean): string =>
  `w-full rounded-md border bg-card-bg px-3 py-2 text-text-primary outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-color ${
    invalid ? 'border-red-500' : 'border-border-color'
  }`;

export default function ContactForm(): JSX.Element {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitMessage, setSubmitMessage] = useState('');
  const [allowSend, setAllowSend] = useState(true);

  const handleForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const id = event.target.id as keyof ContactFormData;
    const value = event.target.value;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      const error = validateField(id, value);
      setErrors((prev) => ({ ...prev, [id]: error || undefined }));
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const id = event.target.id as keyof ContactFormData;
    const error = validateField(id, form[id]);
    setErrors((prev) => ({ ...prev, [id]: error || undefined }));
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const nextErrors: FieldErrors = {
      userName: validateName(form.userName) || undefined,
      userEmail: validateEmail(form.userEmail) || undefined,
      userMessage: validateMessage(form.userMessage) || undefined,
    };
    setErrors(nextErrors);
    if (nextErrors.userName || nextErrors.userEmail || nextErrors.userMessage || !allowSend) return;

    setAllowSend(false);
    let netlifyOk = false;
    let emailjsOk = false;
    const body = new URLSearchParams({
      'form-name': FORM_NAME,
      name: form.userName,
      email: form.userEmail,
      phoneNumber: form.userPhoneNumber,
      message: form.userMessage,
    }).toString();

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      netlifyOk = res.ok;
    } catch {
      netlifyOk = false;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        {
          from_name: form.userName,
          message: form.userMessage,
          phone: form.userPhoneNumber,
          from_email: form.userEmail,
        },
        process.env.NEXT_PUBLIC_USER_ID as string
      );
      emailjsOk = true;
    } catch (emailErr: unknown) {
      emailjsOk = false;
      console.error('EmailJS error:', emailErr);
    }

    if (emailjsOk || netlifyOk) {
      setSubmitMessage(SUBMIT_MESSAGES.SUCCESS);
      setForm(EMPTY_FORM);
    } else {
      setSubmitMessage(SUBMIT_MESSAGES.ERROR);
    }
    await delay(4);
    setSubmitMessage('');
    setAllowSend(true);
  };

  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <form
      name={FORM_NAME}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={submitForm}
      className="space-y-4"
      aria-label="Contact form"
      noValidate
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden" aria-hidden="true">
        <label htmlFor="bot-field">Don’t fill this out</label>
        <input id="bot-field" name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
      </p>
      {hasErrors && (
        <div
          role="alert"
          className="rounded-md border border-red-400 bg-red-500/10 px-3 py-2 text-sm text-red-400"
        >
          Please fix the highlighted errors below.
        </div>
      )}
      <div>
        <label htmlFor="userName" className="mb-1 block text-sm font-medium text-text-primary">
          Name
        </label>
        <input
          id="userName"
          name="name"
          type="text"
          value={form.userName}
          onChange={handleForm}
          onBlur={handleBlur}
          required
          autoComplete="name"
          aria-invalid={Boolean(errors.userName)}
          aria-describedby={errors.userName ? 'userName-error' : undefined}
          className={fieldClass(Boolean(errors.userName))}
        />
        {errors.userName && (
          <p id="userName-error" role="alert" className="mt-1 text-sm text-red-400">
            {errors.userName}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="userEmail" className="mb-1 block text-sm font-medium text-text-primary">
          Email
        </label>
        <input
          id="userEmail"
          name="email"
          type="email"
          value={form.userEmail}
          onChange={handleForm}
          onBlur={handleBlur}
          required
          autoComplete="email"
          aria-invalid={Boolean(errors.userEmail)}
          aria-describedby={errors.userEmail ? 'userEmail-error' : undefined}
          className={fieldClass(Boolean(errors.userEmail))}
        />
        {errors.userEmail && (
          <p id="userEmail-error" role="alert" className="mt-1 text-sm text-red-400">
            {errors.userEmail}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="userPhoneNumber"
          className="mb-1 block text-sm font-medium text-text-primary"
        >
          Phone <span className="font-normal text-text-muted">(optional)</span>
        </label>
        <input
          id="userPhoneNumber"
          name="phoneNumber"
          type="tel"
          value={form.userPhoneNumber}
          onChange={handleForm}
          autoComplete="tel"
          inputMode="tel"
          className={fieldClass(false)}
        />
      </div>
      <div>
        <label htmlFor="userMessage" className="mb-1 block text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="userMessage"
          name="message"
          value={form.userMessage}
          onChange={handleForm}
          onBlur={handleBlur}
          required
          rows={5}
          aria-invalid={Boolean(errors.userMessage)}
          aria-describedby={errors.userMessage ? 'userMessage-error' : undefined}
          className={`${fieldClass(Boolean(errors.userMessage))} resize-y min-h-[8rem]`}
        />
        {errors.userMessage && (
          <p id="userMessage-error" role="alert" className="mt-1 text-sm text-red-400">
            {errors.userMessage}
          </p>
        )}
      </div>
      {submitMessage && (
        <p
          role="status"
          aria-live="polite"
          className={`rounded-md border px-3 py-2 text-sm ${
            submitMessage === SUBMIT_MESSAGES.SUCCESS
              ? 'border-accent-color text-accent-color'
              : 'border-red-500/50 text-red-400'
          }`}
        >
          {submitMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={!allowSend}
        aria-busy={!allowSend}
        className="btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {allowSend ? 'Send message' : <SpinningWheel />}
      </button>
    </form>
  );
}
