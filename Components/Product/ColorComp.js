"use client"
import { ProductCtx } from '@/Context/ProductContext'
import { useContext } from 'react'
import style from './product.module.css'
import {BsCheckLg} from "react-icons/bs"

const ColorComp = ({title,value,index1}) => {
    const {active,changeActive} = useContext(ProductCtx)
    
  return (
    <div className={style.contColor}>
        <span className={style.titleCont}>{title}</span>
        <div className={style.itAtt}>
        {
            value && value.map((item , index) => 
                 <div onClick={() => {changeActive(title,item)}} key={index} className={`${(active && active.addonItem && active.addonItem[index1]?.key === item.key)? style.itemAttrActive :  style.itemAttr} ${style.itemColor}`}>
                  <span>{item.key}</span>
                  <span style={{background:item.value,color:(item.value==="white" || item.value === "#fff" || item.value === "#ffffff") ? "black" : "#fff"}} className={style.circleCol}>
                    {(active && active.addonItem && active.addonItem[index1]?.key === item.key) && <BsCheckLg /> }
                  
                  </span> 
                  {/* {item.quantity} */}
                  </div>
                )
        }
        </div>
    </div>
  )
}

export default ColorComp