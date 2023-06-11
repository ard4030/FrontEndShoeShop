"use client"
import styles from "./slider.module.css"
const MyCop = ({ data }) => {
    console.log(data)
    return (
      <div className={styles.sl1}>
       {data.title} 
      </div>
    );
  };
export default MyCop  