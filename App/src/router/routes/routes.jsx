import { createBrowserRouter } from "react-router";
//
import RootLayout from "../../layout/RootLayout";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import DiscordPage from "../pages/DiscordPage";
import HomePage from "../pages/HomePage";
import DataPage from "../pages/DataPage";


const routes = [
  {
    path: '/',
    element: <RootLayout/>, // optional layout
    children: [
      {path: '/Home', element: <HomePage/>, index:true, handle:{name:"Accueil"}}, // optional child route
      {path: '/Login', element: <LoginPage/>, handle:{name:"Se connecter"}},
      {path: '/About', element: <AboutPage/>, handle:{name:"Nous rejoindre"}},
      {path: '/Discord', element: <DiscordPage/>, handle:{name:"Notre Discord"}},
      {path: '/Data', element: <DataPage/>, handle:{name:"Mathématiques du dé"}},
    ],
  },
];

const router = createBrowserRouter(routes);

export  {routes, router}
