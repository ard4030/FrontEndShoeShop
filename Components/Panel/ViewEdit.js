"use client"
import React from 'react'
import EditDetail from './EditDetail'
import HeaderPanel from './HeaderPanel'
import Menu from './Menu'
import styles from "./panel.module.css"

const ViewEdit = () => {
  return (
    <div className={styles.contentPanel}>
        <Menu />
        <div>
            <HeaderPanel />
            <EditDetail />
        </div>
    </div>
  )
}

export default ViewEdit