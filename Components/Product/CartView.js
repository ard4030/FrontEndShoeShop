"use client"
import { useContext } from 'react'
import styles from "./product.module.css"
import {GrFormClose} from "react-icons/gr"
import{BiMinus} from "react-icons/bi"
import{BsPlusLg } from "react-icons/bs"
import {TiDeleteOutline} from "react-icons/ti"
import { CartContext } from '@/Context/CartContext'
import Image from 'next/image'
import { BASE_URL } from '@/utils/constans'
import { useRouter } from 'next/navigation'
import Free from '../Global/Free'

const CartView = () => {
    const {cart,show,setShow,addCount,deleteCount,deleteItem,getCartPrice} = useContext(CartContext);
    const router = useRouter();
    
    
  return (
    <div style={{transform:`${show === true ? "translateX(0%)" : "translateX(100%)"}`}} className={styles.cartView}>
        <div className={styles.childCartView}>
            <div className={styles.headViewCart}>
                <div className='dflex acenter pr15'>
                    <span>سبد خرید</span>
                    <span className={styles.countO}>{cart.length}</span>
                </div>

                <span onClick={() => {setShow(false)}} className='flex-center fn20 pl15'><GrFormClose /></span>
            </div>

            <div>
                <ul>
                    {
                        cart && cart.length > 0 && cart.map((item,index) => 
                        <li key={index}>
                            <div className={styles.cartImage}>
                                <Image alt='' fill src={`${BASE_URL}${item.image[0].images[0]}`}  />
                                <span onClick={() => {deleteItem(item._id)}} className={styles.delIt}><TiDeleteOutline /></span>
                            </div>
                            <div className={styles.contingCart}>
                                <span>{item.p_name}</span>
                                <div style={{marginTop:"7px"}} className='flex-between'>
                                    <span>
                                        <span className={styles.lblprice}>{item.totalPrice.toLocaleString()}</span>
                                        <span className='ilight fn10'>تومان</span>
                                    </span>

                                    <div className={`flex-between ${styles.myCounting}`}>
                                        <span onClick={() => {
                                            addCount(JSON.parse(item.addonItem),item.productId)
                                        }}>
                                            <BsPlusLg />
                                        </span>
                                        <span>{item.count}</span>
                                        <span onClick={() => {
                                            deleteCount(JSON.parse(item.addonItem),item.productId)
                                        }}>
                                            <BiMinus />
                                        </span>
                                    </div>
                                </div>
                            </div>
                         </li>
                        )
                     }
                </ul>
            </div>    

            <div className={styles.result}>
                <div className='flex-between fn12'>
                    <span>جمع کل سبد خرید :</span>
                    <span><span className='actColor inum'>{getCartPrice().toLocaleString()}</span> تومان</span>
                </div>
                <Free />

                <div className={styles.botCartView}>
                    <div onClick={() => {
                        setShow(false)
                        router.push('/cart')}}>مشاهده سبد خرید</div>
                    <div>تسویه حساب</div>
                </div>
            </div>
        </div>
        <div className={styles.closing} onClick={() => {setShow(false)}}></div>
    </div>
  )
}

export default CartView
