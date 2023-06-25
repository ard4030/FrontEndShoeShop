
import React from 'react'
import Book_dash from './Book_dash'
import HeaderPanel from './HeaderPanel'
import Menu from './Menu'
import styles from "./panel.module.css"

const FavoritView = () => {
  return (
    <div className={styles.contentPanel}>
        <Menu />
        <div>
            <HeaderPanel />
            <div style={{background:"#fff",borderRadius:"7px"}}>
                <Book_dash width={"96%"} />
            </div>
        </div>
    </div>
  )
}

export default FavoritView