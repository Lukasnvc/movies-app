import "./Header.scss"

import { Link } from 'react-router-dom'
import React from 'react';
import user from "../../images/user.png";

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
      <div className="logo">MOVIE APP</div>
      </Link>
     
      <div className='user-image'>
        <img src={user} alt="user image" />
      </div>
    </div>
  )
}

export default Header