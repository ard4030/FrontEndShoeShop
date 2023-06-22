"use client"

import styles from "./slider.module.css"
import {IoIosArrowBack} from "react-icons/io"
import Slider from 'react-slick'
import ItemComp from './ItemComp'
import {TfiRssAlt} from "react-icons/tfi"

const Slider8 = ({data}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: <></>,
        nextArrow: <></>, 
        // rtl:true
      
    };
  return (
    <div>
        <div className={styles.header}>
            <div className={styles.titHead}>
                <TfiRssAlt />
                <span>دانش نامه</span>
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
                {data.map((item,index) => 
                    <ItemComp key={index} data={item} index={index} />
                )}
                
            </Slider>
        </div>
    </div>
  )
}

export default Slider8