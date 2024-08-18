import DrivingSchool from '../pages/drivingschool/DrivingSchool';

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import PageNotFound from '../components/PageNotFound';
import Root from "../components/Root";
import AdminAuthLayout from "../components/layouts/admin/AdminAuthLayout";
import AdminLayout from "../components/layouts/admin/AdminLayout";
import ApplicationForm, { applicationFormLoader } from "../pages/applications/ApplicationForm";
import ApplicationHome from "../pages/applications/ApplicationHome";
import Appointment, {
  loader as appointmentLoader,
} from "../pages/appointment/Appointment";
import {
  AppointmentDashboard,
  appointmentDashboardLoader,
  AppointmentDashboard,
  appointmentDashboardLoader,
} from "../pages/appointment/AppointmentDashboard";
import LoginPage from "../pages/auth/login/LoginPage";
import SignupPage from "../pages/auth/signup/SignupPage";
import CaptureCenter from "../pages/capture_center/CaptureCenter";
import Dashboard from "../pages/dashboard/Dashboard";
import Faq from "../pages/faq/Faq";
import HomePage from "../pages/home/HomePage";
import Profile, { profileLoader } from "../pages/profile/Profile";
import BookAppointment from "../pages/schedule_appointment/BookAppointment";
import Support from "../pages/support/Support";
import Verify from "../pages/verification/Verify";

import {
  AdminDashboard,
  Dlc,
  Dssp,
  Frsc,
  Vio,
  NewApplicants,
  Payments,
  Reissue,
  Renewal,
  Settings,
  Login,
  SignUp,
  AdminDashboard,
  Dlc,
  Dssp,
  Frsc,
  Vio,
  NewApplicants,
  Payments,
  Reissue,
  Renewal,
  Settings,
  Login,
  SignUp,
} from "../pages/admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="min-h-screen w-screen overflow-x-hidden relative"><Outlet /></div>,
    children: [
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
            element: <Verify />,
          },
          {
            path: "capture-centers",
            element: <CaptureCenter />,
          },
          {
            path: "driving-schools",
            element: <DrivingSchool />,
          },
          {
            path: "*",
            element: <PageNotFound />,
          },
          {
            element: <AuthLayout />,
            children: [
              {
                path: "dashboard",
                element: <Dashboard />,
              },
              {
                path: "profile",
                element: <Profile />,
                loader: profileLoader,
              },
              {
                path: "applications/:type",
                element: <ApplicationHome />,
              },
              {
                path: "applications/:type/form",
                element: <ApplicationForm />,
                loader: applicationFormLoader
              },
              {
                path: "get-appointment-slip",
                element: <AppointmentDashboard />,
                loader: appointmentDashboardLoader,
              },
              {
                path: "appointment",
                element: <Appointment />,
                loader: appointmentLoader,
              },
              {
                path: "schedule-appointment",
                element: <div>Schedule Appointment Component</div>,
              },
            ],
          },
        ],
      },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
          {
            element: <AdminAuthLayout />,
            children: [
              {
                path: "dashboard",
                element: <AdminDashboard />,
              },
              {
                path: "payments",
                element: <Payments />,
              },
              {
                path: "new-applicants",
                element: <NewApplicants />,
              },
              {
                path: "renewal",
                element: <Renewal />,
              },
              {
                path: "reissue",
                element: <Reissue />,
              },
              {
                path: "dssp",
                element: <Dssp />,
              },
              {
                path: "vio",
                element: <Vio />,
              },
              {
                path: "dlc",
                element: <Dlc />,
              },
              {
                path: "frsc",
                element: <Frsc />,
              },
              {
                path: "settings",
                element: <Settings />,
              },
            ],
          },
        ],
      },
    ]
  }
  {
    path: "/",
    element: <div className="min-h-screen w-[dwv] overflow-x-hidden relative"><Outlet /></div>,
    children: [
      {
        path: '/',
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
            element: <Verify />,
          },
          {
            path: "capture-centers",
            element: <CaptureCenter />,
          },
          {
            path: "driving-schools",
            element: <DrivingSchool />,
          },
          {
            path: "*",
            element: <PageNotFound />,
          },
          {
            element: <AuthLayout />,
            children: [
              {
                path: "dashboard",
                element: <Dashboard />,
              },
              {
                path: "profile",
                element: <Profile />,
                loader: profileLoader,
              },
              {
                path: "applications/:type",
                element: <ApplicationHome />,
              },
              {
                path: "applications/:type/form",
                element: <ApplicationForm />,
                loader: applicationFormLoader
              },
              {
                path: "get-appointment-slip",
                element: <AppointmentDashboard />,
                loader: appointmentDashboardLoader,
              },
              {
                path: "appointment",
                element: <Appointment />,
                loader: appointmentLoader,
              },
              {
                path: "schedule-appointment",
                element: <div>Schedule Appointment Component</div>,
              },
            ],
          },
        ],
      },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
          {
            element: <AdminAuthLayout />,
            children: [
              {
                path: "dashboard",
                element: <AdminDashboard />,
              },
              {
                path: "payments",
                element: <Payments />,
              },
              {
                path: "new-applicants",
                element: <NewApplicants />,
              },
              {
                path: "renewal",
                element: <Renewal />,
              },
              {
                path: "reissue",
                element: <Reissue />,
              },
              {
                path: "dssp",
                element: <Dssp />,
              },
              {
                path: "vio",
                element: <Vio />,
              },
              {
                path: "dlc",
                element: <Dlc />,
              },
              {
                path: "frsc",
                element: <Frsc />,
              },
              {
                path: "settings",
                element: <Settings />,
              },
            ],
          },
        ],
      },
    ]
  }
]);

const Router = () => {
  return <RouterProvider router={router} />;
  return <RouterProvider router={router} />;
};

export default Router;
