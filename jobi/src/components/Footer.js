import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import blackSquare from '../assets/icons/black-square.png';
import {
  footerLinksData,
  footerProductsData,
  footerLegalData,
} from '../constants';

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-top footer-top-wrapper flex ">
          <div className="footer-top-text flex-col">
            <h3 className="h3-footer">Most complete job portal.</h3>
            <p className="p-footer">
              Signup and start find your job or talents.
            </p>
          </div>
          <div>
            <button className="btn-square-outline">Looking for a job?</button>
            <button className="btn-square-wide">Post a job</button>
          </div>
        </div>
        <div className="footer-bottom flex-footer">
          <ul className="footer-bottom-col-1">
            <li>
              <img src={logo} alt="Jobi logo" />
            </li>
            <li className="email">
              <address>
                <a href="mailto:jobisupport@company.com">
                  jobisupport@company.com
                </a>
              </address>
            </li>
            <li className="footer-social">
              <ul className="flex-footer">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <img
                src={blackSquare}
                alt="Black square"
                width={53}
                className="black-square"
              />
            </li>
          </ul>
          <ul className="footer-bottom-col-2">
            <li>
              <h5 className="footer-header">Links</h5>
            </li>
            {footerLinksData.map((item) => (
              <li key={item.id}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer-bottom-col-3">
            <li>
              <h5 className="footer-header">Products</h5>
            </li>
            {footerProductsData.map((item) => (
              <li key={item.id}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer-bottom-col-4">
            <li>
              <h5 className="footer-header">Legal</h5>
            </li>
            {footerLegalData.map((item) => (
              <li key={item.id}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-copyright flex wrapper">
        <div>
          <a href="#">Privacy & Terms</a>
          <a href="#">Contact Us</a>
        </div>
        <div>
          <p>Copyright @2022 jobi inc.</p>
        </div>
        <div>
          <ul className="flex footer-copyright-socials">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
