import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  const stats = [
    { value: '3+', label: 'Years Experience', icon: 'fas fa-briefcase', color: 'var(--primary-color)' },
    { value: '7+', label: 'Projects Completed', icon: 'fas fa-project-diagram', color: 'var(--accent-color)' },
    { value: '5+', label: 'Tech Specialties', icon: 'fas fa-laptop-code', color: 'var(--secondary-color)' }
  ];

  const values = [
    { title: 'Customer Satisfaction', desc: 'Putting the needs of our customers first.', icon: 'fas fa-smile' },
    { title: 'Continuous Improvement', desc: 'Striving for excellence in every project.', icon: 'fas fa-arrow-up' },
    { title: 'Integrity', desc: 'Maintaining transparency and honesty in our work.', icon: 'fas fa-shield-alt' },
    { title: 'Collaboration', desc: 'Building strong, productive relationships.', icon: 'fas fa-users' }
  ];

  const expertise = [
    { category: 'Front-End', skills: ['Angular', 'React', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'RxJs'], icon: 'fab fa-react' },
    { category: 'Back-End', skills: ['Java', 'NodeJS', 'REST APIs', 'Database Management'], icon: 'fas fa-server' },
    { category: 'Tools & Platforms', skills: ['Git', 'Jenkins', 'GitHub', 'CI/CD'], icon: 'fas fa-tools' },
    { category: 'Methodologies', skills: ['Agile', 'Scrum', 'SDLC', 'Sprint Planning'], icon: 'fas fa-project-diagram' }
  ];

  return (
    <div className="about-us-section section-container">
      <h2 className="header-text">
        <i className="fas fa-user-circle"></i> About Us
      </h2>

      {/* Main Profile Split Grid */}
      <div className="about-main-grid">
        {/* Left Side: Summary text & badges */}
        <div className="about-summary-panel glass-container">
          <h3>Who I Am</h3>
          <p>
            I am a full-stack developer focused on building reliable, user-friendly
            applications that deliver great customer experiences. I work well both
            independently and as part of a team. My primary backend expertise is
            Java, and I am also proficient with Angular, React, HTML, CSS,
            JavaScript, TypeScript, and Node.js.
          </p>
          <p>
            I have hands-on experience delivering production-grade front-end
            applications and robust backend services, prioritizing maintainable
            code, automated testing, and timely delivery of high-quality solutions.
          </p>

          {/* Stats Grid */}
          <div className="about-stats-grid">
            {stats.map((stat, idx) => (
              <div className="stat-card" key={idx} style={{ '--accent': stat.color }}>
                <i className={stat.icon + ' stat-icon'}></i>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Mission & Values */}
        <div className="about-mission-panel glass-container">
          <div className="mission-box">
            <h3><i className="fas fa-bullseye icon-color"></i> Our Mission</h3>
            <p>
              Our mission is to leverage technology to create seamless, user-friendly
              applications that enhance user experience and satisfaction. We aim to deliver
              robust solutions that not only meet but exceed customer expectations.
            </p>
          </div>

          <div className="values-box">
            <h3><i className="fas fa-heart icon-color"></i> Our Values</h3>
            <div className="values-grid">
              {values.map((val, idx) => (
                <div className="value-chip-card" key={idx}>
                  <i className={val.icon + ' value-icon'}></i>
                  <div>
                    <h4>{val.title}</h4>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Container */}
      <div className="about-expertise-container glass-container">
        <h3><i className="fas fa-cogs expertise-title-icon"></i> Technical Expertise</h3>
        <p className="expertise-intro">
          I offer focused expertise across modern front-end and back-end stacks,
          with Java as my primary backend language and a strong emphasis on
          building maintainable, testable services.
        </p>
        
        <div className="expertise-grid">
          {expertise.map((exp, idx) => (
            <div className="expertise-card" key={idx}>
              <div className="expertise-header">
                <i className={exp.icon + ' exp-icon'}></i>
                <h4>{exp.category}</h4>
              </div>
              <div className="skills-pill-box">
                {exp.skills.map((skill, sIdx) => (
                  <span className="skill-pill" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
