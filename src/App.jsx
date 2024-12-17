import { useState } from "react";
import Flower from "./flower/flower";
import "./App.css";


function App() {
  const shopFlowers = [
    {
      id: 1,
      price: "1500 руб",
      title: "Букет из 15 красных роз",
      location: "Кения",
      fav: false,
      img: "https://flawery.ru/image/thumb_1220/products/194404/1233367_2.jpg",
    },
    {
      id: 2,
      price: "1350 руб",
      title: "Букет из 15 разноцветных роз",
      location: "Кения",
      fav: false,
      img: "https://rostov.whiterabbit-flowers.ru/media/images/2018/12/05/images/im-1/a/W/b/aWbDGF0sKen3d5-large.jpg",
    },
    {
      id: 3,
      price: "10500 руб",
      title: "Букет из 51 белой розы",
      location: "Эквадор",
      fav: false,
      img: "https://cdn1.ozone.ru/s3/multimedia-g/6688796380.jpg",
    },
    {
      id: 4,
      price: "2500 руб",
      title: "Букет из 21 желтой розы",
      location: "Кения",
      fav: false,
      img: "https://i-fotok.ru/cvety/buket-zheltih-roz-foto_3/22.jpg",
    },
    {
      id: 5,
      price: "1700 руб",
      title: "Букет из 17 белых роз",
      location: "Эквадор",
      fav: false,
      img: "https://dyurtyuli.dostavka-byketov.ru/upload/iblock/f6a/f6a10ec7be903a33d87cb5d6309d8c0e.jpg",
    },
  ];

  const [flowers, setFlowers] = useState(shopFlowers);

  const deleteFlower = (flowerId) => {
    setFlowers(flowers.filter((flower) => flower.id !== flowerId))
  }

  const favoriteFlower = (flowerId) => {
    setFlowers(flowers.map(flower => {
      if(flower.id === flowerId){
        flower.fav = !flower.fav
      }
      return flower
  }))
  }

  const editFlower = (newflower) => {
    setFlowers(flowers.map(flower => {
      if(flower.id === newflower.id){
        flower.price = newflower.price
        flower.title = newflower.title
        flower.location = newflower.location
      }
      return flower
    }))}


  return (
    <div>
      <h1>Каталог цветов</h1>
      <div className="container">
      {flowers.map((flower) => (
        <Flower key={flower.id} flower={flower} deleteFlower={deleteFlower} favoriteFlower={favoriteFlower} editFlower={editFlower}/>
      ))}
      </div>
    </div>
  );
}

export default App;
