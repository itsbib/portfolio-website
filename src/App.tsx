import "./App.css";
import "./styles/home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import { ISocialLinks } from "./types/interfaces/socialLinks.interface";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

const socialLinks: ISocialLinks[] = [
  {
    logo: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/bibekkarkiii/",
  },
  {
    logo: <FaGithub />,
    link: "https://github.com/itsbib",
  },
  {
    logo: <FaInstagram />,
    link: "https://www.instagram.com/bibekkarkiii/",
  },
];
export default function App() {
  const handleButtonClick = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Bibek Karki - Web Developer</title>
        </Helmet>
      </HelmetProvider>
      <div className="mainContainer">
        <div className="rectangle"></div>
        <div className="navbarStyle">
          <Navbar />
        </div>
        <h1 className="headerText">
          <span className="headerText1">
            Bibek <span className="headerText2">Karki</span>
          </span>{" "}
          <br />
          Full Stack Developer
        </h1>
        <div className="socialLinks">
          {socialLinks.map((data) => (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
              {data.logo}
            </a>
          ))}
        </div>
        <a>
          <button className="ctaButton" onClick={handleButtonClick}>
            Contact Me
          </button>
        </a>
      </div>
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}
