import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling

export default function ContactUs() {
  return (
    <div className="section-container">
        <h2 className="header-text"><i className="fas fa-envelope"></i> Contact Us</h2>
        <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-item">
          <i className="fas fa-phone-alt"></i>
          <div>
            <h3>Mobile Number</h3>
            <p>(+91) 7075960589</p>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <div>
            <h3>Email</h3>
            <p>ampoludileep7@gmail.com</p>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h3>Location</h3>
            <p>Main Street, Srikakulam, Andhra Pradesh, India</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
        </div>
    </div>
  );
}
