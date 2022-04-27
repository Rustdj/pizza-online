import React from 'react'
import Spoiler from '../content/spoiler/spoiler';
import SoupMain from '../soup/soupMain.jsx';
import Header from '../content/header/header';
import Footer from '../content/footer/footer';

const Soup = () => {
    return (
        <div>
            <Header/>
            <SoupMain />
            <Spoiler />
            <Footer/>
        </div>
    )
}

export default Soup
