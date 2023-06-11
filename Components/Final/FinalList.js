import style from './cart.module.css'
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '@/utils/constans';
import { useRouter } from 'next/navigation';

const FinalList = ({data}) => {
    const [code, setCode] = useState('');
    const [discount, setDiscount] = useState({type:'naghdi',price:0});
    const router = useRouter();

    const checkDiscount = async () => {
        if(data){
            await axios.post(`${BASE_URL}/user/order/checkDiscount`,{code},{withCredentials:true}).then(response => {
                if(response.data.success){
                    alert(response.data.message)
                    router.reload();
                }else{
                    alert(response.data.message)
                }
            }).catch(err => {
                alert(err.message)
            })
        }else{
            alert('جهت استفاده از کد تخفیف بایدمحصولی را به سبد خرید خود اضافه کنید')
        }
        
    }


  return (
    <div>
        <table className={style.table}>
            <thead>
                <tr>
                    <th style={{width:'12%'}}>تصویر</th>
                    <th style={{width:'25%'}}>محصول</th>
                    <th style={{width:'10%'}}>تعداد</th>
                    <th>قیمت واحد</th>
                    <th>مجموع</th>
                </tr>
            </thead>

            <tbody>
                {
                    data && data.userDetails.map((item,index) => 
                        <tr key={index}>
                            <td>تصویر</td>
                            <td>
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
                                </div>
                            </td>
                            <td>{item.count}</td>
                            <td>{item.totalPrice/item.count}</td>
                            <td>{item.totalPrice}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        {!data && <p className='empty'>سبد خرید شما خالی میباشد</p>}

        <div className='flex-left'>
            <div className={style.contFoo}>
                <div className={style.fooTit}>
                    <span>مجموع</span>
                    <span>ارسال</span>
                    <span>تخفیف</span>
                    <div className='hor'></div>
                    <span>جمع کل</span>
                </div>
                <div className={style.fooTit}>
                    <span>{ data && parseInt(data.total).toLocaleString()} تومان</span>
                    <span>{ data && data.postMethod[0].price.toLocaleString()} تومان</span>
                    <span>
                        {
                            ( data &&  data.discount) ?
                            (data.discount.type === "naghdi") ?
                            data.discount.price.toLocaleString() + " تومان "  
                                :
                                data.discount.price + " درصد "
                            :
                                0  
                        }
                    </span>
                    <div className='hor'></div>
                    <span>{ data &&  data.totalAllPrice.toLocaleString()} تومان</span>
                </div>
            </div>
        </div>

        <div>
            <input value={code} onChange={(e) => setCode(e.target.value)} />
            <button onClick={() => {checkDiscount()}}>اعمال کد تخفیف</button>
            <br/>
            {
                data &&  data.discount && data.discount != null && 
                <p>شما قبلا کد تخفیف را وارد کردید و تخفیف براتون لحاظ شده . اگر کد تخفیف جدید دارید میتونید استفاده کنید </p>
            }
        </div>
    </div>
  )
}

export default FinalList