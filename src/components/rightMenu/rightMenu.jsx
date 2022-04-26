import "./rightMenu.css";
import location from "../../img/logo/location.svg";
import { BiCartAlt } from "react-icons/bi";
import {NavLink} from 'react-router-dom';

const RightMenu = () => {
  return (
    <div className="rightMenu">
      <div className="menuCartWrapper">
        <div className="menuCart">
          <NavLink to='/cart' className="cartBlock">
            <BiCartAlt size={100} className="cartBlockIcon" />
          </NavLink>
          <span className="menuOffer">
            <p>0 ₽</p>
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
