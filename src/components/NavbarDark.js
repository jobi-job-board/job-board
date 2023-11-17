'use client';
import Image from 'next/image';
import logoLight from '@/assets/logo-light.png';
import Link from 'next/link';
import { List } from 'phosphor-react';
import { useState } from 'react';

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <div>
      <nav className="nav navbar-dark">
        <div className="navbar-logo">
          <Link href="/">
            <Image src={logoLight} className="logo-light" alt="Company logo" />
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
            <ul className={`mobile-nav-menu ${showHamburger ? '' : 'none'}`}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Job</Link>
              </li>
              <li>
                <Link href="/">Explore</Link>
              </li>
              <li>
                <Link href="/">Category</Link>
              </li>
              <li>
                <Link href="/">Pages</Link>
                <div className="nav-divider"></div>
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
          <ul className="navbar-menu flex ">
            <li>
              <Link className="text-white" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/">
                Job
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/">
                Explore
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/">
                Category
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/">
                Pages
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-buttons flex">
          <li>
            <a href="#" className="login login-dark">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="btn-register btn-register-dark">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
