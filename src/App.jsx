import React from 'react'
import Layout from './Components/Layouts/Layout'
import About from './Pages/About/About'
import TechStack from './Pages/TechStack/TechStack'
import Education from './Education/Education'
import Project from './Components/Project/Project'

const App = () => {
  return (
    <>
      <Layout/> 
      <div className="container">
      <About/>
      <Education/>
      <TechStack/>
      <Project/>
      </div>
    </>
  )
}

export default App