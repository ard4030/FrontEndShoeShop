import styles from "./global.module.css"

const ViewPrice1 = ({price=0,color}) => {
  return (
    <div className='fn15'>
        <span style={{color:`${color ? color : "#0183ff"}`}} className='actColor fn14 inum'>{price.toLocaleString()}</span>
        <span style={{fontSize:"10px"}} className='mr5'>تومان</span>
    </div>
  )
}

export default ViewPrice1