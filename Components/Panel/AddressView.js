"use client"
import React from 'react'
import HeaderPanel from './HeaderPanel'
import Menu from './Menu'
import MyAddress from './MyAddress'
import styles from "./panel.module.css"

const AddressView = () => {
  return (
    <div className={styles.contentPanel}>
        <Menu />
        <div>
            <HeaderPanel />
            <MyAddress />
        </div>
    </div>
  )
}

export default AddressView