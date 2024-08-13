import { Link, useNavigate } from "react-router-dom";
import LinkButton from "../LinkButton";
import DropDownButton from "../DropDownButton";
import DropDownMenu from "../DropdownMenu";
import Logo from "./Logo";
import { MdClose } from "react-icons/md";

const MobileMenu = ({
    menuState,
    solutionsState,
    realTimeState,
    servicesState,
    dropdownData,
    setAuth,
    auth,
}) => {
    const navigate = useNavigate();
    const { isMenuOpen, setIsMenuOpen } = menuState;
    const { solutions, services, realTimeUpdate } = dropdownData;
    const { isSolutionsOpen, setIsSolutionsOpen } = solutionsState;
    const { isServicesOpen, setIsServicesOpen } = servicesState;
    const { isRealTimeOpen, setIsRealTimeOpen } = realTimeState;

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    const logOut = () => {
        sessionStorage.removeItem("auth");
        setAuth({});
        navigate("/");
        closeMobileMenu();
    };

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 lg:hidden">
                <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
                <div className="overflow-y-auto bg-white w-full h-screen z-50 absolute top-0 right-0">
                    <div className="flex flex-col gap-6">
                        {/* Mobile Menu Header */}
                        <div className="flex justify-between items-center gap-2 p-4 bg-custom-green relative">
                            <Logo />

                            <button
                                className=""
                                onClick={closeMobileMenu}
                            >
                                <MdClose className="text-2xl text-white" />
                            </button>
                        </div>

                        <div className="w-full lg:hidden flex flex-col px-6 py-4 divide-y divide-solid bg-white divide-neutral-300">
                            <Link
                                to="/"
                                className="text-grey px-6 py-4  transition-colors"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>

                            {auth?.user && (
                                <Link
                                    to="/dashboard"
                                    className="text-grey px-6 py-4  transition-colors"
                                    onClick={closeMobileMenu}
                                >
                                    Dashboard
                                </Link>
                            )}

                            {/* {auth?.user && (
                                <Link
                                    to="/profile"
                                    className="text-grey px-6 py-4  transition-colors"
                                    onClick={closeMobileMenu}
                                >
                                    Profile
                                </Link>
                            )} */}

                            {auth?.user && (
                                <div
                                    className="relative px-6 py-4 "
                                    onClick={() =>
                                        setIsSolutionsOpen(!isSolutionsOpen)
                                    }
                                >
                                    <DropDownButton
                                        isOpen={isSolutionsOpen}
                                        isMobile={true}
                                        title="Solutions"
                                    />
                                    {isSolutionsOpen && (
                                        <DropDownMenu
                                            menuArray={solutions}
                                            closeMobileMenu={closeMobileMenu}
                                        />
                                    )}
                                </div>
                            )}

                            <Link
                                to="/verify-license"
                                className="text-grey px-6 py-4 transition-colors"
                                onClick={closeMobileMenu}
                            >
                                Verify License
                            </Link>
                            
                            <div
                                className="relative px-6 py-4"
                                onClick={() => setIsRealTimeOpen(!isRealTimeOpen)}
                            >
                                <DropDownButton
                                    isOpen={isRealTimeOpen}
                                    isMobile={true}
                                    title="Real Time Update"
                                />

                                {isRealTimeOpen && (
                                    <DropDownMenu
                                        menuArray={realTimeUpdate}
                                        closeMobileMenu={closeMobileMenu}
                                    />
                                )}
                            </div>
                            
                            <div
                                className="relative px-6 py-4"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                <DropDownButton
                                    isOpen={isServicesOpen}
                                    isMobile={true}
                                    title="Services"
                                />

                                {isServicesOpen && (
                                    <DropDownMenu
                                        menuArray={services}
                                        closeMobileMenu={closeMobileMenu}
                                    />
                                )}
                            </div>

                            <Link
                                to="/faq"
                                className="text-grey px-6 py-4 transition-colors"
                                onClick={closeMobileMenu}
                            >
                                FAQ
                            </Link>

                            {!auth?.user && (
                                <div className="flex flex-col sm:flex-row sm:justify-end gap-4 w-full px-6 py-6  sm:gap-6">
                                    <LinkButton
                                        buttonText="Login"
                                        linkTo="/login"
                                        classAttr="text-white hover:bg-green-600 hover:border-green-600 px-4 py-3 text-center bg-transparent border border-white font-medium tracking-widest rounded-lg"
                                        onClick={closeMobileMenu}
                                    />

                                    <LinkButton
                                        buttonText="Sign Up"
                                        linkTo="/signup"
                                        classAttr="bg-custom-green hover:bg-green-600 px-4 py-3 text-center text-white font-medium tracking-widest rounded-lg"
                                        onClick={closeMobileMenu}
                                    />
                                </div>
                            )}

                            {auth?.user && (
                                <div className="pt-6">
                                    <button
                                        onClick={logOut}
                                        className="bg-red-800 w-full text-lg text-white font-medium px-6 py-3 rounded-md"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
