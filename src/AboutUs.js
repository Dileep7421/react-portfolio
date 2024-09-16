import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-us">
      <h2 className="header-text"><i className="fas fa-user"></i> About Us</h2>
      <p>
        To make use of my interpersonal skills to achieve goals of a company
        that focuses on customer satisfaction and customer experience. Able
        to effectively self-manage during independent projects, as well as
        collaborate as part of a productive team. Proficient in an assortment of
        technologies, including Angular, React, HTML, CSS, JavaScript, and TypeScript.
      </p>
      <p>
        Experienced in full-stack development with proficiency in working on front-end Angular
        projects and back-end development. Adept at collaborating with teams to deliver high-quality
        solutions.
      </p>

      <h3 className="sub-header"><i className="fas fa-bullseye"></i> Our Mission</h3>
      <p>
        Our mission is to leverage technology to create seamless, user-friendly
        applications that enhance user experience and satisfaction. We aim to deliver
        robust solutions that not only meet but exceed customer expectations.
      </p>

      <h3 className="sub-header"><i className="fas fa-heart"></i> Our Values</h3>
      <ul className="values-list">
        <li>Customer Satisfaction: Putting the needs of our customers first.</li>
        <li>Continuous Improvement: Striving for excellence in every project.</li>
        <li>Integrity: Maintaining transparency and honesty in our work.</li>
        <li>Collaboration: Building strong, productive relationships with our clients and team members.</li>
      </ul>

      <h3 className="sub-header"><i className="fas fa-cogs"></i> Our Expertise</h3>
      <p>
        With a deep understanding of both front-end and back-end technologies, we offer a comprehensive skill set:
      </p>
      <ul className="expertise-list">
        <li>Front-End: Angular, React, HTML, CSS, JavaScript, TypeScript</li>
        <li>Back-End: Spring Boot, REST APIs, Database Management</li>
        <li>Tools & Platforms: Git, Jenkins</li>
        <li>Methodologies: Agile, Scrum, Continuous Integration/Continuous Deployment (CI/CD)</li>
      </ul>
    </div>
  );
}
