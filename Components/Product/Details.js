"use client"
import {useState} from 'react'
import CommentUsers from './CommentUsers'
import Moshakhasat from './Moshakhasat'
import Naghd from './Naghd'
import Porsesh from './Porsesh'
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
            
            <span
             className={`${active.name === "سوالات کاربران" && styles.activeMosh}`}
             onClick={() => setActive({name:"سوالات کاربران",comp:<Porsesh data={data}/>})}>سوالات کاربران</span>

            <span
            className={`${active.name === "نقد و بررسی" && styles.activeMosh}`}
            onClick={() => setActive({name:"نقد و بررسی",comp:<Naghd data={data}/>})}>نقد و بررسی</span>
        </div>

        <div className={styles.contDetail}>
            {active.comp}
        </div>
    </div>
  )
}

export default Details