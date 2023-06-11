import Image from 'next/image'
import React from 'react'
import styles from "./product.module.css"
import Rating from 'react-rating';
import {BsStar,BsStarFill} from "react-icons/bs"

const Brands = ({data}) => {
  console.log(data)
  return (
    <div className={styles.cost}>
        <div className={styles.brands}>
            <div>
                <div className={styles.bransimage}><Image src={"https://demos.mahdisweb.net/digiland/wp-content/uploads/2018/02/huawei.png"} fill alt='' /></div>
                <span>هواوی</span>
            </div>
        </div>

        <div>
          <div>
            <Rating
            initialRating={data.avgRate}
            emptySymbol={<BsStar style={{color:"gold"}} />}
            fullSymbol={<BsStarFill style={{color:"gold"}} />}
            readonly
          />
          </div>
          <span className='fn12 lightcol mauto dblock tcenter inum'>
            دیدگاه {data.comments.length} کاربر
          </span>
        </div>
    </div>
    
  )
}

export default Brands