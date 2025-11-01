import React from 'react';
import './Home.css';
import resume from './Resume_AmpoluDileepKumar.pdf'
import bgImage from './home-bg-image.jpg'

export default function Home({ height }) {
  return (
    <div className='main' style={{ height: `${height}px` }}>
      <div className='background' style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className='text-overlay'>
        <div>
          <span>I am</span><br/> 
          <span>a Software</span> <br/>
          <span>Developer</span>
        </div>
      <a 
          href={resume} 
          download='Resume_AmpoluDileepKumar.pdf' 
          className='download-link'
        >
            <i className='fas fa-download'></i>
          Download CV
        </a>
      </div>
    </div>
  );
}
