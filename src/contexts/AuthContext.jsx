import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
export const authContext = createContext();
const auth = getAuth(app);


const AuthContext = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [user,setUser] = useState(undefined);
    // implement sign up method with email and password;
    const registerWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // signin wiht email and password:
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // add displayName and PhotoURL after user created successfully:
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // implement use log out button:
    const logOut = () => {
        return signOut(auth);
    };






    // implement user state observer:
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        // when we change the component then we need to stop the observer for the performance issue:
        return () => unsubscribe();
    }, []);
    const authInfo={user, registerWithEmailAndPassword, logOut, logIn, updateUserProfile};
    return (
        <authContext.Provider value={ authInfo }>
            { children }
        </authContext.Provider>
    );
};

export default AuthContext;