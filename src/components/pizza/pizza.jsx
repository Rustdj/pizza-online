import React from 'react';
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import Footer from '../content/footer/footer';
import PizzaBox from './pizzaBox';



const Pizza = ({PizzaData}) => {

    const elements = PizzaData.map(item => {
            const {id, ...itemProps} = item;
            return (
                <PizzaBox key={id} {...itemProps}/>
            )
    })
    // console.log(elements);

    return ( 
    
        <div >
            <Header />
            {elements}
            <Spoiler />
            <Footer />
        </div>
    )
}

export default Pizza;