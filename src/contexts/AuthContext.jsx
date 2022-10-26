import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line no-unused-vars
export const authContext = createContext();
const auth = getAuth(app);


const AuthContext = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [user,setUser] = useState(undefined);
    const [loading, setLoading] = useState(true);
    // implement sign up method with email and password;
    const registerWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // signin wiht email and password:
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // add displayName and PhotoURL after user created successfully:
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    };
    // update forgotten password:
    const forgottenPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };
    // sign-in with google:
    const googleProvider =new GoogleAuthProvider();
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // implement use log out button:
    const logOut = () => {
        setLoading(true);
        return signOut(auth).then(() => {
            toast.success("Log Out successful!");
        }).catch(toast.error("something went wrong!"));
    };






    // implement user state observer:
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        // when we change the component then we need to stop the observer for the performance issue:
        return () => unsubscribe();
    }, []);
    const authInfo={user, loginWithGoogle, registerWithEmailAndPassword, logOut, logIn, updateUserProfile, loading, forgottenPassword};
    return (
        <authContext.Provider value={ authInfo }>
            { children }
        </authContext.Provider>
    );
};

export default AuthContext;