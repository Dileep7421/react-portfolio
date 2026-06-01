import React from 'react';
import './EducationCard.css';

function EducationCard({ title, name, duration, location, score }) {
  return (
    <div className="education-modern-card">
      <div className="education-accent-line"></div>
      <div className="education-card-dot"></div>
      <div className="education-content-wrapper">
        <div className="education-card-header-row">
          <span className="education-tag-duration">
            <i className="far fa-calendar-alt"></i> {duration}
          </span>
          <span className="education-tag-score">
            <i className="fas fa-star"></i> GPA: {score}
          </span>
        </div>
        
        <h3 className="education-degree-title">{title}</h3>
        <h4 className="education-college-name">{name}</h4>
        
        <div className="education-location-row">
          <i className="fas fa-map-marker-alt"></i>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
