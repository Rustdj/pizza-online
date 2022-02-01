import React from 'react';
import classes from './pizza.module.css';




const PizzaBox = ({title, text, price, button, image}) => {

    return (
        <div className="">
            <div className=''>
                    <div className=''>
                        <img src={image} alt='sushi1'/>
                        <h4>{title}</h4>
                        <p>{text}</p>
                        <div className={classes.buttons}>
                            <div>{price}</div>
                            <button>{button}</button>
                        </div>
                    </div>
             </div> 
        </div>
    )
}

export default PizzaBox





