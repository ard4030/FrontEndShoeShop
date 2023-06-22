"use client"
import HeadCart from '../Global/HeadCart'
import styles from "./checkout.module.css"
import{BiWindow} from "react-icons/bi"
import Detail from './Detail'
import Pay from './Pay'
import { useContext, useState } from 'react'
import { PaymentContext } from '@/Context/PaymentContext'
import AslLoad from '../Global/AslLoad'
import { AddressContext } from '@/Context/AddressContext'

const CheckOutView = () => {
  const {checkDiscount,loading} = useContext(PaymentContext);
  const {loading:loading1} = useContext(AddressContext)
  const [discount,setDiscount] = useState("");
  const [enable,setEnable] = useState(false);

  return (
    <>
      <div className={styles.checkout}>
        <HeadCart data={"hesab"} />
        <div className={styles.content}>

          <div onClick={() => setEnable(!enable)} className={`${styles.takhfif} w100`}>
            <span><BiWindow /></span>
            <span>کد تخفیف دارید ؟ </span>
            <span>برای نوشتن کد اینجا کلیک کنید</span>
          </div>

          {
            enable &&  <div className={styles.contTakhfif}>
              <span className={styles.lblTakhfif}>کد تخفیف:</span>
              <div>
                  <input value={discount} onChange={(e) => setDiscount(e.target.value)} />
                  <span onClick={() => checkDiscount(discount)}>اعمال کد تخفیف</span>
              </div>
            </div> 
          }

          <Detail />
          <Pay />
          
        </div> 
      </div>
      {loading && <AslLoad />}
      {loading1 && <AslLoad />}
    </>
    
  )
}

export default CheckOutView