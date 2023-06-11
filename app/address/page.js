
"use client"
import AddressList from '@/Components/Address/AddressList';
import { BASE_URL } from '@/utils/constans';
import axios from 'axios';
import React,{useState,useEffect} from 'react'

export const metadata = {
    title: 'انتخاب آدرس',
    description: 'Generated by create next app',
}

const Address = () => {
  const [data, setData] = useState(null)

  const getData = async () => {
    await axios.post(`${BASE_URL}/user/address/getAddressById`,null,{
        withCredentials:true
      }).then(response => {
          if(response.data.success){
              setData(response.data) 
          }else{
              console.log(response.data.data)
          }
      }).catch(err => {
          console.log(err.messgae)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  
  


  return (
    <div className='container'>

      {data &&  <AddressList data={data} />}

      
    </div>
  )
}

export default Address;


// export async function getServerSideProps(context) {
//   const { cookies } = context.req;
//   const { headers } = context.req;

//   console.log(headers)
//   // تنظیم کوکی‌ها
//   // const cookieJar = new tough.CookieJar();
//   // const cookie1 = new tough.Cookie({
//   //   key: 'token',
//   //   value: cookies.token,
//   //   domain: DOMAIN,
//   //   path: '/',
//   // });
//   // const cookie2 = new tough.Cookie({
//   //   key: 'deviceId',
//   //   value: cookies.deviceId,
//   //   domain: DOMAIN,
//   //   path: '/',
//   // });
//   // cookieJar.setCookie(cookie1, BASE_URL);
//   // cookieJar.setCookie(cookie2, BASE_URL);

//   let data = {
//     data:[],
//     err:null
//   };

//   // اضافه کردن کوکی‌ها به درخواست
//       // await axios.post(`${BASE_URL}/user/address/getAddressById`,null,{
//       //   headers: {
//       //     Cookie: cookieJar.getCookieStringSync(BASE_URL)
//       //   },
//       //   withCredentials:true
//       // }).then(response => {
//       //     if(response.data.success){
//       //         data.data = response.data.data 
//       //     }else{
//       //       // data.err = response.data.messgae
//       //         // console.log(response.data)
//       //     }
//       // }).catch(err => {
//       //     console.log(err.messgae)
//       // })


//   // ارسال داده به کامپوننت
//   return {
//     props: {
//       data,cookies
//     },
//   };
// }