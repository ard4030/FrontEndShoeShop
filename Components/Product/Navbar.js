import Link from 'next/link'
import styles from "./product.module.css"

const Navbar = ({data,title,id}) => {
    
  return (
    <div className={`${styles.coNavbar}`}>
        <ul>
            {
                data.map((item,index) => 
                <li key={index}>
                    <Link href={""}>{item.title}<span className={styles.mg}>/</span></Link>
                </li>
                )
            }
            <li >
                    <Link href={""}>{title}</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar