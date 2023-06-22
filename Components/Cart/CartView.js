import { BASE_URL } from '@/utils/constans'
import Image from 'next/image'
import { useContext, useState } from 'react'
import HeadCart from '../Global/HeadCart'
import styles from './cart.module.css'
import {MdClose} from "react-icons/md"
import{BiMinus} from "react-icons/bi"
import{BsPlusLg} from "react-icons/bs"
import ViewPrice1 from '../Global/ViewPrice1'
import SmallLoad from '../Global/SmallLoad'
import { CartContext } from '@/Context/CartContext'
import Free from '../Global/Free'
import {MdArrowBackIosNew} from"react-icons/md"
import { useRouter } from 'next/navigation'
import { PaymentContext } from '@/Context/PaymentContext'

const CartView = ({data}) => {
    const {cart,loading,addCount,deleteCount,deleteItem,getCartPrice} = useContext(CartContext)
    const {checkDiscount,myOrder,getAllProductsPrice} = useContext(PaymentContext)
    const [discount,setDiscount] = useState("")
    const router = useRouter();
    
    return (
    <div className='container'>
        <HeadCart data={"cart"} />
                <div className={`mt20`}>
                    <div className={styles.btHead}>
                        <span>سبد خرید</span>
                        <span>{cart && cart.length}</span>
                    </div>

                    <div className={styles.content}>
                        {
                            (cart && loading === false) ?
                            <>
                                <div>
                                    <div className={styles.tableItems}>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td style={{width:'5%'}}></td>
                                                    <td style={{width:'10%'}}>عکس</td>
                                                    <td style={{width:'40%'}}>محصول</td>
                                                    <td style={{width:'16%'}}>قیمت</td>
                                                    <td style={{width:'13%'}}>تعداد</td>
                                                    <td style={{width:'16%'}}>جمع</td>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    cart && cart.length > 0 && cart.map((item,index) => 
                                                    <tr key={index}>
                                                        <td style={{background:"#fdf2f2"}}>
                                                            <div onClick={() => {deleteItem(item._id)}} className='flex-center fn20 cpointer danger'>
                                                                <MdClose/>
                                                            </div>
                                                        </td>
                                                        <td >
                                                            <div className='flex-center'>
                                                                <Image  width={60} height={60} alt="" src={`${BASE_URL}${item.image[0].images[0]}`} />
                                                            </div>
                                                        </td>
                                                        <td >
                                                            <div>
                                                                <span>{item.p_name}</span>
                                                                <div className={styles.addonItem}>
                                                                    {
                                                                        JSON.parse(item.addonItem).map((item1,index1) => 
                                                                        <div key={index1} >
                                                                            <span className={styles.tt1}>{item1.title} : </span>
                                                                            <span className={styles.tt2}>{item1.key}</span>
                                                                            <span style={{background:`${item1.value}`}} className={styles.tt3}></span>
                                                                        </div>

                                                                        )
                                                                    }
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td >
                                                            <ViewPrice1 price={parseInt(item.priceAsli)} />
                                                        </td>
                                                        <td>
                                                            <div className={styles.conting}>
                                                                <div>
                                                                    <span onClick={() => addCount(JSON.parse(item.addonItem),item.productId)} className='flex-center fn14'><BsPlusLg /></span>
                                                                    <span onClick={() => deleteCount(JSON.parse(item.addonItem),item.productId)} className='flex-center fn14'><BiMinus /></span>
                                                                </div>
                                                                <span>{item.count}</span>
                                                                
                                                            </div>
                                                        </td>   
                                                        <td >
                                                            <ViewPrice1 price={item.totalPrice} />
                                                        </td>

                                                    </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>

                                        <div className={styles.contTakhfif}>
                                            <span className={styles.lblTakhfif}>کد تخفیف:</span>
                                            <div>
                                                <input value={discount} onChange={(e) => setDiscount(e.target.value)} />
                                                <span onClick={() => checkDiscount(discount)}>اعمال کد تخفیف</span>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                                <div>
                                    <span className={styles.oth1}>جمع کل سبد خرید</span>
                                    <Free  back={"#fff"} />
                                    <div className='flex-between mb10'>
                                        <span className='fn12'>جمع جز</span>
                                        <ViewPrice1 color={"#797979"} price={getCartPrice()}/>
                                    </div>

                                    <div className='flex-between mb10'>
                                        <span className='fn12'>مجموع</span>
                                        
                                        <ViewPrice1 color={"#797979"} 
                                        price={parseInt(getAllProductsPrice(0,getCartPrice(),myOrder.discount)).toLocaleString()}/>
                                    </div>

                                    <div className='flex-between mb10'>
                                        <span className='fn12'>تخفیف شما از این خرید</span>
                                        {
                                        myOrder.discount && myOrder.discount.type === "darsadi" ?
                                        <div className={styles.takhP}>
                                            <span>{myOrder.discount.value}</span>
                                            <span>درصد</span>
                                        </div>
                                        :myOrder.discount && myOrder.discount.type === "naghdi"?

                                        <div className={styles.takhP}>
                                            <span>{myOrder.discount.value.toLocaleString()}</span>
                                            <span>تومان</span>
                                        </div>

                                        :

                                        <div className={styles.takhP}>
                                            <span>{0}</span>
                                            <span>تومان</span>
                                        </div>

                                        }
                                        
                                    </div>

                                    <div onClick={() => router.push('/checkout')} className={styles.btnNext}>
                                        <span>
                                            <MdArrowBackIosNew />
                                            <MdArrowBackIosNew />
                                        </span>
                                        ادامه جهت تسویه حساب        
                                    </div>
                                </div>
                            </>

                            :
                            <div style={{width:'100%'}} className='flex-center w100'>
                                <SmallLoad width={"100px"} height={"100px"} />
                            </div>
                        }
                    </div>
                </div>

    </div>
  )
}

export default CartView