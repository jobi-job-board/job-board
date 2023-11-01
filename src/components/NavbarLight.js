import logoLight from "../assets/homepage-section/logo-light.png";
import { Link } from "react-router-dom";
import { List } from "phosphor-react";
import { useState } from "react";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <div>
      <nav className="nav-light">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logoLight} alt="Company logo" />
          </Link>
        </div>
        {/* mobile nav */}
        <div className="hamburger" id="hamburger">
          <div
            className="hamburger-icon none"
            onClick={() => setShowHamburger((prevState) => !prevState)}
          >
            <List />
          </div>
          <div className="mobile-menu">
            <ul className={`mobile-nav-menu ${showHamburger ? "" : "none"}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Job</Link>
              </li>
              <li>
                <Link to="/">Explore</Link>
              </li>
              <li>
                <Link to="/">Category</Link>
              </li>
              <li>
                <Link to="/">Pages</Link>
                <div className="nav-divider"></div>
              </li>
              <li>
                <a href="#" className="login">
                  Post Job
                </a>
              </li>
              <li>
                <a href="#" className="login">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="btn-register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="top-nav">
          <ul className="navbar-menu flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Job</Link>
            </li>
            <li>
              <Link to="/">Explore</Link>
            </li>
            <li>
              <Link to="/">Category</Link>
            </li>
            <li>
              <Link to="/">Pages</Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-buttons flex">
          <li>
            <a href="#" className="login post-job">
              Post Job
            </a>
          </li>
          <li>
            <a href="#" className="login" id="login-button">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="btn-register">
              Hire Top Talents
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
