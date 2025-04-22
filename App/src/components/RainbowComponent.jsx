import React from 'react'
import { useEffect, useRef, useLayoutEffect } from 'react';
import { useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';

export default function RainbowComponent({style={}, className="",rounded="",content="", borderThickness="5px", gradient="animate-spin bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 blur-lg"}) {

    const boxRef = useRef(null);
    const [box, setBox] = useState({width: "0", height: "0"});
  
    // triggered on first render
    useLayoutEffect(() => {
      const { height,width } = boxRef.current.getBoundingClientRect();
      setBox({height:height+"", width:width+""});
    }, []);


    // extra hook that observes changes on the ref={boxRef} element 
    useResizeObserver(boxRef, (entry) => {
        const { width, height } = entry.contentRect;
        setBox({height:height+"", width:width+""});
      });




  return (
    <div ref={boxRef} className={"relative w-[100%] h-[100%] overflow-hidden  "+( " "+rounded+" ")}>


        {/* Gradient background */}
        <div  
        className={
            ("  ")+//bg
            (" absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  min-w-[300%] min-h-[300%] aspect-square ")+//layout
            (" "+gradient+" ")            
        }>
        </div>


        {/* Content */}
        <div  
        className={
            (" bg-base-100 ")+ //bg
            (` absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 `)+//layout
            (" overflow-hidden")+
            ( " "+rounded+" ")+
            (" "+className+" ")

        }
        //dynamic sizing
        style={{
            height: `calc(${box.height}px - ${borderThickness})`,
            width: `calc(${box.width}px - ${borderThickness})`,
            ...style,  }}
        >

    
            {content}
        </div>
        



  </div>
  )
}
