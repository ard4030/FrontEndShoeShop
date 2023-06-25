"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import user1 from "../../public/images/user1.jpg"
import styles from './panel.module.css'
import {BsShopWindow , BsBagCheck , BsFileEarmarkCheck , BsBell , BsHeart} from "react-icons/bs"
import {FiShoppingBag} from "react-icons/fi"
import {VscDashboard} from "react-icons/vsc"
import {MdOutlineSimCardAlert} from "react-icons/md"
import {FaRegCommentDots} from "react-icons/fa"
import {BiHomeAlt2} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import {RxExit} from "react-icons/rx"
import { usePathname, useRouter } from 'next/navigation'
import { AuthContext } from '@/Context/AuthContext'
import Calc from './Calc'



const Menu = () => {
   const pathName = usePathname(); 
   const {user} = useContext(AuthContext)
   const router = useRouter();

  return (
    <div>
        <div className={`dflex acenter w100 mt20 mb20 jcenter dwrap ${styles.asli}`}>
            <div className={styles.userImage}>
                <Image style={{borderRadius:"100px"}} width={90} height={90} alt='' src={user1} />
            </div>

            <div className='mt10 dflex acenter jcenter w100 dwrap'>
                <span className='fn13 defcolor w100 tcenter'>{user && user.mobile}</span>
                <span className='fn13 defcolor mt5 w100 tcenter'>{user && user.firts_name}</span>
            </div>

            <Calc />

            <div className={styles.sec1}>
               <div>
                  <span className='flex-center fn18 ml10'><BsShopWindow /></span>
                  <span className='fn12'>فروشگاه</span>
               </div>

               <div onClick={() => router.push('/cart')} className='mt10'>
                  <span className='flex-center fn18 ml10'><FiShoppingBag /></span>
                  <span className='fn12'>سبد خرید</span>
               </div>
            </div>

            <div className={styles.sec2}>
               <div onClick={() => router.push('/panel/dashboard')} className={`${(pathName === "/panel/dashboard") && styles.act}`}>
                  <span className='flex-center fn18 ml10'><VscDashboard /></span>
                  <span className='fn12'>پیشخوان</span>
               </div>

               <div onClick={() => router.push('/panel/orders')} className={`${(pathName === "/panel/orders") && styles.act} mt10`}>
                  <span className='flex-center fn18 ml10'><BsBagCheck /></span>
                  <span className='fn12'>سفارش ها</span>
               </div>

               <div className='mt10'>
                  <span className='flex-center fn18 ml10'><BsFileEarmarkCheck /></span>
                  <span className='fn12'>دانلود ها</span>
               </div>

               <div className='mt10'>
                  <span className='flex-center fn18 ml10'><MdOutlineSimCardAlert /></span>
                  <span className='fn12'>اطلاعیه ها</span>
               </div>

               <div onClick={() => router.push('/panel/comments')} className={`${(pathName === "/panel/comments") && styles.act} mt10`}>
                  <span className='flex-center fn18 ml10'><FaRegCommentDots /></span>
                  <span className='fn12'>دیدگاه ها</span>
               </div>

               <div className='mt10'>
                  <span className='flex-center fn18 ml10'><BsBell /></span>
                  <span className='fn12'>اطلاع رسانی ها</span>
               </div>

               <div onClick={() => router.push('/panel/favorite')} className={`${(pathName === "/panel/favorite") && styles.act} mt10`}>
                  <span className='flex-center fn18 ml10'><BsHeart /></span>
                  <span className='fn12'>علاقه مندی ها</span>
               </div>

               <div onClick={() => router.push('/panel/address')} className={`${(pathName === "/panel/address") && styles.act} mt10`}>
                  <span className='flex-center fn18 ml10'><BiHomeAlt2 /></span>
                  <span className='fn12'>آدرس ها</span>
               </div>

               <div onClick={() => router.push('/panel/edit')} className={`${(pathName === "/panel/edit") && styles.act} mt10`}>
                  <span className='flex-center fn18 ml10'><AiOutlineUser /></span>
                  <span className='fn12'>اطلاعات حساب</span>
               </div>

               <div className='mt10 mb10'>
                  <span className='flex-center fn18 ml10'><RxExit /></span>
                  <span className='fn12'>خروج</span>
               </div>

               
            </div>
        </div>
    </div>
  )
}

export default Menu