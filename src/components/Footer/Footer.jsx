import "./Footer.scss";

import { AiFillGithub } from 'react-icons/ai';
import { Link } from "react-router-dom";
import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <Link to='https://github.com/Lukasnvc/movies-app.git' target="blank">Movie App<AiFillGithub/></Link>
      <span>2023, Movie App by Lukas</span>
    </div>
  )
}

export default Footer