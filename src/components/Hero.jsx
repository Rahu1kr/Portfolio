import React from 'react'
import Left from './Left' 
import Right from './Right'
import { useTheme } from "../context/Theme.jsx";

const Hero = () => {
  const {mode, colors} = useTheme()

  return (
    <div className={`flex  w-full h-[100%] bg-[${colors.sky}]`}>
        <Left />
        <Right />
    </div>
  )
}

export default Hero