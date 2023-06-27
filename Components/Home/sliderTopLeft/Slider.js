import Carousel from './Carousel'
import styles from "./slider.module.css"

const SliderLeft = ({data}) => {

  return (
    <div className={styles.cont}>
      <div className={styles.head}>
        پیشنهاد لحظه ای
      </div>
      <div className={styles.slider}>
          {
            data.length > 0 ?

            <Carousel data={data} /> :

            <p style={{textAlign:"center",color:"#888"}}>محصولی موجود نیست</p>
          }
      </div>
    </div>
  )
}

export default SliderLeft