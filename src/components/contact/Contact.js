import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { Button } from "@mui/material";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "gmail_template", e.target, "0Wa17yuzr_DksuSo8")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactWrapper" id="contact">
      <div className="contactTitle" data-aos="fade-up">
        Chat with me
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contactWrapperInner"
        data-aos="fade-up"
      >
        <input
          type="text"
          name="name"
          className="contactTextField"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          className="contactTextField"
          placeholder="E-mail"
          required
        />
        <input
          type="text"
          name="subject"
          className="contactTextField"
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          className="contactTextField"
          placeholder="Message"
          style={{ height: "200px" }}
          required
        />
        <Button
          type="submit"
          value="Send"
          variant="contained"
          sx={{ backgroundColor: "var(--accent)" }}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
