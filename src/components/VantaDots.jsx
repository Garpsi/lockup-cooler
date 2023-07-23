import React, { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'
import LogoPNG from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.43, 0.13, 0.23, 0.96]
    },
  },
};


const VantaDots = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(DOTS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xf00fa0,
        color2: 0xff20a3,
        backgroundColor: 0x161616,
        size: 5.30,
        spacing: 31.00,
        showLines: false,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div ref={myRef} style={{ width: '100%', height: '100vh' }} >
      <div className="flex flex-col justify-center max-w-screen-2xl px-4 py-5 mx-auto lg:gap-8 xl:gap-0 lg:py-20">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
      >
        <img className="mx-auto mb-10 mt-10 w-[275px]" src={LogoPNG} alt="GreenChain Logo"  />
        <div className="text-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white mx-auto">Welcome To Uniqloc</h1>
          <p className="max-w-2xl mb-2 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mx-auto">Uniqloc is a groundbreaking new liquidity locker, setting new standards in the crypto world.</p>
        </div>
        
        <Link to="/home" className="text-xl inline-flex items-center justify-center px-5 mr-3 font-medium text-center text-white hover:text-gray-400 transform hover:scale-110 transition-all duration-200">
          Enter App
          <svg className="w-10 h-10 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </Link>
      </motion.div>
      </div>
    </div>
  );
}

export default VantaDots;