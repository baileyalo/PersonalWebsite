import Modal1 from 'react-modal';
import { useRef, useEffect, useCallback } from 'react';
import { Contexto } from '../appContext';
import { useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { X } from 'lucide-react';
import { delay } from './helpers';

import SpinningWheel from '../components/spinningWheel';
import { FORM_NAME, EMAIL_REGEX, VALIDATION, SUBMIT_MESSAGES } from '../constants';

interface ContactFormData {
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
  userMessage: string;
}

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

function validateName(value: string): string {
  const t = value.trim();
  if (!t) return VALIDATION.NAME_REQUIRED;
  if (t.length < VALIDATION.NAME_MIN_LENGTH) return VALIDATION.NAME_MIN;
  return '';
}

function validateEmail(value: string): string {
  const t = value.trim();
  if (!t) return VALIDATION.EMAIL_REQUIRED;
  if (!EMAIL_REGEX.test(t)) return VALIDATION.EMAIL_INVALID;
  return '';
}

function validateMessage(value: string): string {
  const t = value.trim();
  if (!t) return VALIDATION.MESSAGE_REQUIRED;
  if (t.length < VALIDATION.MESSAGE_MIN_LENGTH) return VALIDATION.MESSAGE_MIN;
  return '';
}

export default function Modal(): JSX.Element {
  const context = useContext(Contexto);
  if (!context) {
    throw new Error('Modal must be used within ContextoProvider');
  }
  const { modalIsOpen, setIsOpen } = context;
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [allowSend, setAllowSend] = useState<boolean>(true);
  const [form, setForm] = useState<ContactFormData>({
    userName: '',
    userEmail: '',
    userPhoneNumber: '',
    userMessage: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});

  const closeModal = useCallback((): void => {
    setIsOpen(false);
    setSubmitMessage('');
    setForm({ userName: '', userEmail: '', userPhoneNumber: '', userMessage: '' });
    setErrors({});
  }, [setIsOpen]);

  // Focus trap and Escape key for modal accessibility
  const firstInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeModal();
      }
      if (e.key === 'Tab' && modalIsOpen && firstInputRef.current) {
        // Trap focus inside modal
        const focusable = document.querySelectorAll(
          '.ReactModal__Content input, .ReactModal__Content textarea, .ReactModal__Content button, .ReactModal__Content a, .ReactModal__Content select, .ReactModal__Content [tabindex]:not([tabindex="-1"])'
        );
        const focusableArr = Array.from(focusable) as HTMLElement[];
        if (focusableArr.length === 0) return;
        const first = focusableArr[0];
        const last = focusableArr[focusableArr.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }
    if (modalIsOpen) {
      if (firstInputRef.current) firstInputRef.current.focus();
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalIsOpen, closeModal]);

  const handleForm = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const id = event.target.id as keyof ContactFormData;
    const value =
      typeof event.target.value === 'string' ? event.target.value : String(event.target.value);
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      const fn =
        id === 'userName'
          ? validateName
          : id === 'userEmail'
            ? validateEmail
            : id === 'userMessage'
              ? validateMessage
              : () => '';
      setErrors((prev) => ({ ...prev, [id]: fn(value) || undefined }));
    }
  };

  const validateField = (id: keyof ContactFormData, value: string): string => {
    switch (id) {
      case 'userName':
        return validateName(value);
      case 'userEmail':
        return validateEmail(value);
      case 'userMessage':
        return validateMessage(value);
      default:
        return '';
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const id = event.target.id as keyof ContactFormData;
    const value = form[id];
    const error = validateField(id, value);
    setErrors((prev) => (error ? { ...prev, [id]: error } : { ...prev, [id]: undefined }));
  };

  // ...existing code...

  const submitForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const nameError = validateName(form.userName);
    const emailError = validateEmail(form.userEmail);
    const messageError = validateMessage(form.userMessage);
    const nextErrors: FieldErrors = {
      userName: nameError || undefined,
      userEmail: emailError || undefined,
      userMessage: messageError || undefined,
    };
    setErrors(nextErrors);
    if (nameError || emailError || messageError) return;

    try {
      if (allowSend) {
        setAllowSend(() => false);
        // Send to Netlify Forms
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
          // IMPORTANT: The keys in this object (name, email, phoneNumber, message) must match the variable names in your EmailJS template.
          // If your template uses variables like {{from_name}}, {{from_email}}, etc., update the keys below to match exactly.
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
          if (emailErr instanceof Error) {
            console.error('EmailJS error:', emailErr.message);
          } else {
            console.error('EmailJS error:', emailErr);
          }
        }
        if (emailjsOk || netlifyOk) {
          setSubmitMessage(() => SUBMIT_MESSAGES.SUCCESS);
        } else {
          setSubmitMessage(() => SUBMIT_MESSAGES.ERROR);
        }
        await delay(2);
        closeModal();
        setSubmitMessage(() => '');
        await delay(0.5);
        setAllowSend(() => true);
      }
    } catch (err: unknown) {
      console.error(err);
      if (allowSend) {
        setAllowSend(() => false);
        setSubmitMessage(() => SUBMIT_MESSAGES.ERROR);
        await delay(2);
        closeModal();
        setSubmitMessage(() => '');
        await delay(0.5);
        setAllowSend(() => true);
      }
    }
  };

  return (
    <Modal1
      isOpen={modalIsOpen}
      onAfterOpen={() => {}}
      onRequestClose={closeModal}
      contentLabel="Contact Form Modal"
      closeTimeoutMS={400}
      aria-modal="true"
      role="dialog"
      className="bg-[rgba(0,0,0,0.85)] text-[var(--text-primary)] p-6 rounded-xl w-[90%] max-w-[500px] relative shadow-[0_8px_32px_rgba(0,0,0,0.3)] animate-modal-appear border-2 border-transparent bg-clip-padding before:content-[''] before:absolute before:-top-0.5 before:-left-0.5 before:-right-0.5 before:-bottom-0.5 before:bg-gradient-accent before:rounded-xl before:-z-10 before:opacity-60 before:animate-border-glow transition-all duration-400"
      overlayClassName={{
        base: 'opacity-0 transition-opacity duration-400 ease-in-out fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.85)] flex items-center justify-center z-[1000] backdrop-blur-[5px] text-base',
        afterOpen: 'opacity-100 transition-opacity duration-400 ease-in-out',
        beforeClose: 'opacity-0 transition-opacity duration-400 ease-in-out',
      }}
    >
      <h1 className="text-[2.16rem] leading-normal text-center font-bold mb-3">
        Thank you for your time
      </h1>
      <h2 className="text-[1.12rem] leading-normal text-center text-text-secondary opacity-90 font-semibold mb-2">
        Please fill this form, and I&apos;ll be in touch with you as soon as possible.
      </h2>
      {/* Error summary for accessibility */}
      {Object.values(errors).some(Boolean) && (
        <div
          className="mb-3 p-2 rounded bg-red-500/10 border border-red-400 text-red-400 text-center text-sm"
          role="alert"
        >
          Please fix the highlighted errors below.
        </div>
      )}
      <form
        name={FORM_NAME}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={submitForm}
        className="w-full max-w-[400px] mx-auto mt-5 focus-within:ring-2 focus-within:ring-accent-color rounded-lg"
        aria-label="Contact form"
        autoComplete="on"
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />
        <p className="hidden" aria-hidden="true">
          <label htmlFor="bot-field">Don’t fill this out</label>
          <input id="bot-field" name="bot-field" type="text" />
        </p>
        <ul className="mb-2">
          <li className="flex items-center">
            <label htmlFor="userName" className="mb-1 text-[1.04rem] text-[var(--text-primary)]">
              Name:
            </label>
          </li>
          <li>
            <input
              ref={firstInputRef}
              type="text"
              id="userName"
              name="name"
              onChange={handleForm}
              onBlur={handleBlur}
              required
              value={form.userName}
              aria-invalid={Boolean(errors.userName)}
              aria-describedby={errors.userName ? 'userName-error' : undefined}
              className={`w-full h-8 bg-[var(--card-bg)] text-[var(--text-primary)] border rounded px-2 outline-none focus:outline-accent-color focus:rounded-none font-semibold ${
                errors.userName
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-[var(--border-color)] focus:border-accent-color'
              }`}
              autoComplete="name"
            />
            {errors.userName && (
              <p id="userName-error" role="alert" className="mt-1 text-sm text-red-400">
                {errors.userName}
              </p>
            )}
          </li>
        </ul>
        <ul className="mb-2">
          <li className="flex items-center">
            <label htmlFor="userEmail" className="mb-1 text-[1.04rem] text-[var(--text-primary)]">
              Email:
            </label>
          </li>
          <li>
            <input
              type="email"
              id="userEmail"
              name="email"
              onChange={handleForm}
              onBlur={handleBlur}
              required
              value={form.userEmail}
              aria-invalid={Boolean(errors.userEmail)}
              aria-describedby={errors.userEmail ? 'userEmail-error' : undefined}
              className={`w-full h-8 bg-[var(--card-bg)] text-[var(--text-primary)] border rounded px-2 outline-none focus:outline-accent-color focus:rounded-none font-semibold ${
                errors.userEmail
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-[var(--border-color)] focus:border-accent-color'
              }`}
              autoComplete="email"
            />
            {errors.userEmail && (
              <p id="userEmail-error" role="alert" className="mt-1 text-sm text-red-400">
                {errors.userEmail}
              </p>
            )}
          </li>
        </ul>
        <ul className="mb-2">
          <li className="flex items-center">
            <label
              htmlFor="userPhoneNumber"
              className="mb-1 text-[1.04rem] text-[var(--text-primary)]"
            >
              Phone Number:
            </label>
          </li>
          <li>
            <input
              type="tel"
              id="userPhoneNumber"
              name="phoneNumber"
              onChange={handleForm}
              value={form.userPhoneNumber}
              className="w-full h-8 bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)] rounded px-2 outline-none focus:outline-accent-color focus:border-accent-color focus:rounded-none font-semibold"
              autoComplete="tel"
              pattern="[0-9\-\+\s]*"
              inputMode="tel"
              aria-describedby="phone-hint"
            />
            <span id="phone-hint" className="block text-xs text-text-secondary opacity-70 mt-1">
              Format: numbers only, e.g. 1234567890
            </span>
          </li>
        </ul>
        <ul className="mb-0">
          <li className="flex items-center">
            <label htmlFor="userMessage" className="mb-1 text-[1.04rem] text-[var(--text-primary)]">
              Your message:
            </label>
          </li>
          <li>
            <textarea
              id="userMessage"
              name="message"
              onChange={handleForm}
              onBlur={handleBlur}
              required
              value={form.userMessage}
              aria-invalid={Boolean(errors.userMessage)}
              aria-describedby={errors.userMessage ? 'userMessage-error' : undefined}
              className={`w-full h-[4.5em] bg-[var(--card-bg)] text-[var(--text-primary)] border rounded px-2 outline-none focus:outline-accent-color focus:rounded-none font-semibold resize-none ${
                errors.userMessage
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-[var(--border-color)] focus:border-accent-color'
              }`}
              autoComplete="on"
            />
            {errors.userMessage && (
              <p id="userMessage-error" role="alert" className="mt-1 text-sm text-red-400">
                {errors.userMessage}
              </p>
            )}
          </li>
        </ul>

        {submitMessage && (
          <div
            role="status"
            aria-live="polite"
            className={`mt-4 w-full rounded px-3 py-2 text-center text-[1rem] font-semibold ${
              submitMessage === SUBMIT_MESSAGES.SUCCESS
                ? 'bg-[rgba(0,212,255,0.15)] text-[var(--accent-color)] border border-[var(--accent-color)]'
                : 'bg-red-500/15 text-red-400 border border-red-500/50'
            }`}
          >
            {submitMessage}
          </div>
        )}

        <div className="text-[1.12rem] flex mt-5">
          <div className="flex items-center mx-auto w-full max-w-[200px]">
            <button
              disabled={!allowSend}
              type="submit"
              aria-busy={!allowSend}
              aria-live="polite"
              className={`bg-accent-color outline-none rounded-[0.2em] w-full mx-auto px-4 py-1 cursor-pointer text-base border border-accent-color text-text-secondary font-semibold font-inherit transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,212,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed ${
                allowSend ? '' : 'opacity-50 cursor-not-allowed'
              }`}
              tabIndex={0}
            >
              {allowSend ? 'SUBMIT' : <SpinningWheel />}
            </button>
          </div>
        </div>
      </form>
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close contact form"
        className="text-[1.12rem] absolute top-2.5 right-2.5 bg-transparent h-9 w-9 rounded-full flex items-center justify-center cursor-pointer text-[var(--text-primary)] transition-all duration-200 hover:bg-[rgba(0,212,255,0.1)] hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-color"
      >
        <X className="m-auto w-5 h-5" aria-hidden />
      </button>
    </Modal1>
  );
}
