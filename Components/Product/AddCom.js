"use client"
import React,{useContext, useState} from 'react'
import StarRating from './StarRating'
import { Slider } from 'antd'
import {BiPlus} from "react-icons/bi"
import styles from "./product.module.css"
import { AuthContext } from '@/Context/AuthContext'
import {FaRegComment} from "react-icons/fa"
import axios from 'axios'
import { BASE_URL } from '@/utils/constans'

const AddCom = ({data}) => {
    console.log(data)
    const {user} = useContext(AuthContext)
    const [myData,setMydata] = useState({
        rating:0,
        keyfiat:0,
        arzesh:0,
        noavari:0,
        emkanat:0,
        sohoolat:0,
        ghovTit:"",
        zafTit:"",
        message:"",
        ghovat:[],
        zaf:[],
        productId:data._id
    })

    const handleRatingChange = value => {
      setMydata({...myData,rating:value})
    }

    const handleChange = (val) => {

        if(val === "ghov"){
            if(!myData.ghovat.includes(myData.ghovTit)){
                setMydata({...myData,ghovat:[...myData.ghovat,myData.ghovTit]})
            }
        }else{
            if(!myData.zaf.includes(myData.zafTit)){
                setMydata({...myData,zaf:[...myData.zaf,myData.zafTit]})
            }
        }
        
    }

    const marks = {
        0: {label: <strong>خیلی بد</strong>,},
        1: {label: <strong>بد</strong>,},
        2: {label: <strong>معمولی</strong>,},
        3:{label: <strong>خوب</strong>,},
        4: {style: {color: '#f50',},label: <strong>عالی</strong>,},
    };

    const addComent = async () => {
        await axios.post(`${BASE_URL}/user/comment/addComment`,myData,{withCredentials:true}).then(response => {
            if(response.data.success){
                alert(response.data.message)
                setMydata({
                    rating:0,
                    keyfiat:0,
                    arzesh:0,
                    noavari:0,
                    emkanat:0,
                    sohoolat:0,
                    ghovTit:"",
                    zafTit:"",
                    message:"",
                    ghovat:[],
                    zaf:[],
                    productId:data._id
                })
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
    }

  return (
        <>
        {

        user ? 

        <div className={styles.comenting}>
                <div className='dflex jsb'>
                    <p> دیدگاه خود را بنویسید </p>
                    <div className='dflex acenter'>
                        <p style={{marginTop:'0px',marginBottom:"0px",marginLeft:"10px"}}>امتیاز شما</p>
                        <StarRating initialRating={myData.rating} onRatingChange={handleRatingChange} />
                    </div>
                </div>

                <div className='mt20'>
                    <div className={styles.range}>
                        <span>کیفیت ساخت </span>
                        <Slider value={myData.keyfiat} onAfterChange={(value) => setMydata({...myData,keyfiat:value})} marks={marks} step={null} defaultValue={myData.keyfiat} max={4} />
                    </div>

                    <div className={styles.range}>
                        <span>ارزش خرید به نسبت قیمت </span>
                        <Slider value={myData.arzesh} onAfterChange={(value) => setMydata({...myData,arzesh:value})} marks={marks} step={null} defaultValue={myData.arzesh} max={4} />
                    </div>
                    
                    <div className={styles.range}>
                        <span>نوآوری</span>
                        <Slider value={myData.noavari} onAfterChange={(value) => setMydata({...myData,noavari:value})} marks={marks} step={null} defaultValue={myData.noavari} max={4} />
                    </div>

                    <div className={styles.range}>
                        <span>امکانات و قابلیت ها </span>
                        <Slider value={myData.emkanat} onAfterChange={(value) => setMydata({...myData,emkanat:value})} marks={marks} step={null} defaultValue={myData.emkanat} max={4} />
                    </div>

                    <div className={styles.range}>
                        <span>سهولت استفاده </span>
                        <Slider value={myData.sohoolat} onAfterChange={(value) => setMydata({...myData,sohoolat:value})} marks={marks} step={null} defaultValue={myData.sohoolat} max={4} />
                    </div>

                </div>

                <div className={styles.noghat}>
                    <div>
                        <div className={styles.noghatTit}>
                            <span></span>
                            <span>نقاط قوت</span>
                        </div>
                        <div className={styles.noghatVal}>
                            <input value={myData.ghovTit} onChange={(e) => setMydata({...myData,ghovTit:e.target.value})}/>
                            {myData.ghovTit.length > 1 && <span onClick={() => {handleChange("ghov")}}> <BiPlus /></span>}
                        </div>
                        {
                            myData.ghovat.map((item,index) => 
                            <div key={index} className={styles.delNogh}>
                                <span>{item}</span>
                                <span onClick={() => setMydata({...myData,ghovat:myData.ghovat.filter(my => my !== item)})}><BiPlus /></span>
                            </div>
                            )
                        }
                    </div>

                    <div>
                        <div className={styles.noghatTit}>
                            <span style={{background:"#ff9d9d"}}></span>
                            <span>نقاط ضعف</span>
                        </div>
                        <div className={styles.noghatVal}>
                            <input value={myData.zafTit} onChange={(e) => setMydata({...myData,zafTit:e.target.value})} />
                            {myData.zafTit.length > 1 && <span onClick={() => {handleChange("zaf")}}> <BiPlus /></span>}
                        </div>
                        {
                            myData.zaf.map((item,index) => 
                            <div style={{background:"#fff7f7"}} key={index} className={styles.delNogh}>
                                <span style={{color:"#ea5d5d"}}>{item}</span>
                                <span style={{color:"#ea5d5d"}} onClick={() => setItems({...myData,zaf:myData.zaf.filter(my => my !== item)})}><BiPlus /></span>
                            </div>
                            )
                        }
                    </div>
                </div>

                <div className={styles.textComment}>
                    <span>دیدگاه شما *</span>
                    <textarea value={myData.message} onChange={(e) => setMydata({...myData,message:e.target.value})}>{myData.message}</textarea>
                    <button onClick={() => addComent()}>ثبت</button>
                </div>
        </div>

        :

        <div className={styles.comenting}>
               <p>دیدگاه خود را بنویسید</p>
               <div className={styles.unreg}>
                    <p>
                    برای ثبت دیدگاه، لازم است ابتدا وارد حساب کاربری خود شوید. اگر این محصول را قبلا از این فروشگاه خریده باشید، دیدگاه شما به عنوان مالک محصول ثبت خواهد شد.
                    </p>
                    <div >
                        <span><FaRegComment /></span>
                        <span>افزودن دیدگاه جدید</span>
                    </div>
               </div>
        </div>
        
        }
        </>
  )
}

export default AddCom