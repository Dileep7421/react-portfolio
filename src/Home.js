import React, { useState, useEffect } from 'react';
import './Home.css';
import resume from './Resume_AmpoluDileepKumar.pdf';
import bgImage from './home-bg-image.jpg';

export default function Home() {
  const roles = ['Software Developer', 'Full-Stack Engineer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let timer;
    const activeRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(activeRole.substring(0, currentText.length + 1));
        if (currentText === activeRole) {
          // Pause at full word
          timer = setTimeout(() => setIsDeleting(true), 2200);
          return;
        }
      } else {
        setCurrentText(activeRole.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(120);
          return;
        }
      }
      
      setTypingSpeed(isDeleting ? 60 : 120);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleContactScroll = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('.contact-div');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-section-container">
      {/* Immersive mesh gradient overlay & backdrop image */}
      <div className="home-background" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="home-overlay"></div>
      </div>
      
      {/* Decorative moving visual blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Main Glass Panel Card */}
      <div className="home-glass-card">
        <span className="welcome-tag">Welcome to my space</span>
        
        <h1 className="hero-heading">
          Hi, I am <span className="highlight">Ampolu Dileep Kumar</span>
        </h1>
        
        <div className="typewriter-container">
          <span className="typewriter-prefix">A passionate </span>
          <span className="typewriter-text">
            {currentText}
            <span className="cursor">|</span>
          </span>
        </div>

        <p className="hero-description">
          Building high-performance, user-centric web applications with modern technologies. 
          Specialized in Angular, React, Node.js, and creating flawless digital experiences.
        </p>

        {/* Dual Actions CTA */}
        <div className="cta-container">
          <a 
            href={resume} 
            download="Resume_AmpoluDileepKumar.pdf" 
            className="home-btn btn-primary"
          >
            <i className="fas fa-download"></i>
            Download Resume
          </a>
          <a 
            href="#contact" 
            onClick={handleContactScroll}
            className="home-btn btn-secondary"
          >
            <i className="fas fa-paper-plane"></i>
            Get in Touch
          </a>
        </div>
      </div>
      
      <div className="scroll-indicator-container">
        <div className="mouse-wheel">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </div>
  );
}
