import React from 'react'
import Logo from './Logo';
import { FaSearchengin } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";




export const Header = () => {
  return (
    <header className='h-16 shadow-md'>
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Logo w={100} h={60}/>
        </div>


        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2 border-indigo-600 '>
          <input type="text" placeholder='Search Product Here...' className=' w-full outline-none '/>
          <div className='text-lg min-w-[50px] h-8 bg-indigo-600 flex items-center justify-center rounded-r-full text-white'>
          <FaSearchengin/>
          </div>
        </div>


        <div className='flex items-center gap-7'>
          <div className='text-3xl cursor-pointer relative'>
          <span><FaCartArrowDown/></span>
          <div className='bg-indigo-600 text-white w-5 p-1 h-5 flex items-center rounded-full justify-center absolute -top-3 -right-3'>
            <p className='text-sm'>0</p>
          </div>
          </div>
          <div className='text-3xl cursor-pointer'>
          <FaUserAstronaut />
          </div>

          <div className='bg-indigo-600 text-white  px-3 py-1 rounded-full hover:bg-transparent text-black'>
          <button>Login</button>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header;