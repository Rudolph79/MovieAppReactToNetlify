import React, { useState, useEffect } from 'react';
import { get } from '../data/HttpClient';
import MovieCard from './MovieCard';
import './ContextMovieCard.css';

const ContextMovieCard = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get('/discover/movie').then((data) => {
        setMovies(data.results);
        console.log(data.results);
    });
  }, []);
  return (
    <ul className='container'>
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
    </ul>
  )
}

export default ContextMovieCard;