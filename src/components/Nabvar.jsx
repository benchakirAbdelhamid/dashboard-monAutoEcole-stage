import React, { useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";
import { BiCalendarStar, BiTime } from "react-icons/bi";
import {
  MdDarkMode,
} from "react-icons/md";
import { BsSun } from "react-icons/bs";
import DrawerNotification from "./DrawerNotification";
import Formation from "../pages/Formations";
import SliderNotification from "./SliderNotification";

const Nabvar = () => {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const [theme, setTheme] = useState(true);

  const changeDark = () => {
    setTheme(!theme);
    document.body.className = theme ? "dark" : "";
  };

  return (
    <div className="navbar">
      <div className="left_navbar">
        <div className="w-1/2 text-left">
          <nav aria-label="breadcrumb" className="w-max">
            <ol className="flex w-full flex-wrap items-center rounded-md  py-2 px-4">
              <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal  antialiased transition-colors ">
                <a className="opacity-60 icon_nav" href="#">
                  <BiCalendarStar style={{ fontSize: "20px" }} />
                </a>

                <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
              </li>
              <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal  antialiased transition-colors ">
                <a className="opacity-60 icon_nav" href="#">
                  <AiOutlineStar style={{ fontSize: "20px" }} />
                </a>
                <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
              </li>
              <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal  antialiased transition-colors ">
                <a className="opacity-60 icon_nav" href="#">
                  <span>Dashboards</span>
                </a>
                <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
                  /
                </span>
              </li>
              <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal  antialiased transition-colors ">
                <a className="opacity-60 icon_nav link-default" href="#">
                  Default
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="right_navbar">
        <div className=" text-left">
          <nav className="" aria-label="breadcrumb" >
            <ol className=" nav_right_icon flex w-full  rounded-md  py-2 px-4">
             
             <span>
               <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 ">
                 {/* search */}
                 <span className="opacity-60 parent_search" href="#">
                   <AiOutlineSearch className="icon_search" />
                   <input type="search" className="search" />
                 </span>
              
                 <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
               </li>
             </span>

              <div className="flex">
                <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                  <a className="opacity-60 icon_nav" href="#">
                    {theme ? (
                      <MdDarkMode
                        onClick={changeDark}
                        style={{ fontSize: "20px" }}
                      />
                    ) : (
                      <BsSun onClick={changeDark} style={{ fontSize: "20px" }} />
                    )}
                    {/*  */}
                  </a>
                
                  <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal antialiased"></span>
                </li>
                
                <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normalantialiased transition-colors duration-300">
                  <a className="opacity-60 icon_nav" href="#">
                    <BiTime style={{ fontSize: "20px" }} />
                  </a>
                  <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal  antialiased"></span>
                </li>
                
                {/* notification */}
                <li className="flex icon_nav cursor-pointer items-center font-sans text-sm font-normal leading-normal  antialiased transition-colors duration-300">
                  <SliderNotification />
                  <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                </li>
                
                <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal antialiased transition-colors duration-300">
                  <a className="opacity-60 icon_nav " href="#">
                    <AiOutlineAppstore style={{ fontSize: "20px" }} />
                  </a>
                  <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                </li>
              </div> 

            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
