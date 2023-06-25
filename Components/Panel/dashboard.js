"use client"
import React,{useState} from 'react'
import HeaderPanel from './HeaderPanel'
import Menu from './Menu'
import styles from './panel.module.css'
import {MdArrowBackIosNew } from "react-icons/md"
import {AiOutlineInfoCircle} from "react-icons/ai"
import Orders_Dash from './Orders_Dash'
import Detail_dash from './Detail_dash'
import Book_dash from './Book_dash'
import OrdersList_dash from './OrdersList_dash'

const Dashboard = () => {


  return (
    <div className={styles.contentPanel}>
        <Menu />
        <div>
            <HeaderPanel />
            <Orders_Dash />
            <div className={styles.sec3}>
                <Detail_dash />
                <Book_dash />
            </div>
            
            <div className={styles.sec4}>
                <p style={{color:"#555"}}>
                <span style={{color:"black",fontSize:"13px"}}>اطلاعیه : </span>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
                <span className={styles.bv}><AiOutlineInfoCircle/></span>
            </div>

            <OrdersList_dash />
        </div>
    </div>
  )
}

export default Dashboard