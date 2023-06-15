// src/context/state.js
"use client"
import { BASE_URL } from '@/utils/constans';
import axios from 'axios';
import { createContext, useState ,useEffect  } from 'react';

export const AuthContext = createContext();

export function AuthWrapper({ children }) {
    const [isSend, setIsSend] = useState(false)
    const [mobile, setMobile] = useState(false)
    const [user, setUser] = useState(false)
    const [viewLogin, setViewLogin] = useState(false)


    const isLog = async() => {
      await axios.get(`${BASE_URL}/auth/isLogin`,{withCredentials:true}).then(response => {
          if(response.data.success){
            setUser(response.data.user)
          }else{
            setUser(false)
          }
      }).catch(err => {
        console.log('ccccccc')
      })
    }

    const devId = async () => {
      await axios.get(`${BASE_URL}/auth/david`,{withCredentials:true}).then(response => {
        if(response.data.success){
          // console.log('ok')
        }else{
          // console.log('no')
        }
    }).catch(err => {
      console.log('ccccccc')
    })
    }

    useEffect(() => {
      isLog()
      devId()
    }, [])
    

    const logOut = async () => {
      await axios.get(`${BASE_URL}/auth/logOut`,{withCredentials:true}).then(response => {
        if(response.data.success){
          isLog()
        }
      })
    }




  return (
    <AuthContext.Provider value={{
        isSend,setIsSend,
        mobile, setMobile,
        user,logOut,isLog,
        viewLogin,setViewLogin
        }}>
      {children}
    </AuthContext.Provider>
  );
}
