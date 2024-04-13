import React from 'react'
import { useTheme } from "../../context/Theme.jsx";

const Projects = () => {
  const {mode, colors} = useTheme();
  const buttonStyle = `bg-[${colors.button}] text-[${colors.maintext}] text-sm px-5 py-2 rounded-3xl font-light my-2 mr-2`
  const imgStyle = 'w-[22px] mr-2 inline-block'

  return (
    <div>
      <h1 className={`mt-28 text-2xl text-[${colors.maintext}]`}>Projects</h1>
      <div className={` text-[19px] text-[${colors.normaltext}] mt-8`}>
        <div className=' w-[500px] h-[280px]'>
          <img src="pro1.png" alt="project" className={`border-4 border-[${colors.border}] rounded-xl`} />
        </div>
        <div>
          <h1 className=' my-4'>JobSeeker <i className={`fa-solid fa-up-right-from-square text-[${colors.maintext}]`}></i></h1>
          <p className='text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum obcaecati qui sed aperiam amet veniam? Officiis numquam mollitia nihil quos. Dicta repudiandae autem, sint ipsa exercitationem dolore voluptate modi!</p>
        </div>
        <div>
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

      <div className={` text-[19px] text-[${colors.normaltext}] mt-8`}>
        <div className=' w-[500px] h-[280px]'>
          <img src="pro2.png" alt="project" className={`border-4 border-[${colors.border}] rounded-xl`} />
        </div>
        <div>
          <h1 className=' my-4'>Blog <i className={`fa-solid fa-up-right-from-square text-[${colors.maintext}]`}></i></h1>
          <p className='text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum obcaecati qui sed aperiam amet veniam? Officiis numquam mollitia nihil quos. Dicta repudiandae autem, sint ipsa exercitationem dolore voluptate modi!</p>
        </div>
        <div>
        <button className={buttonStyle}><img src="html.png" alt="html" className={imgStyle} />HTML</button>
        <button className={buttonStyle}><img src="css.png" alt="css" className={imgStyle} />CSS</button>
        <button className={buttonStyle}><img src="js.png" alt="js" className={imgStyle} />JavaScript</button>
        <button className={buttonStyle}><img src="react.png" alt="react" className={imgStyle} />React</button>
        <button className={buttonStyle}><img src="tailwind.png" alt="tailwindCSS" className={imgStyle} />Tailwind CSS</button>
        <button className={buttonStyle}><img src="app.png" alt="Appwrite" className={imgStyle} />AppWrite</button>
        </div>
      </div>

      <div className={` text-[19px] text-[${colors.normaltext}] mt-8`}>
        <div className=' w-[500px] h-[280px]'>
          <img src="pro3.png" alt="project" className={`border-4 border-[${colors.border}] rounded-xl`} />
        </div>
        <div>
          <h1 className=' my-4'>CSS Generator <i className={`fa-solid fa-up-right-from-square text-[${colors.maintext}]`}></i></h1>
          <p className='text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum obcaecati qui sed aperiam amet veniam? Officiis numquam mollitia nihil quos. Dicta repudiandae autem, sint ipsa exercitationem dolore voluptate modi!</p>
        </div>
        <div>
        <button className={buttonStyle}><img src="html.png" alt="html" className={imgStyle} />HTML</button>
        <button className={buttonStyle}><img src="css.png" alt="css" className={imgStyle} />CSS</button>
        <button className={buttonStyle}><img src="js.png" alt="js" className={imgStyle} />JavaScript</button>
        <button className={buttonStyle}><img src="react.png" alt="react" className={imgStyle} />React</button>
        <button className={buttonStyle}><img src="tailwind.png" alt="tailwindCSS" className={imgStyle} />Tailwind CSS</button>
        </div>
      </div>
    </div>
  )
}

export default Projects