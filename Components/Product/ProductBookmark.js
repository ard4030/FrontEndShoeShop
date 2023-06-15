import { AuthContext } from '@/Context/AuthContext';
import { BASE_URL } from '@/utils/constans';
import axios from 'axios';
import { useContext } from 'react'
import {BsHeart} from "react-icons/bs"

const ProductBookmark = ({productId}) => {
    const {user,isLog} = useContext(AuthContext);
    const toggleBook = async () => {
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
    }

  return (
    <>
            {
                user && user.bookmarks.includes(productId) ? 
                <div style={{background:"#0183ff",color:"#fff"}} onClick={() => toggleBook()}>
                    <span><BsHeart /></span>
                    <span> حذف از علاقه مندی ها</span>
                </div>
                :

                <div onClick={() => toggleBook()}>
                    <span><BsHeart /></span>
                    <span> افزودن به علاقه مندی ها</span>
                </div>

            }
            
    </>
  )
}

export default ProductBookmark