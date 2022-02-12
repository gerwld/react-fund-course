import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../../context/index';
import MyButton from '../button/MyButton';

function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.setItem('auth', false);
  }
  return (
        <nav className="navbar">
        <ul className="navbar_links">
          <li><NavLink to="/posts">Posts</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          {isAuth ? <li><MyButton onClick={logout}>Log Out</MyButton></li> : ''}
        </ul>
      </nav>
  )
}

export default Navbar