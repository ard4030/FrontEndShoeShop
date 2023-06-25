import { BASE_URL } from '@/utils/constans';
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import styles from "./panel.module.css"
import { DateObject } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import AllOrderDetail from './AllOrderDetail';
import Image from 'next/image';
import test from "../../public/images/test.jpg"
import {GrClose} from 'react-icons/gr'

const OrderTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal,setModal] = useState({
        show:false,
        data:null
    })
    const [modal1,setModal1] = useState({
        show:false,
        data:null
    })

    console.log(modal1)

    const close = () => {
        setModal({...modal,show:false})
    }

    const getData = async () => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/order/getAllOrders`,null,{withCredentials:true}).then(response => {
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
    <div className={styles.contTable}>
        <table>
            <thead>
                <tr>
                    <td>سفارش</td>
                    <td>تاریخ</td>
                    <td>وضعیت</td>
                    <td>مجموع</td>
                    <td>عملیات</td>
                </tr>
            </thead>

            <tbody>
                {
                    data && data.length > 0 && data.map((item,index) => {
                        const date1 = new DateObject(item.createdAt).convert(persian, persian_fa)

                        return <tr key={index}>
                        <td className='inum'>#{item.order_id}</td>
                        <td>
                            <div className='inumlight'>
                                <span style={{marginLeft:3}}>{date1.day}</span>
                                <span style={{marginLeft:3}}>{date1.month.name}</span>
                                <span>{date1.year}</span>
                            </div>
                        </td>
                        <td>
                            {item.status === "pending" && <span className='inumlight'>درحال بررسی</span>}
                            {item.status === "pay_complate" && <span className='inumlight'>تکمیل شده</span>}
                        </td>
                        <td>
                            <div className='inumlight'>
                                <span style={{marginLeft:3}}>{parseInt(item.amount).toLocaleString()}</span>
                                <span style={{marginLeft:5}}>تومان برای</span>
                                <span>
                                    {item.cartDetail.product.length}
                                    &nbsp;
                                    مورد
                                </span>
                            </div>
                        </td>

                        <td>
                            <div>
                                <span onClick={() => {setModal({show:true,data:item})}} className={styles.view}>نمایش</span>
                                <span onClick={() => {setModal1({show:true,data:item})}} className={styles.cancel}>لغو سفارش</span>
                            </div>
                        </td>
                    </tr>
                    })
                }
                
            </tbody>
        </table>

         {
            modal.show && 
            <div className={styles.cotModal}>
                <AllOrderDetail data={modal.data} close={close}/>
            </div>
         }   

         {
            modal1.show && 
            <div className={styles.cotModal}>
                <div style={{display:"block"}}>
                    <div className={styles.e1}>
                        <span>درخواست لغو سفارش</span>
                        <span onClick={() => setModal1({...modal1,show:false})} className='flex-center'>
                            <GrClose />
                        </span>
                    </div>
                    <div className={styles.e2}>
                        <div>
                            <span>شناسه سفارش</span>
                            <span style={{color:"#4CAF50",marginRight:"5px"}}>{modal1.data.order_id}</span>
                        </div>

                        <div>
                            <span>مبلغ کل</span>
                            <span style={{color:"#4CAF50",marginRight:"5px"}}>{parseInt(modal1.data.amount).toLocaleString()}</span>
                            <span style={{color:"#4CAF50",marginRight:"5px"}}>تومان</span>
                        </div>
                    </div>

                    {
                        modal1.data && modal1.data.cartDetail && modal1.data.cartDetail.product &&  
                        modal1.data.cartDetail.product.length > 0 && modal1.data.cartDetail.product.map((item,index) => 
                        <div key={index} className={styles.e3}>
                            <div className={styles.items}>
                                <div className={styles.imgf}>
                                        {
                                            item.image ?
                                            <Image width={80} height={80} alt="" src={`${BASE_URL}${item.image}`} />
                                            :
                                            <Image width={80} height={80} alt="" src={test} />
                                        }
                                    
                                </div>
                                <div className={styles.bn}>
                                    <p>{item.p_name}</p>
                                    <span>{(item.totalPrice).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    

                    <div className={styles.e4}>
                        <textarea></textarea>
                        <span>ارسال</span>
                    </div>
                </div>
            </div>
         }      
         
        
    </div>
    
  )
}

export default OrderTable