import React from 'react';




const PizzaBox = ({title, text, price, button, image}) => {

    return (
        
        
        <div className="setWrapper">
            <div className='setName'>
                    <img src='' alt='SushiLogo'/>
                    <h2>Суши</h2>
            </div>
            <div className='setItems'>
                    <div className='setItem'>
                        <img src={image} alt='sushi1'/>
                        <h4>{title}</h4>
                        <p>{text}</p>
                        <div className='summ'>
                            <div>{price}</div>
                            <button>{button}</button>
                        </div>
                    </div>
             </div> 
        </div>
    )
}

export default PizzaBox





