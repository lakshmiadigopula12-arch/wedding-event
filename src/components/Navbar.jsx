import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/Logo image.jpeg" alt="Lakshmi's Wedding Event Logo" />
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About.jsx">About</Link></li>
        <li><Link to="/Packages.jsx">Packages</Link></li>
        <li><Link to="/Gallery.jsx">Gallery</Link></li>
        <li><Link to="/Services.jsx">Services</Link></li>
        <li><Link to="/Testimonials.jsx">Testimonials</Link></li>
        <li><Link to="/Contact.jsx">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;