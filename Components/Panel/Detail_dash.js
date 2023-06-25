import React, { useContext } from 'react'
import styles from "./panel.module.css"
import {MdArrowBackIosNew} from "react-icons/md"
import { AuthContext } from '@/Context/AuthContext'
import { DateObject } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"


const Detail_dash = () => {
    const {user} = useContext(AuthContext);
    const date1 = new DateObject(user.createdAt).convert(persian, persian_fa)

  return (
    <div>
                    
        <div className={styles.headSec}>
            <span>اطلاعات شخصی</span>
            <div className={styles.st1}>
                <span className='flex-center'><MdArrowBackIosNew /></span>
                <span className='fn10'>ویرایش اطلاعات</span>
            </div>
        </div>

        <div className={styles.profItem}>
            <div>
                <span className='lightcol'>نام و نام خانوادگی</span>
                <span className='fn13'>{user && user.firts_name}</span>
            </div>

            <div>
                <span className='lightcol'>شماره موبایل</span>
                <span className='inum fn13'>{user && user.mobile}</span>
            </div>

            <div>
                <span className='lightcol'>ایمیل</span>
                <span>{user && user.email}</span>
            </div>

            <div>
                <span className='lightcol'>عضویت</span>
                <span className='dflex acenter fn13'>
                        <span className='inum ml10'>{date1.day}</span>
                        <span className='inum ml10'>{date1.month.name}</span>
                        <span className='inum ml10'>{date1.year}</span>
                </span>
            </div>

            <div>
                <span className='lightcol'>شهر</span>
                <span className='fn13'>{user && user.city}</span>
            </div>

            <div>
                <span className='lightcol'>کد پستی</span>
                <span className='inum fn13'>{user && user.postalCode}</span>
            </div>

            <div>
                <span className='lightcol'>آدرس</span>
                <span className='fn13'>{user && user.address}</span>
            </div>
        </div>

    </div>
  )
}

export default Detail_dash