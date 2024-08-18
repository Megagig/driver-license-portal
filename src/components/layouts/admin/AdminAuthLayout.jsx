import { Navigate, Outlet, useLocation, useNavigation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ReusableModal from "../../ReusableModal";
import Spinner from "../../Spinner";
import SideNav from "./navigation/SideNav";
import { Link, NavLink } from "react-router-dom"
import coatofarm from "../../../assets/coatOfArm.png"
import logo from "../../../assets/Logo1.svg"
import NavBar from "./navigation/NavBar";
import { useState } from "react";




const AdminAuthLayout = () => {
    const { pathname } = useLocation();
    const { state } = useNavigation();
    const isLoading = state === "loading";
    const [isSideNavOpen, setIsSideNavOpen] = useState()

    const [pageName, setPageName] = useState('')

    const { adminAuth } = useAuth();

    return adminAuth?.admin ? (
        <div className="grid lg:grid-cols-[252px_1fr] w-screen">
            <div className="h-screen left-[-100%] lg:left-0 bg-white grid z-10 absolute lg:relative  md:grid-rows-[100px_1fr] pb-4">
                <div className="flex items-center gap-2 p-[32px]" >
                    <img className="h-[42px]" src={coatofarm} alt="coatOfArm.png" />
                    <img className="h-[30px]" src={logo} alt="" />

                </div>
                <aside className=" h-[full] overflow-y-auto w-[252px] md:inline border-r border-[#E6EFF5]">
                    <SideNav />
                </aside>
            </div>


            <div className="grid  h-screen grid-rows-[70px_1fr] md:grid-rows-[100px_1fr]">
                <header className=" border-l border-b h-[100px] border-[#E6EFF5]">
                    <NavBar setIsSideNavOpen={setIsSideNavOpen} pageName={pageName} />
                </header>
                <main className="bg-[#F5F7FA] h-[full]  overflow-y-auto flex-1 p-4 md:px-10 md:py-8">

                    <Outlet context={{ pageName, setPageName }} />

                    <ReusableModal isOpen={isLoading}>
                        <Spinner />
                    </ReusableModal>
                </main>
            </div>
        </div>
    ) : (
        <Navigate
            to="/admin"
            state={{
                requestedUrl: pathname,
                message: "Please login to continue!",
            }}
            replace={true}
        />
    );
};

export default AdminAuthLayout;
