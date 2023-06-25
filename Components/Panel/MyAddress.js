import React,{useState,useEffect} from 'react'
import styles from "./panel.module.css"
import {AiOutlineDelete , AiOutlineEdit} from "react-icons/ai"
import axios from 'axios';
import { BASE_URL } from '@/utils/constans';
import { citys } from '@/utils/city';
import { stats } from '@/utils/state';
import {IoIosAddCircleOutline} from "react-icons/io"
import SmallLoad from '../Global/SmallLoad';

const MyAddress = () => {
    const [data, setData] = useState([]);
    const [shahr, setShahr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState({
        show:false,
        cityCode:"",
        cityName:"",
        ostanCode:"",
        ostanName:"",
        description:"",
        lang:"",
        lat:"",
        mobile:"",
        name:"",
        postalCode:"",
        plak:"",
        edit:false,
        id:null
    });


    const changeEdit = (e) => {
        setActive({...active,
        show:true,
        cityCode:e.cityCode,
        cityName:e.cityName,
        ostanCode:e.ostanCode,
        ostanName:e.ostanName,
        description:e.description,
        lang:e.lang,
        lat:e.lat,
        mobile:e.mobile,
        name:e.name,
        postalCode:e.postalCode,
        plak:e.plak,
        edit:true,
        id:e._id
        })
    }

    const closeModal = () => {
        setActive({
            show:false,
            cityCode:"",
            cityName:"",
            ostanCode:"",
            ostanName:"",
            description:"",
            lang:"",
            lat:"",
            mobile:"",
            name:"",
            postalCode:"",
            plak:"",
            edit:false
        })
    }

    const getData = async () => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/address/getAddressById`,null,{withCredentials:true}).then(response => {
            if(response.data.success){
                setData(response.data.data)
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    const changeOstan = (id) => {
        let ostanN = stats.find(item => item.id == id);
        setActive({...active,ostanCode:id,ostanName:ostanN.name})
        setShahr(citys.filter(item => item.province_id == id))
    }

    const changeShahr = (e) => {
        let shahrN = citys.find(item => item.province_id == active.ostanCode)
        setActive({...active,cityCode:e.target.value,cityName:shahrN.name})
    }

    const addAddress = async () => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/address/addAddress`,active,{withCredentials:true}).then(response => {
            if(response.data.success){
                alert(response.data.message)
                getData()
                closeModal()
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    const editAddress = async () => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/address/updateAddress`,active,{withCredentials:true}).then(response => {
            if(response.data.success){
                alert(response.data.message)
                getData()
                closeModal()
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    const deleteItem = async (id) => {
        setLoading(true)
        await axios.post(`${BASE_URL}/user/address/deleteAddress`,{id},{withCredentials:true}).then(response => {
            if(response.data.success){
                alert(response.data.message)
                getData()
                closeModal()
            }else{
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
        setLoading(false)
    }

    useEffect(() => {
      getData()
    }, [])


  return (
    <>
        {
            loading ?
            <SmallLoad width={"100%"} height={"400px"} />
            :

            <>
            <div className={styles.contAdd}>
            {
                data && data.length > 0 && data.map((item,index) => 
                <div key={index} className={styles.cardAdd}>
                
                    <div className={styles.actionsAdd}>
                        <span onClick={() => deleteItem(item._id)} className='flex-center'><AiOutlineDelete /></span>
                        <span onClick={() => {changeEdit(item)}} className='flex-center'><AiOutlineEdit /></span>
                    </div>

                    <div>
                        <span>استان : </span>
                        <span>{item.ostanName}</span>
                    </div>

                    <div>
                        <span>شهر : </span>
                        <span>{item.cityName}</span>
                    </div>

                    <div>
                        <span>گیرنده : </span>
                        <span>{item.name}</span>
                    </div>

                    <div>
                        <span>تلفن : </span>
                        <span className='inum'>{item.mobile}</span>
                    </div>

                    <div>
                        <span>آدرس : </span>
                        <span>{item.description}</span>
                    </div>
                </div>
                )
            }

            <div onClick={() => setActive({...active,show:true})} className={styles.cardAdd1}>
                <span>افزودن آدرس</span>
                <span><IoIosAddCircleOutline /></span> 
            </div>
            
            </div>

        {
            active.show && <div className={styles.modalAdd}>
            <div className={styles.modalCont}>
                <div className={styles.headModalAdd}>
                    {
                    active.edit ?
                    <span>ویرایش آدرس</span>
                    :
                    <span>آدرس جدید</span>
                    
                    }
                    
                    <div>
                        <span 
                        onClick={() => active.edit ? editAddress() : addAddress()}
                        className={styles.stSave}>ذخیره</span>
                        <span onClick={closeModal} className={styles.stClose}>بستن</span>
                    </div>
                </div>
                <div className={styles.itemRow}>
                    <span>استان : </span>
                    <select value={active.ostanCode} onChange={(e) => changeOstan(e.target.value)}>
                        {
                            stats.map((item,index) => 
                                <option value={item.id} key={index}>{item.name}</option>
                            )
                        }

                    </select>
                </div>

                <div className={styles.itemRow}>
                    <span>شهر : </span>
                    <select value={active.cityCode} onChange={changeShahr}>
                        {
                            shahr.map((item,index) => 
                                <option value={item.id} key={index}>{item.name}</option>
                            )
                        }
                        
                        {/* <option>تهران</option> */}
                    </select>
                </div>

                <div className={styles.itemRow}>
                    <span>موبایل : </span>
                    <input value={active.mobile} onChange={(e) => setActive({...active,mobile:e.target.value})} />
                </div>

                <div className={styles.itemRow}>
                    <span>گیرنده : </span>
                    <input value={active.name} onChange={(e) => setActive({...active,name:e.target.value})} />
                </div>

                <div className={styles.itemRow}>
                    <span>کدپستی : </span>
                    <input value={active.postalCode} onChange={(e) => setActive({...active,postalCode:e.target.value})} />
                </div>

                <div className={styles.itemRow}>
                    <span>آدرس : </span>
                    <textarea  
                    value={active.description} onChange={(e) => setActive({...active,description:e.target.value})}
                    style={{width:"75%",minHeight:"100px"}}>

                    </textarea>
                    
                </div>

            </div>
            </div> 
        }  
            </>
        } 
    </>
    
  )
}

export default MyAddress