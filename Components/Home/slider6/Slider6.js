"use client"
import React from 'react'
import styles from "./slider.module.css"
import {BsCartPlus} from "react-icons/bs"
import {IoIosArrowBack} from "react-icons/io"
import Slider from 'react-slick'
import ItemComp from './ItemComp'

const Slider6 = ({data}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: data.length > 5 ? 5 : data.length,
        slidesToScroll: 2,
        prevArrow: <></>,
        nextArrow: <></>, 
        // rtl:true
      
    };
  return (
    <div>
        <div className={styles.header}>
            <div className={styles.titHead}>
                <BsCartPlus />
                <span>جدید ترین محصولات</span>
            </div>

            <div>
                <div className={styles.btn}>
                    <span>
                        <IoIosArrowBack />
                    </span>
                    <span>مشاهده همه</span>
                </div>
            </div>
        </div>
        <div>
            <Slider className={styles.xx}  {...settings}>
                {
                    data.length > 0 && data.map((item,index) => 
                        <ItemComp data={item} key={index} index={index} />
                    )
                }
                
            </Slider>
        </div>
    </div>
  )
}

export default Slider6