

import App from "../../App";
import MapComponent from "../../components/MapComponent";
import LoginPage from "../pages/LoginPage";


export const routes = [
  {
    path: '/',
    element: <App />, // optional layout
    children: [
      {path: '/Map', element: <MapComponent/>}, // optional child route
      {path: '/Login', element: <LoginPage/>},
    ],
  },
];
