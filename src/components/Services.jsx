import React from 'react'
import { servicesData } from '../data/services'
const Services = () => {
  return (
    <section className="section_services" id="services">
         <div className="container mx-auto">
         <div className="services_heading mt-10 text-center" data-aos="fade-up" data-aos-duration="1500">
             <h1 className='text-[30px] inline-block font-[500] relative dark:text-slate-300 after:content-[""] after:absolute after:w-1/2 after:h-1 after:left-0 after:-bottom-[7px] after:bg-primaryColor before:content-[""] before:absolute before:w-full before:h-1 before:left-0 before:bottom-0 before:bg-primaryColor text-textColorDark'>Our <span className='text-primaryColor'>Services</span></h1>
        </div>
        <div className="services_list flex flex-wrap items-start justify-center lg:mt-14 gap-8 mt-[200px]">
          {servicesData.map((service)=>(
            <div data-aos="fade-up" data-aos-duration="3000" className="item duration-500 w-[300px] ease-in-out hover:transform  hover:scale-105 flex flex-col gap-3 items-center justify-start bg-slate-50 dark:bg-slate-700 rounded-md shadow-md  p-5 " key={service.id}>
                <div className="service_image w-[100px] h-[100px]">
                  <img src={`servicesImages/${service.image}`} alt="" />
                </div>
                <h1 className='text-textColorDark text-center dark:text-slate-200 font-bold capitalize'>{service.intitule}</h1>
                <p className='text-center text-gray-700 dark:text-gray-200 font-[300] text-[14px]'>{service.description}</p>
            </div>
          ))}
        </div>
         </div>
    </section>
  )
}

export default Services