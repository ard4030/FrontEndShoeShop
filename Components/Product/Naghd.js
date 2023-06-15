
import Heading from './Heading'
import styles from "./product.module.css"
import {BiTask} from "react-icons/bi"
import { CircularProgressbar } from 'react-circular-progressbar';

const Naghd = ({data}) => {

  return (
    <div className={styles.tozihat}>
    <Heading 
        title={"نقد و بررسی"}
        icon={<BiTask />}
        e_name={data.e_name}
    />
    <div className={styles.contNa}>
        <div className={styles.itemNaghd}>
            <div>
                <CircularProgressbar  value={(data.avgKeyfiat / 5) * 100} text={`${(data.avgKeyfiat / 5) * 10}`} />
            </div>
            <div>
                <span>کیفیت ساخت</span>
                <span>از 10 امتیاز</span>
            </div>
        </div>

        <div className={styles.itemNaghd}>
            <div>
                <CircularProgressbar  value={(data.avgArzesh / 5) * 100} text={`${(data.avgArzesh / 5) * 10}`} />
            </div>
            <div>
                <span>ارزش خرید به نسبت قیمت</span>
                <span>از 10 امتیاز</span>
            </div>
        </div>

        <div className={styles.itemNaghd}>
            <div>
                <CircularProgressbar  value={(data.avgNoavari / 5) * 100} text={`${(data.avgNoavari / 5) * 10}`} />
            </div>
            <div>
                <span>نوآوری</span>
                <span>از 10 امتیاز</span>
            </div>
        </div>

        <div className={styles.itemNaghd}>
            <div>
                <CircularProgressbar  value={(data.avgEmkanat / 5) * 100} text={`${(data.avgEmkanat / 5) * 10}`} />
            </div>
            <div>
                <span>امکانات و قابلیت ها</span>
                <span>از 10 امتیاز</span>
            </div>
        </div>

        <div className={styles.itemNaghd}>
            <div>
                <CircularProgressbar  value={(data.avgSohoolat / 5) * 100} text={`${(data.avgSohoolat / 5) * 10}`} />
            </div>
            <div>
                <span>سهولت استفاده</span>
                <span>از 10 امتیاز</span>
            </div>
        </div>
    </div>    
  </div>
  )
}

export default Naghd