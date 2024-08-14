import { Navigate, Outlet, useLocation, useNavigation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ReusableModal from "../../ReusableModal";
import Spinner from "../../Spinner";

const AdminAuthLayout = () => {
    const { pathname } = useLocation();
    const { state } = useNavigation();
    const isLoading = state === "loading";
    const { adminAuth } =
        useAuth() || JSON.parse(sessionStorage.getItem("adminAuth"));

    return adminAuth?.admin ? (
        <div className="flex w-screen min-h-screen">
            <aside className="w-64 hidden md:inline border-r border-[#E6EFF5]">
                Side Nav
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="py-8 px-10 border-l border-b border-[#E6EFF5]">
                    Navbar
                </header>
                <main className="bg-[#F5F7FA] flex-1 px-10 py-8">
                    <Outlet />
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
