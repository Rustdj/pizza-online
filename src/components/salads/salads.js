import React from 'react'
import Header from '../content/header/header';
import Spoiler from '../content/spoiler/spoiler';
import Footer from '../content/footer/footer';
import SaladsData from '../content/saladsData';

const Salads = () => {
    return (
        <div>
            <Header />
            <SaladsData />
            <Spoiler />
            <Footer />
        </div>
    )
}

export default Salads
