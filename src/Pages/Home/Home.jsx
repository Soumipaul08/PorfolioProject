// import React from 'react';
// import Typewriter from 'typewriter-effect'
// import resume from '../../assets/Doc/resume'
// import './Home.css';

import React from "react";
import Typewriter from "typewriter-effect";
import resume from '../../assets/Doc/resume.txt'
import "./Home.css";


const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="container home-content">
          <h2>Hi I am a ,</h2>
          <h1>
          <Typewriter
           options={{
          strings: ['Full Stack Developer !', 'Mern Stack Developer!','Native React Developer!'],
          autoStart: true,
          loop: true,
          }}
/>
          </h1>
          <div className="home-buttons">
            <button className='btn btn-hire'>Hire me</button>
            <a className='btn btn-cv' href={resume} download="Your_name.pdf">My Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

