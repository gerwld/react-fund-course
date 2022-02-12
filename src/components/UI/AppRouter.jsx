import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from '../routes/routes';

function AppRouter() {
  const isAuth = false;
  
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component to={route.toPath ? route.toPath : ""} />}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component to={route.toPath ? route.toPath : ""} />}
            />
          ))}
    </Routes>
  );
}

export default AppRouter;
