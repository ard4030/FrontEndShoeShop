import { useContext } from 'react'
import styles from "./product.module.css"
import {BsCartCheck , BsPlus , BsDash} from "react-icons/bs"
import { CartContext } from '@/Context/CartContext'
import { ProductCtx } from '@/Context/ProductContext'

const Addcart = ({data}) => {
    const {addToCart,getIsBasking,addCount,deleteCount,setShow,show} = useContext(CartContext)
    const {active} = useContext(ProductCtx)
    let is  = getIsBasking(active);

  return (
    <div>
        {
            (is) ?
            <div  className={styles.contCart1}>
                <span><BsCartCheck /></span>
                <span className={styles.ising}>
                    <button onClick={() => {
                        addCount(active && active.addonItem,data._id);
                        setShow(true)
                    }}><BsPlus /></button>
                    <span>{is.count}</span>
                    <button onClick={() => {
                        deleteCount(active && active.addonItem,data._id);
                        setShow(true)
                    }}><BsDash /></button>
                </span>
            </div>
            
            :

            <div onClick={() => {
                addToCart(active && active);
                setShow(true)
                }} className={styles.contCart}>
                <span><BsCartCheck /></span>
                <span>افزودن به سبد خرید</span>
            </div>
            
        }
        
    </div>
  )
}

export default Addcart