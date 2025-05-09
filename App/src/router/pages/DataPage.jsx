import React from 'react'
import { useState } from 'react'
import Plotter from '../../components/Plotter'


export default function DataPage() {
    const [scroll,setScroll] = useState(false)

    function handleScroll(){
        console.log("down")
        setScroll(true)
    }

  return (
    <div className={
        ("w-[100%] h-[100%] ")+
        ("bg-base-100 ")+
        ("relative ")
    }>
        <div className={
            ("w-[95%] h-[95%] ")+
            ("bg-base-100 ")+
            ("absolute bottom-0 left-1/2  -translate-x-1/2 ")+
            (scroll?"overflow-y-auto ":" ")
        }

            onMouseDown={()=>handleScroll()}
            onTouchStart={()=>handleScroll()}
            onMouseOut={()=>setScroll(false)}
        >
            <div className={("flex flex-col content-center py-4 min-h-[100%] ")}>
            <Article text={"Yapping"}>
            </Article>

            <Article text={"Yapping"}/>
            <Article text={"Yapping"}>
            <Plotter />
            </Article>
            </div>
        </div>
    </div>
  )
}


function Article({text,children}) {
  return (
    <div className='col-1 bg-base-100 shadow p-1 my-1 rounded-3xl '>
    {text}
    {children}
    </div>
  )
}
