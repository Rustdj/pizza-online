import React from "react";
import './game-buy.css';

export const GameBuy = ({ game }) => {
    return (
        <div className="gameBuy">
            <span className="gamePrice">{game.price} руб</span>
        </div>
    )
}


