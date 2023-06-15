"use client"
import Image from 'next/image'
import {useState,useContext,useEffect} from 'react'
import styles from "./global.module.css"
import messages from "../../public/images/message.png"
import {GrClose} from "react-icons/gr"
import axios from 'axios'
import { BASE_URL } from '@/utils/constans'
import { AuthContext } from '@/Context/AuthContext'
import OtpInput from 'react-otp-input';
import Timer from './Timer'
import SmallLoad from './SmallLoad'

const Login = () => {

    const [number, setNumber] = useState(0);
    const {setIsSend,setMobile,isSend,viewLogin,setViewLogin,isLog} = useContext(AuthContext);
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(120);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if(otp.length === 5){CheckCode()}
    }, [otp])
    

    const SendSms = async () => {
        setLoading(true)
        await axios.post(`${BASE_URL}/auth/getOtp`,{mobile:number}).then(response => {
            if(response.data.success){
                setIsSend(true)
                setMobile(number)
                setTimer(120)
            }else if(response.data.messages){
                alert(response.data.messages.mobile)
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    const CheckCode = async () => {
        setLoading(true)
        const data = {
            mobile:number,
            code:otp
        }

        await axios.post(`${BASE_URL}/auth/checkOtp`,data,{withCredentials:true}).then(response => {
            console.log(response.data)
            if(response.data.success){
                isLog()
                setIsSend(false)
                setNumber(0)
                setTimer(0)
                setViewLogin(false)
            }else{
                setOtp('')
                alert(response.data.message)
            }
        }).catch( err => {
            alert(err.message)
        })
        setLoading(false)
        
    }



  return (
    <div className={styles.contLogin} style={{display:`${viewLogin === true ? "flex" : "none"}`}}>
        <div className={styles.childLigib}>
            <>
            {loading?
            <SmallLoad width={"100px"} height={"100px"} />
        :
        <>
        <span onClick={() => {setViewLogin(false)}} className={styles.cls}><GrClose/></span>
            <div className={styles.topImage}>
                <Image alt="send sms" fill src={messages} />
            </div>
            <h3 style={{marginBottom:"3px"}} className='inum fw400 defcolor tcenter'>ورود و ثبت نام</h3>
            {
                isSend ?
                <>
                <p className='mtb0 fn12 lightcol tcenter inum'>
                کد تایید برای شماره موبایل {number} ارسال شد
                </p>
                <div className={styles.iptOtp}>
                    <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    renderSeparator={<span>&nbsp;</span>}
                    renderInput={(props) => <input {...props} />}
                    
                    />
                </div>
                <Timer time={timer} />
                <p onClick={() => {
                    setTimer(0);
                    setIsSend(false)
                    setNumber(0)
                }} className={styles.bading}>شماره موبایل اشتباهه؟</p>
                </>
                :
                <>
                    <p className='mtb0 fn12 lightcol tcenter'>لطفا جهت ورود شماره همراه خود را وارد نمایید</p>
                    <div className={styles.inputContMobile}>
                        <input onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <button onClick={() => SendSms()} className={styles.btnSendSms}>ارسال کد یکبار مصرف</button>
                </>
            }
            
        </>
        }
            </>
        </div>
    </div>
  )
}

export default Login