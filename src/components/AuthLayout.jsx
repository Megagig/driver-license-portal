import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from '../hooks/useAuth';

const RequireAuth = () => {
    const { pathname } = useLocation();
    const { auth } = useAuth();

    return auth?.user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ requestedUrl: pathname }} replace={true} />
    );
};

export default RequireAuth;
