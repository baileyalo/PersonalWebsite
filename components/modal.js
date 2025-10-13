import Modal1 from "react-modal";
import { Contexto } from "../appContext";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { timeout } from "./helpers";
import emailjs from "emailjs-com";
import SpinningWheel from "../components/spinningWheel";

export default function Modal() {
  const { modalIsOpen, setIsOpen } = useContext(Contexto);
  const [submitMessage, setSubmitMessage] = useState("");
  const [allowSend, setAllowSend] = useState(true);
  const [form, setForm] = useState({
    userName: "",
    userEmail: "",
    userPhoneNumber: "",
    userMessage: "",
  });
  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.id]:
        typeof event.target.value === "string"
          ? event.target.value
          : JSON.stringify(event.target.value),
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    setSubmitMessage("");
    setForm({
      userName: "",
      userEmail: "",
      userPhoneNumber: "",
      userMessage: "",
    });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    const emailjsObj = {
      serviceId: process.env.NEXT_PUBLIC_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
      userId: process.env.NEXT_PUBLIC_USER_ID,
    };
    try {
      if (allowSend) {
        setAllowSend(() => false);
        const result = await emailjs.send(
          emailjsObj.serviceId,
          emailjsObj.templateId,
          form,
          emailjsObj.userId
        );
        if (result.status == 200) {
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
    } catch (err) {
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
      className="bg-[rgba(0,0,0,0.85)] text-text-primary p-6 rounded-xl w-[90%] max-w-[500px] relative shadow-[0_8px_32px_rgba(0,0,0,0.3)] animate-modal-appear border-2 border-transparent bg-clip-padding before:content-[''] before:absolute before:-top-0.5 before:-left-0.5 before:-right-0.5 before:-bottom-0.5 before:bg-gradient-accent before:rounded-xl before:-z-10 before:opacity-60 before:animate-border-glow"
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
        Please fill this form, and I'll be in touch with you
      </h2>
      <form onSubmit={submitForm} className="w-full max-w-[400px] mx-auto mt-5">
        <ul className="mb-2">
          <li className="flex items-center">
            <label htmlFor="name" className="mb-1 text-[1.04rem] text-white">Name:</label>
          </li>
          <li>
            <input
              type="text"
              id="userName"
              name="name"
              onChange={handleForm}
              required
              className="w-full h-8 bg-white text-black border-3 border-black rounded px-1 outline-none focus:outline-accent-color focus:border-accent-color focus:rounded-none font-semibold"
            />
          </li>
        </ul>
        <ul className="mb-2">
          <li className="flex items-center">
            <label htmlFor="email" className="mb-1 text-[1.04rem] text-white">Email:</label>
          </li>
          <li>
            <input
              type="text"
              id="userEmail"
              name="email"
              onChange={handleForm}
              required
              className="w-full h-8 bg-white text-black border-3 border-black rounded px-1 outline-none focus:outline-accent-color focus:border-accent-color focus:rounded-none font-semibold"
            />
          </li>
        </ul>
        <ul className="mb-2">
          <li className="flex items-center">
            <label htmlFor="number" className="mb-1 text-[1.04rem] text-white">Phone Number:</label>
          </li>
          <li>
            <input
              type="text"
              id="userPhoneNumber"
              name="phoneNumber"
              onChange={handleForm}
              className="w-full h-8 bg-white text-black border-3 border-black rounded px-1 outline-none focus:outline-accent-color focus:border-accent-color focus:rounded-none font-semibold"
            />
          </li>
        </ul>
        <ul className="mb-0">
          <li className="flex items-center">
            <label htmlFor="message" className="mb-1 text-[1.04rem] text-white">Your message:</label>
          </li>
          <li>
            <textarea
              type="text"
              id="userMessage"
              name="message"
              onChange={handleForm}
              required
              className="w-full h-[4.5em] bg-white text-black border border-black rounded px-1 outline-none focus:outline-accent-color focus:border-accent-color focus:rounded-none font-semibold resize-none"
            />
          </li>
        </ul>
        <div className="text-[1.12rem] flex mt-5">
          <div className="flex items-center mx-auto relative">
            <button
              disabled={allowSend ? false : true}
              type="submit"
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
      <div 
        onClick={closeModal} 
        className="text-[1.12rem] absolute top-2.5 right-2.5 bg-transparent h-6 w-6 rounded-full flex cursor-pointer text-text-primary transition-all duration-200 hover:bg-[rgba(0,212,255,0.1)] hover:scale-110"
      >
        <FontAwesomeIcon color="rgba(34, 34, 34, 0.9)" icon={faTimes} className="m-auto" />
      </div>
    </Modal1>
  );
}
