import { AddressContext } from '@/Context/AddressContext'
import { CartContext } from '@/Context/CartContext'
import { PaymentContext } from '@/Context/PaymentContext'
import React, { useContext , useState , useEffect } from 'react'
import styles from "./checkout.module.css"
import PayAction from './PayAction'

const Pay = () => {
    const {basketPrice} = useContext(AddressContext);
    const {cart , getCartPrice} = useContext(CartContext);
    const { getAllProductsPrice , myOrder , checkDiscount } = useContext(PaymentContext)


    useEffect(() => {
        // getOrder()
    }, [])
    

  return (
    <div className={styles.details}>
        <p className='fn14 lightcol'>جزيیات صورت حساب</p>

        <div className={styles.contPay}>
            <div className={styles.itemPay}>
                <span className='ireg fn12'>محصول</span>
                <span className='ireg fn12'>جمع جزء</span>
            </div>

            {
                cart && cart.length > 0 && cart.map((item,index) => 

                <div key={index} className={`${styles.itemPay} ${styles.hj} mt15`}>
                    <span className='fn12'>{item.p_name}
                        <span>*{item.count}</span>
                    </span>
                    <span className='fn12'>
                        {item.totalPrice.toLocaleString()}
                        <span style={{marginRight:5}}>تومان</span>
                    </span>
                </div>
                
                )
            }

            
            
            <div className={`${styles.itemPay} ${styles.hj5}`}>
                <span className='ireg fn12'>جمع جزء</span>
                <span className='inum fn12'>
                    {(getCartPrice()).toLocaleString()}
                    <span style={{marginRight:5}}>تومان</span>
                </span>
            </div>

            <div className={`${styles.itemPay} ${styles.hj1}`}>
                <span className='ireg fn12'>حمل و نقل</span>
                {
                    basketPrice ? 
                <span className='inum fn12'>
                    {basketPrice}
                </span>
                    :
                <span className='inum fn12'>
                    هنوز محاسبه نشده
                </span>
                }
                
            </div>

            <div className={`${styles.itemPay} ${styles.hj1}`}>
                <span className='ireg fn12'>تخفیف</span>
                {
                    myOrder.discount && myOrder.discount.type === "darsadi" ?
                <span className='inum fn12'>
                    {myOrder.discount.value}
                    <span style={{marginRight:5}}>درصد</span>
                </span>
                :myOrder.discount && myOrder.discount.type === "naghdi"?

                <span className='inum fn12'>
                    {myOrder.discount.value.toLocaleString()}
                    <span style={{marginRight:5}}>تومان</span>
                </span>

                :

                <span className='inum fn12'>
                    {(0).toLocaleString()}
                    <span style={{marginRight:5}}>تومان</span>
                </span>

                }
                
            </div>

            <div className={`${styles.itemPay} ${styles.hj2}`}>
                <span className='ireg fn12'>مجموع</span>
                <span className={`inum fn12 ${styles.hj3}`}>
                    {
                     parseInt(getAllProductsPrice(basketPrice,getCartPrice(),myOrder.discount)).toLocaleString()
                    }
                    <span style={{marginRight:5}}>تومان</span>
                </span>
            </div>

        </div>

        <PayAction />
    </div>
  )
}

export default Pay