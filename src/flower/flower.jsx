import PropTypes from "prop-types";
import "../flower/flower.css";
import { useState } from "react";

const Flower = ({ flower, deleteFlower, favoriteFlower, editFlower }) => {
  const [showMenu, setShowMenu] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [inputPrice, setInputPrice] =useState(flower.price);
  const [inputTitle, setInputTitle] =useState(flower.title);
  const [inputLocation, setInputLocation] =useState(flower.location);
  const changeCard = () => {
    editFlower({id: flower.id, price: inputPrice, title: inputTitle, location: inputLocation, fav: flower.fav});
    setIsEdit(false);
    setInputPrice('');
    setInputTitle('');
    setInputLocation('');
  }

  return (
    <div>
      <div className={flower.fav ? "blue_flower" : "flower"}>
        <img src={flower.img} alt="" />
        <div className="flower_price">{flower.price}</div>
        <div>{flower.title}</div>
        <div>{flower.location}</div>
        <button onClick={() => setShowMenu(!showMenu)}>Меню</button>
        <div className={showMenu ? "flower_menu" : "hidden"}>
          <button onClick={() => deleteFlower(flower.id)}>Удалить</button>
          <button onClick={() => favoriteFlower(flower.id)}>
            {flower.fav ? "Удалить из избранного" : "Добавить в избранное"}
          </button>
          <button onClick={() => setIsEdit(!isEdit)}>Редактировать</button>
        </div>
        {isEdit && <input type='text' value={inputPrice}  onChange={(e) => setInputPrice(e.target.value)} />} 
        {isEdit && <input type='text' value={inputTitle}  onChange={(e) => setInputTitle(e.target.value)} />} 
        {isEdit && <input type='text' value={inputLocation}  onChange={(e) => setInputLocation(e.target.value)} />} 
        {isEdit && <button onClick={changeCard}>Сохранить</button>}
      </div>
    </div>
  );
};

Flower.propTypes = {
  flower: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    fav: PropTypes.any.isRequired,
  }).isRequired,
};

export default Flower;
