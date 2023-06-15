"use client"
import Slider from 'react-slick';
import styles from './category.module.css'
import { GrPrevious } from "react-icons/gr"
import { GrNext } from "react-icons/gr"
import Image from 'next/image';
import { BASE_URL } from '@/utils/constans';

const CategorySlider = ({data}) => {
    let sliderRef = React.useRef();

    const NextArr = () => {
  
      return(
        <div onClick={() => sliderRef?.current?.slickPrev()} className={styles.lArr}>
          <GrPrevious />
        </div>
      )
    }
  
    const PrevArr = () => {
      
      return(
        <div onClick={() => sliderRef?.current?.slickNext()} className={styles.rArr}>
          <GrNext />
        </div>
      )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        nextArrow: <NextArr />,
        prevArrow : <PrevArr /> ,
      };

  return (
    <Slider ref={sliderRef}  className={styles.xx}  {...settings}>
        {
            data.map((item,index) => 
            <div key={index} className={styles.item}>
                <div className={styles.item1}>
                    <div className={styles.image}>
                      <Image src={`${BASE_URL}${item.image}`} fill alt="" />
                    </div>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.count}>+10 محصول</div>
                </div>
            </div>
            )
        }
    </Slider>
  )
}

export default CategorySlider