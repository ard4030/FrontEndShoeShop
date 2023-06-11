import React from 'react'
import Carousel from './Carousel'
import styles from "./slider.module.css"

const SliderLeft = ({data}) => {

  const slide2 = [
    {id:1,name:"گوشی موبایل اپل مدل iPhone 12 A2404 دو سیم‌ کارت ظرفیت 128 گیگابایت",price:15000000,discount:14440000,link:"",image:"https://demos.mahdisweb.net/digiland/wp-content/uploads/2019/03/aplle-300x300.webp"},
    {id:2,name:"گوشی موبايل اپل مدل iPhone 8 ظرفيت 64 گيگابايت",price:12000000,discount:11800000,link:"",image:"https://demos.mahdisweb.net/digiland/wp-content/uploads/2017/10/11-300x300.jpg"},
    {id:3,name:"لپ تاپ 17 اينچي الين وير مدل 17 AW17R3",price:2300000,discount:2000000,link:"",image:"https://demos.mahdisweb.net/digiland/wp-content/uploads/2017/10/1-5-300x300.jpg"},
  ]
  return (
    <div className={styles.cont}>
      <div className={styles.head}>
        پیشنهاد لحظه ای
      </div>
      <div className={styles.slider}>
          <Carousel data={data} />
      </div>
    </div>
  )
}

export default SliderLeft