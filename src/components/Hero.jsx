import React from 'react'
import Left from './Left' 
import Right from './Right'
import { useTheme } from "../context/Theme.jsx";

const Hero = () => {
  const {mode, colors} = useTheme()

  return (
    <div className={`flex  w-full h-[100%] ${mode === 'dark' ? "bg-[#274472]" : "bg-[#bfd7ed]" }`}>
        <Left />
        <Right />
    </div>
  )
}

export default Hero