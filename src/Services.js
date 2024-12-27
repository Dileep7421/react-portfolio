import React from 'react';
import Card from './Card';
import './Services.css';

export default function Services() {
  const technologies = [
    { iconClass: 'fab fa-angular', title: 'Angular', description: 'A platform for building mobile and desktop web applications.' },
    { iconClass: 'fab fa-react', title: 'React', description: 'A JavaScript library for building user interfaces.' },
    { iconClass: 'fab fa-html5', title: 'HTML', description: 'The standard markup language for documents designed to be displayed in a web browser.' },
    { iconClass: 'fab fa-css3-alt', title: 'CSS', description: 'Style sheet language used for describing the presentation of a document written in HTML.' },
    { 
        iconClass: 'fab fa-js-square',
        title: 'JavaScript & TypeScript', 
        description: 'JavaScript is a versatile programming language, and TypeScript is its strict syntactical superset adding optional static typing.' 
    },
    { iconClass: 'fab fa-node-js', title: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, enabling server-side development.' },
    { iconClass: 'fab fa-java', title: 'Java', description: 'A versatile and powerful object-oriented programming language widely used for developing applications.' }
];


  return (
    <div>
      <h2 className="header-text"><i className="fas fa-cogs"></i> Technologies</h2>
      <div className="card-container">
        {technologies.map((tech, index) => (
          <Card 
            key={index} 
            iconClass={tech.iconClass} 
            title={tech.title} 
            description={tech.description} 
          />
        ))}
      </div>
    </div>
  );
}
