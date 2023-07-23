import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LogoPNG from '../assets/logo.png';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1500px] mx-auto px-4 text-white'>
        <div className='flex justify-between'>
            <img src={LogoPNG} class="h-[70px] mr-5 ml-5" alt="FlowBite Logo" />
            <h1 className='w-20 text-3xl font-bold font-fontFamily mt-4 text-[#e10981]'>
            Uniqloc</h1>
        </div>
        <ul className='hidden md:flex '>
            <li className='p-3 font-fontFamily transition-colors duration-300 hover:text-[#e10981]'>Home</li>
            <li className='p-3 font-fontFamily transition-colors duration-300 hover:text-[#e10981]'>My Locks</li>
            <li className='p-3 font-fontFamily transition-colors duration-300 hover:text-[#e10981]'>Docs</li>
            <li className='p-3 font-fontFamily transition-colors duration-300 hover:text-[#e10981]'>About us</li>
        </ul>
      <div className='hidden md:flex'>
        <button className='bg-[#e10981] hover:bg-[#ac005e] transition-colors duration-300 text-black px-4 py-2 font-fontFamily rounded-3xl'>Connect Wallet</button>
    </div>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full font-fontFamily text-3xl font-bold text-[#017455] m-4'>Uniqloc.</h1>
          <li className='p-3 font-fontFamily border-b border-gray-600 transition-colors duration-300 hover:text-[#e10981]'>Home</li>
          <li className='p-3 font-fontFamily transition-colors duration-300 hover:text-[#e10981]'>My Locks</li>
          <li className='p-3 font-fontFamily border-b border-gray-600 transition-colors duration-300 hover:text-[#e10981]'>Docs</li>
          <li className='p-3 font-fontFamily border-b border-gray-600 transition-colors duration-300 hover:text-[#e10981]'>About us</li>
      </ul>
    </div>
  );
};

export default Nav;