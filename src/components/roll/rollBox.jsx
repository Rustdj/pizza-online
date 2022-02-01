import classes from "../pizza/pizza.module.css";

const RollBox = ({ title, text, price, button, image }) => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <img src={image} alt="roll" />
          <h4>{title}</h4>
          <p>{text}</p>
          <div className={classes.buttons}>
            <div>{price}</div>
            <button>{button}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RollBox;
