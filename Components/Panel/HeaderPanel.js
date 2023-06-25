import React from 'react'
import styles from "./panel.module.css"
import { BsGear , BsHouse , BsBell , BsPower} from "react-icons/bs"
import { useRouter } from 'next/navigation'

const HeaderPanel = () => {
  const router = useRouter()
  return (
    <div className={styles.headPanel}>
        <span onClick={() => router.push('/')}><BsHouse /></span>
        <span><BsGear /></span>
        <span><BsBell /></span>
        <span><BsPower /></span>
    </div>
  )
}

export default HeaderPanel