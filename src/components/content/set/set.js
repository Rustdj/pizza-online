import React from 'react'
import './set.css';
import solomon from '../../../img/setImg/solomon.svg';
import philadelfia from '../../../img/setImg/philadelfia.svg';
import philadelfiaFish from '../../../img/setImg/philadelfiaFishSet.svg';
import philadelfiaSet from '../../../img/setImg/philadelfiaSet.svg';
import topSet from '../../../img/setImg/topSet.svg';
import kamikadze from '../../../img/setImg/kamikadze.svg';
import philadelfiaSet4 from '../../../img/setImg/philadelfiaSet4.svg';
import philadelfiaLove from '../../../img/setImg/philadelfiaLove.svg';
import yakudza from '../../../img/setImg/yakudza.svg';
import logoSet from '../../../img/logo/seti.svg';

const Set = () => {
    return (
        <div className='setWrapper'>
            <div className='setName'>
                <img src={logoSet} alt='set'/>
                <h2>Сеты</h2>
            </div>
            <div className='setItems'>
                <div className='setItem'>
                    <img src={solomon} alt=''/>
                    <h4>Саломон сет</h4>
                    <p>1050 грамм, 30 кусочков</p>
                    <div className='summ'>
                        <div>1500 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={philadelfia} alt=''/>
                    <h4>Сет "5 Филадельфий"</h4>
                    <p>1120 грамм 40 кусочек</p>
                    <div className='summ'>
                        <div>1499 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={philadelfiaFish} alt=''/>
                    <h4>Филадельфия и лосось сет</h4>
                    <p>1050 грамм, 30 кусочков</p>
                    <div className='summ'>
                        <div>1500 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={philadelfiaSet} alt=''/>
                    <h4>Сет "6 Филадельфий"</h4>
                    <p>1320 грамм 46 кусочек</p>
                    <div className='summ'>
                        <div>1559 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={topSet} alt=''/>
                    <h4>Топовый сет</h4>
                    <p>1020 грамм 40 кусочек</p>
                    <div className='summ'>
                        <div>1519 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={kamikadze} alt=''/>
                    <h4>Камикадзе сет</h4>
                    <p>1200 грамм 52 кусочек</p>
                    <div className='summ'>
                        <div>1469 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={philadelfiaSet4} alt=''/>
                    <h4>Сет "4 Филадельфии"</h4>
                    <p>1100 грамм 32 кусочек</p>
                    <div className='summ'>
                        <div>1559 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={philadelfiaLove} alt=''/>
                    <h4>Филадельфия LOVE сет</h4>
                    <p>1000 грамм 40 кусочек</p>
                    <div className='summ'>
                        <div>1479 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
                <div className='setItem'>
                    <img src={yakudza} alt=''/>
                    <h4>Якудза сет</h4>
                    <p>1270 грамм 50 кусочек</p>
                    <div className='summ'>
                        <div>1499 СОМ</div>
                        <button>Хочу!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Set
