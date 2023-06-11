"use client"

import { AuthContext } from '@/Context/AuthContext'
import { BASE_URL } from '@/utils/constans'
import axios from 'axios'
import { useRouter } from 'next/router'
import {useContext, useState} from 'react'

const GetOtp = () => {
    const [number, setNumber] = useState(null)
    const {setIsSend,setMobile} = useContext(AuthContext)

    const SendSms = async () => {
        await axios.post(`${BASE_URL}/auth/getOtp`,{mobile:number}).then(response => {
            if(response.data.success){
                setIsSend(true)
                setMobile(number)
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
 
    }

  return (
    <div>
        <label>number</label>
        <input onChange={(e) => setNumber(e.target.value)} placeholder='09...' />
        <button onClick={SendSms}>Send SMS</button>
    </div>
  )
}

export default GetOtp