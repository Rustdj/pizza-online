import './content.css';
import watch from '../../img/logo/watch.svg';



const Content = () => {
    return (
        <div className='content'>  
            <div className='contentHeader'>
                <div className='contentHeaderBox'>
                    <p>Наш телефон</p>
                    <a href="tel:79650033900">+7965 003 39 00</a> <br></br>
                    <a href="tel:358456670514">+358 45 667 05 14</a>
                </div>
                <div className='vl'></div>
                <div className='contentHeaderTime'>
                    <img src={watch}/>
                    <p>работаем с 10:00 до 00:00</p>
                </div>  
            </div> 
            <hr className='hr' align="center"></hr> 
            
        </div>
    )
}

export default Content;