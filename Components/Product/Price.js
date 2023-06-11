"use client"

import { ProductCtx } from '@/Context/ProductContext';
import { useContext } from 'react'
import style from './product.module.css'

const Price = () => {
  const {getPrice,active} = useContext(ProductCtx);

  return (
    <>
    {
      active && 
      <div className={style.contPrice}>
        <span>{getPrice().toLocaleString()}</span>
        <span>تومان</span>
     </div>
    }
    </>
    
  )

}

export default Price