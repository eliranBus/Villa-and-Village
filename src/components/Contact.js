import React, { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import butterfly from "../assets/images/butterfly.png";
import { init } from "@emailjs/browser";
import MultiLingualContent from "../languages/MultiLingualContent";
import { LanguageContext } from "../context/LanguageContext";
import { TextField, TextareaAutosize } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";
import { validateString, validateEmail } from "../utilities";

init("user_0j1a6D9rvtHlXSxC8781G");

const Contact = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [emailSent, setEmailSent] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const { language } = useContext(LanguageContext);
  const form = useRef();

  useEffect(() => {
    validateInputs();
  }, [firstName, lastName, email]);

  const validateInputs = () => {
    validateString(firstName)
      ? setValidFirstName(true)
      : setValidFirstName(false);
    validateString(lastName) ? setValidLastName(true) : setValidLastName(false);
    validateEmail(email) ? setValidEmail(true) : setValidEmail(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validFirstName && validLastName) {
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
    } else {
    }
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
                <TextField
                  label={<MultiLingualContent contentID="firstName" />}
                  type="text"
                  name="user_firstname"
                  required
                  variant="standard"
                  error={!validFirstName && firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  helperText={
                    !validFirstName &&
                    firstName && (
                      <MultiLingualContent contentID="validFirstname" />
                    )
                  }
                />
              </div>
              <div className="input-wrapper">
                <TextField
                  label={<MultiLingualContent contentID="lastName" />}
                  type="text"
                  name="user_lastname"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  variant="standard"
                  error={!validLastName && lastName ? true : false}
                  helperText={
                    !validLastName &&
                    lastName && (
                      <MultiLingualContent contentID="validLastname" />
                    )
                  }
                />
              </div>
            </div>
            <div className="top">
              <div className="input-wrapper">
                <TextField
                  label={<MultiLingualContent contentID="phone" />}
                  type="number"
                  name="user_phone"
                  required
                  variant="standard"
                />
              </div>
              <div className="input-wrapper">
                <TextField
                  label={<MultiLingualContent contentID="email" />}
                  type="email"
                  name="user_email"
                  required
                  variant="standard"
                  error={!validEmail && email}
                  onChange={(e) => setEmail(e.target.value)}
                  helperText={
                    !validEmail &&
                    email && <MultiLingualContent contentID="validEmail" />
                  }
                />
              </div>
            </div>
            <div className="top">
              <div className="input-wrapper calenderInput">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disablePast
                    label={<MultiLingualContent contentID="checkIn" />}
                    value={checkInDate}
                    onChange={(newValue) => {
                      setCheckInDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <input
                  type="hidden"
                  value={
                    checkOutDate === null
                      ? ""
                      : format(new Date(checkInDate), "dd/MM/yyyy")
                  }
                  name="user_checkindate"
                />
              </div>
              <span className="to">
                <MultiLingualContent contentID="to" />
              </span>
              <div className="input-wrapper calenderInput">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disablePast
                    variant="standard"
                    label={<MultiLingualContent contentID="checkOut" />}
                    value={checkOutDate}
                    onChange={(newValue) => {
                      setCheckOutDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <input
                  type="hidden"
                  value={
                    checkOutDate === null
                      ? ""
                      : format(new Date(checkOutDate), "dd/MM/yyyy")
                  }
                  name="user_checkoutdate"
                />
              </div>
            </div>
            <div className="bottom">
              <div className="input-wrapper textArea-input-wrapper">
                <label>
                  <MultiLingualContent contentID="message" />
                </label>
                <TextareaAutosize
                  variant="standard"
                  name="message"
                  minRows={7}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              style={{
                fontFamily:
                  language === "Hebrew" ? "MPLUSRounded1c" : "JosefinSlab",
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
