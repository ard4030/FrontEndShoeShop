import { PaymentContext } from '@/Context/PaymentContext';
import React, { useContext, useState } from 'react'
import styles from "./checkout.module.css"

const PayAction = () => {
    const {paymentMethods,myOrder,setMyOrder,loading,Payment} = useContext(PaymentContext);
    const [first, setfirst] = useState(false)

    const Pay = async () => {
        if(!first) {
            alert("لطفا شرایط و قوانین را تایید نمایید")
            return
        }

        Payment()
        
    }

  return (
    <div className={styles.payaction}>
        {
            paymentMethods && paymentMethods.length > 0 && paymentMethods.map((item,index) => 
            <div key={index} className={styles.payActionItem}>
                <div className='dflex'>
                    <input type={"radio"} checked={myOrder.paymentMethod._id ===item._id ? true : false} onChange={() => setMyOrder({...myOrder,paymentMethod:item})} />
                    <span className='mr5 fn12'>{item.title}</span>
                </div>
                <p className={`${styles.sxj} ${myOrder.paymentMethod._id !== item._id && "dnone" }`}>
                 {item.description}
                </p>
            </div>
            )
        }
        


        <div className={styles.options}>
            <div>
                <input checked={myOrder.factor? true:false}  
                onChange={() => setMyOrder({...myOrder,factor:!myOrder.factor})}
                type="checkbox" />
                <span className='mr5 fn12'> درخواست ارسال فاکتور خرید *</span>
            </div>

            <div>
                <input 
                value={first}
                checked={first?true:false} 
                onChange={() => setfirst(!first)} type="checkbox" />
                <span className='mr5 fn12'> من شرایط و مقررات سایت را خوانده ام و آن را می پذیرم. *</span>
            </div>

            <button onClick={Pay} className={styles.btn}>ثبت سفارش</button>
        </div>
    </div>
  )
}

export default PayAction