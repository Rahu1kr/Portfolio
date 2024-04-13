import React from 'react'
import '../../App.css'
import Button from './Button'
import { useTheme } from "../../context/Theme.jsx";


const Navigation = () => {
  const {mode, colors} = useTheme();
  const navButton = `px-5 h-14 hover:bg-[${colors.sky}]`

  return (
    <div className=' fixed w-full z-10'>
      <div className={`flex w-full justify-between items-center px-3 h-14 bg-[${colors.blue}] text-[${colors.maintext}]`}>
        <div>
          <button className=' font-medium text-2xl'>&lt;/&gt; Portfolio</button>
        </div>
        <div className=' flex text-lg h-14 items-center'>
          <button className={navButton}>About</button>
          <button className={navButton}>Skills</button>
          <button className={navButton}>Experience</button>
          <button className={`${navButton} mr-5`}>Projects</button> 
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Navigation