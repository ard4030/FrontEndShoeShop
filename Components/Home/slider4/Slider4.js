"use client"
import Image from 'next/image'
import {useEffect,useState} from 'react'
import Slider from 'react-slick'
import styles from "./slider.module.css"
import {BsCart,BsActivity , BsStar  , BsStarFill} from "react-icons/bs"
import { BASE_URL } from '@/utils/constans'
import Bookmark from '@/Components/Global/Bookmark'
import Rating from 'react-rating'
import Link from 'next/link'

const Slider4 = ({data,data1}) => {
  const [slids, setSlids] = useState([]);
  const [cats,setCats] = useState([]);


  useEffect(() => {
    
    let x = [];
    data1.map(item => {
        item.subcategories.map(item1 => {
            if(item1.parent === null && !x.includes(JSON.stringify(item1))){
                x.push(JSON.stringify(item1))
            }
        })
    })
    setSlids(data1.filter(item => item.paName === JSON.parse(x[0]).title))
    setCats(x)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <></>, 
  };

  const Changing = (id) => {
    let x = [];
    data1.map(item => {
        item.subcategories.map(item1 => {
            if(item1._id === id){
                x.push(item)
            }
        })
    })
    setSlids(x)

  }

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

  return (
    <div className={styles.content}>
        <div className={styles.left}>

            {
                cats.map((item,index) => 
                <button
                key={index} 
                onClick={() => {Changing(JSON.parse(item)._id)}}
                className={slids && slids.length > 0 && slids[0].paName === JSON.parse(item).title && styles.active}>{JSON.parse(item).title}</button>
                )
            }

        </div>

        <div className={styles.right}>
            <Slider className={styles.xx}  {...settings}>
                {
                    slids && slids.map((item,index) => 
                    <div  className={styles.mySli} key={index}>
                        <div>
                            <Link href={`/product/${item._id}`}>
                              <div className={styles.image}>
                                  <Image src={`${BASE_URL}${item.images[0]}`} fill alt={item.name} />
                              </div>
                              <Pricing price={item.priceAsli} discount={item.discount} />
                              <div className={styles.name}>
                                  {item.p_name}
                              </div>
                            </Link>

                            <footer>
                                <div className={styles.icons}>
                                    <span><BsCart /></span>
                                    <span><BsActivity /></span>
                                    <Bookmark productId={item._id} />
                                </div>
                                <div className={styles.stars}>
                                    {/* <span><BsStar /></span>
                                    <span><BsStar /></span>
                                    <span><BsStar /></span>
                                    <span><BsStar /></span>
                                    <span><BsStar /></span> */}
                                    
                                    <Rating
                                      initialRating={item.rate}
                                      emptySymbol={<BsStar style={{color:"gold"}} />}
                                      fullSymbol={<BsStarFill style={{color:"gold"}} />}
                                      readonly
                                    />
                                </div>
                            </footer>
                        </div>
                    </div>
                    )
                }
            </Slider>
        </div>
    </div>
  )
}

export default Slider4