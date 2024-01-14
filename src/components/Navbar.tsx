import "../styles/navbar.css";
import toggleButton from "../utils/toggleButton";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-toggle" id="navbar-toggle">
          &#9776;
        </div>
        <ul className="navbar-menu">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
        </ul>
      </nav>
      {toggleButton}
    </>
  );
};
export default Navbar;
