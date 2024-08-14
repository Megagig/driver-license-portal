import { createContext, useState } from "react";


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    // User Context Init
    const sessionStorageAuth = JSON.parse(sessionStorage.getItem('auth'));
    const [auth, setAuth] = useState(sessionStorageAuth || {});
    const user = JSON.parse(sessionStorage.getItem('user'))

    // Admin Context Init
    const sessionStorageAdminAuth = JSON.parse(sessionStorage.getItem('adminAuth'));
    const [adminAuth, setAdminAuth] = useState(sessionStorageAdminAuth || {});

    return (
        <AuthContext.Provider value={{ auth, setAuth, adminAuth, setAdminAuth, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
