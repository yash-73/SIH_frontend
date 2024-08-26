import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Simulate sending data to the server
    console.log('Form Data:', { name, email, subject, message });

    // Display a confirmation message to the user
    setFormMessage('Thank you for your message! We will get back to you soon.');

    // Clear the form
    event.target.reset();
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>

      <section>
        <h2>Sub heading</h2>
        <p>Queries</p>
      </section>

      <section className="contact-form">
        <form id="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        {formMessage && <div id="formMessage" className="form-message success-message">{formMessage}</div>}
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: abcde@farmguard.com</p>
        <p>Phone: 8669178247</p>
        <p>Address: Dhanakwadi, Pune</p>
      </section>
    </div>
  );
};

export default ContactUs;
