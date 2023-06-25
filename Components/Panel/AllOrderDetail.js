import React from 'react'
import styles from "../Pay/viewpay.module.css"
import{BsFileEarmarkText , BsMap , BsTelephone  } from "react-icons/bs"
import {GoMail} from "react-icons/go"
import{GrClose} from "react-icons/gr"

const AllOrderDetail = ({data,close}) => {
  return (
    <>
    {
        data && <div>
        <div style={{justifyContent:"space-between",cursor:"pointer",padding:"5px"}} className={styles.title}>
            <div className='dflex acenter'>
                <span className='flex-center ml10 fn16'><BsFileEarmarkText /></span>
                <span>مشخصات سفارش</span>
            </div>
            <span onClick={() => close()} className='flex-center'>
                <GrClose />
            </span>
        </div>

        <div className={styles.cont}>
            <div>
                <span>محصول</span>
                <span>مجموع</span>
            </div>

            <div className='dwrap'>
                {
                    data && data.cartDetail.product.map((item,index) => 
                    <div key={index} className='w100 mb5'>
                        <span style={{width:"65%",display:"inline-block"}}>{item.p_name}</span>
                        <span className='inum'>
                            <span>{item.totalPrice.toLocaleString()}</span>
                            <span className='mr5'>تومان</span>
                        </span>
                    </div>
                    )
                }
                
            </div>

            <div>
                <span>جمع كل سبد خريد:</span>
                <span className='inum'>
                    <span>{parseInt(data && data.amount).toLocaleString()}</span>
                    <span className='mr5'>تومان</span>
                </span>
            </div>

            {/* <div>
                <span>حمل و نقل:</span>
                <span>حمل و نقل رایگان</span>
            </div> */}

            <div>
                <span>روش پرداخت: </span>
                <span>{data && data.payMethod[0].title}</span>
            </div>

            <div>
                <span>قیمت نهایی:</span>
                <span className='inum'>
                    <span>{parseInt(data &&  data.amount).toLocaleString()}</span>
                    <span className='mr5'>تومان</span>
                </span>
            </div>


        </div>

        <div className={styles.title}>
            <span className='flex-center ml10 fn16'><BsMap /></span>
            <span>آدرس صورتحساب</span>
        </div>

        <div className={styles.cont1}>
            <div className='dflex acenter w100'>
                <span>{data && data.first_name}</span>
                <span className='mr10'>{data && data.last_name}</span>
            </div>

            <div className='mt10 w100'>
                <span>استان {data && data.addres[0].ostanName}</span>
                &nbsp;
                ،
                &nbsp;
                <span>{data && data.addres[0].cityName}</span>
                &nbsp;
                ،
                &nbsp;
                <span>{data && data.addres[0].description}</span>
            </div>

            <div className='mt10 w100'>
                <span>کد پستی : </span>
                <span>{data && data.addres[0].postalCode}</span>
            </div>

            <div className={`mt10 w100 dflex acenter ${styles.nk}`}>
                <span className={`flex-center ml10 fn16`}><BsTelephone /></span>
                <span>{data && data.addres[0].mobile}</span>
            </div>

            <div className={`mt10 w100 dflex acenter ${styles.nk}`}>
                <span className={`flex-center ml10 fn16`}><GoMail /></span>
                <span>{data && data.email}</span>
            </div>
        </div>
    </div>
    }
    </>
  )
}

export default AllOrderDetail