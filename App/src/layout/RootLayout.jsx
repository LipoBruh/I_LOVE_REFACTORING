//Dependencies
import { Outlet, useNavigation } from "react-router";

//styles
import '../App.css'
//Components
import Menu from './Menu';
import DiceMenu from './DiceMenu';


export default function RootLayout() {

  const navigationState = useNavigation();

  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">



      <div id="AppGradient" 
        className={
          (" bg-success")+//bg
          ("absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  w-[300vmax] h-[300vmax] ")+//layout
          ((navigationState=="loading")?" animate-spin bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 blur-sm":"")
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
      <Menu />
      </div>

     
      <DiceMenu/>

    </div>
    </>
  )
}

