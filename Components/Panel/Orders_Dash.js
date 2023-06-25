"use client"
import React,{useState,useEffect} from 'react'
import styles from "./panel.module.css"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { BsBox2 , BsFileEarmarkExcel , BsCardChecklist } from "react-icons/bs"
import { MdOutlineContentPaste  } from "react-icons/md"
import axios from 'axios'
import { BASE_URL } from '@/utils/constans'

const Orders_Dash = () => {

    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true)

    const getData = async () => {
        setLoading(true)
        await axios.get(`${BASE_URL}/user/payment/getStatusOrders`,{withCredentials:true}).then(response => {
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
    
    <>
        <div className={styles.orderStatus}>
                    <div>
                        <span>سفارش تکمیل شده</span>
                        <span className='fn13'>
                            {data && data.success ? data.success : 0}
                        </span>
                        <div className={styles.backIcon}><BsCardChecklist /></div>
                    </div>

                    <div>
                        <span>سفارش در انتظار پرداخت</span>
                        <span className='fn13'>
                            {data && data.wait_pay ? data.wait_pay : 0}
                        </span>
                        <div className={styles.backIcon}><FaRegMoneyBillAlt /></div>
                    </div>

                    <div>
                        <span>سفارش پرداخت شده در حال انجام</span>
                        <span className='fn13'>
                            {data && data.pay_complate ? data.pay_complate : 0}
                        </span>
                        <div className={styles.backIcon}><BsBox2 /></div>
                    </div>

                    <div>
                        <span>سفارش در انتظار بررسی</span>
                        <span className='fn13'>
                            {data && data.pending ? data.pending : 0}
                        </span>
                        <div className={styles.backIcon}><MdOutlineContentPaste /></div>
                    </div>

                    <div>
                        <span>سفارش لغو شده</span>
                        <span className='fn13'>
                        {data && data.cancellation ? data.cancellation : 0}
                        </span>
                        <div className={styles.backIcon}><BsFileEarmarkExcel /></div>
                    </div>

                    
        </div>
    </>
  )
}

export default Orders_Dash