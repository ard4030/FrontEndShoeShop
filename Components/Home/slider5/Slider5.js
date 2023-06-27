"use client"
import styles from "./slider5.module.css"
import Slider from "react-slick";
import Image from 'next/image';
import {BsCart} from "react-icons/bs"
import { BASE_URL } from '@/utils/constans';


function Slider5({slides,data1}) {
  // console.log(data1[0].technicalSpecifications[0].specs)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    prevArrow: <></>,
    nextArrow: <></>,
  };

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
      <div className={styles.pricing }>
          <div className={styles.price }>
              <span className={styles.khat}>{parseInt(priceMe).toLocaleString()}</span>
              <span className={styles.disc}>{parseInt(discountMe).toLocaleString()}</span>
              &nbsp;
              <span className={styles.fn1}>تومان</span>
          </div>
          <div className={styles.bs}>
            <BsCart />
        </div>
      </div>


    )
  }

  return (
    <div className={styles.mSl}>
      <Slider {...settings} className={styles.xx}>

        {
          data1.length > 0 ? data1.map((item,index) => 
          <div key={index} className={styles.sl}>
            <div className={styles.contAsli}>
              <div className={styles.slLeft}>
                <span className={styles.save}>{item.discount.value}%</span>
                <div className={styles.tit}><span>شگفت انگیز</span></div>
                <div className={styles.imgs}>
                  <Image className={styles.image} fill src={`${BASE_URL}${item.images[0]}`} alt="s" />
                </div>
              </div>

              <div className={styles.slRight}>
                  <div className={styles.name}>
                  {item.p_name}
                  </div>

                  <div className={styles.vizh}>
                    <ul>
                      {
                      item.technicalSpecifications.map((item,index) => {
                       return item.specs.map((item1,index1) => {
                         return <li key={index1}>
                            <span>{item1.key}</span>
                            <span>:</span>
                            <span>{item1.value}</span>
                          </li>
                        })
                      })
                      }
                    </ul>
                  </div>

                  <Pricing price={item.priceAsli} discount={item.discount} />
                  
                  <div className={styles.timer}>
                    {/* <MyTimer startD={item.discount.start_data} endD={item.discount.end_date} />  */}
                  </div>
              </div>
            </div>
          </div>
          )
          :
          <div className={styles.sl}>
            <div className={styles.contAsli}>
              محصولی موجود نیست
            </div>
          </div>
        }
        
      </Slider>
    </div>
  );
}

export default Slider5;
