import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../layouts/loader/Loadable";
/****Layouts*****/
const FullLayout = Loadable(lazy(() => import("../layouts/FullLayout")));
/***** Pages ****/

const Home = Loadable(lazy(() => import("../views/Home")));
const Main = Loadable(lazy(() => import("../views/Main")));
const Error = Loadable(lazy(() => import("../views/auth/Error")));

const ThemeRoutes = [
  {
    path: "/home",
    element: <FullLayout />,
    children: [
      { path: "/home", exact: true, element: <Home /> },          
      { path: "*", element: <Navigate to="/404" /> },
      { path: '404', element: <Error /> },

    ],    
  },
  {
    path: "/",
    children: [
      { path: "/", element: <Navigate to="/main" /> },
      { path: "/main", exact: true, element: <Main /> },          
      { path: "*", element: <Navigate to="/404" /> },
      { path: '404', element: <Error /> },
    ],
    
  },    
];

export default ThemeRoutes;
