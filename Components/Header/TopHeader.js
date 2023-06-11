"use client"
import React, { useContext } from 'react'
import style from "./header.module.css"
import logo from "../../public/images/logoasli.png"
import Image from 'next/image'
import search from "../../public/images/search.png"
import filter from "../../public/images/levels.png"
import user1 from "../../public/images/user.png"
import bag from "../../public/images/bag.png"
import { AuthContext } from '@/Context/AuthContext'
import { CartContext } from '@/Context/CartContext'
import { useRouter } from 'next/navigation'


const TopHeader = () => {
    const {user,logOut} = useContext(AuthContext);
    const {cart} = useContext(CartContext);
    const router = useRouter();

    const logOutHandle = () => {
        logOut()
    }

  return (
    <div className={style.asliHead}>
        <div className='flex-right'>
            <div>
                <Image  src={logo} width={190} height={39} alt="" />
            </div>
            <div>
                <div className={style.contHead}>
                    <Image className={style.icoleft} src={search} width={20} height={20} alt="" />
                    <input className={style.ipSearch} placeholder='کلید واژه مورد نظر ...' />
                    <Image className={style.icoright} src={filter} width={20} height={25} alt="" />
                </div>
            </div>
        </div>
        <div className='flex-left'>
            <div className={style.btPanel}>
                <Image src={user1} width={18} height={18} alt="" />
            </div>
            <div onClick={() => router.push('/cart')} className={style.btBasket}>
                <Image src={bag} width={20} height={20} alt="" />
                <span className={style.basText}>سبد خرید</span>
                <span className={style.bagNum}>{cart.length}</span>
            </div>
        </div>
    </div>
  )
}

export default TopHeader