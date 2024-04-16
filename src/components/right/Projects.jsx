import React from 'react'
import { useTheme } from "../../context/Theme.jsx";

const Projects = () => {
  const {mode, colors} = useTheme();
  const buttonStyle = `bg-[${colors.button}] text-[${colors.maintext}] text-sm px-5 py-2 rounded-3xl font-light my-2 mr-2`
  const imgStyle = 'w-[22px] mr-2 inline-block'

  return (
    <div id='pro' className='pt-14'>
    <div >
      <h1 className={` text-2xl text-[${colors.maintext}]`}>Projects</h1>
      <div className={` text-[19px] text-[${colors.normaltext}] mt-8`}>
        <div className=' w-[500px] h-[280px]'>
          <img src="pro1.png" alt="project" className={`border-4 ${mode === 'dark' ? "border-[#405a85]" : "border-[#566883]" } rounded-xl`} />
        </div>
        <div>
          <a target='_blank' href="https://github.com/Rahu1kr/JobSeeker"><h1 className=' my-4'>JobSeeker <i className={`fa-solid fa-up-right-from-square text-[${colors.maintext}]`}></i></h1></a>
          <p className='text-lg font-light'>The platform allows job seekers to browse and apply for jobs posted by employers.
          <br /><li>Job Search and Application: Job seekers can easily browse through job listings and apply for positions directly through the platform, streamlining the application process.</li>
          <li>Employer Job Posting: Employers have the ability to post job listings, providing a platform for them to reach potential candidates efficiently.</li>
          <li>User Authentication and Authorization: Implemented secure user authentication and authorization using JWT (JSON Web Tokens), ensuring that only authorized users can access certain features and data.</li>
          <li>File Upload with Cloudinary: Integrated Cloudinary for file storage and management, enabling users to upload resumes and other relevant documents during the application process.</li>
          <li>Technologies Used: React, React Router DOM, Tailwind CSS, Axios, Node.js, Express.js, MongoDB, Authentication and Authorization(JWT), Cloudinary, Bcrypt, Cors.</li>
          </p>
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
          <a target='_blank' href="https://github.com/Rahu1kr/Blog"><h1 className=' my-4'>Blog <i className={`fa-solid fa-up-right-from-square text-[${colors.maintext}]`}></i></h1></a>
          <p className='text-lg font-light'> The platform serves as a hub for various blog posts, offering seamless navigation and interaction.
          <br />
          <li>Dynamic Content Management: Implemented React and React-DOM to create dynamic components, enabling easy management and rendering of blog posts.</li>
          <li>State Management with Redux: Utilized Redux and Redux-Toolkit for efficient state management, ensuring seamless data flow and improved performance.</li>
          <li>Appwrite Integration: Integrated Appwrite for backend services such as user authentication, data storage, and file management, ensuring robust security and scalability.</li>
          </p>
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
          <a target='_blank' href="https://github.com/Rahu1kr/CSS-Generator"><h1 className=' my-4'>CSS Generator <i className={`fa-solid fa-up-right-from-square text-[${colors.maintext}]`}></i></h1></a>
          <p className='text-lg font-light'>The platform empowers users to customize and visualize CSS styles for their web projects efficiently.
          <br /><li>Box Shadow Customization: Enables users to customize and preview box shadows by adjusting parameters such as color, blur, spread, and position, providing real-time feedback on the generated CSS code.</li>
          <li>Border Radius Configuration: Allows users to set border radii for elements, with options to adjust each corner individually or apply uniform radii to all corners, simplifying the creation of rounded corners in CSS.</li>
          <li>Gradient Color Generation: Provides a user-friendly interface for creating gradient backgrounds, allowing users to specify colors, angles, and gradient types to generate CSS code for stunning gradient effects.</li></p>
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
    </div>
  )
}

export default Projects