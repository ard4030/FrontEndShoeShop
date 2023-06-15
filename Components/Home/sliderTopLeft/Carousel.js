"use client"
import styles from "./carousel.module.css"
import Slider  from "react-slick";
import Image from 'next/image';
import { GrPrevious } from "react-icons/gr"
import { GrNext } from "react-icons/gr"
import { BASE_URL } from '@/utils/constans';
import Link from 'next/link';
import { useRef } from "react";


const Carousel = ({data}) => {
  let sliderRef = useRef();


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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArr />,
    prevArrow : <PrevArr /> 
  };

  return (
    <Slider ref={sliderRef}  className={styles.xx}  {...settings}>
      {
        data.map((item,index) => 
        <Link  href={`/product/${item._id}`} className={styles.mySli} key={index}>
          <div className={styles.imgSty}>
           <Image src={`${BASE_URL}${item.images[0]}`} fill={true} alt=""  />
          </div>
          <p className={styles.title}>{item.p_name}</p>
          <Pricing price={item.priceAsli} discount={item.discount} />
        </Link>
        )
      }
    </Slider>
  )
}

export default Carousel