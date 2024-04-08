import React from 'react'
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail , AiOutlineSend} from 'react-icons/ai';
import {SlLocationPin} from 'react-icons/sl';

const Contact = () => {
  return (
    <section className="contact_section" id="contact">
         <div className="container mx-auto">
         <div className="contact_heading mt-10 text-center">
             <h1 className='text-[30px] inline-block font-[500] relative dark:text-slate-300 after:content-[""] after:absolute after:w-1/2 after:h-1 after:left-0 after:rounded-lg after:-bottom-[10px] after:bg-primaryColor before:content-[""] before:absolute before:w-full before:rounded-lg before:h-1 before:left-0 before:-bottom-[2px] before:bg-primaryColor text-textColorDark'>Contact <span className='text-primaryColor'>Me</span></h1>
        </div>
        <div className="contact_content mx-auto mt-14 flex flex-col lg:flex-row items-center md:items-start justify-start gap-14">
            <div className="our_info flex flex-2 text-[14px] sm:text-[16px] flex-col items-start justify-start gap-10 p-2">
               <div className="flex gap-3 items-center dark:text-slate-200 text-textColorDark font-[400] tele" data-aos="fade-right" data-aos-duration="1000">
                <span className='text-primaryColor text-[22px]'><BsTelephone/></span>
                <span className='capitalize font-[600]'>0641069261</span>
               </div>
               <div className="flex gap-3 items-center dark:text-slate-200 text-textColorDark font-[400] mail" data-aos="fade-right" data-aos-duration="1200">
                <span className='text-primaryColor text-[22px]'><AiOutlineMail/></span>
                <span className='font-[600]'>abderrahimboujedar@gmail.com</span>
               </div>
               <div className="flex gap-3 items-center dark:text-slate-200 text-textColorDark font-[400] location" data-aos="fade-right" data-aos-duration="1400">
                <span className='text-primaryColor text-[22px]'><SlLocationPin/></span>
                <span className='capitalize font-[600]'>Sala el jadida,morocco</span>
               </div>
            </div>
            <form className="contact_form  lg:flex-1">
                <div className="name mb-3 flex flex-col gap-2" data-aos="fade-left" data-aos-duration="1000">
                    <label className='capitalize font-[400] dark:text-slate-200 text-textColorDark text-sm lg:text-lg' htmlFor="name">name</label>
                    <input id='name' className='sm:w-full w-[280px] px-2 py-3 bg-transparent border-[1px] border-slate-300 focus:outline-primaryColor focus:outline-4 rounded-lg' type="text" placeholder='your name ....' />
                </div>
                <div className="email mb-3 flex flex-col gap-2" data-aos="fade-left" data-aos-duration="1200">
                    <label className='capitalize font-[400] dark:text-slate-200 text-textColorDark text-sm lg:text-lg' htmlFor="email">email</label>
                    <input id='email' className='sm:w-full w-[280px] px-2 py-3 bg-transparent border-[1px] border-slate-300 focus:outline-primaryColor focus:outline-4 rounded-lg' type="text" placeholder='your email ....' />
                </div>
                <div className="message mb-3 flex flex-col gap-2" data-aos="fade-left" data-aos-duration="1400">
                    <label  className='capitalize font-[400] dark:text-slate-200 text-textColorDark text-sm lg:text-lg' htmlFor="message">message</label>
                    <textarea id='message' className='sm:w-full w-[280px] px-2 py-3 bg-transparent border-[1px] border-slate-300 focus:outline-primaryColor focus:outline-4 rounded-lg' cols="30" rows="10" placeholder='message ...'></textarea>
                </div>
                <div className="send_btn_container">
                    <button className='bg-primaryColor mt-2 w-[150px] text-slate-50 font-[400] tracking-wide px-4 py-3 rounded-md shadow-sm shadow-primaryColor flex items-center justify-center gap-3'>
                        <span><AiOutlineSend/></span>
                        <span>Send</span>
                    </button>
                </div>
            </form>
        </div>
        </div>
    </section>
  )
}

export default Contact