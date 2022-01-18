import React from 'react';
import Footer from '../content/footer/footer.jsx';
import Header from '../content/header/header.jsx';
import Spoiler from '../content/spoiler/spoiler.jsx';
import SushiData from '../content/sushiData.jsx';

const Sushi = () => {
    return (
        <div>
            <Header/>
            <SushiData />
            <Spoiler />
            <Footer/>
        </div>
    )
}

export default Sushi
