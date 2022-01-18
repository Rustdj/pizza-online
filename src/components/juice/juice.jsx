import React from 'react';
import Footer from '../content/footer/footer';
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import JuiceData from '../content/juiceData';


const Juice = () => {
    return (
        <div>
            <Header/>
            <JuiceData />
            <Spoiler />
            <Footer/>
        </div>
    )
}

export default Juice
