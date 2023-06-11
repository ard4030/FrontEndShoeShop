import React from 'react'
import styles from "./tabligh.module.css"
import {IoIosArrowBack} from "react-icons/io"

const Tabligh = () => {
  return (
    <div className={styles.cont}>
        <div>
          <h3>انواع موبایل و تبلت</h3>
          <p>از معتبر ترین برند های جهان</p>
          <div>
            <span>مشاهده و خرید</span>
            <span className={styles.bst}><IoIosArrowBack /></span>
          </div>
        </div>
    </div>
  )
}

export default Tabligh