import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update user profile
    const updateUserProfile = (updatedProfileInfo) => {
        return updateProfile(auth.currentUser, updatedProfileInfo);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        signUpWithGoogle,
        signUpWithGit,
        createNewUser,
        signInUser,
        logout,
        setUser,
        user,
        loading,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;