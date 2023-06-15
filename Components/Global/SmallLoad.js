import Image from 'next/image'
import styles from "./global.module.css"
import myload from "../../public/images/load.gif"

const SmallLoad = ({width,height}) => {
  return (
    <div style={{width,height}} className={styles.smallLoad}>
        <div  className={styles.smImage}>
            <Image fill alt="" src={myload} />
        </div>
    </div>
  )
}

export default SmallLoad