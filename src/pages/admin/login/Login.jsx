import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../../../assets/admin/auth-bg.svg";

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;

        setLoginData((prev) => ({
            ...prev,
            [name]: val,
        }));
    };

    const login = () => {
        const adminAuth = {
            admin: { id: 1, username: "acme", email: "acme@gmail.com" },
        };

        sessionStorage.setItem("adminAuth", JSON.stringify(adminAuth));
    };

    return (
        <div
            className={`h-screen w-screen flex px-4 justify-center items-center gap-6 bg-[#4880FF]`}
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-full text-lg max-w-[600px] px-10 py-10 text-[#202224] bg-white rounded-lg space-y-8">
                <div className="text-center space-y-3">
                    <h1 className="text-3xl font-bold font-nunito">
                        Login to Account
                    </h1>
                    <p className=" font-nunito">
                        Please enter your email and password to continue
                    </p>
                </div>

                <form action="" className="space-y-8">
                    <div className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-nunito">
                                Email address
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email address"
                                className="px-6 py-3 rounded-lg font-nunito bg-[#F1F4F9] text-[#A6A6A6] focus:outline-none"
                                value={loginData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <label
                                    htmlFor="password"
                                    className="font-nunito"
                                >
                                    Password
                                </label>
                                <Link
                                    to="/admin/forgot-password"
                                    className="font-nunito"
                                >
                                    Forgot Password
                                </Link>
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="tracking-widest font-nunito text-[#A6A6A6] px-6 py-3 rounded-lg focus:outline-none bg-[#F1F4F9]"
                                value={loginData.password}
                                onChange={handleChange}
                            />

                            <div className="mt-1">
                                <input
                                    type="checkbox"
                                    name="remember-password"
                                    id="remember-password"
                                    className="mr-2"
                                />
                                <label
                                    htmlFor="remember-password"
                                    className="font-nunito"
                                >
                                    Remember Password
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button className="bg-[#4880FF] hover:bg-[#5A8CFF] font-medium font-nunito text-white text-center px-2 py-3 rounded-lg">
                            Sign In
                        </button>
                        <p className="text-center font-nunito">
                            Don't have an account?{" "}
                            <Link
                                to="/admin/signup"
                                className="text-[#5A8CFF] font-medium underline underline-offset-2"
                            >
                                Create Account
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
