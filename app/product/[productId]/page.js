
import ProductView from '@/Components/Product/ProductView'
import { BASE_URL } from '@/utils/constans'
import axios from 'axios'

export const metadata = {
  title: 'صفحه محصول',
  description: 'Generated by create next app',
}

const Product = async (props) => {
  
    const data = await axios.post(`${BASE_URL}/user/product/getProductById`,{
        id:props.params.productId
    },{cache: 'no-store'})


  return (
    <>
    {
      data && <ProductView data={data.data.data[0]} />
    }
    </>
  )
}

export default Product