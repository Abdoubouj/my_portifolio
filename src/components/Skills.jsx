import React, { useState } from 'react'
import {BsChevronDoubleDown ,BsGit} from "react-icons/bs";
import {FaReact , FaHtml5 , FaCss3Alt ,FaLaravel , FaBootstrap ,FaDocker} from "react-icons/fa"
import {BiLogoJavascript ,BiLogoTailwindCss , BiLogoPhp ,BiLogoFigma} from "react-icons/bi"
import {SiTypescript ,SiMysql, SiMongodb} from "react-icons/si"
import {SiDotnet} from "react-icons/si";
const Skills = () => {
  return (
    <section className="skills_section" id='skills'>
        <div className="container mx-auto">
        <div className="skills_heading mt-10 text-center" data-aos="fade-down" data-aos-duration="1500">
             <h1 className='text-[30px] inline-block font-[500] relative dark:text-slate-300 after:content-[""] after:absolute after:w-1/2 after:h-1 after:left-0 after:-bottom-[7px] after:bg-primaryColor before:content-[""] before:absolute before:w-full before:h-1 before:left-0 before:bottom-0 before:bg-primaryColor text-textColorDark'>My <span className='text-primaryColor'>Skills</span></h1>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-10 mt-14">
            {/* <div className="front_end_skills w-[300px] dark:bg-slate-700 bg-slate-100 flex flex-col items-start gap-10 text-textColorDark dark:text-slate-300 font-400 p-4" data-aos="fade-up" data-aos-duration="1500"> */}
                    {/* <div className="skills_items flex flex-col gap-4"> */}
                      <div data-aos="fade-left" data-aos-duration="1500" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon text-orange-400 bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px]'><FaHtml5/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">Html</div>
                     </div>
                      <div data-aos="fade-left" data-aos-duration="1550" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-blue-700'><FaCss3Alt/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">Css</div>
                     </div>
                      <div data-aos="fade-left" data-aos-duration="1600" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-blue-400'><FaReact/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">React</div>
                     </div>
                      <div data-aos="fade-left" data-aos-duration="1650" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-yellow-400'><BiLogoJavascript/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">javascript</div>
                     </div>
                      <div data-aos="fade-left" data-aos-duration="1700" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-blue-700'><SiTypescript/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">typescript</div>
                     </div>
                      <div data-aos="fade-left" data-aos-duration="1750" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-blue-400'><BiLogoTailwindCss/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">tailwind</div>
                     </div>
                      <div data-aos="fade-left" data-aos-duration="1800" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-purple-700'><FaBootstrap/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">bootstrap</div>
                     </div>
                    {/* </div> */}
            {/* </div> */}
            {/* <div className="back_end_skills w-[300px] dark:bg-slate-700 bg-slate-100 flex flex-col items-start gap-10 text-textColorDark dark:text-slate-300 font-400 p-4" data-aos="fade-up" data-aos-duration="1500"> */}
            {/* <div className="flex justify-between cursor-pointer items-center w-full" >
                    <span className="font-bold">Back End</span>
                    <button><BsChevronDoubleDown/></button>
             </div> */}
                    {/* <div className="skills_items flex flex-col gap-4"> */}
                      <div data-aos="fade-left" data-aos-duration="1850" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-violet-400'><BiLogoPhp/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">php</div>
                     </div>
                      <div data-aos="fade-left" data-aos-duration="1900" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-red-600'><FaLaravel/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">laravel</div>
                     </div>
                      <div data-aos="fade-left" data-aos-duration="1950" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-green-800'><SiMongodb/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">mongo db</div>
                     </div>
                      <div data-aos="fade-left" data-aos-duration="2000" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-orange-600'><SiMysql/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">mysql</div>
                     </div>
                      <div data-aos="fade-left" data-aos-duration="2050" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-blue-800'><SiDotnet/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">.net</div>
                     </div>
                     {/* </div> */}
            {/* </div> */}
            {/* <div className="tools_skills w-[300px] dark:bg-slate-700 bg-slate-100 flex flex-col items-start  gap-10 text-textColorDark dark:text-slate-300 font-400 p-4" data-aos="fade-up" data-aos-duration="1500">
            <div className="flex justify-between cursor-pointer items-center w-full" >
                    <span className="font-bold">Tools</span>
                    <button><BsChevronDoubleDown/></button>
                    </div> */}
                    {/* <div className="skills_items flex flex-col gap-4"> */}
                      <div data-aos="fade-left" data-aos-duration="2100" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-orange-500'><BsGit/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">Git</div>
                     </div>
                      <div data-aos="fade-left" data-aos-duration="2150" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-pink-500'><BiLogoFigma/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">Figma</div>
                     </div>
                      <div data-aos="fade-left" data-aos-duration="2200" className="item w-[140px] h-[100px] p-1 border-[1px] border-primaryColor rounded-lg text-lg flex flex-col items-center justify-center gap-3 hover:bg-primaryColor group">
                       <div className='icon bg-slate-200 flex items-center justify-center rounded-full w-[30px] h-[30px] text-blue-500'><FaDocker/></div>
                        <div className="dark:text-slate-300 lowercase text-primaryColor text-[15px] font-[400] group-hover:text-slate-50">docker</div>
                     </div>
                     {/* </div> */}
            {/* </div> */}
        </div>
        </div>
    </section>
  )
}

export default Skills