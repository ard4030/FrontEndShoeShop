"use client"
import style from './address.module.css'
import { Button, Modal , Select  } from 'antd';
import { useState , useEffect, useContext } from 'react';
import axios from 'axios';
// import SimpleMap from '../global/NeshanMap';

import { BASE_URL, OSTANHA } from '@/utils/constans';
import { useRouter } from 'next/navigation';
import Edit from '../icons/Edit';
import Delete1 from '../icons/Delete1';
import Link from 'next/link';
import { AddressContext } from '@/Context/AddressContext';


const AddressList = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [ostan, setIsOstan] = useState([]);
    const [shahr, setIsShahr] = useState([]);
    const {address,setOstan,setShahr,
        setAdd,setMobile,setPostalCode,
        setRes,setUpdate,
        activeItem,setActiveItem,
        activeType,setActiveType} = useContext(AddressContext)
    const router = useRouter();
    const [loading,setLoading] = useState(false)
    const [myAdd,setMyAdd] = useState(false)
    const [methods,setMethods] = useState([]);

    const getMethods = async () => {
        await axios.get(`${BASE_URL}/user/post/getMethods`).then(response => {
            if(response.data.success){
                setMethods(response.data.data)
                setActiveType(response.data.data[0])
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
    }

    const showModal = () => {
        setUpdate({
            ostan:"",
            shahr:"",
            address:"",
            mobile:"",
            postalCode:"",
            reciver:""
        })
        setMyAdd(false)
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        const data = {
            ostanName:address.ostan,
            cityName:address.shahr,
            name:address.reciver,
            mobile:address.mobile,
            postalCode:address.postalCode,
            description:address.address,
            lat:address.lat?address.lat:'',
            lang:address.lang?address.lang:'',
            id:myAdd._id
        }

     

        if(myAdd){
            await axios.post(`${BASE_URL}/user/address/updateAddress`,data).then(response => {
                if(response.data.success){
                    alert(response.data.message)
                    setIsModalOpen(false);
                    router.push('/address')
                }else{
                    if(response.data.messages){
                        alert(JSON.stringify(response.data.messages))
                    }else{
                        alert(response.data.message)
                    }
                }
            }).catch(err => {
                alert(err.message)
            })

        }else{
            await axios.post(`${BASE_URL}/user/address/addAddress`,data).then(response => {
                if(response.data.success){
                    alert(response.data.message)
                    setIsModalOpen(false);
                    router.push('address')
                }else{
                    if(response.data.messages){
                        alert(JSON.stringify(response.data.messages))
                    }else{
                        alert(response.data.message)
                    }
                }
            }).catch(err => {
                alert(err.message)
            })
            // setIsModalOpen(false);

        }
        


    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const getOstan = async () => {
        // await axios.get('https://iran-locations-api.vercel.app/api/v1/states',{
        //     withCredentials: false
        //   }).then(response => {
        //     if(response.status == 200){
        //         setIsOstan(response.data)
        //     }else{
        //         alert(response.statusText)
        //     }
        // }).catch(err => {
        //     console.log(err)
        //     alert("خطا در دریافت لیست استان ها ")
        // })
        setIsOstan(OSTANHA)
    }

    const getShahr = async (city) => {
        setLoading(true)
        await axios.get(`https://iran-locations-api.vercel.app/api/v1/cities?state=${city}`,{
            withCredentials: false
        }).then(response => {
            
          if(response.status == 200){
            setIsShahr(response.data.cities)
          }else{
              alert(response.statusText)
          }
          setLoading(false)
      }).catch(err => {
          console.log(err)
          setLoading(false)
          alert("خطا در دریافت لیست استان ها ")
      })
    }

    const deleteItem = async (id) => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/address/deleteAddress`,{id}).then(response => {
            if(response.data.success){
                alert(response.data.message)
                router.push('/address')
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    const settingUpdate = async (data) => {
        setUpdate({
            ostan:data.ostanName,
            shahr:data.cityName,
            address:data.description,
            mobile:data.mobile,
            postalCode:data.postalCode,
            reciver:data.name
        })
        setMyAdd(data)
        setIsModalOpen(true);
    }

    const newOrder = async () => {
        if(!activeItem || activeItem === false){
            alert('آدرسی انتخاب نکردید!!')
            return
        }

        if(!activeType || activeType === false){
            alert('روش پستی را انتخاب کنید')
            return
        }

        const data = {
            addressId:activeItem._id,
            postMethod:activeType._id
        }

        await axios.post(`${BASE_URL}/user/order/createOrder`,data,{withCredentials:true}).then(response => {
            if(response.data.success){
                router.push('/final')
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
    }


    useEffect(() => {
        getOstan()
        !activeItem && setActiveItem(data.data[0]);
        !activeType && setActiveType('پست پیشتاز');
        getMethods();

    }, [])
    

  return (

    <>
      <div>
            
            <div className='flex-between'>
                <h3 className='ireg'>آدرس های شما</h3>
                <div className='dflex'>
                    <button onClick={showModal} className='btnDef ml10'>افزودن آدرس</button>
                    <button onClick={() => {newOrder()}} className='btnDef'>نهایی کردن سفارش</button>
                    {/* <Link href={'/final'} className='btnDef'>نهایی کردن سفارش</Link> */}

                </div>
            </div>
            {
                (data && data.data.length > 0) ?
                    <div className='mt15'>
                    {
                        data && data.data.map((item,index) => 
                        <div onClick={() => { setActiveItem(item)}} key={index} className={`${style.contItem} ${(activeItem._id && activeItem._id === item._id) ? style.contItemActive  : ''}`}>
                            <div className={style.right}>
                                <div>
                                    <span className={style.bold}>آدرس : </span> 
                                    <span> {item.ostanName} - شهر {item.cityName} - {item.description}</span>
                                </div>
                                <div>
                                    <div>
                                        <span className={style.bold}>گیرنده : </span> 
                                        <span>{item.name}</span>
                                    </div>
                
                                    <div>
                                        <span className={style.bold}>کد پستی : </span> 
                                        <span>{item.postalCode}</span>
                                    </div>
                
                                    <div>
                                        <span className={style.bold}>تلفن : </span> 
                                        <span>{item.mobile}</span>
                                    </div>
                
                                    <div>
                                        <span className={style.bold}>موبایل : </span> 
                                        <span>{item.mobile}</span>
                                    </div>
                
                                </div>
                            </div>
                
                            <div className={style.left}>
                                <span onClick={() => {settingUpdate(item)}}><Edit width={20} height={20}/></span>
                                <span onClick={() => {deleteItem(item._id)}}><Delete1 width={20} height={20}/></span>
                            </div>
                        </div>
                        
                        )
                    }
                    </div>
                    :
                    <p>آدرسی تا الان ثبت نکردید</p>
                
            }
            
      </div>



      <div className='mt60'>
        <h3 className='ireg'>انتخاب شیوه ارسال</h3>
        <div>
            {
                methods && methods.map((item,index) => 
                <div 
                key={index}
                onClick={() => {setActiveType(item)}}
                className={`${style.contType} ${(activeType && activeType.name  === item.name)? style.contTypeActive : ''}`}>
                    {item.name} - {item?.price}
                </div>
                )
            }
            
        </div>
      </div>

      <Modal 
        title="آدرس" 
        open={isModalOpen}  
        onOk={handleOk} 
        onCancel={handleCancel}
        >
        <div className={style.forming}>
            {
                (!showMap) && 
                <div className={`${style.formal} ${style.formal2}`}>
                    <div>
                        <label>استان</label>
                        {
                            (ostan && ostan.length > 0) &&
                            <Select
                            showSearch
                            style={{
                            width: 200,
                            }}
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            fieldNames={{label: 'name', value: 'id'}}
                            filterOption={(input, option) => (option?.name ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                            (optionA?.name ?? '').localeCompare((optionB?.name ?? '').toLowerCase())
                            }
                            value={address.ostan}
                            options={ostan}
                            onChange={(e,b) => {
                                // setActiveOstan(b)
                                setOstan(b)
                                getShahr(b.name)
                            }}
                            
                            />
                        }
                    </div>

                    <div>
                        <label>شهر</label>
                        {
                            (shahr.length > 0 || myAdd) &&
                                <Select
                                showSearch
                                style={{
                                width: 200,
                                }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                fieldNames={{label: 'name', value: 'id'}}
                                filterOption={(input, option) => (option?.name ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                (optionA?.name ?? '').localeCompare((optionB?.name ?? '').toLowerCase())
                                }
                                options={shahr}
                                value={address.shahr}
                                onChange={(e,b) => {setShahr(b)}}
                                />
                        }
                    
                    </div>
     
                    <div>
                        <label>آدرس</label>
                        <input value={address.address} onChange={(e) => {setAdd(e.target.value)} }/>
                    </div>
                 </div>
            }
            
            
            <div className={`${style.formal} ${style.formal1} `}>
                <div>
                    <label>نام گیرنده</label>
                    <input value={address.reciver} onChange={(e) => {setRes(e.target.value) }} />
                </div>

                <div>
                    <label>موبایل</label>
                    <input value={address.mobile} onChange={(e) => {setMobile(e.target.value)} }  />
                </div>

                <div>
                    <label>تلفن ثابت</label>
                    <input   />
                </div>

                <div>
                    <label>کد پستی</label>
                    <input value={address.postalCode} onChange={(e) => {setPostalCode(e.target.value) }}  />
                </div>
            </div>

            

            <div>
                <button onClick={() => {setShowMap(true)}} className='btnDef'>انتخاب از روی نقشه</button>
            </div>

            {
                (showMap) &&
                <div>
                    <button onClick={() => setShowMap(false)}>بستن</button>
                    {/* <SimpleMap /> */}
                </div>
            }

        </div>
      </Modal>


    </>
    
  )
}

export default AddressList