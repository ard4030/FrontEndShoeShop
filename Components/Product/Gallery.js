"use client"
import { BASE_URL } from '@/utils/constans';
import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import styles from './product.module.css';
import {BsInfoCircle} from "react-icons/bs"

const Gallery = ({ images }) => {
  const [active, setActive] = useState(images[0]);
  let sliderRef = React.useRef();


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: (images.length < 4) ? images.length : 4,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow : <></> 
  };

  return (
    <div className={styles.contGall}>
      <div className={styles.mainImg}>
        <Image src={`${BASE_URL}${active}`} alt="Selected" fill />
      </div>
      <div className={styles.thumbImg}>
        <Slider ref={sliderRef} className={styles.xx}  {...settings}>
        {
            images.map((item,index) => 
            <div onClick={() => setActive(item)} className={styles.conting}>
                <div className={`${styles.sliImage} ${active === item && styles.actItem}`} key={index}>
                    <Image src={`${BASE_URL}${item}`} fill={true} alt="" />
                </div>
            </div>
            )
        }
            </Slider>
      </div>
      <p className={styles.nador}>
        <span><BsInfoCircle /></span>
        گزارش نادرستی مشخصات
      </p>
    </div>
  );
};

export default Gallery;