import React,{ useEffect, useState } from 'react'
import styles from "./panel.module.css"
import test from "../../public/images/test.jpg"
import Image from 'next/image'
import {BsStar} from "react-icons/bs"
import axios from 'axios'
import { BASE_URL } from '@/utils/constans'
import { DateObject } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import SmallLoad from '../Global/SmallLoad'

const MyComments = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(data)
    const getData = async () => {
        setLoading(true)
        await axios.get(`${BASE_URL}/user/comment/getCommentsUser`,{withCredentials:true}).then(response => {
            if(response.data.success){
                setData(response.data.data)
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    useEffect(() => {
      getData()
    }, [])
    

  return (
    <div className={styles.contCom}>
        
        {
            loading ?
            <SmallLoad width={"100%"} height={"400px"} />
            :
            <>
            {
                data && data.length > 0 && data.map((item,index) => {
                    const date1 = new DateObject(item.createdAt).convert(persian, persian_fa)
                    return <div key={index}>
                    <div className={styles.imaging}>
                        {
                            item.product[0].images[0] ?
                                <Image src={`${BASE_URL}${item.product[0].images[0]}`} width={80} height={80} alt={""} />
                            :
                                <Image src={test} width={80} height={80} alt={""} />
                        }
                        
                        <p>{item.product[0].p_name}</p>
                    </div>
                    <div className={styles.contenting}>
                        <p>{item.message}</p>
                        <div className={styles.footing}>
                            <div className='dflex acenter'>
                                <span style={{color:"gold"}} className='ml5 flex-center'><BsStar /></span>
                                <span className='inumlight'>میانگین امتیاز شما {item.rate} از {5} </span>
                            </div>
                            <div className={styles.bv1}>
                                <span>{date1.day}</span>
                                <span>{date1.month.name}</span>
                                <span>{date1.year}</span>
                            </div>
                            <div className={styles.bv2}>
                                {item.status === "publish" && <span className={styles.success}>تایید شده</span>}
                                {item.status === "pending" && <span className={styles.pending}>درحال بررسی</span>}   
                            </div>
                        </div>
                    </div>
                </div>
                })
            }
            </>
            
        }
        
       
    </div>
  )
}

export default MyComments