import React from 'react';
import movieTV from '../img/tv.png';

const getMovieImage = (path, width) => {
  return path ? `http://image.tmdb.org/t/p/w${width}${path}`: movieTV; 
}

export default getMovieImage;