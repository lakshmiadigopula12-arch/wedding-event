import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="about">

        <div className="about-content">

          <h1>About Lakshmi's Wedding Event</h1>

          <p>
            Welcome to <strong>Lakshmi's Wedding Event</strong>, where dreams
            become unforgettable celebrations. We specialize in designing
            elegant, joyful, and memorable weddings that reflect your unique
            love story. From intimate ceremonies to grand receptions, our
            experienced team takes care of every detail with creativity,
            dedication, and perfection.
          </p>

          <p>
            We believe every wedding is special, and our mission is to create
            magical moments that you and your loved ones will cherish forever.
            With stunning decorations, professional planning, delicious
            catering, talented photographers, and exceptional hospitality, we
            ensure a stress-free and unforgettable wedding experience.
          </p>

        </div>

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
              <p>Capture every precious moment with stunning photos.</p>
            </div>

            <div className="feature">
              <h3>🍽 Premium Catering</h3>
              <p>Delicious vegetarian and non-vegetarian menus.</p>
            </div>

            <div className="feature">
              <h3>👨‍💼 Experienced Staff</h3>
              <p>Friendly coordinators who ensure everything runs smoothly.</p>
            </div>

            <div className="feature">
              <h3>🎉 Complete Event Management</h3>
              <p>We handle every detail so you can enjoy your special day.</p>
            </div>

          </div>

        </div>

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