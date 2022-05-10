import React from "react";
import { calcTotalPrice } from "../logic/utils";
import { CartItem } from "./cart-item";
import "./rightMenu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__list">
        {items.length > 0
          ? items.map((item) => (
              <CartItem
                key={item.title}
                price={item.price}
                title={item.title}
                image={item.image}
                id={item.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <button className="btnOrder" onClick={onClick}>Оформить заказ</button>
        </div>
      ) : null}
    </div>
  );
};
