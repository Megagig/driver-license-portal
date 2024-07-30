import { createContext, useState } from "react";


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const sessionStorageAuth = JSON.parse(sessionStorage.getItem('auth'));
    const [auth, setAuth] = useState(sessionStorageAuth || {});
    const user = JSON.parse(sessionStorage.getItem('user'))



    return (
        <AuthContext.Provider value={{ auth, setAuth, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
