import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/wedding-event/images/Logo image.jpeg" alt="Lakshmi's Wedding Event Logo" />
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Packages">Packages</Link></li>
        <li><Link to="/Gallery">Gallery</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Testimonials">Testimonials</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;