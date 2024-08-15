import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";
import christina from "../../../../assets/admin/christina.png"
import coatofarm from "../../../../assets/coatOfArm.png"
import logo from "../../../../assets/Logo1.svg"
import { useState } from "react";


const NavBar = ({ setIsSideNavOpen, pageName }) => {



    return (
        <div className="flex p-4 md:px-8  items-center justify-between">
            <div className="text-3xl  gap-3  flex items-center md:hidden">
                <HiMenuAlt1 onClick={setIsSideNavOpen(true)} className="text-green-700" />
                <div className="flex items-center gap-2 lg:p-[32px]" >
                    <img className="h-6 lg:h-[42px]" src={coatofarm} alt="coatOfArm.png" />
                    <img className="h-6 landscape::h-[30px]" src={logo} alt="" />

                </div>
            </div>

            <div className="flex gap-2">

                <h1 className="text-[#343C6A] text-2xl hidden md:block whitespace-nowrap font-semibold">{pageName || "Page Name"}</h1>

            </div>

            <div className="flex  items-center gap-2 md:gap-6">
                <div className="search-Container hidden md:block relative">
                    <input className="bg-[#F5F7FA] pl-12 p-3 rounded-full placeholder:text-[#8BA3CB]" placeholder="Search for Something" type="search" />
                    <IoMdSearch className="text-[#718EBF] text-2xl absolute top-[50%] -translate-y-1/2 left-3.5" />
                </div>
                <div className="bg-[#F5F7FA] text-[#718EBF] rounded-full text-2xl h-10 w-10 hidden md:grid place-content-center">
                    <IoSettingsOutline />
                </div>
                <div className="bg-[#F5F7FA] text-[#FE5C73] rounded-full text-2xl md:text-3xl h-10 w-10 grid place-content-center">
                    <IoIosNotificationsOutline />

                </div>



                <div>
                    <img className="rounded-full  w-10 h-10 md:w-14 md:h-14" src={christina} alt="" />
                </div>




            </div>

        </div>
    )
}

export default NavBar