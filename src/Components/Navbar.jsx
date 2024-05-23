import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose ,AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='text-white  flex justify-between items-center h-24 px-4 mx-auto max-w-[1240px]'>
        <h1 className='text-[#00df9a] text-3xl font-bold w-full'>REACT.</h1>
        <ul className='hidden md:flex'>
            <Link className='p-4 font-semibold' to={""}>Home</Link>
            <Link className='p-4 font-semibold' to={""}>Company</Link>
            <Link className='p-4 font-semibold' to={""}>Resources</Link>
            <Link className='p-4 font-semibold' to={""}>About</Link>
            <Link className='p-4 font-semibold' to={""}>Contact</Link>
        </ul>
        <div onClick={handleNav} className='block sticky cursor-pointer md:hidden'>
            {!nav ? <AiOutlineClose size={18} /> :<AiOutlineMenu size={18} />}
        </div>
        <div className={!nav ? `fixed sm:hidden md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500` : `fixed left-[-100%]`}>
            <h1 className='text-[#00df9a] m-4 text-3xl font-bold w-full'>REACT.</h1>
            <ul className='flex flex-col p-4 uppercase'>
                <Link className='p-4 border-b border-gray-600 font-semibold' to={""}>Home</Link>
                <Link className='p-4 border-b border-gray-600 font-semibold' to={""}>Company</Link>
                <Link className='p-4 border-b border-gray-600 font-semibold' to={""}>Resources</Link>
                <Link className='p-4 border-b border-gray-600 font-semibold' to={""}>About</Link>
                <Link className='p-4 font-semibold' to={""}>Contact</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar