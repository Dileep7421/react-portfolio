import React from 'react';
import './Home.css';
import resume from './DileepResume.pdf'

export default function Home({ height }) {
  return (
    <div className='main' style={{ height: `${height}px` }}>
      <div className='background'></div>
      <div className='text-overlay'>
        <div>
          I am <br/> 
          <span style={{color:'#00aae2'}}>a Front End </span> <br/>
          <span>Developer</span>
        </div>
      <a 
          href={resume} 
          download='DileepResume.pdf' 
          className='download-link'
        >
            <i className='fas fa-download'></i>
          Download CV
        </a>
      </div>
    </div>
  );
}
