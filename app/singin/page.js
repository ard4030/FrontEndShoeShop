"use client"
import CheckOtp from '@/Components/Singin/checkOtp'
import GetOtp from '@/Components/Singin/getOtp'
import { AuthContext } from '@/Context/AuthContext'
import { useRouter } from 'next/navigation'

import { useContext , useEffect } from 'react'

// export const metadata = {
//     title: 'ورود',
//     description: 'Generated by create next app',
// }

const Otp = () => {
  const {isSend,user} = useContext(AuthContext)
  const router = useRouter();
  if(user) router.replace('/')
  
  useEffect(() => {
  }, [])
  

  return (
    <div className='container'>
      {
        (isSend)?
        <CheckOtp />
        :
        <GetOtp />
      }
    </div>
  )
}

export default Otp