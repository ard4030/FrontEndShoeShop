"use client"

import { CartContext } from '@/Context/CartContext'
import { BASE_URL } from '@/utils/constans'
import Image from 'next/image'
import { useContext } from 'react'
import Loading from '../Global/Loading'
import Delete from '../icons/Delete'
import Mines from '../icons/Mines'
import Plus from '../icons/Plus'
import style from './cart.module.css'

const ListItems = ({data}) => {
    const {addCount,deleteCount,cart,loading,deleteItem} = useContext(CartContext)
    
    const getAllPrice = () => {
        let price = 0;
        data.map(item => {
            price = item.totalPrice + price
        })

        return price;
    }
  return (
    <div>
        {
            (loading) ?
                <Loading />
            :
            <>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th style={{width:'12%'}}>تصویر</th>
                            <th style={{width:'25%'}}>محصول</th>
                            <th style={{width:'10%'}}>عملیات</th>
                            <th style={{width:'10%'}}>تعداد</th>
                            <th>قیمت واحد</th>
                            <th>مجموع</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                    cart && cart.map((item,index) => {
    
                        return <tr key={index}>
                        <td>
                            <div className='flex-center'>
                             
                                <Image width={100} height={100} alt='' src={`${item.image[0] && item.image[0].images && item.image[0].images.length > 0  && BASE_URL+item.image[0].images[0]}`} />
                            </div>
                        </td>
                        <td className={style.product}>
                            <span className={style.pname}>{item.p_name}</span>
                            <span className={style.ename}>{item.e_name}</span>
                            <div className={style.attr}>
                                {
                                    JSON.parse(item.addonItem).map((item1,index1) => 
                                    <div key={index1} className={style.itemAt}>
                                        <span>{item1.title} : </span>
                                        <span>{item1.key}</span>
                                        {
                                        (item1.title === 'رنگ بندی') && 
                                        <span style={{width:'20px',height:'20px',borderRadius:'100%',display:'inline-block',background: item1.value}}>
                                           
                                        </span>
                                        }
                                        
                                    </div>
                                    )
                                }
                                
                                {}
                            </div>
                            
                        </td>
                        <td>
                            <div onClick={() => {deleteItem(item._id)}} className='flex-center c-pointer'>
                                <Delete width={25} height={25} /> 
                            </div>
                        </td>
                        <td>
                            <div className={style.change}>
                                <button onClick={() => {addCount(JSON.parse(item.addonItem),item.productId)}}><Plus width={10} height={10} /></button>
                                <span>{item.count}</span>
                                <button onClick={() => {deleteCount(JSON.parse(item.addonItem),item.productId)}}><Mines width={10} height={10} /></button>
                            </div>
                        </td>
                        <td>
                            <div className={style.pricing}>
                                <h5>{parseInt(item.priceAsli).toLocaleString()} تومان</h5>
                            </div>
                        </td>

                        <td>
                            <div className={style.pricing}>
                                <h5>{item.totalPrice.toLocaleString()} تومان</h5>
                            </div>
                        </td>
                    </tr>
                    }
                    
                    )
                }

                    </tbody>
                </table>
                <div className='flex-left'>
                    <div className={style.contFoo}>
                        <div className={style.fooTit}>
                            <span>مجموع</span>
                            <span>تخفیف</span>
                            <span>ارسال</span>
                            <span>جمع کل</span>
                        </div>
                        <div className={style.fooTit}>
                            <span>{getAllPrice().toLocaleString()} تومان</span>
                            <span>0</span>
                            <span>0</span>
                            <span>{getAllPrice().toLocaleString()} تومان</span>
                        </div>
                    </div>
                </div>
            </>

        }
        
    </div>
  )
}

export default ListItems