import React from 'react';
import EducationCard from './EducationCard';
import './Education.css';

export default function Education() {
  const educationData = [
    { 
      title: 'Bachelor of Technology (B.Tech)', 
      name: 'Koneru Lakshmaiah Education Foundation',
      duration: '2019 - 2023',
      location: 'Vaddeswaram, Guntur',
      score: '8.64/10'
    },
    { 
      title: 'Board of Intermediate Education', 
      name: 'Sri Chaitanya Junior College',
      duration: '2017 - 2019',
      location: 'Visakhapatnam, Andhra Pradesh',
      score: '9.0/10' 
    },
    { 
      title: 'Secondary School Certificate (SSC)', 
      name: 'Sri Chaitanya School',
      duration: '2016-2017',
      location: 'Visakhapatnam, Andhra Pradesh',
      score: '8.8/10'
    },
  ];

  return (
    <div className="section-container">
      <h2 className="header-text"><i className="fas fa-graduation-cap"></i> Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <EducationCard 
            key={index} 
            title={edu.title} 
            name={edu.name}
            duration={edu.duration}
            location={edu.location}
            score={edu.score}
          />
        ))}
      </div>
    </div>
  );
}
