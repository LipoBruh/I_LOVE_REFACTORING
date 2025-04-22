import React from 'react'

export default function Menu() {

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-lg w-[98%] my-2 mx-auto">

      <div className="navbar-start"> {/* left container */}

        <a className="btn btn-ghost btn-xl text-xl" href="/">D&D UDEM</a>
        
      </div>



      <div className="navbar-end ">
        
        <div className="dropdown dropdown-end">

            <div tabIndex={0} role="button" className="btn btn-ghost btn-xl btn-square lg:hidden">
              <img src="d20_icon.png" alt="logo" className="w-10 h-10 rounded-full" />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li href="/Login"><a>LOGIN</a></li>

              <li>
                <a href='/Map'>MAP</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>

              <li><a href='/About'>Rainbow</a></li>
            </ul>

          </div>
      </div>

</div>
  )
}
