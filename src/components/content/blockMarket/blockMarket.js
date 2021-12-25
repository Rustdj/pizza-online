import React from 'react';
import './blockMarket.css';
import pizza from '../../../img/photo/blockMain/pizza.jpg';
import acne from '../../../img/photo/blockMain/acne.jpg';
import korn from '../../../img/photo/blockMain/kornDog.jpg';
import sales from '../../../img/photo/blockMain/sales.jpg';
import chiken from '../../../img/photo/blockMain/chiken.jpg';

function BlockMarket() {
    return (
        <>
            <div className='blockMarket'>
                <div className='blockMarketItems'>
                    <div className='item'>
                        <a href=''><img src={chiken} alt='chiken'/></a>
                    </div>
                    <div className='itemDouble'>
                        <a href=''><img src={acne} alt='ance'/></a>
                        <a href=''><img src={korn} alt='korn'/></a>
                    </div>
                    <div className='item'>
                        <a href=''><img src={pizza} alt='pizza'/></a>
                    </div>
                    <div className='item'>
                        <a href=''><img src={sales} alt='sales'/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlockMarket
