"use client"
import { BASE_URL } from "@/utils/constans";
import axios from "axios";
import { createContext, useState , useEffect } from "react";

export const AddressContext = createContext();

export function AddressWrapper({children}){
    const [address, setAddress] = useState({
        ostan:"",
        shahr:"",
        address:"",
        lat:"",
        lang:"",
        mobile:"",
        reciver:"",
        postalCode:""
    })

    const [basketPrice,setBasketPrice] = useState(null)

    const [active,setActive] = useState(false)
    const [show,setShow] = useState(false)
    const [activeType,setActiveType] = useState(false)
    const [loading,setLoading] = useState(false)


    useEffect(() => {
        getBsketPrice()
    }, [active])
    

    const setOstan = (data) => { setAddress({...address,ostan:data.name})}
    const setShahr = (data) => {setAddress({...address,shahr:data.name,lat:data.latitude,lang:data.longitude})}
    const setRes = (data) => {setAddress({...address,reciver:data})}
    const setMobile = (data) => {setAddress({...address,mobile:data})}
    const setPostalCode = (data) => {setAddress({...address,postalCode:data})}
    const setAdd = (data) => {setAddress({...address,address:data})}

    const setUpdate = (data) => {
        setAddress({...address,
        ostan:data.ostan,
        shahr:data.shahr,
        address:data.address,
        lat:data.lat,
        lang:data.lang,
        mobile:data.mobile,
        reciver:data.reciver,
        postalCode:data.postalCode
        })
    }

    const getBsketPrice = async () => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/order/getPostPrice`,null,{withCredentials:true}).then(response => {
            if(response.data.success){
                setBasketPrice(response.data.data)
            }else{
                console.log(response.data.message)
            }
        }).catch(err => {
            console.log(err.message)
        })
        setLoading(false)
    }

    


    return(
        <AddressContext.Provider value={{
            setOstan,setShahr,setAdd,setMobile,setPostalCode,address,setRes,setUpdate,
            active,setActive,
            activeType,setActiveType,show,setShow,basketPrice,loading
            }}>
            {children}
        </AddressContext.Provider>
    )
}