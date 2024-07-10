import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthLayout = () => {
    const { pathname } = useLocation();
    const { auth } = useAuth() || JSON.parse(sessionStorage.getItem('auth'));

    console.log(auth);

    return auth?.user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ requestedUrl: pathname }} replace={true} />
    );
};

export default AuthLayout;
