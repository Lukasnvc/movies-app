import React, { useEffect } from 'react';
import { fetchAsyncDetail, getSelectedDetail } from '../../features/movies/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedDetail)
  useEffect(() => {
    dispatch(fetchAsyncDetail(imdbID))
  }, [dispatch, imdbID])
  console.log(data)
  return (
    <div className='movie-section'>
      <div className="section-left">
        <div className="movie-title">
          
        </div>
      </div>
    </div>
  )
}

export default MovieDetails