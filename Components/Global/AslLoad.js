"use client"
import React from 'react'
import { Audio } from  'react-loader-spinner'
import styles from "./global.module.css"

const AslLoad = () => {
  return (
    <div className={styles.aslLoad}>
        <div className={styles.contLoad}>
            
            <Audio
                height = "80"
                width = "80"
                radius = "9"
                color = 'green'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass
            />
            <p>در حال دریافت اطلاعات ... </p>
        </div>
    </div>
  )
}

export default AslLoad