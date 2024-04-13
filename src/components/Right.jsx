import React from 'react'
import Skills from './right/Skills'
import About from './right/About'
import Experience from './right/Experience'
import Projects from './right/Projects'

const Right = () => {
  return (
    <div className='pt-[136px] pl-[51vw] w-full h-full pr-52'>
      <About />
      <Skills/>
      <Experience />
      <Projects />
    </div>
  )
}

export default Right