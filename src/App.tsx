import React from "react";
import "./App.css";
import "./home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Bibek Karki - Web Developer</title>
        </Helmet>
        <div className="mainContainer">
          <div className="rectangle">
            <Navbar />
          </div>
          <h1 className="headerText">
            <span className="headerText1">
              Bibek <span className="headerText2">Karki</span>
            </span>{" "}
            <br />
            Full Stack Web Developer
          </h1>
          <button className="ctaButton">Contact Me</button>
        </div>
      </HelmetProvider>
    </>
  );
}
