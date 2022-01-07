import React from 'react'
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import Footer from '../content/footer/footer';
import WokData from '../content/wokData.js';

const Wok = () => {
    return (
        <div>
            <Header/>
            <WokData/>
            <Spoiler/>
            <Footer/>
        </div>
    )
}

export default Wok






