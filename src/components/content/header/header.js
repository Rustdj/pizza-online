import '../content.css';
import watch from '../../../img/logo/watch.svg';
import search from '../../../img/logo/search.svg';
import React from 'react'



const Header = () => {
    return (
        <div>
            <div className='contentHeader'>
                        <div className='contentHeaderWrapper'>
                                <div className='contentHeaderBox'>
                                    <h4>Наш телефон</h4>
                                    <li><a href="tel:79650033900">+7965 003 39 00</a></li>
                                    <li><a href="tel:358456670514">+358 45 667 05 14</a></li>
                                    <div className='time'>
                                        <img src={watch}/>
                                        <li>работаем с 10:00 до 00:00</li>
                                    </div>
                                </div>
                                <div className='contentWrapper'>
                                    <div className='contentDelivery'>
                                        <a href='#'>Отзывы</a>
                                        <a className='link' href='#'>Доставка и оплата</a>
                                    <img src={search}/>
                                </div>
                            </div>  
                        </div>
                    </div>
        </div>
    )
}

export default Header
