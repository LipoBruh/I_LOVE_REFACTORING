import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useNavigation } from "react-router";
import Test from './components/test';
import MapComponent from './components/MapComponent';
import Menu from './layout/Menu';
import RainbowComponent from './components/RainbowComponent';
import DraggableComponent from './components/DraggableComponent';
import DiceMenu from './layout/DiceMenu';


function App() {

  const navigationState = useNavigation();

  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">



      <div id="AppGradient" 
        className={
          (" bg-success")+//bg
          ("absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  w-[300vmax] h-[300vmax] ")+//layout
          ((navigationState!="loading")?" animate-spin bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 blur-sm":"")
        }>
      </div>

      <div id="AppLayout" className={
          (" bg-base-200 ")+ //bg
          (" h-[calc(100vh-1vmin)] w-[calc(100vw-1vmin)] absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 ")+//layout
          ("  ")
        }>

    
          <Outlet/>
      </div>
      
      <div className="absolute top-0 left-0 w-full">
      <Menu/>
      </div>

      <div className='w-[300px] h-[150px]   absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 '>
        <RainbowComponent rounded="rounded-xl" borderThickness='1vh' gradient='animate-spin bg-conic from-blue-500 via-base-100 to-base-100 blur-sm ' content={<MapComponent/>}/>
      </div>

      <div className="absolute top-0 left-0 w-full">
        <DiceMenu/>
      </div>

    </div>
    </>
  )
}

export default App
