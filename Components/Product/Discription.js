import React from 'react'
import styles from "./product.module.css"
import {BsBell} from "react-icons/bs"

const Discription = () => {
  return (
    <div className={styles.dess1}>
        <div className={styles.dess}>
            <span>آیا قیمت مناسب‌تری سراغ دارید؟</span>
            <div className='mr15'>
                <span>بلی</span>
                <span>&nbsp; | &nbsp;</span>
                <span>خیر</span>
            </div>
        </div>
        <p>
            <span><BsBell /></span>
            هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را گرفته و حتما در حضور ایشان، دستگاه را از طریق #7777*، برای سیمکارت خود فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی hmti.ir/06 امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمپ کالا باز نشده باشد.
        </p>
    </div>
  )
}

export default Discription