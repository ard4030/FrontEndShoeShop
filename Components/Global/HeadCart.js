import styles from "./global.module.css"
import {BsCartCheck} from "react-icons/bs"
import {AiOutlineFileProtect,AiOutlineFileDone} from "react-icons/ai"


const HeadCart = ({data}) => {
  return (
    <div className={styles.orderStep}>
        <div className={styles.headCartContent}>
            <div className={styles.itemStep}>
                <span style={{color: `${data === 'cart' ? '#0e89ff' :'#bcbcbc'}`}}><BsCartCheck /></span>
                <span style={{color: `${data === 'cart' ? 'black' :'#999'}`}}>سبد خرید</span>
            </div>
            <div className={styles.itemStep}>
                <span style={{color: `${data === 'hesab' ? '#0e89ff' :'#bcbcbc'}`}}><AiOutlineFileProtect /></span>
                <span style={{color: `${data === 'hesab' ? 'black' :'#999'}`}}>صورتحساب</span>
            </div>
            <div className={styles.itemStep}>
                <span style={{color: `${data === 'complate' ? '#0e89ff' :'#bcbcbc'}`}}><AiOutlineFileDone /></span>
                <span style={{color: `${data === 'complate' ? 'black' :'#999'}`}}>تکمیل سفارش</span>
            </div>
        </div>
    </div>
    
  )
}

export default HeadCart