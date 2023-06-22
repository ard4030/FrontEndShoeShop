import React,{useState,useEffect, useContext} from 'react'
import HeadCart from '../Global/HeadCart'
import styles from "./viewpay.module.css"
import{BsBagCheck,BsFileEarmarkText,BsMap,BsTelephone} from "react-icons/bs"
import{GoMail} from "react-icons/go"
import axios from 'axios'
import { BASE_URL } from '@/utils/constans'
import { DateObject } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import SmallLoad from '../Global/SmallLoad'
import {MdClose} from "react-icons/md"
import { CartContext } from '@/Context/CartContext'
import AslLoad from '../Global/AslLoad'

const ViewPay = ({params}) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const date1 =  data ? new DateObject(data.createdAt).convert(persian, persian_fa) : null;
    const {getCart} = useContext(CartContext)

    const checkOrder = async () => {
        setLoading(true)
        
        await axios.post(`${BASE_URL}/api/peyment/newVerifyNextPay`,params,{withCredentials:true}).then(response => {
            if(response.data.success){
                setData(response.data.data[0]);
                getCart()
                // console.log(response.data.data)
            }else{
                setData(response.data.data[0])
            }
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    useEffect(() => {
        checkOrder()
    }, [])
    


  return (
    <div className={styles.viewPay}>
        <HeadCart data={"complate"} />
        <div className={styles.headView}>
            <div className={`dflex jcenter dwrap mt20`}>

                {
                    (params.np_status === "OK")?
                        <div className={`${styles.e1}`}>
                            <span className='flex-center ml10 fn16'><BsBagCheck /></span>
                            <span >متشکریم، سفارش شما دریافت شد.</span>
                        </div>
                    :
                        <div className={`${styles.e2}`}>
                            <span className='flex-center ml10 fn16'><MdClose /></span>
                            <span >سفارش شما انجام نشد</span>
                        </div>
                }
                
                

                <div className={styles.details}>
                    <div>
                        <span>شماره سفارش : </span>
                        <span style={{color:(params.np_status === "OK") ? "#0ec32d" : "#e82e2e"}}>{data && data.order_id}</span>
                    </div>

                    <div>
                        <span>تاریخ: </span>
                        <span>
                            <span>{data && date1 && date1.day}</span>
                            <span style={{marginRight:3}}>{data && date1 && date1.month.name}</span>
                            <span style={{marginRight:3}}>{data && date1 && date1.year}</span>
                        </span>
                    </div>

                    <div>
                        <span>ایمیل : </span>
                        <span>ard4030@gmail.com</span>
                    </div>

                    <div>
                        <span>قیمت نهایی :‌</span>
                        <span>
                            <span>{data &&  parseInt(data.amount).toLocaleString()}</span>
                            <span style={{marginRight:3}}>تومان</span>
                        </span>
                    </div>

                    <div>
                        <span>روش پرداخت</span>
                        <span>{data && data.payMethod[0].title}</span>
                    </div>

                </div>

                <div className={styles.khat}></div>

                <div className={styles.title}>
                    <span className='flex-center ml10 fn16'><BsFileEarmarkText /></span>
                    <span>مشخصات سفارش</span>
                </div>

                <div className={styles.cont}>
                    <div>
                        <span>محصول</span>
                        <span>مجموع</span>
                    </div>

                    <div className='dwrap'>
                        {
                            data && data.cartDetail.product.map((item,index) => 
                            <div key={index} className='w100 mb5'>
                                <span style={{width:"65%",display:"inline-block"}}>{item.p_name}</span>
                                <span className='inum'>
                                    <span>{item.totalPrice.toLocaleString()}</span>
                                    <span className='mr5'>تومان</span>
                                </span>
                            </div>
                            )
                        }
                        
                    </div>

                    <div>
                        <span>جمع كل سبد خريد:</span>
                        <span className='inum'>
                            <span>{parseInt(data && data.amount).toLocaleString()}</span>
                            <span className='mr5'>تومان</span>
                        </span>
                    </div>

                    {/* <div>
                        <span>حمل و نقل:</span>
                        <span>حمل و نقل رایگان</span>
                    </div> */}

                    <div>
                        <span>روش پرداخت: </span>
                        <span>{data && data.payMethod[0].title}</span>
                    </div>

                    <div>
                        <span>قیمت نهایی:</span>
                        <span className='inum'>
                            <span>{parseInt(data &&  data.amount).toLocaleString()}</span>
                            <span className='mr5'>تومان</span>
                        </span>
                    </div>


                </div>

                <div className={styles.title}>
                    <span className='flex-center ml10 fn16'><BsMap /></span>
                    <span>آدرس صورتحساب</span>
                </div>

                <div className={styles.cont1}>
                    <div className='dflex acenter w100'>
                        <span>{data && data.first_name}</span>
                        <span className='mr10'>{data && data.last_name}</span>
                    </div>

                    <div className='mt10 w100'>
                        <span>استان {data && data.addres[0].ostanName}</span>
                        &nbsp;
                        ،
                        &nbsp;
                        <span>{data && data.addres[0].cityName}</span>
                        &nbsp;
                        ،
                        &nbsp;
                        <span>{data && data.addres[0].description}</span>
                    </div>

                    <div className='mt10 w100'>
                        <span>کد پستی : </span>
                        <span>{data && data.addres[0].postalCode}</span>
                    </div>

                    <div className={`mt10 w100 dflex acenter ${styles.nk}`}>
                        <span className={`flex-center ml10 fn16`}><BsTelephone /></span>
                        <span>{data && data.addres[0].mobile}</span>
                    </div>

                    <div className={`mt10 w100 dflex acenter ${styles.nk}`}>
                        <span className={`flex-center ml10 fn16`}><GoMail /></span>
                        <span>{data && data.email}</span>
                    </div>
                </div>

            </div>
        </div>
        {loading && <AslLoad />}
    </div>
  )
}

export default ViewPay