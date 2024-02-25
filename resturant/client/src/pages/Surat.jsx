import React from 'react';
import Heder from '../login/Heder';
import Card from '../home/Card';

const Surat = () => {
  const cardsdetail = [
    {
        title: "Kansar Gujarati Thali",
        image: "https://akm-img-a-in.tosshub.com/lingo/images/story/media_bank/202311/655dd6375bbca-bastian-222142107-16x9.jpg",
        details: "Kansar Gujarati Thali is known for serving authentic Gujarati cuisine in a traditional thali format. With a variety of dishes including dal, sabzi, roti, and sweets, Kansar offers a taste of home-cooked Gujarati food in the heart of Surat."
    },
    {
        title: "Black Pepper",
        image: "https://assets.architecturaldigest.in/photos/61bf5698964e7236ae515700/1:1/w_4480,h_4480,c_limit/(1).jpg",
        details: "Black Pepper is a popular fine dining restaurant in Surat known for its elegant ambiance and exquisite cuisine. With a menu featuring a fusion of Indian and international dishes, Black Pepper promises a memorable dining experience for food enthusiasts."
    },
    {
        title: "Oven Magick",
        image: "https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/4:3/w_1440,h_1080,c_limit/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg",
        details: "Oven Magick is a renowned bakery in Surat known for its delicious cakes, pastries, and other baked goods. With a wide variety of sweet treats and savory snacks, Oven Magick is a favorite spot for cake lovers and pastry enthusiasts."
    },
    {
        title: "Lavish Greens kitchen",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/12/AF/ZX/XF/14177800/fast-food-restaurant-interior-designer.jpg",
        details: "Lavish Greens is a vegetarian restaurant in Surat that offers a wide range of flavorful dishes made from fresh and locally sourced ingredients. With a focus on healthy eating and sustainability, Lavish Greens provides a guilt-free dining experience."
    },
    {
        title: "Kansar Kathiyawadi Thali",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJykJMJbWcJxXxqcsf8mVW1HHCMKDM7a0GA&usqp=CAU",
        details: "Kansar Kathiyawadi Thali is famous for serving authentic Kathiyawadi cuisine in Surat. With a variety of spicy and flavorful dishes including dal, kadhi, and roti, Kansar Kathiyawadi Thali offers a true taste of Kathiyawad."
    },
   
];
  return (
    <>
    <div className='home-heder'>
    <Heder/>
    </div>

    <div>
        <Card cardd={cardsdetail}/>
    </div>
    
    </>
  )
}

export default Surat