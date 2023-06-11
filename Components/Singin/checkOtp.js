"use client"

import { AuthContext } from '@/Context/AuthContext';
import { BASE_URL } from '@/utils/constans';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import {useContext, useState} from 'react'

const CheckOtp = () => {
    const [code, setCode] = useState(null);
    const {mobile,isLog,setIsSend} = useContext(AuthContext);
    const router = useRouter()

    const login = async () => {
        const data = {
            mobile:mobile,
            code:code
        }

        await axios.post(`${BASE_URL}/auth/checkOtp`,data,{withCredentials:true}).then(response => {
            if(response.data.success){
                router.push('/panel/dashboard')
                isLog()
                setIsSend(false)
            }else{
                alert(response.data.message)
            }
        }).catch( err => {
            alert(err.message)
        })
        
    }

  return (
    <div>
        <label>code</label>
        <input onChange={(e) => setCode(e.target.value)} placeholder='code'/>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default CheckOtp