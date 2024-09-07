import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import Profile from './Components/Profile';




function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Portfolio/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  </Router>
  )
}

export default App
