"use client"
import {useState} from 'react'
import styles from "./checkout.module.css"
import {MdOutlineAddLocationAlt,MdArrowBackIosNew} from "react-icons/md"
import {IoIosArrowBack,IoIosClose} from "react-icons/io"
import {FiMail} from "react-icons/fi"
import {AiOutlineMobile} from "react-icons/ai"
import {FaRegUser} from "react-icons/fa"
import {BsBinoculars} from "react-icons/bs"

const Addresses = () => {
  const [first, setfirst] = useState("");
  return (
    <div className={styles.modalAddress}>
            <div className={styles.children}>
              <div className='flex-between mb10'>
                  <span className='fn14'>انتخاب آدرس</span>
                  <span style={{fontSize:"20px"}} className='flex-center fn15'><IoIosClose /></span>
              </div>
              <div className={styles.itemAddress}>
                  <div>
                      <span style={{fontSize:"22px"}}><MdOutlineAddLocationAlt/></span>
                      <span style={{fontSize:"14px"}}>افزودن آدرس جدید</span>
                  </div>
                  <span style={{fontSize:"22px"}}><IoIosArrowBack/></span>
              </div>

              <div className={styles.item1}>
                  <div className={styles.subItems}>
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
                  </div>

                  <div className={styles.subItems}>
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
                  </div>
              </div>
            </div>
    </div>
  )
}

export default Addresses