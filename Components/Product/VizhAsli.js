import React from 'react'
import styles from "./product.module.css"
import {IoIosArrowBack} from "react-icons/io"

const VizhAsli = ({data}) => {
  return (
    <div className={styles.vizhAsl}>
        <ul>
            {
            data.map((item,index) => {
            return item.specs.map((item1,index1) => {
                return <li key={index1}>
                <span>{item1.key}</span>
                <span>&nbsp;:&nbsp;</span>
                <span>{item1.value}</span>
                </li>
            })
            })
            }
        </ul>
        <div className={styles.opt}>
            <span> <IoIosArrowBack /></span>
            <span>بیشتر</span>
            <span></span>
        </div>
    </div>
  )
}

export default VizhAsli