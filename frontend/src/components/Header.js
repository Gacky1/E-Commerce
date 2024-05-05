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


        <div className='flex items-center gap-4 text-indigo-600'>
          <div className='text-2xl cursor-pointer'>
          <FaCartArrowDown/>
          </div>
          <div className='text-3xl cursor-pointer'>
          <FaUserAstronaut />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;