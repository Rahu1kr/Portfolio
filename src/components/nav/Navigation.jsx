import React from 'react'
import '../../App.css'
import Button from './Button'
import { useTheme } from "../../context/Theme.jsx";
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  const {mode, colors} = useTheme();
  // ${mode === 'dark' ? "hover:bg-[#274472]" : "hover:bg-[#bfd7ed]" }
  const navButton = `px-5 h-14 ${mode === 'dark' ? "hover:bg-[#274472]" : "hover:bg-[#bfd7ed]" }`

  return (
    <div className=' fixed w-full z-10'>
      <div className={`flex w-full justify-between items-center px-3 h-14 ${mode === 'dark' ? "bg-[#122035]" : "bg-[#60a3da]" } text-[${colors.maintext}]`}>
        <div>
          <a href='#main' className=' font-medium text-2xl'>&lt;/&gt; Portfolio</a>
        </div>
        <div className=' flex text-lg h-14 items-center'>
          <a href="#about"><button className={navButton}>About</button></a>
          <a href="#skills"><button className={navButton}>Skills</button></a>
          <a href="#exper"><button className={navButton}>Experience</button></a>
          <a href='#pro'><button className={`${navButton} mr-5`}>Projects</button></a>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Navigation