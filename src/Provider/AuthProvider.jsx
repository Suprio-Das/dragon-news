import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const test = "Auth Context Testing"

    const authInfo = {
        test
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;