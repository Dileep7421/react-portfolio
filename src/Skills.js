import React from 'react';
import './Skills.css'; 

const skills = [
  { name: 'Angular', percentage: 80, color: '#dd0031' },
  { name: 'React', percentage: 85, color: '#61dafb' },
  { name: 'HTML', percentage: 90, color: '#653e00' },
  { name: 'CSS', percentage: 70, color: '#2965f1' },
  { name: 'Java', percentage: 70, color: '#f89820' },
  { name: 'NodeJS', percentage: 70, color: '#ff1ac6' },
  { name: 'TypeScript', percentage: 75, color: '#007acc' },
  { name: 'JavaScript', percentage: 80, color: '#f7df1e' },
];

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="header-text"><i className="fas fa-lightbulb"></i> My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}
              >
                {skill.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
