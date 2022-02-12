import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Posts from "./components/pages/Posts";
import './styles/App.css';
import Navbar from './components/UI/navbar/Navbar';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />} />

        <Route path="/" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
