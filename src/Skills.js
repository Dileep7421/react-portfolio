import React from 'react';
import './Skills.css'; 

const skills = [
  { name: 'Angular', percentage: 80, icon: 'fab fa-angular', color: '#dd0031', gradient: 'linear-gradient(135deg, #dd0031 0%, #c3002f 100%)' },
  { name: 'React', percentage: 65, icon: 'fab fa-react', color: '#61dafb', gradient: 'linear-gradient(135deg, #61dafb 0%, #21a9c7 100%)' },
  { name: 'HTML', percentage: 90, icon: 'fab fa-html5', color: '#e34c26', gradient: 'linear-gradient(135deg, #e34c26 0%, #c5371a 100%)' },
  { name: 'CSS', percentage: 70, icon: 'fab fa-css3-alt', color: '#2965f1', gradient: 'linear-gradient(135deg, #2965f1 0%, #1e4ed8 100%)' },
  { name: 'Java', percentage: 70, icon: 'fab fa-java', color: '#f89820', gradient: 'linear-gradient(135deg, #f89820 0%, #e8850d 100%)' },
  { name: 'NodeJS', percentage: 60, icon: 'fab fa-node-js', color: '#68a063', gradient: 'linear-gradient(135deg, #68a063 0%, #4f7a4a 100%)' },
  { name: 'TypeScript', percentage: 75, icon: 'fab fa-js-square', color: '#007acc', gradient: 'linear-gradient(135deg, #007acc 0%, #005a9e 100%)' },
  { name: 'JavaScript', percentage: 80, icon: 'fab fa-js-square', color: '#f7df1e', gradient: 'linear-gradient(135deg, #f7df1e 0%, #d4ba1a 100%)' },
];

export default function Skills() {
  return (
    <div className="skills-container section-container">
      <h2 className="header-text"><i className="fas fa-lightbulb"></i> My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="skill-card-modern"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              '--skill-gradient': skill.gradient,
              '--skill-color': skill.color
            }}
          >
            <div className="skill-card-header">
              <div className="skill-icon-modern" style={{ color: skill.color }}>
                <i className={skill.icon}></i>
              </div>
              <div className="skill-percentage-modern">{skill.percentage}%</div>
            </div>
            <div className="skill-card-body">
              <h3 className="skill-name-modern">{skill.name}</h3>
              <div className="progress-bar-modern">
                <div 
                  className="progress-fill-modern"
                  style={{ 
                    width: `${skill.percentage}%`,
                    background: skill.gradient
                  }}
                >
                  <span className="progress-glow"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
