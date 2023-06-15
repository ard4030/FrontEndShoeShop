
import MySlider from "@/Components/Home/MySlider/MySlider";
import SliderLeft from "@/Components/Home/sliderTopLeft/Slider";
import { BASE_URL } from "@/utils/constans"
import CategorySlider from "@/Components/Home/categorySlider/CategorySlider";
import Slider4 from "@/Components/Home/slider4/Slider4";
import Slider5 from "@/Components/Home/slider5/Slider5";
import Slider6 from "@/Components/Home/slider6/Slider6";
import Takhfif from "@/Components/Home/takhfif/Takhfif";
import Tabligh from "@/Components/Home/tabligh/Tabligh";
import Slider7 from "@/Components/Home/slider7/Slider7";
import Slider8 from "@/Components/Home/slider8/Slider8";

export const metadata = {
  title: 'فروشگاه دلبر شاپ',
  description: 'Generated by create next app',
}

export default async function Home(props) {

  const res = await fetch(`${BASE_URL}/user/option/getHome`,{
    headers :{"Content-Type": "application/json"},
    cache:"no-store",
    method:"GET"
  })
  const data = await res.json();

  

  const mostSale = [
    {
      id:1,
      name:"تلويزيون ال اي دي هوشمند سامسونگ مدل 55KU7970 سايز 55 اينچ",
      image:"https://demos.mahdisweb.net/digiland/wp-content/uploads/2017/10/1-32-75x75.jpg",
      price:850000,
      discount:0,
      rate:4.5
    },
    {
      id:2,
      name:"کوله پشتی کينگ کمپ مدل Peach 28",
      image:"https://demos.mahdisweb.net/digiland/wp-content/uploads/2018/06/01-75x75.png",
      price:246500,
      discount:0,
      rate:4.0
    },
    {
      id:3,
      name:"گوشی موبایل اپل مدل iPhone 12 A2404 دو سیم‌ کارت ظرفیت 128 گیگابایت",
      image:"https://demos.mahdisweb.net/digiland/wp-content/uploads/2019/03/aplle-75x75.webp",
      price:430000,
      discount:0,
      rate:4.5
    },
    {
      id:4,
      name:"تلويزيون ال اي دي هوشمند سامسونگ مدل 55KU7970 سايز 55 اينچ",
      image:"https://demos.mahdisweb.net/digiland/wp-content/uploads/2017/10/1-32-75x75.jpg",
      price:850000,
      discount:0,
      rate:4.5
    },
    {
      id:5,
      name:"کوله پشتی کينگ کمپ مدل Peach 28",
      image:"https://demos.mahdisweb.net/digiland/wp-content/uploads/2018/06/01-75x75.png",
      price:246500,
      discount:0,
      rate:4.0
    },
    {
      id:6,
      name:"گوشی موبایل اپل مدل iPhone 12 A2404 دو سیم‌ کارت ظرفیت 128 گیگابایت",
      image:"https://demos.mahdisweb.net/digiland/wp-content/uploads/2019/03/aplle-75x75.webp",
      price:430000,
      discount:0,
      rate:4.5
    },
  ]

  
  return (
    <div className="container">

      <div className="flex-between">
        <div className="compRight">
           {data && <MySlider data={data.data.SliderTop}  />}
        </div>
        <div className="compLeft">
           {data && <SliderLeft data={data.data.SliderMoment}  />}
        </div>
      </div>

      <div className="catslider">
        {data && <CategorySlider data={data.data.Categorys} />}
      </div>

      <div className="centersec">
         <div className="sec3Right">
            {data && <Slider4 data1={data.data.ProSlider} />}
         </div> 

         <div className="sec3Left">
            {data && <Slider5  data1={data.data.ShegeftSlider} />} 
         </div>
      </div>

      <div className="sec4">
        {data && <Slider6  data={data.data.NewsProduct} />} 
      </div>

      <div className="sec5">
        <Takhfif />
        <Tabligh />
      </div>

      <div className="sec6">
        <Slider7 data={mostSale} />
      </div>

      <div className="sec7">
          {data && <Slider8  data={data.data.SliderArticle} />} 
      </div>

    </div>
  )
}
