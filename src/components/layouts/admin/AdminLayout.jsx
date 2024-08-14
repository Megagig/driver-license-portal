import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import ReusableModal from "../../ReusableModal";
import Spinner from "../../Spinner";

const AdminLayout = () => {
    const { state } = useNavigation();
    const isLoading = state === "loading";

    return (
        <div className="flex w-screen min-h-screen">
            <aside className="w-64 hidden md:inline">Side Nav</aside>

            <div className="flex-1 flex flex-col">
                <header className="py-8 px-10">Navbar</header>
                <main className="bg-[#F5F7FA] flex-1">
                    <Outlet />
                    {/* <ReusableModal isOpen={isLoading}>
                        <Spinner />
                    </ReusableModal> */}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
