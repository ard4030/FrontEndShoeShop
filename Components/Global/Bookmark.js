import { AuthContext } from '@/Context/AuthContext';
import { BASE_URL } from '@/utils/constans';
import axios from 'axios';
import {useContext} from 'react'
import {BsHeart , BsFillHeartFill} from "react-icons/bs"
import styles from "./global.module.css"

const Bookmark = ({productId}) => {
    const {user,isLog,setViewLogin} = useContext(AuthContext);
    const toggleBook = async () => {
        if(user){
            await axios.post(`${BASE_URL}/user/option/addBookmark`,{productId},{withCredentials:true}).then(resopnse => {
                if(resopnse.data.success){
                    alert(resopnse.data.message)
                    isLog()
                }else{
                    alert(resopnse.data.message)
                }
            }).catch(err => {
                alert(err.message)
            })
        }else{
            setViewLogin(true)
        }
        
    }

  return (
    <>
    {
        user && user.bookmarks.includes(productId) ? 
        <span onClick={() => {toggleBook()}}  className={styles.book}><BsFillHeartFill color='#fdc47a' /></span>
        :
        <span onClick={() => {toggleBook()}} className={styles.book}><BsHeart /></span>
    }
        
    </>
  )
}

export default Bookmark