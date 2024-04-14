import React from 'react'
import { useTheme } from "../../context/Theme.jsx";

const Skills = () => {
  const {mode, colors} = useTheme()
  const buttonStyle = `bg-[${colors.button}] text-[${colors.maintext}] text-sm px-5 py-2 rounded-3xl font-light my-2 mr-2`
  const imgStyle = 'w-[22px] mr-2 inline-block'

  return (
    <div id='skills' className='pt-14'>
    <div>
      <h1 className={` text-2xl text-[${colors.maintext}]`}>Skills</h1>
      <div className={` text-[19px] text-[${colors.normaltext}] mt-8`}>
        {/* <span className=' pr-4'>C++,</span>
        <span className=' pr-4'>HTML,</span>
        <span className=' pr-4'>CSS,</span>
        <span className=' pr-4'>JavaScript,</span>
        <span className=' pr-4'>Tailwind CSS,</span>
        <span className=' pr-4'>React Js,</span>
        <span className=' pr-4'>Node Js,</span>
        <span className=' pr-4'>Express Js,</span>
        <span className=' pr-4'>MongoDB,</span>
        <span className=' pr-4'>SQL</span> */}
        <button className={buttonStyle}><img src="c++.png" alt="c++" className={imgStyle} />C++</button>
        <button className={buttonStyle}><img src="html.png" alt="html" className={imgStyle} />HTML</button>
        <button className={buttonStyle}><img src="css.png" alt="css" className={imgStyle} />CSS</button>
        <button className={buttonStyle}><img src="js.png" alt="js" className={imgStyle} />JavaScript</button>
        <button className={buttonStyle}><img src="react.png" alt="react" className={imgStyle} />React</button>
        <button className={buttonStyle}><img src="tailwind.png" alt="tailwindCSS" className={imgStyle} />Tailwind CSS</button>
        <button className={buttonStyle}><img src="node.png" alt="NodeJs" className={imgStyle} />Node Js</button>
        <button className={buttonStyle}><img src="ex.png" alt="express" className={imgStyle} />Express Js</button>
        <button className={buttonStyle}><img src="db.png" alt="MongoDb" className={imgStyle} />MongoDB</button>
        <button className={buttonStyle}><img src="database.png" alt="SQL" className={imgStyle} />SQL</button>
      </div>
    </div>
    </div>
  )
}

export default Skills