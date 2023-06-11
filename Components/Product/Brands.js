import Image from 'next/image'
import React from 'react'
import styles from "./product.module.css"

const Brands = () => {
  return (
    <div className={styles.brands}>
        <div>
            <div className={styles.bransimage}><Image src={"https://demos.mahdisweb.net/digiland/wp-content/uploads/2018/02/huawei.png"} fill alt='' /></div>
            <span>هواوی</span>
        </div>
    </div>
  )
}

export default Brands