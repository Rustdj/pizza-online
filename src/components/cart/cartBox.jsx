import React from "react";
import classes from "./cart.module.css";

export default function CartBox() {
  return (
    <div className={classes.container}>
      <div className={classes.blocks}>
        <div className={classes.block}>
          <img src="" alt="" />
          <title></title>
        </div>
        <div className={classes.block}>
          <div className={classes.counter}>
            <button>-</button>
            <div>0</div>
            <button>+</button>
          </div>
          <div className={classes.btn}>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
