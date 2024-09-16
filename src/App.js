import React, { useState, useRef, useEffect } from 'react';
import dileepImg from './dileep.jpeg';
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import ContactUs from './ContactUs';
import Services from './Services';
import Projects from './Projects';

function App() {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [activeLink, setActiveLink] = useState('Home');
    const [isNavOpen, setIsNavOpen] = useState(false); // State to handle navigation visibility
    const style = {
        textTransform: 'uppercase',
        fontSize: '14px',
        color: '#00aae2'
    };
    const homeRef = useRef(null);
    const aboutUsRef = useRef(null);
    const technologiesRef = useRef(null);
    const skillsRef = useRef(null);
    const educationRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);
    const projectRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsNavOpen(false); // Close the navigation when a link is clicked

        const sectionRefs = {
            Home: homeRef,
            'About Us': aboutUsRef,
            Technologies: technologiesRef,
            Skills: skillsRef,
            Education: educationRef,
            Experience: experienceRef,
            Projects: projectRef,
            Contact: contactRef
        };

        sectionRefs[link]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="main-panel" style={{
            height: `${windowDimensions.height}px`,
            width: `${windowDimensions.width}px`,
        }}>
            {/* Hamburger Icon */}
            <div className={`hamburger-icon ${isNavOpen ? 'open' : ''}`} onClick={() => setIsNavOpen(!isNavOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Left Side Panel */}
            <div className={`left-side-panel ${isNavOpen ? 'open' : ''}`}>
                <div>
                    <img src={dileepImg} className="App-logo" alt="logo" />
                </div><br />
                <h2>Ampolu Dileep Kumar</h2>
                <p style={style}>Front-end Developer <span style={{ color: '#000000' }}>at Brane Group</span></p>
                <nav>
                    <ul className="navigation">
                        {[
                            { name: 'Home', icon: 'fa-home' },
                            { name: 'About Us', icon: 'fa-user' },
                            { name: 'Technologies', icon: 'fa-cogs' },
                            { name: 'Skills', icon: 'fa-lightbulb' },
                            { name: 'Education', icon: 'fa-graduation-cap' },
                            { name: 'Experience', icon: 'fa-briefcase' },
                            { name: 'Projects', icon: 'fa-project-diagram' },
                            { name: 'Contact', icon: 'fa-envelope' }
                        ].map(({ name, icon }) => (
                            <li
                                key={name}
                                className={activeLink === name ? 'active' : ''}
                                onClick={() => handleLinkClick(name)}
                            >
                                <i className={`fa ${icon}`}></i> {name}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Right Side Panel */}
            <div className="right-side-panel">
                <div ref={homeRef} className='home-div' >
                    <Home height={windowDimensions.height} />
                </div>
                <div ref={aboutUsRef} className='aboutus-div div-spacing'>
                    <AboutUs />
                </div>
                <div ref={technologiesRef} className='technologies-div div-spacing'>
                    <Services />
                </div>
                <div ref={skillsRef} className='skills-div div-spacing'>
                    <Skills />
                </div>
                <div ref={educationRef} className='education-div div-spacing'>
                    <Education />
                </div>
                <div ref={experienceRef} className='experience-div div-spacing'>
                    <Experience />
                </div>
                <div ref={projectRef} className='project-div div-spacing'>
                    <Projects />
                </div>
                <div ref={contactRef} className='contact-div div-spacing'>
                    <ContactUs />
                </div>
            </div>
        </div>
    );
}

export default App;
