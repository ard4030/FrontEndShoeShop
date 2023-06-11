import React from 'react'
import Heading from './Heading'
import styles from "./product.module.css"
import {BsPen} from "react-icons/bs"

const Tozihat = ({data}) => {
  return (
    <div className={styles.tozihat}>
      <Heading 
      title={"نقد و بررسی اجمالی"}
      icon={<BsPen />}
      e_name={data.e_name}
      />
      <div className={styles.desprod}>
        {data.description}
      </div>    
    </div>
  )
}

export default Tozihat