import React from 'react'
import { useTheme } from "../../context/Theme.jsx";

const Experience = () => {
  const {mode, colors} = useTheme();
  const buttonStyle = `bg-[${colors.button}] text-[${colors.maintext}] text-sm px-5 py-2 rounded-3xl font-light my-2 mr-2`
  const imgStyle = 'w-[22px] mr-2 inline-block'

  return (
    <div>
      <div className=' h-[500px]'>
          <h1 className={`mt-28 text-2xl text-[${colors.maintext}]`}>Experience</h1>
          <div className=' flex justify-between'>
            <div>
              <h2 className={`text-xl text-[${colors.maintext}] mt-8`}>Web Developer</h2>
              <h2 className={`text-lg text-[${colors.normaltext}] mb-3`}>TripFox</h2>
            </div>
            <div className=' mt-9 mr-2'>
              <h2 className={`text-base font-light text-[${colors.maintext}] `}>Feb 2024 - Mar 2024</h2>
            </div>
          </div>
            <p className={`text-lg font-light text-[${colors.normaltext}] mb-8`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia a tempora fugiat aliquam qui quas sapiente! Placeat debitis assumenda atque delectus fugiat itaque, minus nemo laboriosam molestias qui ducimus voluptas optio in, minima, autem sunt error necessitatibus eveniet perferendis!</p>
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
  )
}

export default Experience