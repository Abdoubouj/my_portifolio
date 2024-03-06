import React from 'react'
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail , AiOutlineSend} from 'react-icons/ai';
import {SlLocationPin} from 'react-icons/sl';

const Contact = () => {
  return (
    <section className="contact_section " id="contact">
         <div className="container mx-auto">
         <div className="contact_heading mt-10 text-center" data-aos="fade-up" data-aos-duration="1500">
             <h1 className='text-[30px] inline-block font-[500] relative dark:text-slate-300 after:content-[""] after:absolute after:w-1/2 after:h-1 after:left-0 after:-bottom-[7px] after:bg-primaryColor before:content-[""] before:absolute before:w-full before:h-1 before:left-0 before:bottom-0 before:bg-primaryColor text-textColorDark'>Contact <span className='text-primaryColor'>Me</span></h1>
        </div>
        <div className="contact_content mx-auto mt-14 flex flex-col-reverse lg:flex-row items-start lg:items-start justify-start gap-8">
            <div className="our_info flex flex-2 text-[12px] sm:text-[16px] flex-col items-start justify-start gap-7 p-2 bg-slate-300">
               <div className="flex gap-3 items-center text-textColorDark font-[400] tele">
                <span className='text-primaryColor text-[22px]'><BsTelephone/></span>
                <span className='capitalize'>0641069261</span>
               </div>
               <div className="flex gap-3 items-center text-textColorDark font-[400] mail">
                <span className='text-primaryColor text-[22px]'><AiOutlineMail/></span>
                <span>abderrahimboujedar@gmail.com</span>
               </div>
               <div className="flex gap-3 items-center text-textColorDark font-[400] location">
                <span className='text-primaryColor text-[22px]'><SlLocationPin/></span>
                <span className='capitalize'>Sala el jadida,morocco</span>
               </div>
            </div>
            <form className="contact_form lg:flex-1 w-full">
                <div className="name mb-3 flex flex-col gap-2">
                    <label className='capitalize font-[400] text-textColorDark text-lg' htmlFor="name">name</label>
                    <input id='name' className='sm:w-full w-[280px] px-2 py-3 bg-transparent border-[1px] border-slate-300 focus:outline-primaryColor focus:outline-4 rounded-lg' type="text" placeholder='your name ....' />
                </div>
                <div className="email mb-3 flex flex-col gap-2">
                    <label className='capitalize font-[400] text-textColorDark text-lg' htmlFor="email">email</label>
                    <input id='email' className='sm:w-full w-[280px] px-2 py-3 bg-transparent border-[1px] border-slate-300 focus:outline-primaryColor focus:outline-4 rounded-lg' type="text" placeholder='your email ....' />
                </div>
                <div className="message mb-3 flex flex-col gap-2">
                    <label  className='capitalize font-[400] text-textColorDark text-lg' htmlFor="message">message</label>
                    <textarea id='message' className='sm:w-full w-[280px] px-2 py-3 bg-transparent border-[1px] border-slate-300 focus:outline-primaryColor focus:outline-4 rounded-lg' cols="30" rows="10" placeholder='message ...'></textarea>
                </div>
                <div className="send_btn_container">
                    <button className='flex gap-2 items-center justify-center bg-primaryColor rounded-lg px-5 py-3 font-[500] tracking-wide text-[17px] text-slate-50 transition-all duration-300 hover:shadow-lg'>
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