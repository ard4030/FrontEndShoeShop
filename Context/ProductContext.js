"use client"
import { createContext } from "react"
import { useState , useEffect } from "react";

export const ProductCtx = createContext();

const ProductContext = ({children}) => {

    const [active, setActive] = useState(null);
    const [isHere,setIsHere] = useState(true);


    const initActive = (data) => {
        let x = [];
        data && data.addonItem.map(item => {
          x.push({title:item.title,key:item.specs[0]?.key,price:item.specs[0]?.price,quantity:item.specs[0]?.quantity,value:item.specs[0]?.value,_id:item.specs[0]?._id})
        })
        setActive({
            p_name:data.p_name,
            e_name:data.e_name,
            productId:data._id,
            price:parseInt(data.priceAsli),
            addonItem:x,
            quantity:data.quantity,
            colors:data?.colors? data?.colors[0] : null
        })
    }

    const hering = () => {
      const her = active?.addonItem.filter(item => item.quantity < 1);
      if(her && her.length > 0 && active.quantity < 1){
        setIsHere(false)
      }else{
        setIsHere(true)
      }
    }

    const changeActive = (title,data) => {
      let x = active.addonItem;
      x.map(item => {
        if(item.title === title){
          item.key = data.key
          item.price = data.price
          item.quantity = data.quantity,
          item.value = data.value
          item._id = data._id
        }
      })

      setActive({...active,addonItem:x})
      hering()
    }

    useEffect(() => {
      // hering()
    }, [active])

    const getPrice = () => {
      let price = active.price ? active.price : 0 ;
      active.addonItem.map(item => {
        price = price + parseInt(item.price)
      })

      return price;
    }
    


  return (
    <ProductCtx.Provider value={{active,initActive,changeActive,isHere,getPrice}}>
        {children}
    </ProductCtx.Provider>
  )
}

export default ProductContext