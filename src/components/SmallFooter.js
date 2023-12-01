import React from "react";
import Image from "next/image";
import DarkLogo from "@/assets/logo-dark.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import blackSquare from "@/assets/icons/black-square.png";
import {
  footerLinksData,
  footerProductsData,
  footerLegalData,
} from "../helpers/constants";

const SmallFooter = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-bottom flex-footer">
          <ul className="footer-bottom-col-1">
            <li>
              <Image className="dark-logo" src={DarkLogo} alt="Jobi logo" />
            </li>
            <li className="email">
              <address>
                <a href="mailto:jobisupport@/company.com">
                  jobisupport@/company.com
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
              <Image
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
          <p>Copyright @/2022 jobi inc.</p>
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

export default SmallFooter;
