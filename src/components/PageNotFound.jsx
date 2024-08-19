import React from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PageNotFound = () => {
    const { pathname } = useLocation();
    const { auth, adminAuth } = useAuth();
    let homeUrl = ""

    if (pathname.includes("admin")) {
        homeUrl = adminAuth.admin ? "/admin/dashboard" : "/admin"
    } else {
        homeUrl = auth.user ? "/dashboard" : "/"
    }

    return (
        <section className="flex px-10 flex-col justify-center items-center gap-6 min-h-[83vh] w-full max-w-[500px] mx-auto">
            <h1 className="text-4xl font-bold text-center">
                404 | Page Not Found
            </h1>
            <p className="text-lg font-medium text-center">
                Sorry, the page you were looking for does not exist.
            </p>
            <Link
                to={homeUrl}
                className="w-full py-3 bg-custom-green hover:bg-green-800 rounded-md font-bold text-lg text-center text-white"
            >
                Return Home
            </Link>
        </section>
    );
};

export default PageNotFound;
