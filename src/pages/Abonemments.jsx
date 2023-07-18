import React from "react";
import { AiOutlineAppstore, AiOutlineBorderlessTable, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { BiMenuAltRight, BiTime } from "react-icons/bi";
import { BsSun, BsThreeDots } from "react-icons/bs";
import TableCondidats from "../components/TableCondidats";
import TableAbonemments from "../components/TableAbonemments";

const Abonemments = () => {
  return (
    <div className="p-4">
    <h3 className="title">Les abonemments</h3>

    <nav className="nav_top_table">
        <div className="left_nav">
          <div className="right_navbar">
            <div className="w-1/2 text-left">
              <nav aria-label="breadcrumb" className="w-max">
                <ol className="flex w-full flex-wrap items-center rounded-md  py-2 px-4">
                  <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal antialiased transition-colors duration-300">
                    <a className="opacity-60 icon_nav" href="#">
                      {/* <MdDarkMode style={{ fontSize: "20px" }} /> */}
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
          <li className="flex cursor-pointer items-center font-sans text-sm font-normal   transition-colors duration-300 ">
            {/* search */}
            <span className="opacity-60 icon_nav parent_search w-100-search" href="#">
              <AiOutlineSearch className="icon_search" />
              <input type="search" className="search" />
            </span>

          </li>
        </div>
      </nav>

    <TableAbonemments/>


  </div>
  );
}

export default Abonemments;
