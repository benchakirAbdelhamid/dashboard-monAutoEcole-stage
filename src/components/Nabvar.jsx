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
          <nav aria-label="breadcrumb" class="w-max">
            <ol class="flex w-full flex-wrap items-center rounded-md  py-2 px-4">
              <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                <a class="opacity-60" href="#">
                  <BiCalendarStar style={{ fontSize: "20px" }} />
                </a>

                <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
              </li>
              <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                <a class="opacity-60 " href="#">
                  <AiOutlineStar style={{ fontSize: "20px" }} />
                </a>
                <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
              </li>
              <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                <a class="opacity-60" href="#">
                  <span>Dashboards</span>
                </a>
                <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
                  /
                </span>
              </li>
              <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                <a
                  class="font-medium text-blue-gray-900 transition-colors hover:text-red-600"
                  href="#"
                >
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
            <ol class=" nav_right_icon flex w-full  rounded-md  py-2 px-4">
             
             <span>
               <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                 {/* search */}
                 <span class="opacity-60 parent_search" href="#">
                   <AiOutlineSearch className="icon_search" />
                   <input type="search" className="search" />
                 </span>
              
                 <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
               </li>
             </span>

              <div className="flex">
                <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                  <a class="opacity-60" href="#">
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
                
                  <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                </li>
                
                <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                  <a class="opacity-60 " href="#">
                    <BiTime style={{ fontSize: "20px" }} />
                  </a>
                  <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                </li>
                
                {/* notification */}
                <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                  <DrawerNotification />
                  <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                </li>
                
                <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                  <a class="opacity-60 " href="#">
                    <AiOutlineAppstore style={{ fontSize: "20px" }} />
                  </a>
                  <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
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
