import React, { useEffect } from 'react';

import MovieListing from '../MovieListing/MovieListing';
import { addMovies } from '../../features/movies/movieSlice';
import movieApi from '../../common/apis/movieApi';
import { useDispatch } from 'react-redux';

const apiKey = process.env.REACT_APP_MOVIE_API_KEY; // Access the environment variable directly

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = 'Harry';
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
        .catch((error) => {
          console.log("Error:", error);
        });
  dispatch(addMovies(response.data))
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className='banner-img'></div>
      <MovieListing />
    </>
  );
};

export default Home;
