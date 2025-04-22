import React from 'react'
import { useState } from 'react'
import { router } from "../router/routes/routes"

export default function Menu({}) {

  const [toggle, setToggle] = useState(false);
  
  function render(){
    let routes = router.routes[0].children

    return routes.map((e,key)=>{
      return <MenuList route={e} key={key} />
    }) 
  }
  
  let content = render()

  return (
    <div 
      className={
        (" bg-base-100 shadow-sm rounded-lg ")+
        (" navbar ")+
        (" w-[98%] my-2 mx-auto transition-[height] ")+
        (!toggle?" h-[5vh] ":" h-[10vh] ")
      }
      
    >

      <div className="navbar-start h-[100%]"> {/* left container */}
        <a className={(" btn btn-ghost btn-xl transition-all ")+(!toggle?" text-xl ":" text-3xl ")} href="/">D&D UDEM</a>
      </div>



      <div className="navbar-end h-[100%] ">{/* right container */}
        
        <div className="dropdown dropdown-end h-[100%] "> {/* dropdown anchor */}

            <div 
              tabIndex={0} 
              role="button" 
              className="h-[100%] btn btn-ghost btn-xl btn-square lg:hidden"
              > {/* Dropdown icon */}
              <img 
                src="d20_icon.png" 
                alt="logo" className="w-10 h-10 rounded-full"

                />
            </div>

            {/* DropDown content : IT HAS TO BE A <ul> element */}
            
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

              {content}

            </ul>

          </div>
      </div>

</div>
  )
}







function MenuList({route={}}) {

  function render(){

    if(!route.children){
      return ""
    }
    let array = route.children
    return array.map((e,key)=>{
      <li key={key} ><a href={e.path+''}>{e.handle.name}</a></li>
    })
  }
  
  let content = render()

  return (
  <li className='h-10 '>
    <a href={route.path+""}>{route.handle.name+""}</a>
    {content}
  </li>
  )
}
