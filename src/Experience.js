import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <div className="experience-container">
      <h2 className="header-text"><i className="fas fa-briefcase"></i> Experience</h2>
      <div className="work-experience">
        <h3 className="role-title"><i className="fas fa-laptop-code"></i> Front-End & Back-End Developer</h3>
        <p className="company-details"><i className="fas fa-building"></i> Company Name: Brane Group</p>
        <p className="company-location"><i className="fas fa-map-marker-alt"></i> Company Location: Hyderabad</p>
        <p className="duration"><i className="fas fa-calendar-alt"></i> Duration: 2 Years</p>
        <div className="skills">
          <h4 className="skills-header"><i className="fas fa-tools"></i> Key Skills & Technologies:</h4>
          <p>HTML, CSS, JavaScript, TypeScript, Angular, React, JSON, Git, SPA (Single Page Applications)</p>
        </div>
        <div className="achievements">
          <h4 className="achievements-header"><i className="fas fa-trophy"></i> Achievements & Contributions:</h4>
          <ul className="achievements-list">
            <li><i className="fas fa-check-circle"></i> Developed user-friendly, responsive, and visually appealing UI components using modern web technologies.</li>
            <li><i className="fas fa-check-circle"></i> Led the development of multiple single-page applications, ensuring a seamless user experience and efficient performance.</li>
            <li><i className="fas fa-check-circle"></i> Integrated complex APIs and ensured smooth data flow between the front end and back end using Angular and Spring Boot.</li>
            <li><i className="fas fa-check-circle"></i> Improved application performance by 30% through code optimization and refactoring.</li>
            <li><i className="fas fa-check-circle"></i> Contributed to the design and implementation of the application architecture, enhancing maintainability and scalability.</li>
            <li><i className="fas fa-check-circle"></i> Collaborated closely with design and backend teams to deliver fully functional, user-centric applications.</li>
            <li><i className="fas fa-check-circle"></i> Implemented version control and managed project repositories using Git, facilitating a streamlined development process.</li>
            <li><i className="fas fa-check-circle"></i> Participated in code reviews, providing constructive feedback and ensuring code quality and best practices.</li>
          </ul>
        </div>
        <div className="end-to-end-involvement">
          <h4 className="end-to-end-header"><i className="fas fa-project-diagram"></i> End-to-End Software Development:</h4>
          <p>Actively involved in the entire software development lifecycle, from gathering client requirements to application design, development, integration, testing, and deployment. Gained hands-on experience in Agile methodologies and contributed to successful project deliveries.</p>
        </div>
      </div>
    </div>
  );
}
