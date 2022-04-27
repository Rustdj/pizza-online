import React from 'react';
import Footer from '../content/footer/footer';
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import JuiceMain from './juiceMain';



const Juice = () => {
    return (
        <div>
            <Header/>
            <JuiceMain />
            <Spoiler />
            <Footer/>
        </div>
    )
}

export default Juice
