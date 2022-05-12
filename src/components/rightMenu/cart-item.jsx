import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/cart/reducer";

export const CartItem = ({ title, price, image, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(title, price, image, id))
  }
  return (
    <div className="cart-item">
      <img src={image} alt="img" />
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} руб.</span>
        <span className="iconClose"><CancelIcon onClick={handleClick}/></span>
      </div>
    </div>
  );
};
