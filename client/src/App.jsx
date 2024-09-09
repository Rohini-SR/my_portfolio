import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import Profile from './Components/Profile';
import Skill from './Components/Skill';
import About from './Components/About'
import Project from './Components/Project'
import Blog from './Components/Blog';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Portfolio/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path='/skills' element={<Skill/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
    </Routes>
  </Router>
  )
}

export default App
