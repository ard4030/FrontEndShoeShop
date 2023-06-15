"use client"
import {useState} from 'react'
import Addresses from './Addresses';
import styles from "./checkout.module.css"

const Detail = () => {
    const [open, setOpen] = useState(true);
  return (
    <div className={styles.details}>
        <p className='fn14 lightcol'>جزيیات صورت حساب</p>
        <div className='dflex jsb acenter dwrap'>
            <div style={{width:"48%"}} className={styles.item}>
                <label>نام <span>*</span></label>
                <input className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label>نام خانوادگی <span>*</span></label>
                <input className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label>نام شرکت </label>
                <input className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label>کشور / منطقه <span>*</span></label>
                <input style={{background:"#eee"}} value={"ایران"} disabled className={styles.ipt} />
            </div>

            <p className='w100 mt0 fn14 lightcol'>آدرس</p>

            <div style={{width:"48%"}} className={styles.item}>
                <label>استان <span>*</span></label>
                <input className={styles.ipt} />
                {/* <select>
                    <option>فارس </option>
                    <option>تهران </option>
                </select> */}
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label> شهر <span>*</span></label>
                <input className={styles.ipt} />

                {/* <select>
                    <option>شیراز </option>
                    <option>خاوران </option>
                </select> */}
            </div>

            <div style={{width:"100%"}} className={styles.item}>
                <label>آدرس <span>*</span></label>
                <input style={{maxWidth:"98%"}} className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label>کد پستی <span>*</span></label>
                <input className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label> تلفن <span>*</span></label>
                <input className={styles.ipt} />
            </div>

            <div style={{width:"48%"}} className={styles.item}>
                <label> ادرس ایمیل <span>*</span></label>
                <input className={styles.ipt} />
            </div>

        </div>

        <Addresses />
    </div>
  )
}

export default Detail