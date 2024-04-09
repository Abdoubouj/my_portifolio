import React from 'react'
import {BsGithub , BsBoxArrowUpRight} from "react-icons/bs"
import { projects } from '../data/projects'
const Projects = () => {
  return (
    <section className="section_projects" id='projects'>
         <div className="container mx-auto">
         <div className="projects_heading mt-10 text-center">
             <h1 className='text-[30px] inline-block font-[500] relative dark:text-slate-300 after:content-[""] after:absolute after:w-1/2 after:h-1 after:left-0 after:rounded-lg after:-bottom-[10px] after:bg-primaryColor before:content-[""] before:absolute before:w-full before:rounded-lg before:h-1 before:left-0 before:-bottom-[2px] before:bg-primaryColor text-textColorDark'>My <span className='text-primaryColor'>Projects</span></h1>
        </div>
        <div className="projects_items flex mt-14 gap-10 items-center justify-center md:justify-start">
          {projects.map((project)=>(
            <div key={project.id} data-aos="fade-left" data-aos-duration="500" className="item border-[1px] border-slate-100 dark:border-slate-700 shadow-sm rounded-lg flex flex-col gap-2 w-[330px]">
                <div className="item_image w-full h-full object-cover border-b-[1px] border-slate-200">
                    <img src={project?.image} className='rounded-t-lg' alt="#" />
                </div>
                <div className="project_info flex flex-col items-center gap-7 text-textColorDark p-5">
                    <div className="project_title font-[800] text-[20px] uppercase tracking-wide text-slate-950 dark:text-slate-50">
                      {project?.name}
                    </div>
                    <div className="project_tools flex flex-wrap justify-center items-center gap-6 capitalize">
                      {project.utils.map((u,index)=>(
                        <span className='bg-primaryColor text-slate-50 font-[600] rounded-lg px-3 py-1' key={index}>{u}</span>
                      ))}
                    </div>
                    <div className="flex justify-evenly mt-4 w-full items-center ">
                      <a className='flex items-center gap-2 text-slate-950 dark:text-slate-50 font-[600] capitalize py-2 px-4 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-sm' href="#">
                        <span><BsGithub/></span>
                        <span>code</span>
                      </a>
                      <a className='flex items-center text-slate-950 dark:text-slate-50 font-[600] capitalize py-2 px-4 hover:bg-slate-200 dark:hover:bg-slate-700 gap-2' href="#">
                        <span><BsBoxArrowUpRight/></span>
                        <span>Demo</span>
                      </a>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
  )
}

export default Projects