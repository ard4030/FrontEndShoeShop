"use client"
import style from "./header.module.css"
import TopHeader from "./TopHeader"
import BotHeader from "./BotHeader"

const Header = () => {

  return (
    // <header className={style.brb}>
    //     <div className="container">
    //         <div className={style.headSec}>
    //             <div className={style.basketSec}>
    //                     <Link href={`/cart`} className="prelative">
    //                         <Basket width={40} height={40}/>
    //                         <span className={style.badge}>{cart.length}</span>
    //                     </Link>
    //                 {
    //                     (user) ?
    //                     <div className={style.userCon}>
    //                         <Link href='/panel/dashboard' className="prelative">
    //                             <User width={37} height={37}/>
    //                         </Link>
    //                         <button className={'btnDef'} onClick={logOutHandle}>خروج</button>
    //                     </div>
  
    //                     :
    //                         <div className="prelative">
    //                             <Link className={style.login} href="/singin"> ورود | ثبت نام</Link>
    //                         </div>

    //                 }
                    
    //             </div>
    //             <div className={style.menuSec}>
    //                 <ul className={style.menu}>
    //                     <li>
    //                         <Link href="/"> خانه</Link>
    //                     </li>
    //                     <li>
    //                         <Link href="/panel/dashboard"> محصولات</Link>
    //                     </li>
    //                     <li>
    //                         <Link href="/aboutus"> درباره ما</Link>
    //                     </li>
    //                     <li>
    //                         <Link href="callme"> تماس یا ما</Link>
    //                     </li>
    //                 </ul>
    //             </div>
    //             <div className={style.logoSec}>
    //                 <Image src={logo} width={50} height={50} alt="" />
    //             </div>
    //         </div>
    //     </div>
    // </header>

    <header className={style.aslHead}>
        <div className="container pb0">
            <TopHeader />
            <BotHeader />
        </div>
    </header>
  )
}

export default Header