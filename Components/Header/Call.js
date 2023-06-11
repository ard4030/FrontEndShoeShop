import Image from 'next/image'
import React from 'react'
import style from "./header.module.css"
import phone from "../../public/images/phone.png"

const Call = () => {
  return (
    <div className='flex-between'>
      <div className={style.callb}>
        <span className={style.bgbl}>071
          <span className={style.bgbl1}>54512673</span>
        </span>
        <p className={style.p1}>با ما درتماس باشید</p>
      </div>
      <Image src={phone} width={30} height={30} alt="" />
    </div>
  )
}

export default Call