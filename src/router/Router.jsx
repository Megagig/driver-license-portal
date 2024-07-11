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
import Contact from "../pages/contact/Contact";
import Faq from "../pages/faq/Faq";
import HomePage from "../pages/home/HomePage";
import Profile from "../pages/profile/Profile";
import Support from "../pages/support/Support";
import AuthLayout from "../components/AuthLayout";
import Verify from "../pages/verification/Verify";


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
                path: "contact",
                element: <Contact />,
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
                path: "get-appointment-slip",
                element: <div>Get Appointment Slip Page</div>,
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
                    },
                ]
            },
        ],
    },
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
        // <div>
        //     <Routes>
        //         <Route path="/" element={<HomePage />} />
        //         <Route path="/support" element={<Support />} />
        //         <Route path="/faq" element={<Faq />} />
        //         <Route path="/contact" element={<Contact />} />
        //     </Routes>
        // </div>
    );
};

export default Router;