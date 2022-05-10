import "./rightMenu.css";
import location from "../../img/logo/location.svg";
import { BiCartAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

const RightMenu = () => {
  const items = useSelector(state => state.cart.itemsInCart)
  const totalPrice = items.reduce((acc, item) =>  acc += item.price , 0);
  return (
    <div className="rightMenu">
      <div className="menuCartWrapper">
        <div className="menuCart">
          <NavLink to='/cart' className="cartBlock">
            <BiCartAlt size={100} className="cartBlockIcon" />
          </NavLink>
          <span className="menuOffer">
            <p>{totalPrice} ₽</p>
          </span>
          <span className="menuOfferPrice"></span>
        </div>
        <form className="menuBlockLocation">
          <img src={location} alt="location" />
          <input
            type="text"
            placeholder="Укажите адрес и узнайте время доставки"
          />
          <p></p>
        </form>
      </div>
    </div>
  );
};
export default RightMenu;
