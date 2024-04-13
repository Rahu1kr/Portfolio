import React from 'react'
import { useTheme } from "../context/Theme.jsx";

const Footer = () => {
  const {mode, colors} = useTheme()

  return (
    <div>
        <div className={`mt-6 flex w-full h-12 bg-[${colors.blue}] justify-center items-center`}>
            <h1 className={`text-[${colors.normaltext}]`}>© 2024 | Rahul Kumar</h1>
        </div>
    </div>
  )
}

export default Footer