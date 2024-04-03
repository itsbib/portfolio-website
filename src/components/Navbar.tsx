import "../styles/navbar.css";
import toggleButton from "../utils/toggleButton";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-toggle" id="navbar-toggle">
          &#9776;
        </div>
        <ul className="navbar-menu">
          <li>
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Testimonials"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="contactButton"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {toggleButton}
    </>
  );
};
export default Navbar;
