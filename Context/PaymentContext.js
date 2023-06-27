// src/context/state.js
"use client"
import { BASE_URL } from '@/utils/constans';
import axios from 'axios';
import { createContext, useState ,useEffect  } from 'react';

export const PaymentContext = createContext();

export function PaymentWrapper({ children }) {
    const [basketPrice,setBasketPrice] = useState(null);
    const [loading,setLoading] = useState(false);
    const [myOrder,setMyOrder] = useState({
      addressId:"",
      discount:0,
      first_name:"",
      last_name:"",
      email:"",
      paymentMethod:"",
      factor:false,
      company:""
    })
    const [paymentMethods,setPaymentMethods] = useState([]);

    const getPayments = async () => {
      if(paymentMethods.length < 1){
        setLoading(true)
        await axios.get(`${BASE_URL}/user/payment/getPayments`).then(response => {
          if(response.data.success){
            setPaymentMethods(response.data.data)
            setMyOrder({...myOrder,paymentMethod:response.data.data[0]})
          }else{
            alert(response.data.message)
          }
        }).catch(err => {
          alert(err.message)
        })
        setLoading(false)
      }
    }
    

    // const getOrder = async () => {
    //   setLoading(true)
    //   await axios.get(`${BASE_URL}/user/order/getOrder`,{withCredentials:true}).then(response => {
    //     if(response.data.success){
    //       console.log(response.data.data)
    //     }else{
    //       console.log("no Order")
    //     }
    //   }).catch(err => {
    //     alert(err.message)
    //   })
    //   setLoading(false)
    // }

    useEffect(() => {
      getPayments()
    }, [])
    
    
    const getAllProductsPrice = (basketPrice=0,totalAll=0,discount) => {
        let x = 0;
        if(discount &&  discount.type === "darsadi"){
          x = ((parseInt(totalAll)+parseInt(basketPrice)) / 100) * parseInt(discount.value)
        }else if( discount &&  discount.type === "naghdi"){
          x = (parseInt(totalAll)+parseInt(basketPrice)) - parseInt(discount.value)
        }else{
          x = (parseInt(totalAll)+parseInt(basketPrice))
        }

        return x
    }

    const checkDiscount = async (code) => {
      setLoading(true)
      await axios.post(`${BASE_URL}/user/order/checkDiscount`,{code},{withCredentials:true}).then(response => {
          if(response.data.success){
              alert(response.data.message)
              setMyOrder({...myOrder,discount:response.data.data})
          }else{
              alert(response.data.message)
          }
      }).catch(err => {
          alert(err.message)
      })
      setLoading(false)
    }

    const Payment = async () => {
      setLoading(true)
      await axios.post(`${BASE_URL}/api/peyment/newCartNextPay`,myOrder,{withCredentials:true}).then(response => {
        if(response.data.success){
          console.log(response.data.data)
          window.location.href = response.data.data;
        }else{
          alert(response.data.message)
        }
      }).catch(err => {
        alert(err.message)
      })
      setLoading(false)
    }

  return (
    <PaymentContext.Provider value={{
      getAllProductsPrice,myOrder,setMyOrder,
    checkDiscount,paymentMethods,Payment
    }}>
      {children}
    </PaymentContext.Provider>
  );
}
