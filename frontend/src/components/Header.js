import React from 'react'
import Logo from './Logo';
import { FaSearchengin } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';




export const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to={"/"}><Logo w={100} h={60}/></Link>
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

          <div >
              <Link to={"/login"} class="login-button mr-4 ml-3 bg-indigo-600 text-yellow-50 px-3 py-1 rounded-full transition duration-300 ease0-in-out hover:transform hover:bg-transparent hover:text-black hover:border-2 hover:border-indigo-600">Login</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;