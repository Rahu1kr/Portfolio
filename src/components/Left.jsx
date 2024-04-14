import React from 'react';
import { useTheme } from "../context/Theme.jsx";

const Left = () => {
  const { mode, colors } = useTheme();
  // console.log(colors.maintext)
  return (
    <div className={`pt-36 pl-56 w-[50vw] h-[87vh] fixed flex flex-col justify-between bg-[${colors.sky}]`}>
      <div>
      {/* text-[${colors.maintext}] */}
        <h1 className={` ${mode === 'dark' ? "text-[#E3E2E6]" : "text-[#1A1C1E]" } text-6xl`}>Rahul Kumar</h1>
        <h3 className={`${mode === 'dark' ? "text-[#BFC3D0]" : "text-[#2E3337]" } text-xl pt-2`}>Full Stack Developer</h3>
        {/* <h3 className={`text-[${colors.normaltext}] text-xl pt-2`}>MERN Developer</h3> */}
        <a target='_blank' href="https://drive.google.com/file/d/1_zGJFD73EGyMUrzDuK_3sfCuygHphF8F/view?usp=drive_link">
          <button className={`mt-16 border-[0.5px] ${mode === 'dark' ? "border-[#BFC3D0]" : "border-[#2E3337]" } rounded-3xl py-2 px-8 text-[${colors.maintext}] text-xl hover:bg-[${colors.hover}]`}>
            <i className="fa-regular ali fa-file-pdf pr-3"></i>Resume
          </button>
        </a>
      </div>
      <div className={`flex gap-5 text-2xl text-[${colors.normaltext}]`}>
        <a target='_blank' href="https://github.com/Rahu1kr"><i className="fa-brands fa-github"></i></a>
        <a target='_blank' href="https://twitter.com/KumarRahul58739"><i className="fa-brands fa-x-twitter"></i></a>
        <a target='_blank' href="https://www.linkedin.com/in/rahul-kumar-pu-130136203/"><i className="fa-brands fa-linkedin"></i></a>
        <a href="mailto:krahulr12345@gmail.com"><i className="fa-solid fa-envelope"></i></a>
        <i className="fa-solid fa-phone"></i>
      </div>
    </div>
  );
};

export default Left;
