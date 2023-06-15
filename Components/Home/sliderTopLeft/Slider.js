import Carousel from './Carousel'
import styles from "./slider.module.css"

const SliderLeft = ({data}) => {

  return (
    <div className={styles.cont}>
      <div className={styles.head}>
        پیشنهاد لحظه ای
      </div>
      <div className={styles.slider}>
          <Carousel data={data} />
      </div>
    </div>
  )
}

export default SliderLeft