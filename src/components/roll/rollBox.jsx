import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setItemsInCart } from "../../redux/cart/reducer";
import { setCurrentItem } from "../../redux/product-cart/reducer";
import classes from "../pizza/pizza.module.css";


const RollBox = ({ title, text, price, button, image }) => {
  const item = { title, text, price, button, image };
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemsInCart(item));
  };

  const history = useNavigate();
  const onDispatch = useDispatch();

  const toggleClick = () => {
    onDispatch(setCurrentItem(item));
    history(`/app${item.title}`);
  };
  return (
    <div className="">
      <div className="">
        <div className="">
          <img src={image} alt="roll" onClick={toggleClick}/>
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
