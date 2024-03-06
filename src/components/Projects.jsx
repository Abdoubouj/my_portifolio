import React from 'react'
import {BsGithub , BsBoxArrowUpRight} from "react-icons/bs"
const Projects = () => {
  return (
    <section className="section_projects" id='projects'>
         <div className="container mx-auto">
         <div className="services_heading mt-10 text-center" data-aos="fade-up" data-aos-duration="1500">
             <h1 className='text-[30px] inline-block font-[500] relative dark:text-slate-300 after:content-[""] after:absolute after:w-1/2 after:h-1 after:left-0 after:-bottom-[7px] after:bg-primaryColor before:content-[""] before:absolute before:w-full before:h-1 before:left-0 before:bottom-0 before:bg-primaryColor text-textColorDark'>Our <span className='text-primaryColor'>Projects</span></h1>
        </div>
        <div className="projects_items flex mt-14 flex-col gap-10 items-center justify-start">
            <div data-aos="fade-up" data-aos-duration="3000" className="item flex lg:flex-row lg:odd:flex-row-reverse flex-col items-start justify-between gap-5 lg:w-[900px] md:w-[600px] sm:w-[500px] w-[300px] p-5 border-[1px] border-slate-200 dark:border-slate-700">
                <div className="item_image w-full h-full object-cover">
                    <img src="projects/ecommerce_app.png" alt="#" />
                </div>
                <div className="project_info flex flex-col items-center gap-5 text-textColorDark">
                    <div className="project_title font-[800] uppercase tracking-wide dark:text-slate-50">
                      ecommerce app
                    </div>
                    <p className="project_description w-[250px] sm:w-full font-[300] text-md text-center dark:text-slate-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic provident saepe perspiciatis nisi nihil, laboriosam corrupti commodi iste rem sit id cumque veritatis quasi itaque dignissimos magni vel earum eum.</p>
                    <div className="project_tools flex flex-wrap justify-center items-center gap-6 capitalize">
                        <span className='bg-primaryColor dark:text-slate-700 text-slate-950 font-[600] rounded-sm px-3 py-1'>react</span>
                        <span className='bg-primaryColor dark:text-slate-700 text-slate-950 font-[600] rounded-sm px-3 py-1'>tailwind</span>
                        <span className='bg-primaryColor dark:text-slate-700 text-slate-950 font-[600] rounded-sm px-3 py-1'>laravel</span>
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
            <div data-aos="fade-up" data-aos-duration="3000" className="item flex lg:flex-row lg:odd:flex-row-reverse flex-col items-start justify-between gap-5 lg:w-[900px] md:w-[600px] sm:w-[500px] w-[300px] p-5 border-[1px] border-slate-200 dark:border-slate-700">
                <div className="item_image w-full h-full object-cover">
                    <img src="projects/ecommerce_app.png" alt="#" />
                </div>
                <div className="project_info flex flex-col items-center gap-5 text-textColorDark">
                    <div className="project_title font-[800] uppercase tracking-wide dark:text-slate-50">
                      ecommerce app
                    </div>
                    <p className="project_description w-[250px] sm:w-full font-[300] text-md text-center dark:text-slate-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic provident saepe perspiciatis nisi nihil, laboriosam corrupti commodi iste rem sit id cumque veritatis quasi itaque dignissimos magni vel earum eum.</p>
                    <div className="project_tools flex flex-wrap justify-center items-center gap-6 capitalize">
                        <span className='bg-primaryColor dark:text-slate-700 text-slate-950 font-[600] rounded-sm px-3 py-1'>react</span>
                        <span className='bg-primaryColor dark:text-slate-700 text-slate-950 font-[600] rounded-sm px-3 py-1'>tailwind</span>
                        <span className='bg-primaryColor dark:text-slate-700 text-slate-950 font-[600] rounded-sm px-3 py-1'>laravel</span>
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
            <div data-aos="fade-up" data-aos-duration="3000" className="item flex lg:flex-row lg:odd:flex-row-reverse flex-col items-start justify-between gap-5 lg:w-[900px] md:w-[600px] sm:w-[500px] w-[300px] p-5 border-[1px] border-slate-200 dark:border-slate-700">
                <div className="item_image w-full h-full object-cover">
                    <img src="projects/ecommerce_app.png" alt="#" />
                </div>
                <div className="project_info flex flex-col items-center gap-5 text-textColorDark">
                    <div className="project_title font-[800] uppercase tracking-wide dark:text-slate-50">
                      ecommerce app
                    </div>
                    <p className="project_description w-[250px] sm:w-full font-[300] text-md text-center dark:text-slate-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic provident saepe perspiciatis nisi nihil, laboriosam corrupti commodi iste rem sit id cumque veritatis quasi itaque dignissimos magni vel earum eum.</p>
                    <div className="project_tools flex flex-wrap justify-center items-center gap-6 capitalize">
                        <span className='bg-primaryColor dark:text-slate-700 text-slate-950 font-[600] rounded-sm px-3 py-1'>react</span>
                        <span className='bg-primaryColor dark:text-slate-700 text-slate-950 font-[600] rounded-sm px-3 py-1'>tailwind</span>
                        <span className='bg-primaryColor dark:text-slate-700 text-slate-950 font-[600] rounded-sm px-3 py-1'>laravel</span>
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
           
        </div>
        </div>
    </section>
  )
}

export default Projects