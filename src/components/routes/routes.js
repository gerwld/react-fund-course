import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../PostPage";
import Login from "../pages/Login";
import { Navigate } from "react-router";

// React router dom v.6
export const privateRoutes = [
  { path: "*", component: Navigate, toPath: "/posts" },
  { path: "/", component: Posts },
  { path: "/posts", component: Posts },
  { path: "/posts/id:id", component: PostPage },
  { path: "/about", component: About },
];

export const publicRoutes = [
  { path: "*", component: Navigate, toPath: "/login" },
  { path: "/login", component: Login },
];
