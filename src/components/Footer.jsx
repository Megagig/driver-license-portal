import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import logo from "../assets/Logo2.svg"
import angleright from "../assets/angle-right.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {


    return (
        <footer className="print:hidden">
            <div className="flex flex-wrap lg:flex-row flex-col gap-10 md:gap-14 justify-between px-4 py-8 md:px-10 md:pt-16 md:pb-10 bg-black">

                <div className="grid gap-8 content-start ">
                    <img className="h-12 md:h-14" src={logo} alt="" />
                    <p className="text-white text-sm leading-[1.8] md:max-w-[20rem]">Fast, secure, and efficient licensing solutions at your fingertips.  <br /> For customer support, please reach out to <span className="text-green-500">support@example.com.</span> </p>

                </div>

                <div>
                    <p className="font-bold mb-4 text-green-600">Quick Links</p>
                    <ul className="grid gap-2">
                        <li>
                            <Link className="flex hover:text-green-600 text-gray-50 gap-2">
                                <img className="w-2 " src={angleright} alt="" />{" "}
                                New Drivers License
                            </Link>
                        </li>

                        <li>
                            <Link className="flex hover:text-green-600 text-gray-50 gap-2">
                                <img className="w-2" src={angleright} /> Drivers
                                License Renewal
                            </Link>
                        </li>
                        <li>
                            <Link className="flex hover:text-green-600 text-gray-100 gap-2">
                                <img className="w-2" src={angleright} /> FAQ
                            </Link>
                        </li>
                        <li>
                            <Link className="flex hover:text-green-600 text-gray-200 gap-2">
                                <img className="w-2" src={angleright} /> Contact
                            </Link>
                        </li>
                        <li>
                            <Link className="flex hover:text-green-600 text-gray-100 gap-2">
                                <img className="w-2" src={angleright} />{" "}
                                Aknowledgement Slip
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold mb-4 text-green-600">Other Links</p>
                    <ul className="grid gap-2">


                        <li>
                            <Link className="flex hover:text-green-600 text-gray-200 gap-2">
                                <img className="w-2" src={angleright} /> Forms
                            </Link>
                        </li>
                        <li>
                            <Link className="flex hover:text-green-600 text-gray-50 gap-2">
                                <img className="w-2" src={angleright} />{" "}
                                Condition of use
                            </Link>
                        </li>
                        <li>
                            <Link className="flex hover:text-green-600 text-gray-100 gap-2">
                                <img className="w-2" src={angleright} /> News &
                                Media
                            </Link>
                        </li>
                        <li>
                            <Link className="flex  hover:text-green-600 text-gray-100 gap-2">
                                <img className="w-2" src={angleright} /> Privacy
                                and Security Statement
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="font-bold mb-4 text-green-600">Socials</p>

                    <ul className="flex items-center text-3xl text-white gap-4">
                        <li className="hover:text-green-600 cursor-pointer">
                            <FaFacebook />
                        </li>
                        <li className="hover:text-green-600 cursor-pointer">
                            <FaInstagramSquare />
                        </li>
                        <li className="hover:text-green-600 cursor-pointer">
                            <FaTwitter />
                        </li>
                        <li className="hover:text-green-600 cursor-pointer">
                            <IoLogoYoutube />
                        </li>
                    </ul>
                </div>

            </div>
            <div className="text-center text-sm h-10 border-t grid content-center bg-black text-white">
                All rights reserved &copy; DANNON GROUP
            </div>
        </footer>
    );
};

export default Footer;
