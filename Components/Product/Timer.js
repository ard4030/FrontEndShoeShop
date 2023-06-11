import React from 'react'
import styles from "./product.module.css"

const Timer = () => {
  return (
    <div className={styles.contTime}>
        <div className={styles.titSl}> 
            <span>پیشنـهاد شگفت انگیـز</span>
            <span>فرصت باقی مانده</span>
        </div>

        <div className={styles.contStr}>
            <div className={styles.fgt}>
                <span>12</span>
                <span>ثانیه</span>
            </div>

            <div>
                <span>14</span>
                <span>دقیقه</span>
            </div>

            <div>
                <span>5</span>
                <span>ساعت</span>
            </div>

            <div>
                <span>1</span>
                <span>روز</span>
            </div>
            
        </div>
    </div>
  )
}

export default Timer