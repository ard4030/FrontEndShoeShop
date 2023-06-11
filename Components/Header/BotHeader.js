"use client"
import React from 'react'
import Call from './Call'
import style from "./header.module.css"
import Menu from './Menu'

const BotHeader = () => {
  return (
    <div className={style.contBot}>
        <Menu />
        <Call />
    </div>
  )
}

export default BotHeader