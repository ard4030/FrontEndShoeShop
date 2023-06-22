import Image from 'next/image'
import React from 'react'
import user1 from "../../public/images/user1.jpg"
import styles from './panel.module.css'

const Menu = () => {
  return (
    <div>
        <div className={`dflex acenter w100 mt20 mb20 jcenter dwrap ${styles.asli}`}>
            <div className={styles.userImage}>
                <Image style={{borderRadius:"100px"}} width={90} height={90} alt='' src={user1} />
            </div>

            <div className='mt10 dflex acenter jcenter w100 dwrap'>
                <span className='fn13 defcolor w100 tcenter'>09164524864</span>
                <span className='fn13 defcolor mt5 w100 tcenter'>علی رضا دلبری</span>
            </div>

            <div className={styles.calendar}>
                 <div>
                    <span>1</span>
                    <span>تیر</span>
                 </div>

                 <div>
                    <span>1</span>
                    <span>تیر</span>
                 </div>

                 <div>
                    <span>1</span>
                    <span>تیر</span>
                 </div>

                 <div>
                    <span>1</span>
                    <span>تیر</span>
                 </div>

                 <div>
                    <span>1</span>
                    <span>تیر</span>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Menu