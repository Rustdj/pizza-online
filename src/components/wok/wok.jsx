import React from 'react'
import Footer from '../content/footer/footer';
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import WokData from '../content/wokData.jsx';

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






