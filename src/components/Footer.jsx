import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">

          <h2>💖 Dream Wedding</h2>

          <p>
            Creating unforgettable wedding memories with luxury decorations,
            photography, catering, and complete event planning.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/contact">Contact</a></li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact</h3>

          <p><FaPhoneAlt /> +91 98765 43210</p>

          <p><FaEnvelope /> lakshmiwedding@gmail.com</p>

          <p><FaMapMarkerAlt /> Hyderabad, Telangana</p>

        </div>

        {/* Social */}

        <div className="footer-box">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaTwitter /></a>

            <a href="#"><FaPinterestP /></a>

            <a href="#"><FaYoutube /></a>

            <a href="#"><FaLinkedinIn /></a>

          </div>

          <input
            type="email"
            placeholder="Subscribe Email"
          />

          <button>Subscribe</button>

        </div>

      </div>

      <hr />

      <div className="copyright">

        © 2026 Lakshmi's Wedding. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;