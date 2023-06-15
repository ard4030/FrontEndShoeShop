import Image from 'next/image'
import React from 'react'
import styles from "./slider.module.css"
import {BsStar} from "react-icons/bs"

const ItemComp = ({data,index}) => {

  return(
    <div key={index} className={styles.item}>
        <div className={styles.imaging}>
            <Image src={data.image} fill alt="" />
        </div>

        <div className={styles.lefting}>
            <span className={styles.number}>{index + 1}</span>
            <h5>{data.name}</h5>
            <div className={styles.footing}>
                <div className={styles.price }>
                    <span className={styles.khat}>{parseInt(1200000).toLocaleString()}</span>
                    <span className={styles.disc}>{parseInt(1800000).toLocaleString()}</span>
                    &nbsp;
                    <span className={styles.fn1}>تومان</span>
                </div>
                <div className={styles.star}>
                    <span>{data.rate}</span>        
                    <span><BsStar /></span>
                </div>   
            </div>
        </div>
    </div>
  )
}


export default ItemComp