import React from "react";
import {
  AiOutlineBorderlessTable,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import {  BsThreeDots } from "react-icons/bs";

const NavTopTable = () => {
  return (
    <div>
      <nav className="nav_top_table">
        <div className="left_nav">
          <div className="right_navbar">
            <div className="w-1/2 text-left">
              <nav aria-label="breadcrumb" className="w-max">
                  {/* ====== link top navbar====== */}
                <ol className="flex w-full flex-wrap items-center rounded-md  py-2 px-4">
                  <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal antialiased transition-colors duration-300">
                    <a className="opacity-60 icon_nav" href="#">
                      <AiOutlinePlus style={{ fontSize: "20px" }} />
                    </a>

                    <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                  </li>

                  <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal antialiased transition-colors duration-300">
                    <a className="opacity-60 icon_nav" href="#">
                      <BiMenuAltRight style={{ fontSize: "20px" }} />
                    </a>
                    <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                  </li>

                  <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal antialiased transition-colors duration-300">
                    <a className="opacity-60 icon_nav" href="#">
                      <AiOutlineBorderlessTable style={{ fontSize: "20px" }} />
                    </a>
                    <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                  </li>

                  <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal antialiased transition-colors duration-300">
                    <a className="opacity-60 icon_nav" href="#">
                      <BsThreeDots style={{ fontSize: "20px" }} />
                    </a>
                    <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="right_nav">
           {/* ====== search top navbar====== */}
          <li className="flex cursor-pointer items-center font-sans text-sm font-normal   transition-colors duration-300 ">
            <span
              className="opacity-60 icon_nav parent_search w-100-search"
              href="#"
            >
              <AiOutlineSearch className="icon_search" />
              <input type="search" className="search" />
            </span>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavTopTable;
