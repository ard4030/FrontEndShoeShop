
import Heading from './Heading'
import styles from "./product.module.css"
import {BsTable} from "react-icons/bs"
import {IoIosArrowDropleft} from "react-icons/io"

const Moshakhasat = ({data}) => {

  return (
    <div className={styles.tozihat}>
      <Heading 
      title={"مشخصات کلی"}
      icon={<BsTable />}
      e_name={data.e_name}
      />
      <div className={styles.moshCant}>
        {
          data.technicalSpecifications.map((item,index) => 
          <div key={index} className={styles.spGroup}>
            <div className={styles.spgTit}>
              <span><IoIosArrowDropleft/></span>
              <span>{item.title}</span>
            </div>
            {
              item.specs.map((item1,index1) => 
              <div className={styles.spgDes} key={index1}>
                <span>{item1.key}</span>
                <span>{item1.value}</span>
              </div> 
              )
            }
          </div>
          )
        }
      </div>    
    </div>
  )
}

export default Moshakhasat