import React from "react";
import {  useNavigation, createBrowserRouter,  RouterProvider,} from "react-router";

//Our modular routes
import { routes } from "./routes/routes";


/* 
useNavigation is a hook that tracks the states of navigation transitions

States :
- Idle
- Submitting
- Loading

The order between transitions is usually Submitting -> Loading -> Idle
*/

const router = createBrowserRouter(routes);

export default function RouterComponent() {
  return( 
    <>
    <RouterProvider router={router} />
    </>
  )
}
