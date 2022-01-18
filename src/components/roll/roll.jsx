import React from 'react';
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import Footer from '../content/footer/footer';
import RollData from '../content/rollData';

const Roll = () => {
    return (
        <div>
            <Header/>
            <RollData />
            <Spoiler />
            <Footer/>
        </div>
    )
}

export default Roll;
