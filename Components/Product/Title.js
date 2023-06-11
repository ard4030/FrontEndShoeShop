import React from 'react'
import styles from "./product.module.css"

const Title = ({p_name,e_name}) => {
  return (
    <div className={styles.titProduct}>
        <h1>{p_name}</h1>
        <p>{e_name}</p>
    </div>
  )
}

export default Title