import React from "react";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Root from "./Root";
import NotFound from "./components/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./components/User";
import Follower from "./components/Follower";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home />, errorElement: <ErrorComponent /> },
      { path: "about", element: <About /> },
      {
        path: "users/:userId",
        element: <User />,
        children: [{ path: "followers", element: <Follower /> }],
      }, //userId 누르면 <User>컴포넌트로 바뀌게. 파라미터값도 붙음
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
