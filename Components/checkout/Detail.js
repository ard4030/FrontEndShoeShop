"use client"
import { AddressContext } from '@/Context/AddressContext';
import { AuthContext } from '@/Context/AuthContext';
import {useContext, useState} from 'react'
import Addresses from './Addresses';
import styles from "./checkout.module.css"

const Detail = () => {
    const{setShow,active} = useContext(AddressContext)
    const {user,setViewLogin} = useContext(AuthContext)
    const [fields, setFields] = useState({
        first_name:"",
        last_name:"",
        company:""
      });
  return (
    <div className={styles.details}>
        <p className='fn14 lightcol'>جزيیات صورت حساب</p>
        <div className='dflex jsb acenter dwrap'>
            <div style={{width:"48%"}} className={styles.item}>
                <label>نام <span>*</span></label>
                <input value={fields.first_name} onChange={(e) => setFields({...fields,first_name:e.target.value})} className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label>نام خانوادگی <span>*</span></label>
                <input value={fields.last_name} onChange={(e) => setFields({...fields,last_name:e.target.value})} className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label>نام شرکت </label>
                <input value={fields.company} onChange={(e) => setFields({...fields,company:e.target.value})} className={styles.ipt} />
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
                {/* <select>
                    <option>فارس </option>
                    <option>تهران </option>
                </select> */}
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label> شهر <span>*</span></label>
                <input style={{background:"#eee"}} disabled value={active.cityName} className={styles.ipt} />

                {/* <select>
                    <option>شیراز </option>
                    <option>خاوران </option>
                </select> */}
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
                <label> ادرس ایمیل <span>*</span></label>
                <input style={{background:"#eee"}} disabled className={styles.ipt} />
            </div>

        </div>
        
        <Addresses /> 

    </div>
  )
}

export default Detail