import React from 'react'

export const CartItem = ({ 
    title,
    price,
    image,
    id
}) => {
  return (
    <div className="cart-item">
       <img src={image} alt="img" />
        <span>{title}</span>
        <div className="cart-item__price">
            <span>{price} руб.</span>
        </div>
    </div>
  )
}
