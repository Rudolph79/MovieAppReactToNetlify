import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../data/HttpClient';
import getMovieImage from '../utils/getMovieImage';
import './MovieDetails.css';

const MovieDetails = () => {
  const { filmId } = useParams();

  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
      get(`/movie/${filmId}`).then((data) => {
          setMovie(data);
          setGenre(data.genres[0]);
          console.log(data.genres[0]);
        })
    }, [filmId]);
    const imgUrl = getMovieImage(movie.poster_path, 500);
//   console.log(filmId);
  return (
    <div className='detailsContainer'>
        <img src={imgUrl} alt={movie.title} className='col movieImage'/>
        <div className='col movieDetails'>
            <p className='title'>
                <strong>Titre : </strong> {movie.title}
            </p>
            <p>
                <strong>Genre : </strong> {genre.name}
            </p>
            <p>
                <strong>Description: </strong> {movie.overview}
            </p>
        </div>
    </div>
  )
}

export default MovieDetails;