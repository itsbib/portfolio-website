import "./App.css";
import "./styles/home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Bibek Karki - Web Developer</title>
        </Helmet>
      </HelmetProvider>
      <div className="mainContainer">
        <div className="rectangle">
          <Navbar />
        </div>
        <h1 className="headerText">
          <span className="headerText1">
            Bibek <span className="headerText2">Karki</span>
          </span>{" "}
          <br />
          Full Stack Developer
        </h1>
        <button className="ctaButton">Contact Me</button>
      </div>
      <Services />
      <Portfolio />
      <Testimonials />
    </>
  );
}
