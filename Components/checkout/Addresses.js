"use client"
import {useState,useEffect, useContext} from 'react'
import styles from "./checkout.module.css"
import {MdOutlineAddLocationAlt,MdArrowBackIosNew} from "react-icons/md"
import {IoIosArrowBack,IoIosClose} from "react-icons/io"
import {FiMail} from "react-icons/fi"
import {AiOutlineMobile} from "react-icons/ai"
import {FaRegUser} from "react-icons/fa"
import {BsBinoculars} from "react-icons/bs"
import SmallLoad from '../Global/SmallLoad'
import axios from 'axios'
import { BASE_URL } from '@/utils/constans'
import { AddressContext } from '@/Context/AddressContext'

const Addresses = () => {
  const {active,setActive,setShow,show} = useContext(AddressContext)
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);


  

  const getAddress = async () => {
    setloading(true)
    await axios.post(`${BASE_URL}/user/address/getAddressById`,null,{withCredentials:true}).then(response =>{
      if(response.data.success){
        setData(response.data.data)
        setActive(response.data.data[0])
      }else{
        alert(response.data.message)
      }
    }).catch(err => {
      console.log(err.message)
    })
    setloading(false)
  }

  useEffect(() => {
    getAddress()
  }, [])

  return (
    <div className={`${styles.modalAddress} ${!show && "dnone"}` }>
            <div className={styles.children}>
              {
                loading ? 
                  <SmallLoad width={"100%"} height={"100%"} />
                :
                <>
                  <div className='flex-between mb10'>
                    <span className='fn14'>انتخاب آدرس</span>
                    <span onClick={() => setShow(false)} style={{fontSize:"24px"}} className='flex-center fn15 cpointer'><IoIosClose /></span>
                  </div>
                  <div className={styles.itemAddress}>
                      <div>
                          <span style={{fontSize:"22px"}}><MdOutlineAddLocationAlt/></span>
                          <span style={{fontSize:"14px"}}>افزودن آدرس جدید</span>
                      </div>
                      <span style={{fontSize:"22px"}}><IoIosArrowBack/></span>
                  </div>

                  <div className={styles.item1}>

                      {
                        data.length > 0 && data.map((item,index) => 
                        <div key={index} onClick={() => {
                          setActive(item)
                          setShow(false)
                          }} className={styles.subItems}>
                          <span className={`${item._id === active._id && styles.actItem}`}></span>
                          <div >
                            <span style={{color:'black'}}>
                              {item.ostanName}&nbsp;
                              {item.cityName}&nbsp;
                              {item.description}
                            </span>
                            <div className='mt10 dflex acenter'>
                              <span className='flex-center fn16'> <FiMail /></span>
                              <span className='mr10'>{item.postalCode}</span>
                            </div>

                            <div className='mt10 dflex acenter'>
                              <span className='flex-center fn16'> <AiOutlineMobile /></span>
                              <span className='mr10'>{item.mobile}</span>
                            </div>

                            <div className='mt10 dflex acenter'>
                              <span className='flex-center fn16'> <FaRegUser /></span>
                              <span className='mr10'>{item.name}</span>
                            </div>

                            <div className='mt10 dflex acenter'>
                              <span className='flex-center fn16'> <BsBinoculars /></span>
                              <span className='mr10'>1</span>
                            </div>

                            <div className='mt10 dflex acenter'>
                              <span style={{color: "#3ca4ff"}}>ویرایش</span>
                              <span style={{color: "#3ca4ff"}} className='flex-center mr10'><MdArrowBackIosNew /></span>
                            </div>

                          </div>
                        </div>
                        
                        )
                      }

                      

                      {/* <div className={styles.subItems}>
                          <span></span>
                          <div >
                            <span style={{color:'black'}}>خاوران خیابان امام حسین کوچه 13</span>
                            <div className='mt10 dflex acenter'>
                              <span className='flex-center fn16'> <FiMail /></span>
                              <span className='mr10'>7454144416</span>
                            </div>

                            <div className='mt10 dflex acenter'>
                              <span className='flex-center fn16'> <AiOutlineMobile /></span>
                              <span className='mr10'>09164524864</span>
                            </div>

                            <div className='mt10 dflex acenter'>
                              <span className='flex-center fn16'> <FaRegUser /></span>
                              <span className='mr10'>علی رضا دلبری</span>
                            </div>

                            <div className='mt10 dflex acenter'>
                              <span className='flex-center fn16'> <BsBinoculars /></span>
                              <span className='mr10'>1</span>
                            </div>

                            <div className='mt10 dflex acenter'>
                              <span style={{color: "#3ca4ff"}}>ویرایش</span>
                              <span style={{color: "#3ca4ff"}} className='flex-center mr10'><MdArrowBackIosNew /></span>
                            </div>

                          </div>
                      </div> */}
                  </div>
                </>
              }
            </div>
    </div>
  )
}

export default Addresses