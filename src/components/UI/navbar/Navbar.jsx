import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
        <nav className="navbar">
        <ul className="navbar_links">
          <li><NavLink to="/posts">Posts</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
  )
}

export default Navbar