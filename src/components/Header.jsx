import React from "react";
import logo from "../assets/logo.svg";
import {BsFillMoonStarsFill ,BsFillSunFill} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"
const Header = ({handleChangeMode}) => {
  return (
    <header className="w-full lg:h-20 leading-[80px] fixed top-0 left-0 z-10 flex items-center bg-slate-50 dark:bg-slate-800">
        <nav className="container flex mx-auto justify-between items-center">
          {/* ============ LOGO { ========== */}
          <div className="logo_box flex items-center">
            <img src={logo} className="w-[50px] h-[40px]" alt="logo" />
            <div className="text-logo text-lg font-semibold text-textColorDark dark:text-slate-300">
                Abderrahim
            </div>
          </div>
          {/* ============ LOGO } ========== */}
          {/* ========== Navigation Menu { ======== */}
          <div className="navigation_menu hidden md:block">
           <ul className="navigation_menu_list flex gap-5">
            <li><a className="capitalize hover:font-semibold hover:text-primaryColor text-sm lg:text-[16px] dark:text-slate-300 text-textColorDark font-medium tracking-wide" href="#introduction">home</a></li>
            <li><a className="capitalize hover:font-semibold hover:text-primaryColor text-sm lg:text-[16px] dark:text-slate-300 text-textColorDark font-medium tracking-wide" href="#about">about</a></li>
            <li><a className="capitalize hover:font-semibold hover:text-primaryColor text-sm lg:text-[16px] dark:text-slate-300 text-textColorDark font-medium tracking-wide" href="#skills">skills</a></li>
            <li><a className="capitalize hover:font-semibold hover:text-primaryColor text-sm lg:text-[16px] dark:text-slate-300 text-textColorDark font-medium tracking-wide" href="#services">services</a></li>
            <li><a className="capitalize hover:font-semibold hover:text-primaryColor text-sm lg:text-[16px] dark:text-slate-300 text-textColorDark font-medium tracking-wide" href="#projects">projects</a></li>
            <li><a className="capitalize hover:font-semibold hover:text-primaryColor text-sm lg:text-[16px] dark:text-slate-300 text-textColorDark font-medium tracking-wide" href="#contact">contact us</a></li>
           </ul>
          </div>
          {/* ========== Navigation Menu } ======== */}
          {/* =========== right Dark and Light Mode { */}
          <div className="right-menu flex gap-2 items-center">
            <div className="modes">
           <div className="dark_light_mode_box">
             <div className="dark-mode text-textColorDark text-xl cursor-pointer dark:hidden" onClick={handleChangeMode}>
                <BsFillMoonStarsFill/>
             </div>
             <div className="dark-mode text-yellow-500 text-xl cursor-pointer hidden dark:block" onClick={handleChangeMode}>
                 <BsFillSunFill/>
             </div>
           </div>
            </div>
            <div className="text-textColorDark cursor-pointer md:hidden text-xl">
               <AiOutlineMenu/>
            </div>
          </div>
          {/* =========== right  Dark and Light Mode } */}
        </nav>
    </header>
  );
};

export default Header;
