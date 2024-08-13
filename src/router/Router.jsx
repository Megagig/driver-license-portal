import DrivingSchool from '../pages/drivingschool/DrivingSchool';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Root from '../components/Root';
import ApplicationForm from '../pages/applications/ApplicationForm';
import ApplicationHome from '../pages/applications/ApplicationHome';
import Appointment, {
  loader as appointmentLoader,
} from '../pages/appointment/Appointment';
import {
  AppointmentDashboard,
  appointmentDashboardLoader,
} from '../pages/appointment/AppointmentDashboard';
import CaptureCenter from '../pages/capture_center/CaptureCenter';
import Dashboard from '../pages/dashboard/Dashboard';
import Faq from '../pages/faq/Faq';
import HomePage from '../pages/home/HomePage';
import Profile, { profileLoader } from '../pages/profile/Profile';
import Support from '../pages/support/Support';
import Verify from '../pages/verification/Verify';
import SignUp from '../pages/authentication/signup/SignUp';
import SignIn from '../pages/authentication/login/SignIn';
import ForgotPassword from '../pages/authentication/components/ForgotPassword';
import WelcomeModal from '../pages/authentication/components/WelcomeModal';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'faq',
        element: <Faq />,
      },
      {
        path: 'support',
        element: <Support />,
      },

      {
        path: 'verify-license',
        element: <Verify />,
      },
      {
        path: 'capture-centers',
        element: <CaptureCenter />,
      },
      {
        path: 'driving-schools',
        element: <DrivingSchool />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'welcome',
        element: <WelcomeModal />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'profile',
            element: <Profile />,
            loader: profileLoader,
          },
          {
            path: 'application',
            element: <ApplicationHome />,
          },
          {
            path: 'application/form',
            element: <ApplicationForm />,
          },
          {
            path: 'get-appointment-slip',
            element: <AppointmentDashboard />,
            loader: appointmentDashboardLoader,
          },
          {
            path: 'appointment',
            element: <Appointment />,
            loader: appointmentLoader,
          },
        ],
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
