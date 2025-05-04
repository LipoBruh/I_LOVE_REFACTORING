import React from 'react'
import { useState } from 'react';
import {  Input,  Label,  TextField, Text, FieldError,Button, OverlayArrow, Tooltip, TooltipTrigger } from 'react-aria-components';
// src/hooks/useHealth.js
import { useQuery } from "@tanstack/react-query";
import { fetchHealth } from '../../api/health';
import HelpComponent from '../../components/HelpComponent';


export default function LoginPage() {
  
  const [toggle,setToggle] = useState(false);

  return (

  <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl shadow text-lg bg-base-100 w-[75vw] '>    
    <div className=' max-w-[50vw] mx-auto'>

    <p className='text-4xl font-extralight text-gray-500 text-center'> Login page</p>
    <hr className='border-base-300'/>

    <TextField className="my-4 flex flex-col align-middle">
      <Label className='my-2'>Discord Username</Label>
      <Input className="border-1 w-[100%] border-base-200 rounded px-2" />
      <br/>
      <div className='text-xs text-gray-400 w-[100%] p-4 '>
        Nous allons vous envoyer un code sur Discord pour vous connecter (2FA).
        <HelpComponent icon="?" text="Le code vous sera envoyé par notre Bot en messagerie privée. "/>
      </div>
      <Button type="submit" className="btn btn-secondary w-full " onClick={()=>setToggle(true)}>Envoyer le code</Button>
    </TextField>




    {toggle?
        <TextField className="my- flex flex-col align-middle4">
        <Label className=''>Entrez votre code : </Label>
        <Input className="border-1 w-[100%] border-base-200 rounded px-2" />
        <br/>
        <Button type="submit" className="btn btn-secondary w-[50%] mx-auto " onClick={()=>setToggle(true)}>Login</Button>
      </TextField>:""
    }

    <ServerStatus/>
    </div>
    
  </div>  

  
)
}



function useHealth() {
  return useQuery({
    queryKey: ["health"],
    queryFn: fetchHealth,
  });
}


 function ServerStatus() {
  const { data, isLoading, isError } = useHealth();

  let status = " status-warning ";
  let label  = "Checking..."

  if (isLoading) {
    status="  status-warning ";
    label = "Checking…";
  } else if (isError) {
    status="  status-error ";
    label = "Offline";
  } else if (data.status === "ok") {
    status=" status-success ";
    label = "Online";
  } else {
    color = status=" status-warning ";
    label = "Degraded";
  }

  return (
    <div className='text-xs text-gray-400 py-2'>
    <div className="inline-grid *:[grid-area:1/1]">
      <div className={`status ${status} animate-ping`}></div>
      <div className={`status ${status}`} ></div>
    </div>{label}
    </div>
  );

}
