import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { FiChevronDown, FiChevronUp, FiPlus, FiMinus } from "react-icons/fi";

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDrawer = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#3d4249]">
            <div className="container mx-auto flex justify-center items-center">
                <div className="hidden md:flex">
                    <Link
                        to="/"
                        className="text-white px-6 py-4 hover:bg-green-700 transition-colors"
                    >
                        Home
                    </Link>
                    <div
                        className="relative px-6 py-4 hover:bg-green-700"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <div className="flex items-center gap-2 text-white">
                            <span className="text-white transition-colors">
                                Applications
                            </span>
                            <span className="">
                                {isDropdownOpen ? (
                                    <FiChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </span>
                        </div>

                        {isDropdownOpen && (
                            <div className="flex flex-col absolute left-0 mt-4 min-w-56 bg-[#3d4249] text-white shadow-lg divide-y divide-solid divide-neutral-600">
                                <Link
                                    to="/new"
                                    className="hover:bg-green-700 py-2 px-6"
                                >
                                    New Application
                                </Link>
                                <Link
                                    to="/renewal"
                                    className="hover:bg-green-700 py-2 px-6"
                                >
                                    Renewal
                                </Link>
                                <Link
                                    to="/re-issue"
                                    className="hover:bg-green-700 py-2 px-6"
                                >
                                    Re-Issue
                                </Link>
                            </div>
                        )}
                    </div>
                    <div
                        className="relative px-6 py-4 hover:bg-green-700"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <div className="flex items-center gap-2 text-white">
                            <span className="transition-colors">Services</span>
                            <span className="">
                                {isServicesOpen ? (
                                    <FiChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </span>
                        </div>

                        {isServicesOpen && (
                            <div className="flex flex-col absolute left-0 mt-4 min-w-56 bg-[#3d4249] text-white shadow-lg divide-y divide-solid divide-neutral-600">
                                <Link
                                    to="/update"
                                    className="hover:bg-green-700 py-2 px-6"
                                >
                                    Update Application
                                </Link>
                                <Link
                                    to="/get-slip"
                                    className="hover:bg-green-700 py-2 px-6"
                                >
                                    Acknowledgement Slip
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link
                        to="/faq"
                        className="text-white px-6 py-4 hover:bg-green-700 transition-colors"
                    >
                        FAQ
                    </Link>
                    <Link
                        to="/support"
                        className="text-white px-6 py-4 hover:bg-green-700 transition-colors"
                    >
                        Support
                    </Link>
                    <div
                        className="relative px-6 py-4 hover:bg-green-700"
                        onMouseEnter={() => setIsContactOpen(true)}
                        onMouseLeave={() => setIsContactOpen(false)}
                    >
                        <div className="flex items-center gap-2 text-white">
                            <span className="transition-colors">Contact</span>
                            <span className="">
                                {isContactOpen ? (
                                    <FiChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </span>
                        </div>

                        {isContactOpen && (
                            <div className="flex flex-col absolute left-0 mt-4 min-w-56 bg-[#3d4249] text-white shadow-lg divide-y divide-solid divide-neutral-600">
                                <Link
                                    to="/capture-centers"
                                    className="hover:bg-green-700 py-2 px-6"
                                >
                                    Capture Centers
                                </Link>
                                <Link
                                    to="/driving-schools"
                                    className="hover:bg-green-700 py-2 px-6"
                                >
                                    Driving Schools
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex md:hidden justify-between bg-[#3d4249] px-6 py-4">
                <div className="flex flex-col items-center text-white text-sm">
                    <h3 className="">Instant</h3>
                    <h3 className="">Drivers Licence</h3>
                </div>

                <button
                    className=" text-white text-3xl"
                    onClick={toggleDrawer}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-0 right-0 z-20 h-full w-full md:hidden bg-[#3d4249]">
                    <button
                        className="absolute right-6 top-6 text-white text-3xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <MdClose />
                    </button>

                    <div className="flex flex-col px-6 py-4 mt-6 divide-y divide-solid divide-neutral-600">
                        <Link
                            to="/"
                            className="text-white px-6 py-4  transition-colors"
                        >
                            Home
                        </Link>
                        <div
                            className="relative px-6 py-4 "
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <div className="flex items-center justify-between text-white">
                                <span className="transition-colors">
                                    Applications
                                </span>
                                <span className="">
                                    {isDropdownOpen ? (
                                        <FiMinus />
                                    ) : (
                                        <FiPlus />
                                    )}
                                </span>
                            </div>

                            {isDropdownOpen && (
                                <div className="flex flex-col absolute z-30 left-0 mt-4 min-w-56 bg-[whitesmoke] text-[#3d4249] shadow-lg divide-y divide-solid divide-neutral-600">
                                    <Link to="/new" className="py-2 px-6">
                                        New Application
                                    </Link>
                                    <Link to="/renewal" className="py-2 px-6">
                                        Renewal
                                    </Link>
                                    <Link to="/re-issue" className="py-2 px-6">
                                        Re-Issue
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div
                            className="relative px-6 py-4"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                            <div className="flex items-center justify-between text-white">
                                <span className="transition-colors">
                                    Services
                                </span>
                                <span className="">
                                    {isServicesOpen ? (
                                        <FiMinus />
                                    ) : (
                                        <FiPlus />
                                    )}
                                </span>
                            </div>

                            {isServicesOpen && (
                                <div className="flex flex-col absolute z-30 left-0 mt-4 min-w-56 bg-[whitesmoke] text-[#3d4249] shadow-lg divide-y divide-solid divide-neutral-600">
                                    <Link to="/update" className="py-2 px-6">
                                        Update Application
                                    </Link>
                                    <Link to="/get-slip" className="py-2 px-6">
                                        Acknowledgement Slip
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link
                            to="/faq"
                            className="text-white px-6 py-4 transition-colors"
                        >
                            FAQ
                        </Link>
                        <Link
                            to="/support"
                            className="text-white px-6 py-4 transition-colors"
                        >
                            Support
                        </Link>
                        <div
                            className="relative px-6 py-4"
                            onClick={() => setIsContactOpen(!isContactOpen)}
                        >
                            <div className="flex items-center justify-between text-white">
                                <span className="transition-colors">
                                    Contact
                                </span>
                                <span className="">
                                    {isContactOpen ? (
                                        <FiMinus />
                                    ) : (
                                        <FiPlus />
                                    )}
                                </span>
                            </div>

                            {isContactOpen && (
                                <div className="flex flex-col absolute z-30 left-0 mt-4 min-w-56 bg-[whitesmoke] text-[#3d4249] shadow-lg divide-y divide-solid divide-neutral-600">
                                    <Link
                                        to="/capture-centers"
                                        className="py-2 px-6"
                                    >
                                        Capture Centers
                                    </Link>
                                    <Link
                                        to="/driving-schools"
                                        className="py-2 px-6"
                                    >
                                        Driving Schools
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
