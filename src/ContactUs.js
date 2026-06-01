import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
  const contactDetails = [
    { title: 'Mobile Number', value: '(+91) 7075960589', icon: 'fas fa-phone-alt', actionText: 'Call Now', href: 'tel:+917075960589', color: 'var(--primary-color)' },
    { title: 'Email', value: 'ampoludileep7@gmail.com', icon: 'fas fa-envelope', actionText: 'Mail Me', href: 'mailto:ampoludileep7@gmail.com', color: 'var(--accent-color)' },
    { title: 'Location', value: 'Main Street, Srikakulam, AP, India', icon: 'fas fa-map-marker-alt', actionText: 'Open Map', href: 'https://maps.google.com/?q=Srikakulam,Andhra+Pradesh,India', color: 'var(--secondary-color)' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, submit data
  };

  return (
    <div className="contact-section-container section-container">
      <h2 className="header-text">
        <i className="fas fa-envelope-open-text"></i> Contact Us
      </h2>

      <div className="contact-main-grid">
        {/* Left Column: Glass Details Cards */}
        <div className="contact-details-panel">
          <div className="contact-details-intro glass-container">
            <h3>Get In Touch</h3>
            <p>
              Have a project in mind, an opportunity, or just want to say hello? 
              Feel free to reach out using any of the communication channels below. I'll get back to you as soon as possible!
            </p>
          </div>

          <div className="contact-info-cards-list">
            {contactDetails.map((detail, idx) => (
              <a 
                href={detail.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-info-glass-card glass-container" 
                key={idx}
                style={{ '--accent': detail.color }}
              >
                <div className="contact-card-icon-box">
                  <i className={detail.icon}></i>
                </div>
                <div className="contact-card-content">
                  <h4>{detail.title}</h4>
                  <p>{detail.value}</p>
                  <span className="contact-card-action">
                    {detail.actionText} <i className="fas fa-chevron-right"></i>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Floating glass messaging form */}
        <div className="contact-form-panel glass-container">
          <h3>Send a Message</h3>
          <p className="form-subtext">Drop a line, and let's build something remarkable together.</p>
          
          <form className="contact-glass-form" onSubmit={handleSubmit}>
            <div className="input-group-modern">
              <input type="text" id="name" required placeholder=" " />
              <label htmlFor="name">Your Name</label>
              <div className="input-bar"></div>
            </div>

            <div className="input-group-modern">
              <input type="email" id="email" required placeholder=" " />
              <label htmlFor="email">Your Email</label>
              <div className="input-bar"></div>
            </div>

            <div className="input-group-modern">
              <input type="text" id="subject" required placeholder=" " />
              <label htmlFor="subject">Subject</label>
              <div className="input-bar"></div>
            </div>

            <div className="input-group-modern">
              <textarea id="message" rows="4" required placeholder=" "></textarea>
              <label htmlFor="message">Your Message</label>
              <div className="input-bar"></div>
            </div>

            <button type="submit" className="contact-submit-btn">
              <span>Send Message</span>
              <i className="fas fa-paper-plane send-plane-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
