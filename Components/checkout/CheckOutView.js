"use client"
import HeadCart from '../Global/HeadCart'
import styles from "./checkout.module.css"
import{BiWindow} from "react-icons/bi"
import Detail from './Detail'

const CheckOutView = () => {
  return (
    <div className={styles.checkout}>
      <HeadCart data={"hesab"} />
      <div className={styles.content}>

        <div className={`${styles.takhfif} w100`}>
          <span><BiWindow /></span>
          <span>کد تخفیف دارید ؟ </span>
          <span>برای نوشتن کد اینجا کلیک کنید</span>
        </div>

        <Detail />
        
      </div> 
    </div>
  )
}

export default CheckOutView