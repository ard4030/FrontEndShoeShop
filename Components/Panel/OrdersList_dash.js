import React,{useState,useEffect} from 'react'
import styles from "./panel.module.css"
import {MdArrowBackIosNew} from "react-icons/md"
import {CgChevronDown} from "react-icons/cg"
import Image from 'next/image'
import test from "../../public/images/test.jpg"
import axios from 'axios'
import { BASE_URL } from '@/utils/constans'
import { DateObject } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import SmallLoad from '../Global/SmallLoad'

const OrdersList_dash = () => {
    
  const [active, setActive] = useState("");
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState([]);

  const getData = async () => {
    setLoading(true)
    await axios.post(`${BASE_URL}/user/order/getAllOrders`,{size:5},{withCredentials:true}).then(response => {
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

            <div className={styles.sec5}>
                <div className={styles.headSec}>
                    <span>آخرین سفارشات</span>
                    <div className={styles.st1}>
                        <span className='flex-center'><MdArrowBackIosNew /></span>
                        <span className='fn10'>ویرایش اطلاعات</span>
                    </div>
                </div>

                {
                    loading ?
                    <SmallLoad />
                    :

                    <>
                    {
                    data && data.length > 0 && data.map((item,index) => 
                    {
                        const date1 = new DateObject(item.createdAt).convert(persian, persian_fa)
                            return <div key={index} className={styles.coTable}>
                                    <div>
                                        <span className='ml5 defcolor'>کد سفارش::</span>
                                        <span className='defcolor'>{item.order_id}</span>
                                    </div>

                                    <div>
                                        <span className='ml5 inum defcolor'>{date1.day}</span>
                                        <span className='ml5 inum defcolor'>{date1.month.name}</span>
                                        <span className='inum defcolor'>{date1.year}</span>
                                    </div>

                                    <div>
                                        <span 
                                        className={` ${item.status === "pay_complate" && styles.success} ${item.status === "pending" && styles.pending} ${styles.stat}`}>
                                            {item.status === "pay_complate" && "تکمیل شده"}
                                            {item.status === "pending" && "درحال بررسی"}
                                        </span>
                                    </div>

                                    <div>
                                        <span className='inum ml5 defcolor'>{parseInt(item.amount).toLocaleString()}</span>
                                        <span className=' fn11 defcolor'>تومان</span>
                                    </div>

                                    <div onClick={() => {(active === item._id) ? setActive(null) : setActive(item._id)}}>
                                        <span>مشاهده جزيیات</span>
                                        <span 
                                        className={`flex-center ${active === item._id && styles.rot }`}><CgChevronDown/></span>
                                    </div>

                                    <div style={{display:(active === item._id) ? "flex" : "none"}}>
                                        {
                                            item.cartDetail && item.cartDetail.product.length > 0 && item.cartDetail.product.map((item1,index1) =>
                                            <div key={index1}>
                                                {    
                                            (item1.image) ?
                                                <Image alt='' src={`${BASE_URL}${item1.image}`} width={70} height={70}/>
                                                    :
                                                <Image alt='' src={test} width={70} height={70}/>
                                                }
                                                
                                                <p>{item1.p_name}</p>
                                            </div>
                                            )
                                        }
                                        
                                    </div>
                                </div>
                                }
                                )
                            }
                    </>

                }

                

            </div>
        </>
  )
}

export default OrdersList_dash