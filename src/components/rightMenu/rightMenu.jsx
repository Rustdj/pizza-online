import "./rightMenu.css";
import location from "../../img/logo/location.svg";
import { BiCartAlt } from "react-icons/bi";
//import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { CartMenu } from "./cart-menu";
import { calcTotalPrice } from "../logic/utils";
import { useState } from "react";

const RightMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="rightMenu">
      <div className="menuCartWrapper">
        <div className="menuCart">
          <BiCartAlt
            size={100}
            className="cartBlock"
            onClick={() => setMenuVisible(!menuVisible)}
          />
          {/* <NavLink to='/cart' className="cartBlock">
            <BiCartAlt size={100} className="cartBlockIcon" />
          </NavLink> */}
          <span className="menuOffer">
            <p>{totalPrice} ₽</p>
          </span>
          {menuVisible && <CartMenu items={items} onClick={() => null} />}

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
