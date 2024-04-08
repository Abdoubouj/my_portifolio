import React from 'react'
import {FaDownload ,FaReact , FaHtml5 , FaCss3Alt ,FaLaravel} from "react-icons/fa"
import {BiLogoJavascript} from "react-icons/bi"
import img from "../assets/IMG_1417.png";
import {BsGit} from "react-icons/bs"
import {AiFillFacebook,AiFillGithub,AiFillInstagram,AiFillLinkedin} from "react-icons/ai"
const Introduction = () => {
  return (
    <section className="flex mt-14 items-center justify-center" id='introduction'>
        <div className="container mx-auto">
            <div className="flex flex-col-reverse xl:flex-row xl:items-start justify-between xl:gap-2 items-center gap-[100px] ">
            <div className="content_left dark:text-slate-300 text-textColorDark flex flex-col gap-4" data-aos="fade-right" data-aos-duration="1500">
                <h5 className='font-[300] text-xl'>Hello My Name Is</h5>
                <h2 className='md:text-[50px] text-[30px] font-semibold'>Abderrahim <span className='text-primaryColor'>Boujedar</span></h2>
                <h5 className='font-[300] text-xl'>And I’m a full-stack Developper</h5>
                <p className='font-[300] text-[14px] max-w-[500px]'>I'm a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. My expertise lies in creating dynamic and responsive web applications that deliver seamless user experiences. With a keen eye for design and a deep understanding of server-side programming, I thrive in the ever-evolving world of web development.</p>
                <a href='#' className='bg-primaryColor  mt-2 w-[200px] text-slate-50 font-[400] tracking-wide px-6 py-3 rounded-md shadow-sm shadow-primaryColor flex items-center justify-center gap-3'>
                    <span><FaDownload/></span>
                    <span>Download CV</span>
                </a>
                <div className="social_media">
                    <div className="flex py-3 gap-5 items-center justify-start text-primaryColor text-2xl">
                    <div className="hover:text-textColorDark cursor-pointer"><AiFillFacebook/></div>
                    <div className="hover:text-textColorDark cursor-pointer"><AiFillGithub/></div>
                    <div className="hover:text-textColorDark cursor-pointer"><AiFillInstagram/></div>
                    <div className="hover:text-textColorDark cursor-pointer"><AiFillLinkedin/></div>
                    </div>
                </div>
            </div>
            <div className="content_right relative md:w-[460px] md:h-[460px] w-[320px] h-[320px] flex items-center justify-center" data-aos="fade-left" data-aos-duration="1500">
                <li className='origin-[160px] md:origin-[230px] lng_item text-blue-600' style={{'--i':0}}>
                  <FaReact/>
                </li>
                <li className='origin-[160px] md:origin-[230px] lng_item text-orange-400' style={{'--i':1}}>
                    <FaHtml5/>
                </li>
                <li className='origin-[160px] md:origin-[230px] lng_item text-blue-800' style={{'--i':2}}>
                    <FaCss3Alt/>
                </li>
                <li className='origin-[160px] md:origin-[230px] lng_item text-red-600' style={{'--i':3}}>
                    <FaLaravel/>
                </li>
                <li className='origin-[160px] md:origin-[230px] lng_item text-yellow-400' style={{'--i':4}}>
                    <BiLogoJavascript/>
                </li>
                <li className='origin-[160px] md:origin-[230px] lng_item text-orange-500' style={{'--i':5}}>
                    <BsGit/>
                </li>
                <div className="md:w-[350px] md:h-[350px] w-[250px] h-[250px] relative rounded-full truncate border-[1px] border-primaryColor bg-slate-50 shadow-2xl shadow-primaryColor">
                    <img src={img} className='absolute bottom-0  md:w-[400px] md:h-[400px] w-[250px] h-[250px] object-cover' alt="#" />
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Introduction