import React from 'react'
import {  Input,  Label,  TextField, Text, FieldError,Button, OverlayArrow, Tooltip, TooltipTrigger } from 'react-aria-components';
import { useState, useEffect} from 'react';
import { useRef } from 'react';

export default function HelpComponent({icon="?", text="Help text..."}) {

    const [toggle,setToggle] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        //
            setToggle(false);
            document.removeEventListener("mousedown", handleClickOutside);
      };


    function handleClick(){
        //
        if (toggle) {
            //
            setToggle(false)
            document.removeEventListener("mousedown", handleClickOutside);
        }
        else{
            //
            setToggle(true)
            document.addEventListener("mousedown", handleClickOutside);
        }
    }



  return (
    <TooltipTrigger delay={100} closeDelay={100} isOpen={toggle}>
      <Button 
        className={"mx-1 shadow-lg rounded-full h-[1.5rem] w-[1.5rem] text-center inline-block align-center text-blue-700 bg-grey-200 border-1 border-base-300 "}
        onClick={()=> handleClick()}    
    >
        <p className='relative h-[100%] w-[100%] m-0 p-0'>  
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-medium text-[1rem] text-gray-400">
            {icon}
          </span>
        </p>
      </Button>
      
      <Tooltip>
        <OverlayArrow>
          <svg width={8} height={8} viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
        <p className='text-xs text-gray-500 p-2 bg-base-100 rounded-lg shadow-lg max-w-[50vw] max-h-[20vw]  overflow-y-auto'>
        {text}
        </p>
      </Tooltip>
    </TooltipTrigger>

  )
}
