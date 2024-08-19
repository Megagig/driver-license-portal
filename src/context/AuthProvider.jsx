import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    // User Context Init
    const sessionStorageAuth = JSON.parse(sessionStorage.getItem("auth"));
    const [auth, setAuth] = useState(sessionStorageAuth || {});
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(() => {
        sessionStorage.setItem("auth", JSON.stringify(auth));
    }, [auth]);

    // Admin Context Init
    const sessionStorageAdminAuth = JSON.parse(
        sessionStorage.getItem("adminAuth")
    );
    const [adminAuth, setAdminAuth] = useState(sessionStorageAdminAuth || {});
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(Boolean(adminAuth.admin));
    // console.log(isAdminAuthenticated);

    useEffect(() => {
        sessionStorage.setItem("adminAuth", JSON.stringify(adminAuth));
    }, [adminAuth]);

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                adminAuth,
                setAdminAuth,
                isUserAuthenticated,
                setIsUserAuthenticated,
                isAdminAuthenticated,
                setIsAdminAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
