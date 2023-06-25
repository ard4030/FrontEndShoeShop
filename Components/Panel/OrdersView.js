"use client"
import React from 'react'
import styles from "./panel.module.css"
import Menu from './Menu'
import HeaderPanel from './HeaderPanel'
import OrderTable from './OrderTable'

const OrdersView = () => {
  return (
    <div className={styles.contentPanel}>
        <Menu />
        <div>
            <HeaderPanel />
            <OrderTable />
        </div>
    </div>
  )
}

export default OrdersView