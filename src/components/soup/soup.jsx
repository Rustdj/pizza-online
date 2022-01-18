import React from 'react'
import Spoiler from '../content/spoiler/spoiler';
import SoupData from '../content/soupData';
import Header from '../content/header/header';
import Footer from '../content/footer/footer';

const Soup = () => {
    return (
        <div>
            <Header/>
            <SoupData />
            <Spoiler />
            <Footer/>
        </div>
    )
}

export default Soup
