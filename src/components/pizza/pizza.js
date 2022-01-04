import React from 'react'
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import Footer from '../content/footer/footer';
import PizzaData from '../content/pizzaData';

const Pizza = () => {
    return (
        <div>
            <Header/>
            <PizzaData/>
            <Spoiler/>
            <Footer/>
        </div>
    )
}

export default Pizza
