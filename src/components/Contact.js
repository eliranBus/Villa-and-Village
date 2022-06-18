import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import butterfly from "../assets/images/butterfly.png";
import { init } from "@emailjs/browser";
import MultiLingualContent from "../languages/MultiLingualContent";
import { LanguageContext } from "../context/LanguageContext";

init("user_0j1a6D9rvtHlXSxC8781G");

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();
  const { language } = useContext(LanguageContext);

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
          <h3>
            <MultiLingualContent contentID="thankYouForYourInquiry" />
          </h3>
          <p>
            <MultiLingualContent contentID="weWillReplyAsSoonAsPossible" />
          </p>
        </div>
      ) : (
        <>
          <h2>
            <MultiLingualContent contentID="contactUs" />
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="top">
              <div className="input-wrapper">
                <label>
                  <MultiLingualContent contentID="firstName" />
                </label>
                <input type="text" name="user_firstname" required />
              </div>
              <div className="input-wrapper">
                <label>
                  <MultiLingualContent contentID="lastName" />
                </label>
                <input type="text" name="user_lastname" />
              </div>
            </div>
            <div className="top">
              <div className="input-wrapper">
                <label>
                  <MultiLingualContent contentID="phone" />
                </label>
                <input type="phone" name="user_phone" required />
              </div>
              <div className="input-wrapper">
                <label>
                  <MultiLingualContent contentID="email" />
                </label>
                <input type="email" name="user_email" required />
              </div>
            </div>
            <div className="bottom">
              <div className="input-wrapper">
                <label>
                  <MultiLingualContent contentID="message" />
                </label>
                <textarea name="message" required />
              </div>
            </div>
            <button
              type="submit"
              style={{
                fontFamily:
                  language === "hebrew" ? "MPLUSRounded1c" : "JosefinSlab",
              }}
            >
              <MultiLingualContent contentID="send" />
            </button>
          </form>
        </>
      )}
      <img className="butterfly" src={butterfly} alt="butterfly" />
    </div>
  );
};

export default Contact;
