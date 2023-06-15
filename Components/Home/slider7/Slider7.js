"use client"
import React from 'react'
import styles from "./slider.module.css"
import {BsArchive} from "react-icons/bs"
import ItemComp from './ItemComp'

const Slider7 = ({data}) => {

  return (
    <div>
        <div className={styles.header}>
            <div className={styles.titHead}>
                <BsArchive />
                <span>محصولات پرفروش</span>
            </div>

            {/* <div>
                <div className={styles.btn}>
                    <span>
                        <IoIosArrowBack />
                    </span>
                    <span>مشاهده همه</span>
                </div>
            </div> */}
        </div>

        <div className={styles.conting}>
            {
              data.map((item,index) => 
                <ItemComp data={item} index={index} />
              )
            }
        </div>
    </div>
  )
}

export default Slider7