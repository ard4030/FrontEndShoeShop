"use client"
import { ProductCtx } from '@/Context/ProductContext'
import { useContext } from 'react'
import style from './product.module.css'

const Attr = ({title,value,index1}) => {
    const {active,changeActive,basking} = useContext(ProductCtx)
    
  return (
    <div className={style.contColor}>
        <span className={style.titleCont}>{title}</span>
        <div className={style.itAtt}>
        {
            value && value.map((item , index) => 
                 <div onClick={() => {changeActive(title,item)}} key={index} className={`${(active && active.addonItem && active.addonItem[index1]?.key === item.key)&& style.itemAttrActive1} ${style.itemColor1} `}>
                  <span>{item.key}</span>
                  
                  {/* {item.quantity} */}
                  </div>
                )
        }
        </div>
    </div>
  )
}

export default Attr