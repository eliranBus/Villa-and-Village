import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import butterfly from "../assets/images/butterfly.png";
import { init } from "@emailjs/browser";

init("user_0j1a6D9rvtHlXSxC8781G");

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i0tou8o",
        "template_x0kf70e",
        form.current,
        "user_0j1a6D9rvtHlXSxC8781G"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEmailSent(true);
  };

  return (
    <div className="contact-wrapper" id="contact">
      {emailSent ? (
        <div className="thanks">
          <h3>Thank you for your inquiry!</h3>
          <p>We will do our best to reply as soon as possible.</p>
        </div>
      ) : (
        <>
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="top">
              <div className="input-wrapper">
                <label>First Name</label>
                <input type="text" name="user_firstname" required />
              </div>
              <div className="input-wrapper">
                <label>Last Name</label>
                <input type="text" name="user_lastname" />
              </div>
            </div>
            <div className="top">
              <div className="input-wrapper">
                <label>Phone</label>
                <input type="phone" name="user_phone" required />
              </div>
              <div className="input-wrapper">
                <label>Email</label>
                <input type="email" name="user_email" required />
              </div>
            </div>
            <div className="bottom">
              <div className="input-wrapper">
                <label>Message</label>
                <textarea name="message" required />
              </div>
            </div>
            <input type="submit" value="Send" />
          </form>
        </>
      )}
      <img className="butterfly" src={butterfly} alt="butterfly" />
    </div>
  );
};

export default Contact;
