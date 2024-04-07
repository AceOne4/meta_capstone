import React from "react";
import logo from "../icons_assets/Logo .svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <img src={logo} alt="logo" />
          <p>
            "Chicago's citrus haven. From zesty appetizers to tangy mains and
            desserts, every dish sings with lemon's bright flavor!"
          </p>
        </div>
        <div className="footer__section">
          <h3 className="footer__heading">Contact Us</h3>
          <p>123 Main Street</p>
          <p>Chicago, CH 10001</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@liltelemon.com</p>
        </div>
        <div className="footer__section">
          <h3 className="footer__heading">Opening Hours</h3>
          <p>
            Monday - Friday: <br />
            11:00 AM - 10:00 PM
          </p>
          <p>
            Saturday - Sunday:
            <br /> 10:00 AM - 11:00 PM
          </p>
        </div>
        <div className="footer__section">
          <h3 className="footer__heading">Follow Us</h3>
          <div className="footer__social-icons">
            <a href="/" className="footer__social-icon">
              <FaFacebookSquare />
            </a>
            <a href="/" className="footer__social-icon">
              <FaInstagram />
            </a>
            <a href="/" className="footer__social-icon">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2024 Lilte Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
