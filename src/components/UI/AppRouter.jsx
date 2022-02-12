import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Posts from "../pages/Posts";
import About from "../pages/About";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}

export default AppRouter;
