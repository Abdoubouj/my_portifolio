import React, { useState } from 'react'
import { BsGit} from "react-icons/bs";
import {FaReact , FaHtml5 , FaCss3Alt, FaBootstrap} from "react-icons/fa"
import {BiLogoTailwindCss} from "react-icons/bi"
import {SiMysql, SiJavascript} from "react-icons/si"
import {SiDotnet} from "react-icons/si";
const Skills = () => {
   const skills = [
      {name:"html",duration:500,icon:<FaHtml5/>},
      {name:"css",duration:700,icon:<FaCss3Alt/>},
      {name:"tailwind",duration:900,icon:<BiLogoTailwindCss/>},
      {name:"bootstrap",duration:1100,icon:<FaBootstrap/>},
      {name:"javascript",duration:1300,icon:<SiJavascript/>},
      {name:"react",duration:1500,icon:<FaReact/>},
      {name:".Net",duration:1700,icon:<SiDotnet/>},
      {name:"sql",duration:1900,icon:<SiMysql/>},
      {name:"git",duration:2100,icon:<BsGit/>},
   ]
  return (
    <section className="skills_section" id='skills'>
        <div className="container mx-auto">
        <div className="skills_heading mt-10 text-center">
             <h1 className='text-[30px] inline-block font-[500] relative dark:text-slate-300 after:content-[""] after:absolute after:w-1/2 after:h-1 after:left-0 after:rounded-lg after:-bottom-[10px] after:bg-primaryColor before:content-[""] before:absolute before:w-full before:rounded-lg before:h-1 before:left-0 before:-bottom-[2px] before:bg-primaryColor text-textColorDark'>My <span className='text-primaryColor'>Skills</span></h1>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-10 mt-14">
         {skills.map((s,index)=>(
            <div key={index} data-aos="fade-left" data-aos-duration={`${s.duration}`} className="item w-[200px] h-[150px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
               <div className='icon text-primaryColor text-[40px] flex items-center justify-center group-hover:text-slate-50'>{s.icon}</div>
               <div className="dark:text-slate-200 uppercase text-slate-700 text-[15px] font-[600] group-hover:text-slate-50">{s.name}</div>
             </div>
         ))}             
        </div>
        </div>
    </section>
  )
}

export default Skills