import "../styles/contact.css";

import { IoIosSend } from "react-icons/io";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contactSection">
          <h1 id="Contact" className="contactHeader">
            Get in touch.
          </h1>
          <form>
            <div className="section1">
              <div className="formSection">
                <label>Your name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="formSection">
                <label>Email address</label>
                <input type="text" id="emailAddress" name="emailAddress" />
              </div>
            </div>
            <div className="formSection">
              <label>Message</label>
              <textarea
                id="message"
                name="message"
                style={{ height: "200px" }}
              />
            </div>
            <button className="sendButton">
              SEND
              <span className="sendButtonIcon">
                <IoIosSend />
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
