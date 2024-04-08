import React, { useEffect, useRef, useState } from "react";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import {BsFillMoonStarsFill ,BsFillSunFill} from "react-icons/bs"
import { MdOutlineClose } from "react-icons/md";
import {AiOutlineMenu} from "react-icons/ai"
const Header = ({handleChangeMode}) => {
  const [navShow , setNavShow] = useState(false);
  const header = useRef(null);
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 100) {
        // setColorchange(true);
        header.current?.classList.add("active");
      }else{
        header.current?.classList.remove("active");
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  },[]);
  return (
    <header ref={header} className="w-full h-20 leading-[80px] fixed top-0 left-0 z-10 flex items-center bg-white dark:bg-slate-950">
        <nav className="container flex mx-auto justify-between items-center">
          {/* ============ LOGO { ========== */}
          <div className="logo_box flex items-center">
            {/* <img src={logo} className="w-[50px] h-[40px]" alt="logo" /> */}
            <div className="text-logo flex items-center gap-1 text-lg font-semibold text-primaryColor dark:text-slate-300">
             <HiOutlineCodeBracketSquare className="text-3xl"/>
                Abderrahim
            </div>
          </div>
          {/* ============ LOGO } ========== */}
          {/* ========== Navigation Menu { ======== */}
          <div className={`navigation_menu z-20 ${navShow ? 'block border-l-[1px] border-slate-300' : 'hidden'} absolute bg-primaryColor w-[220px] h-screen top-0 right-0 md:block md:static md:w-auto md:h-auto md:bg-transparent`}>
           <button onClick={()=>setNavShow(false)} className="block md:hidden absolute top-[20px] right-[20px] text-3xl text-white">
           <MdOutlineClose/>
           </button>
           <ul className="navigation_menu_list mt-[50px] md:mt-0 flex md:flex-row flex-col gap-1">
            <a className="capitalize border-b-[1px] border-slate-500 md:border-0 px-3 py-4 hover:font-semibold md:hover:text-primaryColor text-sm lg:text-[16px] dark:text-slate-300 text-white md:text-textColorDark font-medium tracking-wide" href="#introduction">home</a>
            <a className="capitalize border-b-[1px] border-slate-500 md:border-0 px-3 py-4 hover:font-semibold md:hover:text-primaryColor text-sm lg:text-[16px] dark:text-slate-300 text-white md:text-textColorDark font-medium tracking-wide" href="#eduction">Education</a>
            <a className="capitalize border-b-[1px] border-slate-500 md:border-0 px-3 py-4 hover:font-semibold md:hover:text-primaryColor text-sm lg:text-[16px] dark:text-slate-300 text-white md:text-textColorDark font-medium tracking-wide" href="#skills">skills</a>
            <a className="capitalize border-b-[1px] border-slate-500 md:border-0 px-3 py-4 hover:font-semibold md:hover:text-primaryColor text-sm lg:text-[16px] dark:text-slate-300 text-white md:text-textColorDark font-medium tracking-wide" href="#projects">projects</a>
            <a className="capitalize border-b-[1px] border-slate-500 md:border-0 px-3 py-4 hover:font-semibold md:hover:text-primaryColor text-sm lg:text-[16px] dark:text-slate-300 text-white md:text-textColorDark font-medium tracking-wide" href="#contact">contact us</a>
           </ul>
          </div>
          {/* ========== Navigation Menu } ======== */}
          {/* =========== right Dark and Light Mode { */}
          <div className="right-menu flex gap-[35px] items-center">
            <div className="modes relative z-0">
          <div className="dark_light_mode_box">
             <div className="dark-mode text-textColorDark absolute top-0 left-0 -translate-y-[50%] text-2xl transition-all duration-300 cursor-pointer transform dark:-translate-y-[200px]" onClick={handleChangeMode}>
                <BsFillMoonStarsFill/>
             </div>
             <div className="light-mode text-yellow-500 absolute top-0 left-0 text-2xl transition-all duration-300 cursor-pointer transform -translate-y-[200px] dark:-translate-y-[50%]" onClick={handleChangeMode}>
                 <BsFillSunFill/>
             </div>
           </div>
          </div>
            <div onClick={()=>setNavShow(true)} className="text-textColorDark cursor-pointer md:hidden text-2xl">
               <AiOutlineMenu/>
            </div>
          </div>
          {/* =========== right  Dark and Light Mode } */}
        </nav>
    </header>
  );
};

export default Header;