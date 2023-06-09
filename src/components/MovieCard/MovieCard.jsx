import "./MovieCard.scss";

import { Link } from 'react-router-dom';
import React from 'react'
import noImage from '../../common/noImage.png';

const MovieCard = ({ data }) => {
  
  return (
    <div className='card-item'>
      <Link to={`movie/${data.imdbID}`}>
      <div className="card-inner">
        <div className="card-top">
            <img src={data.Poster ===
              "N/A"
              ? noImage
              : data.Poster
            }
              alt = { data.Title } />
            </div>
            <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
          </div>
        </div>
        </div>
        </Link>
    </div>
  )
}

export default MovieCard