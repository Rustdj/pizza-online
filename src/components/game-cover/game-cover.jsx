import React from "react";
import './game-cover.css';


export const GameCover = ({ image = "" }) => {
    return (
        <div className="pizzaCover" style={{ backgroundImage: `url(${image})` }}/>
    )
}


