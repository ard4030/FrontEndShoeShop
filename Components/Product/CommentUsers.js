import React from 'react'
import Heading from './Heading'
import styles from "./product.module.css"
import{BiMessageSquareDetail} from "react-icons/bi"
import AddCom from './AddCom'


const CommentUsers = ({data}) => {

    const statusMe = (data) => {
        let b = ""
        if(data >= 0  && data <= 1){
            b = "خیلی بد" 
        }else if(data >= 1  && data <= 2){
            b = "بد"
        }else if(data >= 2  && data <= 3){
            b = "معمولی"
        }else if(data >= 3  && data <= 4){
            b = "خوب"
        }else if(data >= 4  && data <= 5){
            b = "عالی"
        }

        return b;
    }

  return (
    <div className={styles.tozihat}>
    <Heading 
    title={"نظرات کاربران"}
    icon={<BiMessageSquareDetail />}
    e_name={data.e_name}
    />
    <div className={styles.contCom}>
        <div>
            <div className={styles.nokat}>
                <p>
                لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید:
                </p>

                <p>
                فارسی بنویسید و از کیبورد فارسی استفاده کنید. بهتر است از فضای خالی (Space) بیش‌از‌حدِ معمول، شکلک یا ایموجی استفاده نکنید و از کشیدن حروف یا کلمات با صفحه‌کلید بپرهیزید.
                </p>

                <p>
                نظرات خود را براساس تجربه و استفاده‌ی عملی و با دقت به نکات فنی ارسال کنید؛ بدون تعصب به محصول خاص، مزایا و معایب را بازگو کنید و بهتر است از ارسال نظرات چندکلمه‌‌ای خودداری کنید.
                </p>

                <p>
                بهتر است در نظرات خود از تمرکز روی عناصر متغیر مثل قیمت، پرهیز کنید.
                </p>

                <p>
                به کاربران و سایر اشخاص احترام بگذارید. پیام‌هایی که شامل محتوای توهین‌آمیز و کلمات نامناسب باشند، حذف می‌شوند.
                </p>
            </div>
            <h3 className={styles.ot1}>امتیاز کاربران {data.avgRate} از {data.commentCount} دیدگاه</h3>
            <div className={styles.point}>
                <div>
                    <span>کیفیت ساخت</span>
                    <div>
                        <span className={styles.prog}>
                            <span  style={{width:`${(data.avgKeyfiat / 5) * 100}%`}}></span>
                        </span>
                        <span className={styles.progT}>{statusMe(data.avgKeyfiat)}</span>
                    </div>
                </div>

                <div>
                    <span>ارزش خرید به نسبت قیمت</span>
                    <div>
                        <span className={styles.prog}>
                            <span style={{width:`${(data.avgArzesh / 5) * 100}%`}}></span>
                        </span>
                        <span className={styles.progT}>{statusMe(data.avgArzesh)}</span>
                    </div>
                </div>

                <div>
                    <span>نوآوری</span>
                    <div>
                        <span className={styles.prog}>
                            <span  style={{width:`${(data.avgNoavari / 5) * 100}%`}}></span>
                        </span>
                        <span className={styles.progT}>{statusMe(data.avgNoavari)}</span>
                    </div>
                </div>

                <div>
                    <span>امکانات و قابلیت ها</span>
                    <div>
                        <span className={styles.prog}>
                            <span style={{width:`${(data.avgEmkanat / 5) * 100}%`}}></span>
                        </span>
                        <span className={styles.progT}>{statusMe(data.avgEmkanat)}</span>
                    </div>
                </div>

                <div>
                    <span>سهولت استفاده</span>
                    <div>
                        <span className={styles.prog}>
                            <span style={{width:`${(data.avgSohoolat / 5) * 100}%`}}></span>
                        </span>
                        <span className={styles.progT}>{statusMe(data.avgSohoolat)}</span>
                    </div>
                </div>
            </div>
        </div>
        <AddCom data={data} />
    </div>    
  </div>
  )
}

export default CommentUsers