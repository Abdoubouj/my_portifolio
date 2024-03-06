import React from 'react'
import about_img from "../assets/about_img.svg";
const Education = () => {
  return (
    <section className='eduction_section' id="eduction">
      <div className="container mx-auto">
        <div className="eduction_heading mt-10 text-center" data-aos="fade-up" data-aos-duration="1000">
             <h1 className='text-[30px] inline-block font-[500] relative dark:text-slate-300 after:content-[""] after:absolute after:w-1/2 after:h-1 after:left-0 after:-bottom-[7px] after:bg-primaryColor before:content-[""] before:absolute before:w-full before:h-1 before:left-0 before:bottom-0 before:bg-primaryColor text-textColorDark'>My <span className='text-primaryColor'>Education</span></h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-start mt-14 py-6 px-7" data-aos="fade-up" data-aos-duration="1500">
          <div className="content_left_img flex-1">
               <img src={about_img} className='sm:w-[400px] sm:h-[400px] w-[280px] h-[280px]' alt="#" />
          </div>
          <div className="content_right_my_education flex-1" data-aos="fade-up" data-aos-duration="1500">
            <div className="education-items flex flex-col gap-14 py-4 relative before:absolute before:content-[''] before:w-[2px] before:h-full before:bg-primaryColor before:rounded-sm">
               <div className="edu-item px-4 relative before:absolute before:content-[''] before:w-[10px] before:h-[10px] before:bg-primaryColor before:rounded-full before:to0x] before:-left-[4px]">
                <div className="date font-[600] text-[17px] text-slate-900 capitalize">December,2023 - Present</div>
                <div className="school font-[500] text-[16px] text-slate-800 capitalize">university international de rabat</div>
                <div className="degree font-[400] text-[14px] text-slate-700 capitalize">certificat jobintch fullstack .net/react developper</div>
               </div>
               <div className="edu-item px-4 relative before:absolute before:content-[''] before:w-[10px] before:h-[10px] before:bg-primaryColor before:rounded-full before:top-0 before:-left-[4px]">
                <div className="date font-[600] text-[17px] text-slate-900 capitalize">September,2021 - July,2023</div>
                <div className="school font-[500] text-[16px] text-slate-800 capitalize">specialized institute of applied technology</div>
                <div className="degree font-[400] text-[14px] text-slate-700 capitalize">Degree specialist technician in digital developpment</div>
               </div>
               <div className="edu-item px-4 relative before:absolute before:content-[''] before:w-[10px] before:h-[10px] before:bg-primaryColor before:rounded-full before:top-0 before:-left-[4px]">
                <div className="date font-[600] text-[17px] text-slate-900 capitalize">September,2020 - July,2021</div>
                <div className="school font-[500] text-[16px] text-slate-800 capitalize">El moravides High School</div>
                <div className="degree font-[400] text-[14px] text-slate-700 capitalize">baccalaureate physical sciences</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education