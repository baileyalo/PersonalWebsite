import Modal1 from "react-modal";
import { Contexto } from "../appContext";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { timeout } from "./helpers";
import emailjs from "emailjs-com";
import SpinningWheel from "../components/spinningWheel";

interface ContactFormData {
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
  userMessage: string;
}

export default function Modal(): JSX.Element {
  const context = useContext(Contexto);
  if (!context) {
    throw new Error('Modal must be used within ContextoProvider');
  }
  const { modalIsOpen, setIsOpen } = context;
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [allowSend, setAllowSend] = useState<boolean>(true);
  const [form, setForm] = useState<ContactFormData>({
    userName: "",
    userEmail: "",
    userPhoneNumber: "",
    userMessage: "",
  });
  
  const handleForm = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setForm({
      ...form,
      [event.target.id]:
        typeof event.target.value === "string"
          ? event.target.value
          : JSON.stringify(event.target.value),
    });
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSubmitMessage("");
    setForm({
      userName: "",
      userEmail: "",
      userPhoneNumber: "",
      userMessage: "",
    });
  };
  
  const submitForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const emailjsObj = {
      serviceId: process.env.NEXT_PUBLIC_SERVICE_ID as string,
      templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
      userId: process.env.NEXT_PUBLIC_USER_ID as string,
    };
    try {
      if (allowSend) {
        setAllowSend(() => false);
        const result = await emailjs.send(
          emailjsObj.serviceId,
          emailjsObj.templateId,
          form as unknown as Record<string, unknown>,
          emailjsObj.userId
        );
        if (result.status === 200) {
          setSubmitMessage(() => "Sent!");
        } else {
          setSubmitMessage(() => "Error, please try Again later");
        }
        await timeout(2);
        closeModal();
        setSubmitMessage(() => "");
        await timeout(0.5);
        setAllowSend(() => true);
      }
    } catch (err: unknown) {
      console.error(err);
      if (allowSend) {
        setAllowSend(() => false);
        console.error(err);
        setSubmitMessage(() => "Error, try Again later");
        await timeout(2);
        closeModal();
        setSubmitMessage(() => "");
        await timeout(0.5);
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
      closeTimeoutMS={500}
      className="bg-[rgba(0,0,0,0.85)] text-[var(--text-primary)] p-6 rounded-xl w-[90%] max-w-[500px] relative shadow-[0_8px_32px_rgba(0,0,0,0.3)] animate-modal-appear border-2 border-transparent bg-clip-padding before:content-[''] before:absolute before:-top-0.5 before:-left-0.5 before:-right-0.5 before:-bottom-0.5 before:bg-gradient-accent before:rounded-xl before:-z-10 before:opacity-60 before:animate-border-glow"
      overlayClassName={{
        base: "opacity-0 transition-opacity duration-500 ease-in-out fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.85)] flex items-center justify-center z-[1000] backdrop-blur-[5px] text-base",
        afterOpen: "opacity-100 transition-opacity duration-500 ease-in-out",
        beforeClose: "opacity-0 transition-opacity duration-500 ease-in-out",
      }}
    >
      <h1 className="text-[2.16rem] leading-normal text-center font-bold mb-3">
        Thank you for your time
      </h1>
      <h2 className="text-[1.12rem] leading-normal text-center text-text-secondary opacity-90 font-semibold">
        Please fill this form, and I'll be in touch with you as soon as possible.
      </h2>
      <form onSubmit={submitForm} className="w-full max-w-[400px] mx-auto mt-5 focus-within-ring rounded-lg" aria-label="Contact form">
        <ul className="mb-2">
          <li className="flex items-center">
            <label htmlFor="userName" className="mb-1 text-[1.04rem] text-[var(--text-primary)]">Name:</label>
          </li>
          <li>
            <input
              type="text"
              id="userName"
              name="name"
              onChange={handleForm}
              required
              className="w-full h-8 bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)] rounded px-2 outline-none focus:outline-accent-color focus:border-accent-color focus:rounded-none font-semibold"
            />
          </li>
        </ul>
        <ul className="mb-2">
          <li className="flex items-center">
            <label htmlFor="userEmail" className="mb-1 text-[1.04rem] text-[var(--text-primary)]">Email:</label>
          </li>
          <li>
            <input
              type="email"
              id="userEmail"
              name="email"
              onChange={handleForm}
              required
              className="w-full h-8 bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)] rounded px-2 outline-none focus:outline-accent-color focus:border-accent-color focus:rounded-none font-semibold"
            />
          </li>
        </ul>
        <ul className="mb-2">
          <li className="flex items-center">
            <label htmlFor="userPhoneNumber" className="mb-1 text-[1.04rem] text-[var(--text-primary)]">Phone Number:</label>
          </li>
          <li>
            <input
              type="tel"
              id="userPhoneNumber"
              name="phoneNumber"
              onChange={handleForm}
              className="w-full h-8 bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)] rounded px-2 outline-none focus:outline-accent-color focus:border-accent-color focus:rounded-none font-semibold"
            />
          </li>
        </ul>
        <ul className="mb-0">
          <li className="flex items-center">
            <label htmlFor="userMessage" className="mb-1 text-[1.04rem] text-[var(--text-primary)]">Your message:</label>
          </li>
          <li>
            <textarea
              id="userMessage"
              name="message"
              onChange={handleForm}
              required
              className="w-full h-[4.5em] bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)] rounded px-2 outline-none focus:outline-accent-color focus:border-accent-color focus:rounded-none font-semibold resize-none"
            />
          </li>
        </ul>
        <div className="text-[1.12rem] flex mt-5">
          <div className="flex items-center mx-auto relative">
            <button
              disabled={!allowSend}
              type="submit"
              aria-busy={!allowSend}
              aria-live="polite"
              className={`bg-accent-color outline-none rounded-[0.2em] w-full mx-auto px-4 py-1 cursor-pointer text-base border border-accent-color text-text-secondary font-semibold font-inherit transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,212,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed ${
                allowSend ? "" : "opacity-50 cursor-not-allowed"
              }`}
            >
              {allowSend ? "SUBMIT" : <SpinningWheel />}
            </button>
            <span className="font-semibold absolute text-[1.12rem] text-accent-color left-[calc(100%+1em)] top-0">{submitMessage}</span>
          </div>
        </div>
      </form>
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close contact form"
        className="text-[1.12rem] absolute top-2.5 right-2.5 bg-transparent h-9 w-9 rounded-full flex items-center justify-center cursor-pointer text-[var(--text-primary)] transition-all duration-200 hover:bg-[rgba(0,212,255,0.1)] hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-color"
      >
        <FontAwesomeIcon icon={faTimes} className="m-auto text-current" />
      </button>
    </Modal1>
  );
}
