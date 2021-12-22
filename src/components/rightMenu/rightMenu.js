import './rightMenu.css';
import location from '../../img/logo/location.svg';



const RightMenu = () => {
    return (
        <div className='rightMenu'>  
            <div className='menuCartWrapper'>
                <div className='menuCart'>
                    <h2>Ваша корзина пуста.</h2>
                     <div className='text'>Добавьте же скорее что-нибудь!</div>
                    <div className='menuOffer'><p>Бесплатная доставка от 800 СОМ</p></div>
                </div>
                <form className='menuBlockLocation'>
                    <img src={location}/>
                     <input type='text' placeholder='Укажите адрес и узнайте время доставки'/>
                    <p></p>
                </form> 
            </div>
        </div>
    )
}

export default RightMenu;