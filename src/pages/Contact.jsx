import Navbar from "../components/Navbar.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <h1>Contact Us</h1>

        <p>
          We'd love to help make your dream wedding a reality.
          Fill out the form below and our team will contact you.
        </p>

        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default Contact;