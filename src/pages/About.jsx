import { Link } from "react-router-dom";

import "./About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="about">

        {/* Images + Text */}
        <div className="about-container">

          <div className="about-images">

            <img src="/wedding-event/images/H7.jpeg" alt="Wedding Stage" />

            <img src="/wedding-event/images/T&C1.jpeg" alt="Wedding Couple" />

            <img src="/wedding-event/images/Service1.jpeg" alt="Wedding Decoration" />

          </div>

          <div className="about-content">

            <h1>About Lakshmi's Wedding Event</h1>

            <p>
              Welcome to <strong>Lakshmi's Wedding Event</strong>, where dreams
              become unforgettable celebrations. We specialize in designing
              elegant, joyful, and memorable weddings that reflect your unique
              love story.
            </p>

            <p>
              We believe every wedding is special, and our mission is to create
              magical moments that you and your loved ones will cherish forever.
            </p>

            <Link to="/Packages">
              <button className="about-btn">
                Learn More
              </button>
            </Link>

          </div>

        </div>

        {/* Why Choose Us */}
        <div className="about-features">

          <h2>Why Choose Us?</h2>

          <div className="feature-box">

            <div className="feature">
              <h3>💍 Expert Wedding Planning</h3>
              <p>Complete planning from engagement to reception.</p>
            </div>

            <div className="feature">
              <h3>🌸 Luxury Decorations</h3>
              <p>Beautiful floral themes and elegant stage designs.</p>
            </div>

            <div className="feature">
              <h3>📸 Professional Photography</h3>
              <p>Capture every precious moment beautifully.</p>
            </div>

            <div className="feature">
              <h3>🍽 Premium Catering</h3>
              <p>Delicious vegetarian and non-vegetarian menus.</p>
            </div>

            <div className="feature">
              <h3>👨‍💼 Experienced Staff</h3>
              <p>Friendly coordinators for a stress-free event.</p>
            </div>

            <div className="feature">
              <h3>🎉 Complete Event Management</h3>
              <p>We handle every detail so you can enjoy your day.</p>
            </div>

          </div>

        </div>

        {/* Statistics */}
        <div className="about-stats">

          <div className="stat">
            <h2>500+</h2>
            <p>Happy Couples</p>
          </div>

          <div className="stat">
            <h2>10+</h2>
            <p>Years of Experience</p>
          </div>

          <div className="stat">
            <h2>1000+</h2>
            <p>Successful Events</p>
          </div>

          <div className="stat">
            <h2>100%</h2>
            <p>Customer Satisfaction</p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;