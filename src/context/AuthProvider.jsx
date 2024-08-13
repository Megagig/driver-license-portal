// import { useState, createContext } from "react";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//     const sessionStorageAuth = JSON.parse(sessionStorage.getItem('auth'));
//     const [auth, setAuth] = useState(sessionStorageAuth || {});
//     const user = JSON.parse(sessionStorage.getItem('user'))

//     return (
//         <AuthContext.Provider value={{ auth, setAuth, user }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthContext;

import { useState, createContext, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = sessionStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth) : null;
  });

  useEffect(() => {
    if (auth) {
      sessionStorage.setItem('auth', JSON.stringify(auth));
    } else {
      sessionStorage.removeItem('auth');
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
