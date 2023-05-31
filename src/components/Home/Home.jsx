import React, { useEffect } from 'react';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import { randomMovie, randomShow } from '../../common/randomPick';

import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(randomMovie))
    dispatch(fetchAsyncShows(randomShow))
  }, [dispatch]);

  return (
    <>
      <div className='banner-img'></div>
      <MovieListing />
    </>
  );
};

export default Home;
