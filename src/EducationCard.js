import React from 'react';
import './EducationCard.css';

function EducationCard({ title, name, duration, location, score }) {
  return (
    <div className="educard">
      <div className="card-inner">
        <div className="card-front">
          <h2>{title}</h2>
        </div>
        <div className="card-back">
          <h3>{name}</h3>
          <p><i className="fas fa-calendar-alt"></i> {duration}</p>
          <p><i className="fas fa-map-marker-alt"></i> {location}</p>
          <p><i className="fas fa-star"></i> {score}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
