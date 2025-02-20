import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Creating New User with Google
    const googleProvider = new GoogleAuthProvider();
    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // Creating New User with GitHub
    const gitProvider = new GithubAuthProvider();
    const signUpWithGit = () => {
        return signInWithPopup(auth, gitProvider);
    }

    // Creating New User
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        signUpWithGoogle,
        createNewUser,
        signInUser,
        logout,
        setUser,
        user
    }

    console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;