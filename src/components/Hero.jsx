import { Link } from "react-router-dom";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>Welcome to Lakshmi's Wedding Event</h1>
        <h3>Every Love Story Deserves a Perfect Wedding</h3>

        <p>From "Yes" to "I Do", we create unforgettable weddings filled with
        love, elegance, and lifelong memories.</p>
       
        <Link to="/packages">
         <button>Plan Your Dream Wedding</button>
         </Link>

      </div>
    </section>
  );
}

export default Hero;