import React from 'react';
import Footer from '../content/footer/footer.jsx';
import Header from '../content/header/header.jsx';
import Spoiler from '../content/spoiler/spoiler.jsx';
import SushiMain from '../sushi/sushiMain';

const Sushi = () => {
    return (
        <div>
            <Header/>
            <SushiMain />
            <Spoiler />
            <Footer/>
        </div>
    )
}

export default Sushi
