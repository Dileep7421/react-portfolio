import React, { useState } from 'react';
import './Projects.css'; // Import a CSS file for styling

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Dashboard Customization Project',
      icon: 'fa-cogs',
      summary: `Developed an advanced, highly customizable dashboard interface that enhanced user engagement and system performance.`,
      details: `- Led the design and implementation of a new dashboard, focusing on user-centered design principles and interactivity.
        - Incorporated advanced data visualization techniques, allowing users to interact with and customize various data components.
        - Worked on optimizing the application for performance, reducing load times and improving the overall user experience.
        - Collaborated with a team to ensure the integration of new features such as drag-and-drop widgets, theme customization, and user-specific data filtering options.`,
      impact: `- Increased user engagement by 20% and overall satisfaction by 15%.
        - Reduced customer complaints by 25% through the implementation of intuitive user interfaces and error-handling mechanisms.
        - Improved system efficiency by 30%, allowing for more seamless data processing and interaction.
        - Successfully delivered the project within a 10-month timeline, working in an Agile environment.`,
      technologies: ['Angular', 'React', 'FusionCharts', 'REST APIs']
    },
    {
      title: 'IoT Dashboard Management System',
      icon: 'fa-network-wired',
      summary: `Engineered a comprehensive management system for IoT devices, enhancing real-time monitoring and data analysis.`,
      details: `- Developed a modular IoT dashboard that provided real-time monitoring and analytics for various connected devices.
        - Integrated comprehensive REST APIs to facilitate seamless communication between the front-end and back-end components.
        - Implemented flexible and customizable design options for entity cards, including features like dropdowns and calendars.
        - Focused on improving code maintainability and performance by addressing over 50 bugs and writing comprehensive test cases, achieving 40% code coverage.
        - Employed advanced state management and data handling techniques to ensure smooth operation and user experience.`,
      impact: `- Enhanced user flexibility and customization options by 40%.
        - Improved application performance and stability through optimized code and refactoring.
        - Enabled efficient data handling and visualization, leading to more informed decision-making processes.
        - Streamlined integration with existing systems, improving operational efficiency for end-users.`,
      technologies: ['Spring Boot', 'Angular', 'React', 'REST APIs', 'JUnit']
    },
    {
      title: 'Thrusang Fest Web Application',
      icon: 'fa-calendar-alt',
      summary: `Organized and executed Thrusang '22 & '23, a large-scale cultural festival featuring a diverse range of events, including live performances, art exhibitions, workshops, and interactive activities.`,
      details: `- Developed and launched a dedicated website to manage event registrations, schedules, and updates, significantly enhancing participant and audience experience.
        - Coordinated with multiple teams to ensure seamless execution, attracting significant participation and attendance, contributing to the fest's success.`,
      impact: `- Enhanced participant and audience experience through an improved event management system.
        - Attracted a larger audience and increased engagement with effective online event management and promotion.`,
      technologies: ['Html', 'Css', 'JavaScript', 'Django','Postgres']
    },
    {
      title: 'E-Commerce Website',
      icon: 'fa-shopping-cart',
      summary: `Built a full-featured e-commerce platform using Angular and TypeScript, enabling users to browse over 1,000 products, add items to the cart, and proceed to checkout, resulting in a 30% increase in user engagement.`,
      details: `- Designed a responsive and interactive user interface using Angular components and services, enhancing navigation across 15+ product categories and pages.
        - Implemented a secure and efficient checkout process, integrating payment gateways and ensuring data protection.
        - Developed features such as product search, filtering, and sorting to improve user experience and facilitate easy product discovery.
        - Optimized application performance by implementing lazy loading and code splitting, resulting in faster page load times and a smoother browsing experience.
        - Collaborated with backend developers to ensure seamless integration with the API, managing product data and user transactions effectively.`,
      impact: `- Increased user engagement by 30% through an intuitive and user-friendly interface.
        - Improved user satisfaction by 25% due to enhanced navigation and overall site performance.
        - Achieved a significant boost in sales conversion rates and customer retention through effective feature implementation and user experience enhancements.`,
      technologies: ['Html', 'Css', 'TypeScript', 'Angular','Postgres']
    }
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <h2 className="header-text"><i className="fas fa-project-diagram"></i> My Projects</h2>
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <i className={`fas ${project.icon} project-icon`}></i>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <button className="project-button" onClick={() => handleOpenModal(project)}>
                View More
              </button>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <button className="close-button" onClick={handleCloseModal}>✖</button>
              <h2 className="modal-title"><i className={`fas ${selectedProject.icon} modal-icon`}></i> {selectedProject.title}</h2>
              <p className="modal-details">{selectedProject.details}</p>
              <h4>Technologies Used:</h4>
              <ul className="technologies-list">
                {selectedProject.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <h4>Project Impact:</h4>
              <p className="modal-impact">{selectedProject.impact}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
