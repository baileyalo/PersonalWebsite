import emailjs from '@emailjs/browser';
import { ChangeEvent, FocusEvent, FormEvent, useEffect, useRef, useState } from 'react';
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
type SubmitPhase = 'idle' | 'sending' | 'success' | 'error';

const EMPTY_FORM: ContactFormData = {
  userName: '',
  userEmail: '',
  userPhoneNumber: '',
  userMessage: '',
};

const STATUS_VISIBLE_SECONDS = 5;

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

const fieldClass = (invalid: boolean, disabled: boolean): string =>
  `w-full rounded-md border bg-card-bg px-3 py-2 text-text-primary outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-color ${
    invalid ? 'border-red-500' : 'border-border-color'
  } ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`;

export default function ContactForm(): JSX.Element {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [phase, setPhase] = useState<SubmitPhase>('idle');
  const statusRef = useRef<HTMLParagraphElement>(null);

  const isSending = phase === 'sending';
  const fieldsDisabled = isSending;

  useEffect(() => {
    if (phase === 'success' || phase === 'error') {
      statusRef.current?.focus();
    }
  }, [phase]);

  const handleForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const id = event.target.id as keyof ContactFormData;
    const value = event.target.value;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      const error = validateField(id, value);
      setErrors((prev) => ({ ...prev, [id]: error || undefined }));
    }
    if (phase === 'success' || phase === 'error') {
      setPhase('idle');
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
    if (nextErrors.userName || nextErrors.userEmail || nextErrors.userMessage || isSending) return;

    setPhase('sending');

    let sent = false;
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
      sent = true;
    } catch (emailErr: unknown) {
      console.error('EmailJS error:', emailErr);
    }

    if (sent) {
      setForm(EMPTY_FORM);
      setErrors({});
      setPhase('success');
    } else {
      setPhase('error');
    }

    await delay(STATUS_VISIBLE_SECONDS);
    setPhase((current) => (current === 'sending' ? current : 'idle'));
  };

  const hasErrors = Object.values(errors).some(Boolean);
  const statusMessage =
    phase === 'success' ? SUBMIT_MESSAGES.SUCCESS : phase === 'error' ? SUBMIT_MESSAGES.ERROR : '';

  const buttonLabel = (() => {
    if (phase === 'sending') return 'Sending…';
    if (phase === 'success') return 'Sent';
    if (phase === 'error') return 'Try again';
    return 'Send message';
  })();

  return (
    <form
      name={FORM_NAME}
      onSubmit={submitForm}
      className="space-y-4"
      aria-label="Contact form"
      noValidate
    >
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
          disabled={fieldsDisabled}
          autoComplete="name"
          aria-invalid={Boolean(errors.userName)}
          aria-describedby={errors.userName ? 'userName-error' : undefined}
          className={fieldClass(Boolean(errors.userName), fieldsDisabled)}
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
          disabled={fieldsDisabled}
          autoComplete="email"
          aria-invalid={Boolean(errors.userEmail)}
          aria-describedby={errors.userEmail ? 'userEmail-error' : undefined}
          className={fieldClass(Boolean(errors.userEmail), fieldsDisabled)}
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
          disabled={fieldsDisabled}
          autoComplete="tel"
          inputMode="tel"
          className={fieldClass(false, fieldsDisabled)}
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
          disabled={fieldsDisabled}
          rows={5}
          aria-invalid={Boolean(errors.userMessage)}
          aria-describedby={errors.userMessage ? 'userMessage-error' : undefined}
          className={`${fieldClass(Boolean(errors.userMessage), fieldsDisabled)} resize-y min-h-[8rem]`}
        />
        {errors.userMessage && (
          <p id="userMessage-error" role="alert" className="mt-1 text-sm text-red-400">
            {errors.userMessage}
          </p>
        )}
      </div>
      {statusMessage && (
        <p
          ref={statusRef}
          role="status"
          aria-live="polite"
          tabIndex={-1}
          className={`rounded-md border px-3 py-2 text-sm outline-none ${
            phase === 'success'
              ? 'border-accent-color/60 bg-accent-color/10 text-accent-color'
              : 'border-red-500/50 bg-red-500/10 text-red-400'
          }`}
        >
          {statusMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={isSending || phase === 'success'}
        aria-busy={isSending}
        className="btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed gap-2"
      >
        {isSending && <SpinningWheel />}
        <span>{buttonLabel}</span>
      </button>
    </form>
  );
}
