import Image from 'next/image'
import styles from "./slider.module.css"
import { BASE_URL } from '@/utils/constans'
import { DateObject } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import Link from 'next/link'

const ItemComp = ({data,index}) => {

  const date1 = new DateObject(data.createdAt).convert(persian, persian_fa)
  return(
    <Link href={`/article/${data._id}`} className={styles.item} key={index}>
        <div>
            <div className={styles.image}>
                <Image
                src={`${BASE_URL}${data.image}`}
                fill alt=""
                />
            </div>
            <div className={styles.name}>
                <div>
                    <span>{date1.day}</span>
                    <span>{date1.month.name}</span>
                    <span>{date1.year}</span>
                </div>

                <div>
                {data.title}
                </div>

                
            </div>
        </div>
    </Link>
  )
}


export default ItemComp