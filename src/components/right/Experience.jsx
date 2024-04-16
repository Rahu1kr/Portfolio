import React from 'react'
import { useTheme } from "../../context/Theme.jsx";

const Experience = () => {
  const {mode, colors} = useTheme();
  const buttonStyle = `bg-[${colors.button}] text-[${colors.maintext}] text-sm px-5 py-2 rounded-3xl font-light my-2 mr-2`
  const imgStyle = 'w-[22px] mr-2 inline-block'

  return (
    <div id='exper' className=' pt-14'>
    <div>
      <div className=' h-[500px]'>
          <h1 className={` text-2xl text-[${colors.maintext}]`}>Experience</h1>
          <div className=' flex justify-between'>
            <div>
              <h2 className={`text-xl text-[${colors.maintext}] mt-8`}>Web Developer</h2>
              <h2 className={`text-lg text-[${colors.normaltext}] mb-3`}>TripFox</h2>
            </div>
            <div className=' mt-9 mr-2'>
              <h2 className={`text-base font-light text-[${colors.maintext}] `}>Feb 2024 - Mar 2024</h2>
            </div>
          </div>
            <p className={`text-lg font-light text-[${colors.normaltext}] mb-8`}>Developed proficiency in web technologies, including ReactJS, JavaScript, Redux, NodeJS, and MongoDB. Contributed to the creation of dynamic and interactive web applications, enhancing user experience. Collaborated with a team of developers to implement features and optimize web application performance.</p>
            <button className={buttonStyle}><img src="html.png" alt="html" className={imgStyle} />HTML</button>
            <button className={buttonStyle}><img src="css.png" alt="css" className={imgStyle} />CSS</button>
            <button className={buttonStyle}><img src="js.png" alt="js" className={imgStyle} />JavaScript</button>
            <button className={buttonStyle}><img src="react.png" alt="react" className={imgStyle} />React</button>
            <button className={buttonStyle}><img src="tailwind.png" alt="tailwindCSS" className={imgStyle} />Tailwind CSS</button>
            <button className={buttonStyle}><img src="node.png" alt="NodeJs" className={imgStyle} />Node Js</button>
            <button className={buttonStyle}><img src="ex.png" alt="express" className={imgStyle} />Express Js</button>
            <button className={buttonStyle}><img src="db.png" alt="MongoDb" className={imgStyle} />MongoDB</button>
      </div>
    </div>
    </div>
  )
}

export default Experience