import React, { useState , useContext, useEffect, createContext} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { app, auth } from '../../firebase';
import { signInWithEmail, signUpWithEmail } from '../../Data/Repo/repo'


const MyContext = createContext();

const MyProvider = ({ children }) => {

    const [user, error] = useAuthState(auth)

    const [loading, setLoading] = useState(false)

    const signUpWithEmal = async(fullName, email, password, title, bio, userName)=>{
        signUpWithEmail(fullName, email, password, title, bio, userName)
    }

    return <MyContext.Provider
        value={{
            loading,
            user,
            error,
        }}
    >
    {children}
    </MyContext.Provider>
}

export const useGlobalContext = () => useContext(MyContext)

export {MyContext, MyProvider}