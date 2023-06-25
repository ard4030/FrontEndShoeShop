"use client"
import style from "./header.module.css"
import TopHeader from "./TopHeader"
import BotHeader from "./BotHeader"
import { usePathname, useRouter } from "next/navigation"

const Header = ({props}) => {
  const pathName = usePathname();
  return (
    <header style={{display:(pathName.startsWith('/panel')) && "none"}} className={style.aslHead}>
        <div className="container pb0">
            <TopHeader />
            <BotHeader />
        </div>
    </header>
  )
}

export default Header