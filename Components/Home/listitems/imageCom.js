
import { BASE_URL } from "@/utils/constans"
import Image from "next/image"
import style from "./listitems.module.css"
import noImage from "../../../public/images/noimage.jpg"

const ImageCom = ({backgroundme,pic}) => {
  return (
    <div style={{background:backgroundme}} className={style.contImg}>
        {
         pic && pic[0]?
        <Image src={BASE_URL+pic[0]} width={100} height={100} className={style.img11} alt="" />
          :
        <Image src={noImage} width={100} height={100} className={style.img11} alt="" />
        }
        
    </div>
  )
}

export default ImageCom