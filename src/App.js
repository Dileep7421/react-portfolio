import React, { useState, useRef, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
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
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

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

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsNavOpen(false);

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

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="main-panel" style={{
            height: `${windowDimensions.height}px`,
            width: `${windowDimensions.width}px`,
        }}>
            <div className={`hamburger-icon ${isNavOpen ? 'open' : ''}`} onClick={() => setIsNavOpen(!isNavOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`left-side-panel ${isNavOpen ? 'open' : ''}`}>
            <div className="dark-mode-toggle-icon" onClick={toggleDarkMode}>
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </div>
                <div>
                    <img src={dileepImg} className="App-logo" alt="logo" />
                </div><br />
                <h2>Ampolu Dileep Kumar</h2>
                <p className="job-title">
                    Front-end Developer
                    <span className="company-name">at Brane Group</span>
                    <span className="experience">with over 2+ years of experience</span>
                </p>

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
