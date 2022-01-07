import React from 'react';
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import Footer from '../content/footer/footer';
import SushiData from '../content/sushiData.js';

const Sushi = () => {
    return (
        <div>
            <Header />
            <SushiData />
            <Spoiler />
            <Footer />
        </div>
    )
}

export default Sushi
