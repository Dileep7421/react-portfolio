import React from 'react';
import './Experience.css';

export default function Experience() {
  const braneAchievements = [
    'Developed user-friendly, responsive, and visually appealing UI components using modern web technologies.',
    'Led the development of multiple single-page applications, ensuring a seamless user experience and efficient performance.',
    'Integrated complex APIs and ensured smooth data flow between the front end and back end using Angular and Spring Boot.',
    'Improved application performance by 30% through code optimization and refactoring.',
    'Contributed to the design and implementation of the application architecture, enhancing maintainability and scalability.',
    'Collaborated closely with design and backend teams to deliver fully functional, user-centric applications.',
    'Implemented version control and managed project repositories using Git, facilitating a streamlined development process.',
    'Participated in code reviews, providing constructive feedback and ensuring code quality and best practices.'
  ];

  const projectAchievements = [
    'Designed and developed pharmacy cart management and inventory workflows with intelligent batch allocation based on product expiry and stock availability (AesthatiQ).',
    'Owned and maintained the Credit Management Service (CMS) for secure payment verification and transaction validation (Spotlight).',
    'Integrated Razorpay and PayU payment gateways, and built robust webhook handling and financial data consistency mechanisms.',
    'Integrated Agora Video SDK for secure virtual consultations and built real-time notifications/updates using WebSockets.',
    'Designed resilient transaction idempotency, retry strategies, and failure recovery mechanisms to minimize revenue leakage risks.',
    'Improved system logging, monitoring, and traceability across a microservices architecture, resolving complex transaction mismatches.',
    'Developed patient vitals capture, clinic operations, and treatment plan-based ordering workflows.',
    'Handled complex business validations and cross-module integrations for clinic and financial operational modules.'
  ];

  return (
    <div className="experience-timeline-section section-container">
      <h2 className="header-text">
        <i className="fas fa-briefcase"></i> Experience
      </h2>

      <div className="timeline-wrapper">
        {/* Core Vertical Timeline Path line */}
        <div className="timeline-line"></div>

        {/* Experience Item 1: Present (Dimensionleap PVT LTD) */}
        <div className="timeline-item">
          {/* Timeline node icon indicator */}
          <div className="timeline-node">
            <i className="fas fa-laptop-code"></i>
          </div>

          {/* Timeline content glass card */}
          <div className="timeline-content glass-container">
            <div className="experience-header-block">
              <span className="experience-duration-tag">
                <i className="far fa-calendar-alt"></i> June 2026 - Present (3+ Years Overall)
              </span>
              
              <h3 className="experience-role">Front-End & Back-End Developer</h3>
              <h4 className="experience-company">
                <i className="fas fa-building"></i> Dimensionleap PVT LTD
              </h4>
              
              <div className="experience-location">
                <i className="fas fa-map-marker-alt"></i> Hyderabad, India
              </div>
            </div>

            {/* Key Skill Tags */}
            <div className="experience-skills-box">
              <h5>Technologies Mastered:</h5>
              <div className="experience-skills-pills">
                {['Angular', 'React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'NgRx', 'RxJs', 'Java', 'NodeJS', 'Git', 'REST APIs'].map((tech, idx) => (
                  <span className="exp-tech-pill" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements details */}
            <div className="experience-achievements-block">
              <h5>
                <i className="fas fa-trophy highlight-color"></i> Achievements & Contributions
              </h5>
              <ul className="experience-achievements-list">
                {braneAchievements.map((item, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check-circle check-icon"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* End to End Involvement description */}
            <div className="experience-e2e-block">
              <h5>
                <i className="fas fa-project-diagram highlight-color"></i> End-to-End Involvement
              </h5>
              <p>
                Actively involved in the entire software development lifecycle, from gathering client requirements to application design, development, integration, testing, and deployment. Gained hands-on experience in Agile methodologies and contributed to successful project deliveries.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Item 2: Apr-2025 to June-2026 (Healthcare & Fintech) */}
        <div className="timeline-item" style={{ marginTop: '3.5rem' }}>
          {/* Timeline node icon indicator */}
          <div className="timeline-node">
            <i className="fas fa-server"></i>
          </div>

          {/* Timeline content glass card */}
          <div className="timeline-content glass-container">
            <div className="experience-header-block">
              <span className="experience-duration-tag">
                <i className="far fa-calendar-alt"></i> April 2025 - June 2026
              </span>
              
              <h3 className="experience-role">Backend Developer (Java Spring Boot)</h3>
              <h4 className="experience-company">
                <i className="fas fa-laptop-code"></i> AesthatiQ & Spotlight Platforms
              </h4>
              
              <div className="experience-location">
                <i className="fas fa-map-marker-alt"></i> Remote / India
              </div>
            </div>

            {/* Key Skill Tags */}
            <div className="experience-skills-box">
              <h5>Technologies Mastered:</h5>
              <div className="experience-skills-pills">
                {['Java', 'Spring Boot', 'PostgreSQL', 'WebSockets', 'Razorpay', 'PayU', 'Agora SDK', 'Microservices', 'REST APIs', 'Git'].map((tech, idx) => (
                  <span className="exp-tech-pill" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements details */}
            <div className="experience-achievements-block">
              <h5>
                <i className="fas fa-trophy highlight-color"></i> Key Contributions & Platform Development
              </h5>
              <ul className="experience-achievements-list">
                {projectAchievements.map((item, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check-circle check-icon"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* End to End Involvement description */}
            <div className="experience-e2e-block">
              <h5>
                <i className="fas fa-project-diagram highlight-color"></i> Impact & System Resilience
              </h5>
              <p>
                Successfully improved transaction reliability, eliminated inventory inconsistency, and automated pharmacy and virtual care workflows. Reduced manual reconciliation overheads, prevented revenue leakage risks, and significantly enhanced the trust and user experience for both healthcare providers and financial operators.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
