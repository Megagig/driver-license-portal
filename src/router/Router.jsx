import {
    Routes,
    Route,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../components/Root";
import HomePage from "../pages/home/HomePage";
import Support from "../pages/support/Support";
import Faq from "../pages/faq/Faq";
import Contact from "../pages/contact/Contact";
import ApplicationHome from "../pages/applications/ApplicationHome";
import ApplicationForm from "../pages/applications/ApplicationForm";
import Appointment from "../pages/appointment/Appointment";
import AuthLayout from "../components/AuthLayout";
import LoginPage from "../pages/auth/login/LoginPage";
import SignupPage from "../pages/auth/signup/SignupPage";

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
                element: <div>License Verification Page</div>,
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
                        element: <div>User Profile</div>,
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
