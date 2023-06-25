import { BASE_URL } from '@/utils/constans'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import SmallLoad from '../Global/SmallLoad'
import styles from "./panel.module.css"

const EditDetail = () => {
    const [data, setData] = useState({
        firts_name:"",
        last_name:"",
        mobile:"",
        address:"",
        city:"",
        email:"",
        postalCode:"",
    })
    const [loading,setLoading] = useState(true)

    const getData = async () => {
        setLoading(true)
        await axios.get(`${BASE_URL}/auth/isLogin`,{withCredentials:true}).then(response => {
            if(response.data.success){
              setData({
                firts_name:response.data.user.firts_name,
                last_name:response.data.user.last_name,
                email:response.data.user.email,
                postalCode:response.data.user.postalCode,
                city:response.data.user.city,
                address:response.data.user.address,
                mobile:response.data.user.mobile
              })
            }else{
              setUser(false)
            }
        }).catch(err => {
          console.log('ccccccc')
        })
        setLoading(false)
    }

    const update = async () => {
        setLoading(true)
        await axios.post(`${BASE_URL}/auth/updateDetail`,data,{withCredentials:true}).then(response => {
            if(response.data.success){
                alert(response.data.message)
                getData()
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
    

  return (
    <div className={styles.contEdit}>
        {
            loading ?
            <SmallLoad width={"100%"} height={"400px"} />
            :

            <>
                <div className={styles.editItem}>
                    <label>
                        نام
                        <span style={{color:"red",marginRight:"5px"}}>*</span>
                    </label>
                    <input value={data.firts_name} onChange={(e) => setData({...data,firts_name:e.target.value})} />
                </div>

                <div className={styles.editItem}>
                    <label>
                        نام خانوادگی
                        <span style={{color:"red",marginRight:"5px"}}>*</span>
                    </label>
                    <input value={data.last_name} onChange={(e) => setData({...data,last_name:e.target.value})} />
                </div>

                <div className={styles.editItem}>
                    <label>ایمیل</label>
                    <input value={data.email} onChange={(e) => setData({...data,email:e.target.value})} />
                </div>

                <div className={styles.editItem}>
                    <label>شهر</label>
                    <input value={data.city} onChange={(e) => setData({...data,city:e.target.value})} />
                </div>

                <div className={styles.editItem}>
                    <label>کد پستی</label>
                    <input  value={data.postalCode} onChange={(e) => setData({...data,postalCode:e.target.value})} />
                </div>

                <div className={styles.editItem}>
                    <label>آدرس</label>
                    <input  value={data.address} onChange={(e) => setData({...data,address:e.target.value})} />
                </div>

                <div className={styles.editItem}>
                    <label>موبایل</label>
                    <input  value={data.mobile} disabled style={{background:"#eee"}} />
                </div>

                <button onClick={update} className={styles.bt1s}>ذخیره</button>
            </>
        }
    </div>
  )
}

export default EditDetail