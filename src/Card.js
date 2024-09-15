
import React from 'react';
import './Card.css';

const Card = ({ iconClass, title, description}) => {
  return (
    <div className="card">
      <i className={iconClass + " icon"}></i>
      <h3>{title}</h3>
        <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
