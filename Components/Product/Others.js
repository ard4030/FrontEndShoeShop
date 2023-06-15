
import styles from "./product.module.css"
import {BiTask} from "react-icons/bi"
import {BsCheck2Square , BsTruck , BsHeart} from "react-icons/bs"
import {TbArrowsShuffle2} from "react-icons/tb"
import Image from 'next/image'
import ProductBookmark from './ProductBookmark'

const Others = ({data}) => {
  return (
    <div>
        <div className={styles.contOther}>
            <span><BiTask /></span>
            <span>تاریخ بروزرسانی : </span>
            <span>17</span>
            <span>تیر</span>
            <span>1401</span>
        </div>

        <div className={styles.contOther1}>
            <span><BsCheck2Square/></span>
            <span>موجود است</span>
        </div>

        <div className={styles.contOther1}>
            <span style={{color:"#bfa7a7"}}><BsTruck/></span>
            <span>ارسال از 3 روز کاری آینده</span>
        </div>

        <div className={styles.mogh}> 
            <div>
                <span><TbArrowsShuffle2 /></span>
                <span> مقایسه</span>
            </div>

            <ProductBookmark productId={data._id} />
        </div>

        <div className={styles.tabl}>
            <div>
                <div className={styles.tbImage}>
                    <Image fill alt='' src={"https://demos.mahdisweb.net/digiland/wp-content/uploads/2021/09/price-tag-1.png.webp"}/>
                </div>
                <span>تضمین بهترین قیمت</span>
            </div>

            <div>
                <div className={styles.tbImage}>
                    <Image fill alt='' src={"https://demos.mahdisweb.net/digiland/wp-content/uploads/2021/09/shield-1.png.webp"}/>
                </div>
                <span>ضمانت اصل بودن</span>
            </div>

            <div>
                <div className={styles.tbImage}>
                    <Image fill alt='' src={"https://demos.mahdisweb.net/digiland/wp-content/uploads/2021/09/delivery-truck-3.png.webp"}/>
                </div>
                <span>تحویل اکسپرس</span>
            </div>

            <div>
                <div className={styles.tbImage}>
                    <Image fill alt='' src={"https://demos.mahdisweb.net/digiland/wp-content/uploads/2021/09/gift-2.png.webp"}/>
                </div>
                <span>بسته بندی زیبا</span>
            </div>
        </div>
    </div>
  )
}

export default Others