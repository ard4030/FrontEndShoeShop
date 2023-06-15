"use client"
import { AuthContext } from '@/Context/AuthContext';
import { BASE_URL } from '@/utils/constans';
import axios from 'axios';
import { useContext , useState , useEffect} from 'react'
import SmallLoad from '../Global/SmallLoad';
import styles from "./product.module.css"
import { DateObject } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const AddPor = ({data}) => {
  const [message, setMessage] = useState("");
  const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [messages,setmessages] = useState([]);

  const date1 = new DateObject(data.createdAt).convert(persian, persian_fa)

  const Send = async () => {
    setLoading(true)
    if(!user){
      alert("لطفا وارد شوید")
      setLoading(false)
      return
    }
    const data1 = {
      message,productId:data
    }
    await axios.post(`${BASE_URL}/user/comment/addQuestion`,data1,{withCredentials:true}).then(response => {
      if(response.data.success){
        alert(response.data.message)
      }else{
        alert(response.data.message)
      }
    }).catch(err => {
      alert(err.message)
    })
    setLoading(false)
  }

  const getMessages = async () => {
    setLoading(true)
    await axios.post(`${BASE_URL}/user/comment/getQuestionsById`,{productId:data}).then(res => {
      if(res.data.success){
        setmessages(res.data.data)
      }else{
        alert(res.data.message)
      }
    }).catch(err => {
      alert(err.message)
    })
    setLoading(false)

  }

  useEffect(() => {
    getMessages();
  }, [])
  


  return (
    <>
      {
        loading ?
        <SmallLoad />
        :
        <>
          {
            messages.length > 0 && messages.map((item,index) => 
            <div key={index} className={styles.itemPor}>
              <div className={styles.headPor}>
                  <span>{item.name}</span>
                  <div className={styles.tarPor}>
                      <span>{date1.day}</span>
                      <span>{date1.month.name}</span>
                      <span>{date1.year}</span>
                  </div>
              </div>
              <div>
                  <p className='fn12 defcolor'>{item.message}</p>
              </div>
              {
                item.responseMessage.length > 0 &&
                <div className={styles.pas}>
                  <span>پاسخ</span>
                  <p className='fn12 defcolor'>{item.responseMessage}</p>
                </div>
              }
              
            </div>
            )
          }
          <div className='mt20 w100 prelative'>
                  <div className={`${styles.headPorAdd} w100`}>
                    <span>ارسال پرسش</span>
                  </div>
                  <p className='fn12 defcolor'>
                  به عنوان alirezadelbari20 وارد شده‌اید. نمایهٔ خود را ویرایش نمایید. بیرون رفتن؟ بخش‌های موردنیاز علامت‌گذاری شده‌اند *
                  </p>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className={styles.txaa}></textarea>
                  <button onClick={() => Send()} className={styles.btss}>ارسال پرسش</button>
          </div>
        </>
      }
    </>
  )
}

export default AddPor