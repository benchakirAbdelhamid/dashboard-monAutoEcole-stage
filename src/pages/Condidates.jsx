import React from "react";
import { AiOutlineAppstore, AiOutlineBorderlessTable, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { BiMenuAltRight, BiTime } from "react-icons/bi";
import { BsSun, BsThreeDots } from "react-icons/bs";
import TableCondidats from "../components/TableCondidats";

const Condidates = () => {
  return (
    <div className="p-4">
      <h3 className="title">Les condidates</h3>

      <nav className="nav_top_table">
        <div className="left_nav">
          <div className="right_navbar">
            <div className="w-1/2 text-left">
              <nav aria-label="breadcrumb" class="w-max">
                <ol class="flex w-full flex-wrap items-center rounded-md  py-2 px-4">
                  <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                    <a class="opacity-60" href="#">
                      {/* <MdDarkMode style={{ fontSize: "20px" }} /> */}
                      <AiOutlinePlus style={{ fontSize: "20px" }} />
                    </a>

                    <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                  </li>

                  <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                    <a class="opacity-60 " href="#">
                      <BiMenuAltRight style={{ fontSize: "20px" }} />
                    </a>
                    <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                  </li>

                  <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                    <a class="opacity-60 " href="#">
                      <AiOutlineBorderlessTable style={{ fontSize: "20px" }} />
                    </a>
                    <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                  </li>

                  <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-red-600">
                    <a class="opacity-60 " href="#">
                      <BsThreeDots style={{ fontSize: "20px" }} />
                    </a>
                    <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased"></span>
                  </li>

                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="right_nav">
          <li class="flex cursor-pointer items-center font-sans text-sm font-normal  text-blue-gray-900  transition-colors duration-300 hover:text-red-600">
            {/* search */}
            <span class="opacity-60 parent_search w-100-search" href="#">
              <AiOutlineSearch className="icon_search" />
              <input type="search" className="search" />
            </span>

          </li>
        </div>
      </nav>

      <TableCondidats/>


    </div>
  );
};

export default Condidates;
