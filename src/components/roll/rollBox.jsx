import { useDispatch } from "react-redux";
import classes from "../pizza/pizza.module.css";
import { setItemsInCart } from "../../redux/cart/reducer";

const RollBox = ({ title, text, price, button, image }) => {
  const item = { title, text, price, button, image };
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemsInCart(item));
  };
  return (
    <div className="">
      <div className="">
        <div className="">
          <img src={image} alt="roll" />
          <h4>{title}</h4>
          <p>{text}</p>
          <div className={classes.buttons}>
            <div>{price}</div>
            <button onClick={ handleClick }>{button}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RollBox;
