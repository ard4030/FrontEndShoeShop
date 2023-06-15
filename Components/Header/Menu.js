"use client"
import {useState,useEffect} from 'react'
import style from "./header.module.css"
import down from "../../public/images/down.png"
import Image from 'next/image'
import { BASE_URL } from '@/utils/constans'
import {RiArrowLeftSLine} from "react-icons/ri"
import Link from 'next/link'
import axios from 'axios'


const Menu = () => {
    const [data, setdata] = useState([]);
    
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await axios.get(`${BASE_URL}/user/category/getAllCategory`).then((response => {
            if(response.data.success){
                setdata(response.data.data)
            }else{
                console.log(response.data.message)
            }
        })).catch(err => {
            console.log(err.message)
        })
        
    }
    

  return (
    <div>
        <ul className={style.menu1}>
            <li>
                <Link href={"/"} className={`flex-between ${style.liii} linkTag`}>
                    <span className={style.title}>خانه</span>
                </Link>
            </li>
            {
                data && data.length > 0 && data.map((item,index) => 
                <li key={index} >
                    <div className={`flex-between ${style.liii}`}>
                        <span className={style.title}>{item.title}</span>
                        <Image className={style.downIco} src={down} width={8} height={10} alt="" />
                    </div>

                    {
                        item.children && item.children.length > 0 && 
                        <div className={style.subMenu}>
                            <ul>
                                {
                                    item.children.map((item1,index1) => 
                                        <li key={index1}>
                                            <div className={`${style.subbing} ${style.liii}`}>
                                                <span className={style.title}>{item1.title}</span>
                                                <span><RiArrowLeftSLine /></span>
                                            </div>
                                            <div className={style.subMenu2}>
                                                <ul>
                                                    {
                                                    item1.children && item1.children.length > 0 && item1.children.map((item2,index2) => 
                                                        <li key={index2} className={style.liii}>
                                                            {item2.title}
                                                        </li>
                                                    )
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    }
                    
                 </li>
                )
             }
            
        </ul>
    </div>
  )
}

export default Menu