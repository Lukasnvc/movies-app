import React, { useEffect } from 'react';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  }, [dispatch]);

  return (
    <>
      <div className='banner-img'></div>
      <MovieListing />
    </>
  );
};

export default Home;
