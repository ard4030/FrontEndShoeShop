import Image from 'next/image'
import React from 'react'
import styles from "./takhfif.module.css"
import Timer from './Timer'

const Takhfif = () => {
  return (
    <div className={styles.cont}>
        <div className={styles.contRight}>
            <div className={styles.img}>
                <Image fill src={"https://demos.mahdisweb.net/digiland/wp-content/uploads/2023/03/spring1402.png"} />
            </div>
            <div>
                <h3 className={styles.tx1}>    
                    تخفیف عیدانه همه محصولات 
                    <br/>
                    <span className={styles.tc}>44</span>
                    ٪ تخفیف
                </h3>
                <div>
                    {/* <Timer /> */}
                </div>
            </div>
        </div>

        <div className={styles.contLeft}>
            <div>
                <span>وضعیت</span>
                <span>فعال</span>
            </div>
            <span className={styles.tkh}>cristian</span>
        </div>
    </div>
  )
}

export default Takhfif