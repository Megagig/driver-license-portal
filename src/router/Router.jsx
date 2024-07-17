import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Root from "../components/Root";
import ApplicationForm from "../pages/applications/ApplicationForm";
import ApplicationHome from "../pages/applications/ApplicationHome";
import Appointment from "../pages/appointment/Appointment";
import LoginPage from "../pages/auth/login/LoginPage";
import SignupPage from "../pages/auth/signup/SignupPage";
import Faq from "../pages/faq/Faq";
import HomePage from "../pages/home/HomePage";
import Profile from "../pages/profile/Profile";
import Support from "../pages/support/Support";
import Verify from "../pages/verification/Verify";
import { loader as appointmentLoader } from "../pages/appointment/Appointment";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "faq",
                element: <Faq />,
            },
            {
                path: "support",
                element: <Support />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "signup",
                element: <SignupPage />,
            },
            {
                path: "verify-license",
                element: <Verify />
            },
            {
                path: "capture-centers",
                element: <div>Capture Centers Page</div>,
            },
            {
                path: "driving-schools",
                element: <div>Driving Schools Page</div>,
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <div>User Dashboard</div>,
                    },
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                    {
                        path: "application",
                        element: <ApplicationHome />,
                    },
                    {
                        path: "application/form",
                        element: <ApplicationForm />,
                    },
                    {
                        path: "appointment",
                        element: <Appointment />,
                        loader: appointmentLoader
                    },
                ]
            },
        ],
    },
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default Router;