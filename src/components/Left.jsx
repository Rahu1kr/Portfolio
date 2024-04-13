import React from 'react';
import { useTheme } from "../context/Theme.jsx";

const Left = () => {
  const { mode, colors } = useTheme();
  // console.log(colors.maintext)
  return (
    <div className={`pt-36 pl-56 w-[50vw] h-[87vh] fixed flex flex-col justify-between bg-[${colors.sky}]`}>
      <div>
        <h1 className={`text-[${colors.maintext}] text-6xl`}>Rahul Kumar</h1>
        <h3 className={`text-[${colors.normaltext}] text-xl pt-2`}>Full Stack Developer</h3>
        <h3 className={`text-[${colors.normaltext}] text-xl pt-2`}>MERN Developer</h3>
        <button className={`mt-16 border-[0.5px] border-[${colors.normaltext}] rounded-3xl py-2 px-8 text-[${colors.maintext}] text-xl hover:bg-[${colors.hover}]`}>
          <i className="fa-regular ali fa-file-pdf pr-3"></i>Resume
        </button>
      </div>
      <div className={`flex gap-5 text-2xl text-[${colors.normaltext}]`}>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-solid fa-envelope"></i>
        <i className="fa-solid fa-phone"></i>
      </div>
    </div>
  );
};

export default Left;
