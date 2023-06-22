"use client"
import { AddressContext } from '@/Context/AddressContext';
import { AuthContext } from '@/Context/AuthContext';
import { PaymentContext } from '@/Context/PaymentContext';
import { valid } from '@/modules/checkOutValidation';
import {useContext, useState , useEffect} from 'react'
import Addresses from './Addresses';
import styles from "./checkout.module.css"

const Detail = () => {
    const{setShow,active} = useContext(AddressContext)
    const {user,setViewLogin} = useContext(AuthContext)
    const {myOrder,setMyOrder} = useContext(PaymentContext)
    const [errors, setErrors] = useState(null);

      useEffect(() => {
        setErrors(valid(myOrder))
      }, [myOrder])
      

  return (
    <div className={styles.details}>
        <p className='fn14 lightcol'>جزيیات صورت حساب</p>
        <div className='dflex jsb acenter dwrap'>
            <div style={{width:"48%"}} className={styles.item}>
                <span className={styles.spner}>{errors?.first_name && errors.first_name}</span>
                <label>نام <span>*</span></label>
                <input 
                value={myOrder.first_name} 
                onChange={(e) => setMyOrder({...myOrder,first_name:e.target.value})} 
                className={`${styles.ipt} ${errors?.first_name && styles.er}`} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <span className={styles.spner}>{errors?.last_name && errors.last_name}</span>
                <label>نام خانوادگی <span>*</span></label>
                <input 
                value={myOrder.last_name} 
                onChange={(e) => setMyOrder({...myOrder,last_name:e.target.value})} 
                className={`${styles.ipt} ${errors?.last_name && styles.er}`} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label>نام شرکت </label>
                <input value={myOrder.company} onChange={(e) => setMyOrder({...myOrder,company:e.target.value})} className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label>کشور / منطقه <span>*</span></label>
                <input style={{background:"#eee"}} value={"ایران"} disabled className={styles.ipt} />
            </div>

            <p className='w100 mt0 fn14 lightcol flex-between'>
                <span>آدرس</span>
                <button className={styles.btChange} onClick={() => {
                    if(user){
                        setShow(true)
                    }else{
                        setViewLogin(true)
                    }
                }}>انتخاب آدرس</button>
            </p>

            <div style={{width:"48%"}} className={styles.item}>
                <label>استان <span>*</span></label>
                <input style={{background:"#eee"}} disabled value={active.ostanName} className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label> شهر <span>*</span></label>
                <input style={{background:"#eee"}} disabled value={active.cityName} className={styles.ipt} />
            </div>

            <div style={{width:"100%"}} className={styles.item}>
                <label>آدرس <span>*</span></label>
                <input style={{background:"#eee",maxWidth:"98%"}} disabled value={active.description}  className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label>کد پستی <span>*</span></label>
                <input style={{background:"#eee"}} disabled value={active.postalCode} className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label> تلفن <span>*</span></label>
                <input style={{background:"#eee"}} disabled value={active.mobile} className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label> ادرس ایمیل </label>
                <input value={myOrder.email} onChange={(e) => setMyOrder({...myOrder,email:e.target.value})} className={styles.ipt} />
            </div>

        </div>
        
        <Addresses /> 

    </div>
  )
}

export default Detail