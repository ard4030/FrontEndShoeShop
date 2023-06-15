
import styles from "./product.module.css"

const Heading = ({icon,title,e_name}) => {
  return (
    <div className={styles.contHH}>
        <span>{icon}</span>
        <div>
            <span>{title}</span>
            <span>{e_name}</span>
        </div>
    </div>
  )
}

export default Heading