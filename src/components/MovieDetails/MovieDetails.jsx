import './MovieDetails.scss';

import { FaCalendarAlt, FaFilm, FaStar, FaThumbsUp } from 'react-icons/fa';
import React, { useEffect } from 'react';
import { fetchAsyncDetail, getSelectedDetail, removeSelection } from '../../features/movies/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedDetail)
  useEffect(() => {
    dispatch(fetchAsyncDetail(imdbID))
    return () => {
      dispatch(removeSelection())
    }
  }, [dispatch, imdbID])
  console.log(data)
  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ? 
       ( <div>
          ... Loading
      </div>) : (<>
      <div className="section-left">
        <div className="movie-title">
          {data.Title}
        </div>
        <div className="movie-rating">
          <span>IMDB Rating
          <div className='icon star'><FaStar /></div> : {data.imdbRating}</span>
          <span>IMDB Vote <div className='icon thumbs'><FaThumbsUp /></div> : {data.imdbVotes}</span>
          <span>Runtime
            <div className='icon film'><FaFilm /></div>
             : {data.Runtime}</span>
          <span>Year
          <div className='icon date'><FaCalendarAlt /></div> : {data.Year}</span>
        </div>
        <div className="movie plot">
          {data.Plot}
        </div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
      </>)}
    </div>
  )
}

export default MovieDetails