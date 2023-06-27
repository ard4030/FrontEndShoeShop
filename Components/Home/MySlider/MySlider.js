"use client"
import Image from "next/image";
import Slider  from "react-slick";
import styles from "./myslider.module.css"
import { GrPrevious } from "react-icons/gr"
import { GrNext } from "react-icons/gr"
import { BASE_URL } from "@/utils/constans";
import { useRef } from "react";


const MySlider = ({data}) => {
  let sliderRef = useRef();

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
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArr />,
    prevArrow : <PrevArr /> 
  };

  return (
    <Slider ref={sliderRef} className={styles.xx}  {...settings}>
      {
        data.map((item,index) => 
        <div className={styles.mySli} key={index}>
          <Image style={{boxShadow:"0px 0px 10px #d2cfcf"}} src={`${BASE_URL}${item.image}`} fill={true} alt="" />
        </div>
        )
      }
      
      {
      data.length < 1 && 
      <div className={`${styles.mySli} ${styles.emp}`}>
          <p>هنوز از سمت مدیر عکسی قرار نگرفته</p>
      </div>
      }
    </Slider>
    );
};

export default MySlider;