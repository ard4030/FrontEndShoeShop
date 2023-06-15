import styles from "./product.module.css"
import { BsSortDown , BsStar } from "react-icons/bs"
import {BiLike} from "react-icons/bi"
import { DateObject } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const Comments = ({data}) => {
    const date1 = new DateObject(data.createdAt).convert(persian, persian_fa)
  return (
    <div className={styles.allComments}>
        <div className={styles.allHead}>
            <div>
                <span>نقد و بررسی ها</span>
                <span>{data.length}</span>
            </div>

            <div>
                <span className='dflex acenter jcenter fn20'><BsSortDown /></span>
                <span className={styles.activeList}>جدیدترین</span>
                <span>مفید ترین</span>
            </div>
        </div>

        <div className={styles.allCont}>
            <ul>
                {
                    data && data.length > 0 &&  data.map((item,index) => 
                    <li key={index}>
                        <div className={styles.headSing}>
                            <span>
                                <BsStar />
                                {item.rate}
                            </span>

                            <span className='defcolor fn12'>
                               {item.name}
                            </span>
                            
                            <span className={styles.tarikh}>
                                <span>{date1.day}</span>
                                <span>{date1.month.name}</span>
                                <span>{date1.year}</span>
                            </span>
                        </div>
                        <div className='dflex acenter mt10 mb10 green'>
                            <span className='flex-center fn12 ml10'><BiLike /></span>
                            <span className='fn10'>خرید این محصول را توصیه میکنم</span>
                        </div>

                        <div className='dflex jsb w100 mt15 fn12'>
                            <div className='w50 dflex'>
                                <div className='green'>نقاط قوت</div>
                                <div>
                                    <ul className={styles.ghovlist}>
                                        {
                                          item.ghovat.map((item1,index1) => 
                                                <li key={index1}>{item1}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='w50 dflex'>
                                <div className='narang'>نقاط قوت</div>
                                <div>
                                    <ul className={styles.zaflist}>
                                        {
                                            item.zaf.map((item2,index2) => 
                                                <li key={index2}>{item2}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p className='fn12 defcolor'>
                        {item.message}
                        </p>

                        <div className={`flex-end ${styles.mof}`}>
                            <span>آیا این نظر برایتان مفید بود؟</span>
                            <div>
                                <span>بله</span>
                                <span>12</span>
                            </div>

                            <div>
                                <span>خیر</span>
                                <span>8</span>
                            </div>
                        </div>
                    </li>
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default Comments