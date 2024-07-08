import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from '../components/Root';
import HomePage from '../pages/home/HomePage';
import Support from '../pages/support/Support';
import Faq from '../pages/faq/Faq';
import Contact from '../pages/contact/Contact';
import LoginPage from '../pages/auth/login/LoginPage';
import SignupPage from '../pages/auth/signup/SignupPage';

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
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
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
        path: 'contact',
        element: <Contact />,
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
