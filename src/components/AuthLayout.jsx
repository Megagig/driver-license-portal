// import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

// const AuthLayout = () => {
//   const { pathname } = useLocation();
//   const { auth } = useAuth() || JSON.parse(sessionStorage.getItem('auth'));

//   return auth?.user ? (
//     <Outlet />
//   ) : (
//     <Navigate
//       to="/login"
//       state={{ requestedUrl: pathname, message: 'Please login to continue!' }}
//       replace={true}
//     />
//   );
// };

// export default AuthLayout;
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AuthLayout = () => {
  const { pathname } = useLocation();
  const { auth } = useAuth();

  // Check sessionStorage if auth is not available from context
  const authData = auth || JSON.parse(sessionStorage.getItem('auth'));

  if (!authData?.access) {
    return (
      <Navigate
        to="/signin"
        state={{ requestedUrl: pathname, message: 'Please login to continue!' }}
        replace={true}
      />
    );
  }

  return <Outlet />;
};

export default AuthLayout;
