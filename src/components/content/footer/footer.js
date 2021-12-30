import './footer.css';
import React from 'react';
import telegram from '../../../img/logo/social//telegram.svg';
import instagram from '../../../img/logo/social/insta.svg';
import whatsapp from '../../../img/logo/social/whatsapp.svg';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerItems'>
                <div className='footerWrapper'>
                    <div className='footerBlocks'>
                        <li><a href='#'>О компании</a></li>
                        <li><a href='#'>Доставка и оплата</a></li>
                        <li><a href='#'>Лента материалов</a></li>
                        <li><a href='#'>Политика возврата</a></li>
                    </div>
                    <div className='footerSocial'>
                        <p>Наберите номер</p>
                        <a href='tel:79650033900'>+7 (965)003-39-00</a>
                        <p>Выберите удобный 
                                    мессенджер для общения</p>
                        <a href='#' className='social'><img src={whatsapp}/></a>
                        <a href='#' className='social'><img src={telegram}/></a>
                        <a href='#' className='social'><img src={instagram}/></a>
                    </div>
                    <div className='footerAddress'>
                        <a href='tel:79650033900'>+7 (965)003-39-00</a>
                        <a href='tel:79650033900'>+7 (965)003-39-00</a>
                        <p>Адрес:Бакаева 126</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
