import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Posts from "../pages/Posts";
import About from "../pages/About";
import PostPage from '../PostPage';
import { rountes } from '../routes/routes';

function AppRouter() {
  return (
    <Routes>
      {rountes.map(route => <Route key={route.path} path={route.path} element={<route.component />} />)}
    </Routes>
  );
}

export default AppRouter;
