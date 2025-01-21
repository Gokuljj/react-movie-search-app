import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './src/pages/Home.jsx'
import MovieDetailsPage from './src/pages/MovieDetailsPage.jsx';


function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />            
        </Routes>
    </Router>
  )
}

export default AppRouter;