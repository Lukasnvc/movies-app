import "./Header.scss"

import React, { useState } from 'react';
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../common/logo.png'
import { useDispatch } from "react-redux";
import user from "../../images/user.png";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('Search')
  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text === '') return setSearch('Type seach here ...') 
    dispatch(fetchAsyncMovies(text))
    dispatch(fetchAsyncShows(text))
    setText('')
    setSearch('Search')
  }
  return (
    <div className='header'>
     
     <Link to="/" className="logo"><img src={Logo} alt="" /></Link>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" value={text} placeholder={search} onChange={ (e) => setText(e.target.value)} />
          <button type="submit"><FaSearch/></button>
        </form>
      </div>
     
      <div className='user-image'>
        <img src={user} alt="user image" />
      </div>
    </div>
  )
}

export default Header