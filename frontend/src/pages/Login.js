import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
    const[showPassword,setShowPassword]=useState(false)
  return (
    <section id='login'>
        <div className='mx-auto container p-4'>
            <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
                <div className='h-20 w-20 mx-auto'>
                    <img src={loginIcons} alt='alert-login-icon'/>
                </div>
                <form action="">
                    <div className='grid'>
                        <label htmlFor='email'>Email:</label>
                        <div className='bg-slate-100 p-2'>
                            <input type='email' name='email' id='email' placeholder='rachit@gmail.com' className=' w-full h-ful outline-none bg-transparent'></input>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='password'>Password:</label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input type={showPassword ? "text" :"password"} name='password' id='password' placeholder='Enter your password' className=' w-full h-ful outline-none bg-transparent' />
                            <div className='cursor-pointer text-xl' onClick={()=> setShowPassword((prev)=>!prev)}>
                                <span>
                                    {
                                        showPassword ?(<FaEyeSlash/>):(<FaEye/>)
                                    }
                                </span>
                            </div>
                        </div>
                        <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                            Forgot password?
                        </Link>
                    </div>
                    <button type='submit' className='bg-indigo-600 text-white px-6 py-2 w-full max-w-[130px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login