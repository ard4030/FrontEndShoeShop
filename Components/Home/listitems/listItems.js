"use client"
import style from "./listitems.module.css"
// import im1 from "../../../public/images/list1.png"
// import im2 from "../../../public/images/list2.png"
// import im3 from "../../../public/images/list3.png"
// import im4 from "../../../public/images/list4.png"
// import Image from "next/image"
// import { separate } from "@/modules/functions"
import ImageCom from "./imageCom"
import PriceCom from "./priceCom"
import ColorCom from "./colorCom"
import Link from "next/link"
import { BASE_URL } from "@/utils/constans"

const ListItems = ({data}) => {
 
  return (
    <div className={style.content}>
      <div className="container">
        <div className={style.list}>
          {
            data && data.map((item,index) => 
            <Link href={`/product/${item._id}`} key={index} className={style.card} >
              
              <ImageCom backgroundme={item.background} pic={item.images} />
              <h3>{item.e_name}</h3>
              <PriceCom price={item.priceAsli} discount={item.discount}/>
              {/*  <ColorCom colors={item.colors}/> */}
            </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ListItems