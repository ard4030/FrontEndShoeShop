// src/context/state.js
"use client"
import { BASE_URL } from '@/utils/constans';
import axios from 'axios';
import { createContext, useState ,useEffect  } from 'react';

export const CartContext = createContext();

export function CartWrapper({ children }) {
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)

    const getCart = async () => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/cart/getCart`,null,{withCredentials:true}).then(response => {
            if(response.data.success){
                setCart(response.data.data)
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    useEffect(() => {
        getCart();
    }, [])

    const getIsBasking = (data) => {
        let x = false;
         cart.length > 0 && cart.map(item => {
            if( data && item?.addonItem === JSON.stringify(data.addonItem)  && data.p_name === item.p_name && item.e_name === data.e_name ){
                x= {count:item.count,id:item.id}
            }
        })

        return x;
    }

    const addToCart = async (data) => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/cart/addToCart`,data,{withCredentials:true}).then(response => {
            if(response.data.success){
                getCart()
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    const addCount = async (data,productId) => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/cart/addQuantity`,{addonItem:data,productId},{withCredentials:true}).then(response => {
            if(response.data.success){
                getCart()
            }else{
                alert(response.data.message)
            }
            
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    const deleteCount = async (data,productId) => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/cart/deleteQuantity`,{addonItem:data,productId},{withCredentials:true}).then(response => {
            getCart()
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    const deleteItem = async (id) => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/cart/deleteItemCart`,{id},{withCredentials:true}).then(response => {
           
            getCart()
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    const getCartPrice = () => {
        let x = 0;
        cart.map(item => {
            x = x + parseInt(item.totalPrice)
        })
        return x
    }


  return (
    <CartContext.Provider value={{
        cart,addToCart,getCart,addCount,deleteCount,loading,deleteItem,getIsBasking,show,setShow,getCartPrice,
        }}>
      {children}
    </CartContext.Provider>
  );
}
