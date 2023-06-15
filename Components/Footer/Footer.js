"use client"
import styles from "./footer.module.css"
import fo1 from "../../public/images/fo1.webp"
import fo2 from "../../public/images/fo2.webp"
import fo3 from "../../public/images/fo3.webp"
import fo4 from "../../public/images/fo4.webp"
import fo5 from "../../public/images/fo5.webp"
import fo6 from "../../public/images/fo6.webp"
import fo7 from "../../public/images/fo7.webp"
import {FcInfo} from "react-icons/fc"
import {BsMap} from "react-icons/bs"
import {FiPhoneCall} from "react-icons/fi"

import lg1 from "../../public/images/lg1.webp"
import lg2 from "../../public/images/lg2.webp"
import lg3 from "../../public/images/lg3.webp"
import lg4 from "../../public/images/lg4.webp"
import lg5 from "../../public/images/lg5.webp"


import Image from "next/image"

const Footer = () => {
  return (
    <footer className={styles.footcont} >
      <div className="container">
        <div className={styles.cont}>
            <div className={styles.item}>
                <div className={styles.image}> <Image src={fo1} fill alt="" /></div>
                <span>تحویل اکسپرس</span>
            </div>

            <div className={styles.item}>
                <div className={styles.image}> <Image src={fo2} fill alt="" /></div>
                <span>ضمانت بازگشت</span>
            </div>

            <div className={styles.item}>
                <div className={styles.image}> <Image src={fo3} fill alt="" /></div>
                <span>پرداخت در محل</span>
            </div>

            <div className={styles.item}>
                <div className={styles.image}> <Image src={fo4} fill alt="" /></div>
                <span>تضمین بهترین قیمت</span>
            </div>

            <div className={styles.item}>
                <div className={styles.image}> <Image src={fo5} fill alt="" /></div>
                <span>ضمانت اصل بودن</span>
            </div>

            <div className={styles.item}>
                <div className={styles.image}> <Image src={fo6} fill alt="" /></div>
                <span>ارسال به تمام نقاط</span>
            </div>

            <div className={styles.item}>
                <div className={styles.image}> <Image src={fo7} fill alt="" /></div>
                <span>بسته بندی زیبا</span>
            </div>
        </div>
        <div className={styles.pat}></div>
        <div className={styles.botFot}>
          <div>
            <ul>
              <li>دسترسی سریع</li>
              <li>وبلاگ</li>
              <li>ارتباط با ما</li>
              <li>شورتکد</li>
              <li>پیگیری سفارش</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>خدمات مشتریان</li>
              <li>سوالات متداول</li>
              <li>رویه بازگردانی کالا</li>
              <li>حریم خصوصی</li>
            </ul>
          </div>

          <div className={styles.div3}>
            <h3> 
            <span><FcInfo /></span>
              در باره ماهدیس وب
              
            </h3>
            <p>
            گروه ماهدیس وب از سال 1390 فعالیت خود را در زمینه طراحی و توسعه نرم افزارهای تحت وب با توجه به استانداردها و متدولوژی های روز دنیا و مد نظر قرار دادن ارزش ها و باورهای حرفه ای و نیز مطالعات کیفی و کمی در زمینه سیستم های یکپارچه مدیریت تحت وب , به منظور طرح,توسعه کاربرد نرم افزارهای مبتنی بر وب اغاز نمود.

شرکت طراحی سایت ماهدیس وب با طراحی چندین سایت اینترنتی در زمینه های طراحی سایت با بهره گیری از بروزترین تکنولوژی های طراحی سایت ، سئو و بهینه سازی سایت با افتخار در کنار شماست.
            </p>
            <div className={styles.imager}>
              <div className={styles.parImage}><Image fill src={lg1} alt="" /></div>
              <div className={styles.parImage}><Image fill src={lg2} alt="" /></div>
              <div className={styles.parImage}><Image fill src={lg3} alt="" /></div>
              <div className={styles.parImage}><Image fill src={lg4} alt="" /></div>
              <div className={styles.parImage}><Image fill src={lg5} alt="" /></div>
            </div>
          </div>

          <div className={styles.call}>
            <h4>تماس با ما</h4>
            <div className={styles.det}>
              <span><BsMap /></span>
              <p>همـدان ، خیابان بوعلـی ، کوچه مشکی ، پلاک 10</p>
            </div>
            <div className={styles.det}>
              <span><FiPhoneCall /></span>
              <span className={styles.stx}><span>021-</span>23456788</span>
            </div>
            <div className={styles.email}>alireza@yahoo.com</div>
          </div>
        </div>

      </div>
      <div style={{borderTop: "1px solid #eee"}}>
        <div className="container">
          <p className={styles.ppp}>کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد و هرگونه کپی برداری شامل پیگرد قانونی می باشد.</p>
        </div>
      </div>
    </footer>
  )
  }
export default Footer