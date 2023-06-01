import './MovieDetails.scss';

import React, { useEffect } from 'react';
import { fetchAsyncDetail, getSelectedDetail, removeSelection } from '../../features/movies/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

import noImage from '../../common/noImage.png';
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
            
        <div className="item-detail">
          <span>{data.Rated}</span>
              {data.totalSeasons && <span>S : {data.totalSeasons}</span>}
          <span>{data.Runtime}</span>
          <span>{data.Released}</span>
        </div>

        <div className="movie-rating">
            <span>IMDB Rating : {data.imdbRating}</span>
          <>
            {data.Ratings?.map((rating, index) => (
              <span key={index}>{rating.Source} : {rating.Value}</span>
            ))}
          </>
        </div>
            
        <div className="movie-plot">
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
          <div>
            <span>Earnings</span>
            <span>{data.BoxOffice}</span>
          </div>
        </div>
      </div>
          <div className="section-right">
            {data.Poster ===
              "N/A" ? (<img className='noImage' src={noImage} alt='empty' />) : (
              <img src={data.Poster} alt={data.Title} />)
            }
      </div>
      </>)}
    </div>
  )
}

export default MovieDetails