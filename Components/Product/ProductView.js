"use client"
import { CartContext } from '@/Context/CartContext';
import { ProductCtx } from '@/Context/ProductContext'
import React,{useContext, useEffect} from 'react'
import SmallLoad from '../Global/SmallLoad';
import ImageCom from '../Home/listitems/imageCom';
import Addcart from './Addcart';
import Attr from './Attr';
import Brands from './Brands';
import Cat from './Cat';
import ColorComp from './ColorComp';
import Details from './Details';
import Discription from './Discription';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Others from './Others';
import Price from './Price';
import styles from "./product.module.css"
import Timer from './Timer';
import Title from './Title';
import VizhAsli from './VizhAsli';


const ProductView = ({data}) => {
  const {initActive,active} = useContext(ProductCtx);
  const {addToCart,cart,addCount,loading,deleteCount} = useContext(CartContext)

  useEffect(() => {
    initActive(data)
  }, [])

  return (
    <div className={`${styles.productContent}`}>
      <div className='container pt5'>
        <Navbar data={data.parents} title={data.p_name} id={data._id}/>
        <div className={`dflex jsb ${styles.detail} mt20`}>

          <div>
            <Timer />
            <Gallery images={data.images} />
          </div>

          <div>
            <Title p_name={data.p_name} e_name={data.e_name} />
            <Cat />
            <VizhAsli data={data.technicalSpecifications} />
            <>
              {
                active ?
                <>
                  <Price />
                  {
                    data && data.addonItem.map((item,index) => {
                      if(item.title === "رنگ بندی"){
                        return <ColorComp key={index} title={item.title} value={item.specs} index1={index} />
                      } else {
                        return <Attr key={index} title={item.title} value={item.specs} index1={index} />
    
                      }
                    })
                  }
                
                  <Addcart data={data} />
                </>
                :
                <SmallLoad width={"100px"} height={"100px"} />
              }
            </>
            <Discription />
          </div>

          <div>
            <Brands />
            <Others />
          </div>
        </div>
      </div>

      <div className='container pt5 mt20'>
        <Details data={data} />
      </div>        
    </div>
  )
}

export default ProductView

          {/* <div>
            <h2>{data.p_name}</h2>
            <ImageCom pic={data.images} />
            {
              data && data.addonItem.map((item,index) => 
              <Attr key={index} title={item.title} value={item.specs} index1={index} />
              )
            }
            <Btns />  
          </div> */}