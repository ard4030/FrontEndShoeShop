import Image from 'next/image'
import React from 'react'
import styles from "./slider.module.css"
import {BsPlusLg,BsCart,BsHeart,BsArrowLeftRight} from "react-icons/bs"
import { BASE_URL } from '@/utils/constans'

const ItemComp = ({data,index}) => {

  const Pricing = (props) => {
      let priceMe=0;
      let discountMe =0;
      if(props.discount.type === "naghdi"){
        priceMe = parseInt(props.price);
        discountMe = parseInt(props.price) - parseInt(props.discount.value)
      }else{
        priceMe = parseInt(props.price);
        discountMe = ((parseInt(props.price) / 100) * parseInt(props.discount.value)) - parseInt(props.price)
      }
  
      return(
        <div className={styles.price }>
              {
                (parseInt(props.discount.value) > 0) ?
                <>
                <span className={styles.khat}>{parseInt(priceMe).toLocaleString()}</span>
                <span className={styles.disc}>{parseInt(discountMe).toLocaleString()}</span> 
                </>
                :
                <>
                <span className={styles.disc}>{parseInt(priceMe).toLocaleString()}</span>
                </> 
              }
              
              &nbsp;
              <span className={styles.fn1}>تومان</span>
        </div>
      )
  }

  return(
    <div key={index} className={styles.item}>
        <div>
            <div className={styles.image}>
                <Image
                src={`${BASE_URL}${data.images[0]}`}
                fill
                />
            </div>
            <div className={styles.name}>
            {data.p_name}
            </div>

            <div className={styles.footer}>
                <Pricing price={data.priceAsli} discount={data.discount} />

                <div className={styles.rft}>
                    <BsPlusLg />
                </div>

                <div className={styles.itFooter}>
                    <div className={styles.l2}>
                        <span><BsHeart /></span>
                        <span><BsArrowLeftRight /></span>
                    </div>

                    <div className={styles.r2}>
                        <span>افزودن به سبد </span>
                        <span><BsCart /></span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}


export default ItemComp