import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Posts from "./components/pages/Posts";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul className="navbar_links">
          <li><NavLink to="/posts">Posts</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
