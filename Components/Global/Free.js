import styles from "./global.module.css"
import{BsTruck} from "react-icons/bs"

const Free = ({back}) => {
  return (
    <div style={{background:`${back ? back : "#f3f3f4"}`}} className={`flex-between dwrap ${styles.pkl}`}>
        <div>
            <span className='flex-center ml10' style={{color:"#4caf50",fontSize:"20px"}}><BsTruck/></span>
            <span className='dflex'>
                تبریک، ارسال به صورت 
                <span style={{color:"#4caf50",marginRight:"5px"}}>رایگان</span>
            </span>
            </div>
        <div>
            <span>100</span>
            <span>%</span>
        </div>
    <div></div>
</div>
  )
}

export default Free