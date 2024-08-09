import React from 'react'

import btc from '/reactproject/blog1/public/btc.svg'

function Navbar() {
  return (
    <div className='w-auto'>
      <div className="bg-white h-[4.7rem] w-[73rem] shadow-xl rounded-s-md flex items-center">
        <div className='h-12 w-full flex items-center justify-between px-4'>
          <img src={btc} alt="" class="h-full w-auto object-contain" />

          <h1>
          Home

          </h1>
          
           <div className='flex  items-center space-x-5 text-[15px]'>

            <a href="" className=' hover:text-blue-800 transition-opacity duration-300 ease-in-out hover:opacity-50 '>Posts</a>
            <a href="" className=' hover:text-blue-800 transition-opacity duration-300 ease-in-out hover:opacity-50 '>Trending</a>
            <img class="h-10 w-10 ring-2 ring-indigo-900    rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />




          </div>
           {/* <div class="relative ml-3">
         
          <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>
          </div> */}
        </div>
      </div>  
    </div>

  )
}

export default Navbar