'use client'
import { useContext, createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { account, ID } from "../utils/appwrite";

const AuthContext = createContext()

const AuthProvider = ({children})=>{

    const router = useRouter()


    //=======STATES=======//
    const [user,setUser] = useState(null)
    const [session,setSession] = useState(null)
    const [userId,setUserId] = useState(null)
   //======END STATES=====//  

   //===========FUNCTIONS==========//
    const getUser = async () => {
        try {
            const res = await account.get()
            setUser(res)
        } catch (error) {
            console.log('Error geting user: ', error.message);
        } 
    }

    const handleSendOtp = async (e,email)=>{
        e.preventDefault();
        if(email){
            try {
                const sessionToken = await account.createEmailToken(
                    ID.unique(),
                    email
                );
                const result = sessionToken.userId
                setUserId(result)
            } catch (error) {
                console.log('Error creating otp: ', error.message);
            } 
        }
    }

    const handleLogin = async (e,secret)=>{
        e.preventDefault()
        if(secret){

            try {
                const session = await account.createSession(
                    userId,
                    secret
                );
                setSession(session)
            } catch (error) {
                console.log('Error creating session: ', error.message);
            } finally {
                console.log('We got User Session with data: ', session);
                getUser()
            }
        }
    }

    const handleLogout = async () => {
        await account.deleteSession('current')
        setUser(null)
        setSession(null)
        setUserId(null)
    }


   //===========END FUNCTIONS========//

   //===========USE EFFECT===========//
        useEffect(()=>{
            getUser()
        },[])
   //===========END USE EFFECT=======//

   console.log('We Got User with data: ', user);

    const data = {
        user,
        session,
        handleSendOtp,
        handleLogin,
        handleLogout
    }
return(
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
)

}

export default AuthProvider

export const useAuth = () => { return useContext(AuthContext) }