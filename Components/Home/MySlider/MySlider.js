"use client"
import Image from "next/image";
import Slider  from "react-slick";
import styles from "./myslider.module.css"
import { GrPrevious } from "react-icons/gr"
import { GrNext } from "react-icons/gr"
import { BASE_URL } from "@/utils/constans";


const MySlider = ({data}) => {
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
    </Slider>
    );
};

export default MySlider;