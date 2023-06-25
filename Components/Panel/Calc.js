import React from 'react'
import { DateObject } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import styles from "./panel.module.css"

const Calc = () => {

    const date1 = new DateObject({ calendar: persian, locale: persian_fa })
    const date2 = new DateObject({ calendar: persian, locale: persian_fa }).subtract(1,"days")
    const date3 = new DateObject({ calendar: persian, locale: persian_fa }).subtract(2,"days")
    const date4 = new DateObject({ calendar: persian, locale: persian_fa }).add(1,"days")
    const date5 = new DateObject({ calendar: persian, locale: persian_fa }).add(2,"days")

  return (
    <div className={styles.calendar}>
                 <div>
                    <span>{date3.day}</span>
                    <span>{date3.month.name}</span>
                 </div>

                 <div>
                    <span>{date2.day}</span>
                    <span>{date2.month.name}</span>
                 </div>

                 <div className={styles.activeItem}>
                    <span>{date1.day}</span>
                    <span>{date1.month.name}</span>
                 </div>

                 <div>
                    <span>{date4.day}</span>
                    <span>{date4.month.name}</span>
                 </div>

                 <div>
                    <span>{date5.day}</span>
                    <span>{date5.month.name}</span>
                 </div>
            </div>
  )
}

export default Calc