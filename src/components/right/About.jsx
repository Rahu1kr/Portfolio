import React from 'react'
import { useTheme } from "../../context/Theme.jsx";

const About = () => {
  const {mode, colors} = useTheme();

  return (
    <div id='about' className=' pt-14'>
      <div  >
          <h1 className={`text-2xl text-[${colors.maintext}]`}>About Me</h1>
          <p className={`text-[19px] text-[${colors.normaltext}] mt-8`}>Hi! I'm Rahul Kumar, an apprentice developer and fourth-year student at UIET Panjab University, specializing in web development. Passionate about the web ecosystem, I combine my studies with my practical experience to build intuitive and feature-rich website.<br/>
  I aspire to put my skills to work on inspiring and challenging projects.</p>
      </div>
    </div>
  )
}

export default About