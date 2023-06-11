"use client"
import Image from 'next/image'
import style from './product.module.css'

const ImageComp = ({images}) => {
  return (
    <div>
        <Image src={images[0]} width={400} height={400} alt=""/>
    </div>
  )
}

export default ImageComp