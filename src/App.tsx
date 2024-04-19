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
import SkillsSphere from "./components/SkillsSphere";
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

      <div className="navbarStyle">
        <Navbar />
      </div>
      <div className="mainContainer">
        <div className="contentContainer">
          <h1 className="headerText">
            Hi There,
            <br />
            I'm Bibek Karki
            <br />
            <div className="subHeader">
              <span className="subHeader1">Full Stack Developer </span>
              <span className="subHeader2">
                with a passion for creating impactful
                <br /> and scalable web apps.
              </span>
            </div>
          </h1>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="ctaButton" onClick={handleButtonClick}>
              Contact Me
            </button>
          </Link>
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
        </div>

        <div className="skillsSphere">
          <SkillsSphere />
        </div>
      </div>
      <Services />
      <Portfolio />
      <div className="testimonialsAndContacts">
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
