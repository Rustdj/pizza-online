import React from 'react';




const PizzaBox = ({image,title,descr,price,button}) => {

    return (
        
        <div className="setWrapper">
            <div className='setName'>
                    <img src={image} alt='SushiLogo'/>
                    <h2>Суши</h2>
            </div>
            <div className='setItems'>
                    <div className='setItem'>
                        <img src={image} alt='sushi1'/>
                        <h4>{title}</h4>
                        <p>{descr}</p>
                        <div className='summ'>
                            <div>{price}</div>
                            <button>{button}</button>
                        </div>
                    </div>
                <div className='setItem'>
                    <img src={image} alt='sushi2'/>
                    <h4>{title}</h4>
                    <p>{descr}</p>
                    <div className='summ'>
                        <div>{price}</div>
                        <button>{button}</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={image} alt='sushi3'/>
                    <h4>{title}</h4>
                    <p>{descr}</p>
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





