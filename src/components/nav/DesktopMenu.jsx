import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDownButton from "../DropDownButton";
import DropDownMenu from "../DropdownMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import { MdMenu } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import SideMenu from "../SideMenu";

// import useAuth from "../hooks/useAuth";
// import { dropdownData } from "./utils/data";

const DesktopMenu = ({
    solutionsState,
    realTimeState,
    servicesState,
    dropdownData,
    auth,
    setAuth,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [popup, setPopup] = useState(false);
    const { solutions, services, realTimeUpdate } = dropdownData;
    const { isSolutionsOpen, setIsSolutionsOpen } = solutionsState;
    const { isServicesOpen, setIsServicesOpen } = servicesState;
    const { isRealTimeOpen, setIsRealTimeOpen } = realTimeState;

    const toggleDrawer = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex justify-between gap-4 items-center px-4 w-full max-w-[1280px] mx-auto">
            <Logo />

            <div className="hidden lg:flex items-center gap-10">
                <Link
                    to={!auth ? "/" : "/dashboard"}
                    className="text-white py-[2px] hover:border-b-2 border-white transition-colors"
                >
                    {auth.user ? "Dashboard" : "Home"}
                </Link>

                {auth?.user && (
                    <div
                        className="relative py-4"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                        <DropDownButton
                            isOpen={isSolutionsOpen}
                            isMobile={false}
                            title="Solutions"
                        />

                        {isSolutionsOpen && (
                            <DropDownMenu menuArray={solutions} />
                        )}
                    </div>
                )}

                <Link
                    to="/verify-license"
                    className="text-white py-[2px] hover:border-b-2 border-white transition-colors whitespace-nowrap"
                >
                    Verify License
                </Link>

                <div
                    className="relative py-4"
                    onMouseEnter={() => setIsRealTimeOpen(true)}
                    onMouseLeave={() => setIsRealTimeOpen(false)}
                >
                    <DropDownButton
                        isOpen={isRealTimeOpen}
                        isMobile={false}
                        title="Real Time Updates"
                    />

                    {isRealTimeOpen && (
                        <DropDownMenu menuArray={realTimeUpdate} />
                    )}
                </div>

                <div
                    className="relative py-4"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                >
                    <DropDownButton
                        isOpen={isServicesOpen}
                        isMobile={false}
                        title="Services"
                    />

                    {isServicesOpen && <DropDownMenu menuArray={services} />}
                </div>

                <Link
                    to="/faq"
                    className="text-white py-[2px] hover:border-b-2 border-white transition-colors"
                >
                    FAQ
                </Link>
            </div>

            {auth.user && (
                <div
                    onClick={() => {
                        setPopup(!popup);
                    }}
                    className="ml-auto lg:ml-0"
                >
                    {!auth.user ? (
                        <FaUserAlt className="text-3xl p-1 text-white cursor-pointer border border-white hover:border-2 rounded-full" />
                    ) : (
                        <img
                            className="h-14 rounded-full"
                            src={auth.user?.image}
                            alt=""
                        />
                    )}
                </div>
            )}

            {auth.user && popup && (
                <SideMenu
                    closeFunc={() => {
                        setPopup(false);
                    }}
                />
            )}

            <div className="lg:hidden">
                <button
                    className="text-3xl text-white"
                    onClick={toggleDrawer}
                    aria-label="Toggle menu"
                >
                    {<MdMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <MobileMenu
                    menuState={{ isMenuOpen, setIsMenuOpen }}
                    solutionsState={{ isSolutionsOpen, setIsSolutionsOpen }}
                    servicesState={{ isServicesOpen, setIsServicesOpen }}
                    realTimeState={{ isRealTimeOpen, setIsRealTimeOpen }}
                    dropdownData={dropdownData}
                    setAuth={setAuth}
                    auth={auth}
                />
            )}
        </div>
    );
};

export default DesktopMenu;
