import React from 'react'
import "./Menu.css"
import { FcAudioFile, FcHome, FcVoicePresentation } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcLineChart } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
function Menu({toogle}) {
  return (
    <div>
     {toogle ? (
          <><div className="navbar-profile-pic">
          <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="profile pic" />
      </div>
      <div className='nav-items'>
          <div className="nav-item">
               <div className="nav-link"><FcHome/>Home</div>
               <div className="nav-link"><FcAbout/>About</div>
               <div className="nav-link"><FcReading/>Education</div>
               <div className="nav-link"><FcBiotech/>Tech Stack</div>
               <div className="nav-link"><FcLineChart/>Work Experience</div>
               <div className="nav-link"><FcAudioFile/>Projects</div>
               <div className="nav-link"><FcVoicePresentation/>Testinomial</div>
               <div className="nav-link"><FcBusinessContact/>Contact</div>
          </div>
      </div>
      </>
     ):(<>
     <div className='nav-items'>
          <div className="nav-item-secondary">
               <div className="nav-link-secondary"><FcHome title='Home'/></div>
               <div className="nav-link-secondary"><FcAbout title='About'/></div>
               <div className="nav-link-secondary"><FcLineChart title='Work Experience'/></div>
               <div className="nav-link-secondary"><FcBiotech title='Tech Stack'/></div>
               <div className="nav-link-secondary"><FcReading title='Education'/></div>
               <div className="nav-link-secondary"><FcAudioFile title='Projects'/></div>
               <div className="nav-link-secondary"><FcVoicePresentation title='Testinomial'/></div>
               <div className="nav-link-secondary"><FcBusinessContact title='Contact'/></div>
          </div>
      </div>
     </>)}
    </div>
  )
}

export default Menu;
