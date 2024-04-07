import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  return (
    <div>
     <div className=' w-screen justify-center inline-flex items-center gap-60 relative my-10'>
        <div >
            <h1 className='w-60 h-6 font-bold text-2xl flex items-center'>Exclusive</h1>
        </div>
        <ul className='items-start w-auto flex gap-12 font-medium text-lg'>
            <li className='cursor-pointer underline'>Home</li>
            <li className='cursor-pointer'>Contace</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Sign Up</li>
        </ul>

        <div className=''>
            <input type='text' name='Search' placeholder='What are you looking for?' className='placeholder:text-sm placeholder:text-gray-800 flex py-2	pr-3 pl-5 bg-gray-200 rounded '></input>
            <IoSearch className='w-4 h-4 absolute ml-48 -mt-7 cursor-pointer	'/>
            <IoIosHeartEmpty className='w-5 h-5  ml-60 -mt-7 cursor-pointer	'/>
            <BsCart3 className='w-5 h-5  ml-72 -mt-5 cursor-pointer	'/>
        </div>
     </div>
        <div className=' w-screen flex justify-center items-center bg-slate-700	 h-px'></div>
    </div>
  )
}

export default Navbar
