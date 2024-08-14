import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminAuthLayout = () => {
    const { pathname } = useLocation();
    const { adminAuth } = useAuth() || JSON.parse(sessionStorage.getItem("adminAuth"));

    return adminAuth?.admin ? (
        <Outlet />
    ) : (
        <Navigate to="/admin" state={{ requestedUrl: pathname, message: 'Please login to continue!' }} replace={true} />
    );
};

export default AdminAuthLayout;
