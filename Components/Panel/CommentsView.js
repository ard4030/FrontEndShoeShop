"use client"
import React from 'react'
import HeaderPanel from './HeaderPanel'
import Menu from './Menu'
import MyComments from './MyComments'
import styles from "./panel.module.css"

const CommentsView = () => {
  return (
    <div className={styles.contentPanel}>
        <Menu />
        <div>
            <HeaderPanel />
            <MyComments />
        </div>
    </div>
  )
}

export default CommentsView