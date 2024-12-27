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
        - Collaborated with a team to ensure the integration of new features such as drag-and-drop widgets, theme customization, and user-specific data filtering options. 
        - Developed over six distinct types of charts using the FusionCharts library, tailoring each chart type to meet specific data visualization needs and requirements`,
      impact: `- Increased user engagement by 20% and overall satisfaction by 15%.
        - Reduced customer complaints by 25% through the implementation of intuitive user interfaces and error-handling mechanisms.
        - Improved system efficiency by 30%, allowing for more seamless data processing and interaction.
        - Successfully delivered the project within a 10-month timeline, working in an Agile environment.`,
      technologies: ['Angular', 'REST APIs', 'NodeJS']
    },
    {
      title: 'IoT Dashboard Management System',
      icon: 'fa-network-wired',
      summary: `Developed a robust low-code/no-code IoT dashboard management system that enables efficient real-time monitoring.`,
      details: `- Designed and implemented a user-friendly drag-and-drop interface to simplify dashboard creation and customization, enabling users to build their monitoring solutions without extensive coding.
        - Integrated a variety of pre-built templates and modular components to facilitate quick setup and configuration of IoT dashboards.
        - Developed and exposed REST APIs to ensure seamless communication between the front-end and back-end systems, enhancing data integration and interaction.
        - Implemented advanced workflow automation features to streamline repetitive tasks and improve operational efficiency.
        - Focused on responsive design to ensure optimal performance and usability across different devices and screen sizes.
        - Improved code maintainability by addressing over 50 issues and achieving 40% code coverage through comprehensive testing.`,
      impact: `- Increased user flexibility and customization capabilities by 40%, allowing for more personalized dashboard experiences.
        - Enhanced overall application performance and stability through code optimization and refactoring efforts.
        - Facilitated more efficient data handling and visualization, leading to better-informed decision-making.
        - Streamlined integration with existing systems, boosting operational efficiency for end-users.`,
      technologies: ['Java', 'Angular', 'REST APIs', 'JUnit']
    },
    {
      title: 'Thrusang Fest Web Application',
      icon: 'fa-calendar-alt',
      summary: `Organized and executed Thrusang '22 & '23, a large-scale cultural festival featuring a diverse range of events, including live performances, art exhibitions, workshops, and interactive activities.`,
      details: `- Created and maintained the website for Thrusang’22 , a large-scale national-level technical fest, ensuring smooth operation throughout the event.
        - Engineered a responsive website using modern front-end technologies like HTML, CSS, JavaScript and Django,
providing real-time updates for events and schedules. 
- Integrated backend systems using Python to manage user registrations, event data, and feedback submissions. 
- Handled frontend and backend maintenance during the fest, ensuring 99% uptime for continuous access to
event-related information. 
- Optimized performance for 200+ concurrent users with robust server-side handling and efficient database
management. 
- Crafted an interactive user interface, leading to a 20% increase in user participation`,
      impact: `- Enhanced participant and audience experience through an improved event management system.
        - Attracted a larger audience and increased engagement with effective online event management and promotion.`,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Django','Postgres']
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
      technologies: ['HTML', 'CSS', 'TypeScript', 'Angular','Postgres', 'NodeJs']
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
              <ul className="modal-details">
                {selectedProject.details.split('\n').map((line, idx) => (
                  line.trim().startsWith('-') && <li key={idx}>{line.replace('-', '').trim()}</li>
                ))}
              </ul>

              <h4>Technologies Used:</h4>
              <ul className="technologies-list">
                {selectedProject.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>

              <h4>Project Impact:</h4>
              <ul className="modal-impact">
                {selectedProject.impact.split('\n').map((line, idx) => (
                  line.trim().startsWith('-') && <li key={idx}>{line.replace('-', '').trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
