import React from 'react';
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import Footer from '../content/footer/footer';
import PizzaData from './pizzaData';


const Pizza = () => {
    return ( 
    
        <div >
            <Header />
            <PizzaData name='alex' />
            <Spoiler />
            <Footer />
        </div>
    )
}

export default Pizza;