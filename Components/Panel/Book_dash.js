import React,{useEffect,useState} from 'react'
import styles from "./panel.module.css"
import test from "../../public/images/test.jpg"
import {MdArrowBackIosNew} from "react-icons/md"
import axios from 'axios'
import { BASE_URL } from '@/utils/constans'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import SmallLoad from '../Global/SmallLoad'

const Book_dash = ({width}) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const router = useRouter()

    const getData = async () => {
        setLoading(true)
        await axios.get(`${BASE_URL}/user/product/getBooksProduct`,{withCredentials:true}).then(response => {
            if(response.data.success){
                setData(response.data.data)
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteItem = async (productId) => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/option/addBookmark`,{productId},{withCredentials:true}).then(response => {
            if(response.data.success){
                getData()
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }
    


  return (
    <>
        {
            loading ?
            <SmallLoad width={"49%"} height={"100%"} />
            :
            <div>
                <div style={{width:width ? width : "100%" }} className={styles.headSec}>
                    <span>آخرین علاقه مندی ها</span>
                    <div className={styles.st1}>
                        <span className='flex-center'><MdArrowBackIosNew /></span>
                        <span className='fn10'>مشاهده همه</span>
                    </div>
                </div>

                <div className={styles.heart}>

                    {
                        data && data.length > 0 && data.map((item,index) => 
                        <div key={index}>
                            <Image alt='' src={`${BASE_URL}${item.images[0]}`} width={120} height={120} />
                            <p className='defcolor' style={{height:"40px",overflow:"hidden",width:"100%"}}>
                            {item.e_name}
                            </p>
                            <div className={styles.action}>
                                <span onClick={() => router.push(`/product/${item._id}`)}>مشاهده</span>
                                <span onClick={() => {deleteItem(item._id)}}>حذف</span>
                            </div>
                        </div>
                        
                        )
                    }
                    
                </div>
            </div>
        }
    </>
  )
}

export default Book_dash