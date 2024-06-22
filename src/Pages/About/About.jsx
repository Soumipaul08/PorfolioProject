import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      <div className="about about-img">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="00" />
            </div>
            <div className="col-md-6 about-content">
                <h1>Abou Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste eos maxime nemo quisquam necessitatibus, aliquam soluta aut cumque aliquid impedit saepe! Nobis perferendis quae dolorem placeat minus, saepe dolores sit?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et mollitia non, amet suscipit, iste ullam error placeat totam fuga eveniet dignissimos ut illum quibusdam a veritatis animi cum officia!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
