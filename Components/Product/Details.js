"use client"
import React,{useState} from 'react'
import CommentUsers from './CommentUsers'
import Moshakhasat from './Moshakhasat'
import styles from "./product.module.css"
import Tozihat from './Tozihat'


const Details = ({data}) => {
    const [active, setActive] = useState({name:"توضیحات",comp:<Tozihat data={data} />})

    
  return (
    <div>
        <div className={styles.detHead}>
            <span 
            className={`${active.name === "توضیحات" && styles.activeMosh}`}
            onClick={() => setActive({name:"توضیحات",comp:<Tozihat data={data}/>})}>توضیحات</span>

            <span 
            className={`${active.name === "مشخصات" && styles.activeMosh}`}
            onClick={() => setActive({name:"مشخصات",comp:<Moshakhasat data={data}/>})}>مشخصات</span>

            <span
            className={`${active.name === "نظرات کاربران" && styles.activeMosh}`}
            onClick={() => setActive({name:"نظرات کاربران",comp:<CommentUsers data={data}/>})}>نظرات کاربران</span>
            <span>سوالات کاربران</span>
            <span>نقد و بررسی</span>
        </div>

        <div className={styles.contDetail}>
            {active.comp}
        </div>
    </div>
  )
}

export default Details