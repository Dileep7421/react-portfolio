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

    // Scroll detection and active link update
    useEffect(() => {
        const sectionRefs = {
            'Home': homeRef,
            'About Us': aboutUsRef,
            'Technologies': technologiesRef,
            'Skills': skillsRef,
            'Education': educationRef,
            'Experience': experienceRef,
            'Projects': projectRef,
            'Contact': contactRef
        };

        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -50% 0px',
            threshold: 0.3
        };

        const observerCallback = (entries) => {
            // Get all intersecting entries and find the one with highest visibility
            const visibleSections = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleSections.length > 0) {
                const activeSection = visibleSections[0];
                Object.keys(sectionRefs).forEach((sectionName) => {
                    if (sectionRefs[sectionName].current === activeSection.target) {
                        setActiveLink(sectionName);
                    }
                });
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        // Set initial active link to Home
        setActiveLink('Home');

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    // Scroll-driven fade-in animations
    useEffect(() => {
        const sectionRefs = [aboutUsRef, technologiesRef, skillsRef, educationRef, experienceRef, projectRef, contactRef];

        const updateScrollAnimations = () => {
            const windowHeight = window.innerHeight;

            sectionRefs.forEach((ref) => {
                if (!ref.current) return;

                const element = ref.current;
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const elementBottom = rect.bottom;
                
                // Animation triggers when element is in viewport
                // Start: when element top reaches 70% of viewport height
                // End: when element top reaches 30% of viewport height
                const startPoint = windowHeight * 0.7;
                const endPoint = windowHeight * 0.3;
                
                let progress = 0;
                
                // Check if element is visible in viewport
                if (elementTop < windowHeight && elementBottom > 0) {
                    if (elementTop <= endPoint) {
                        // Element has passed the end point - fully visible
                        progress = 1;
                    } else if (elementTop <= startPoint) {
                        // Element is in the animation zone
                        const animationRange = startPoint - endPoint;
                        const distanceFromEnd = elementTop - endPoint;
                        if (animationRange > 0) {
                            progress = 1 - (distanceFromEnd / animationRange);
                            progress = Math.max(0, Math.min(1, progress));
                        }
                    } else {
                        // Element is before animation zone
                        progress = 0;
                    }
                } else if (elementTop < 0 && elementBottom < 0) {
                    // Element has scrolled past - keep it visible
                    progress = 1;
                }
                
                // Apply easing function for smoother animation
                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                const opacity = easeOutCubic;
                const translateY = 60 * (1 - easeOutCubic);
                
                element.style.setProperty('--scroll-opacity', opacity);
                element.style.setProperty('--scroll-translate-y', `${translateY}px`);
            });
        };

        // Use throttled scroll event for smooth performance
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateScrollAnimations();
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Initial setup
        const timeoutId = setTimeout(() => {
            sectionRefs.forEach((ref) => {
                if (ref.current) {
                    // Set initial CSS custom properties
                    ref.current.style.setProperty('--scroll-opacity', '0');
                    ref.current.style.setProperty('--scroll-translate-y', '60px');
                }
            });
            // Update on initial load
            updateScrollAnimations();
            
            // Listen to scroll events
            window.addEventListener('scroll', handleScroll, { passive: true });
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                <div className="profile-image-container">
                    <img src={dileepImg} className="image" alt="profile" />
                </div>
                <h2>Ampolu Dileep Kumar</h2>
                <p className="job-title">
                    Software Developer
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
                <div ref={homeRef} className='home-div'>
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
