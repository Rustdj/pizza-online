import React from 'react'
import Footer from '../content/footer/footer';
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import SoupData from '../content/soupData';

const Soup = () => {
    return (
        <div>
            <Header />
            <SoupData />
            <Spoiler />
            <Footer />
        </div>
    )
}

export default Soup
