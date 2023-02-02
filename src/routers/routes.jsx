import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LangingPage';
import MovieDetails from '../pages/MovieDetails';

const routes = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/films/:filmId' element={<MovieDetails />} />
        </Routes>
    </Router>
  )
}

export default routes