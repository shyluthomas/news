import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../layouts/loader/Loadable";
/****Layouts*****/
const FullLayout = Loadable(lazy(() => import("../layouts/FullLayout")));
/***** Pages ****/

const Home = Loadable(lazy(() => import("../views/Home")));
const Main = Loadable(lazy(() => import("../views/Main")));

const ThemeRoutes = [
  {
    path: "/home",
    element: <FullLayout />,
    children: [
      { path: "/home", element: <Navigate to="/home" /> },
      { path: "/home", exact: true, element: <Home /> },          
      { path: "*", element: <Navigate to="/auth/404" /> },
    ],    
  },
  {
    path: "/",
    children: [
      { path: "/", element: <Navigate to="/main" /> },
      { path: "/main", exact: true, element: <Main /> },          
      { path: "*", element: <Navigate to="/auth/404" /> },
    ],
    
  },    
];

export default ThemeRoutes;
