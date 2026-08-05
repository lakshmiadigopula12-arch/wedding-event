import "./ContactForm.css";
import { useState } from "react";

function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    weddingDate: "",
    weddingTime: "",
    venue: "",
    city: "",
    guests: "",
    packageType: "",
    budget: "",
    eventType: "",
    message: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const submittedData = { ...formData };

    console.log(submittedData);

    const whatsappNumber = "919703050007";
    const whatsappMessage = `
*New Contact Form Submission*

*Full Name:* ${submittedData.fullName}
*Email:* ${submittedData.email}
*Phone:* ${submittedData.phone}
*Wedding Date:* ${submittedData.weddingDate}
*Wedding Time:* ${submittedData.weddingTime}
*Venue:* ${submittedData.venue}
*City:* ${submittedData.city}
*Guests:* ${submittedData.guests}
*Package Type:* ${submittedData.packageType}
*Budget:* ${submittedData.budget}
*Event Type:* ${submittedData.eventType}
*Message:* ${submittedData.message}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
    alert("Thank you! Your wedding enquiry has been submitted.");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      weddingDate: "",
      weddingTime: "",
      venue: "",
      city: "",
      guests: "",
      packageType: "",
      budget: "",
      eventType: "",
      message: ""
    });

    e.target.reset();
  }


  return (
    <form className="contact-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="weddingDate"
        value={formData.weddingDate}
        onChange={handleChange}
        required
      />

      <input
        type="time"
        name="weddingTime"
        value={formData.weddingTime}
        onChange={handleChange}
      />

      <input
        type="text"
        name="venue"
        placeholder="Wedding Venue"
        value={formData.venue}
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />

      <input
        type="number"
        name="guests"
        placeholder="Expected Guests"
        value={formData.guests}
        onChange={handleChange}
      />

      <select
        name="packageType"
        value={formData.packageType}
        onChange={handleChange}
        required
      >
        <option value="">Select Wedding Package</option>
        <option>Silver Package</option>
        <option>Gold Package</option>
        <option>Platinum Package</option>
        <option>Royal Package</option>
      </select>

      <select
        name="budget"
        value={formData.budget}
        onChange={handleChange}
      >
        <option value="">Select Budget</option>
        <option>₹2 - ₹5 Lakhs</option>
        <option>₹5 - ₹10 Lakhs</option>
        <option>₹10 - ₹20 Lakhs</option>
        <option>₹20+ Lakhs</option>
      </select>

      <select
        name="eventType"
        value={formData.eventType}
        onChange={handleChange}
      >
        <option value="">Event Type</option>
        <option>Wedding</option>
        <option>Reception</option>
        <option>Engagement</option>
        <option>Haldi Ceremony</option>
        <option>Mehendi</option>
        <option>Sangeet</option>
      </select>

      <textarea
        rows="5"
        name="message"
        placeholder="Tell us about your dream wedding..."
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">
        Book Your Dream Wedding
      </button>

    </form>
  );
}

export default ContactForm;