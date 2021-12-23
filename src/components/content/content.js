import './content.css';
import watch from '../../img/logo/watch.svg';
import search from '../../img/logo/search.svg';
import React, { useEffect, useState, useRef } from 'react';



const Content = (props) => {
    let ref = useRef()
    const [state, setState] = useState ({
        isScrolling: false,
        clientX: 0,
        scrollX: 0
    });


    useEffect(() => {
         const el = ref.current
         if(el) {
             const onWheel = e => {
                 e.preventDefault()
                 el.scrollTo({
                     left: el.scrollLeft + e.deltaY * 5,
                     behavior: 'smooth'
                 })
             }
             el.addEventListener('wheel', onWheel)

             return () => el.removeEventListener('wheel', onWheel)
         } 
    }, [])

    const onMouseDown = e => {
        if (ref && ref.current && !ref.current.contains(e.target)) {

        }
        e.preventDefault()

        setState ({
            ...state,
            isScrolling: true,
            clientX: e.clientX
        })
    }
    const onMouseUp = e => {
        if (ref && ref.current && !ref.current.contains(e.target)) {
            
        }
        e.preventDefault()

        setState ({
            ...state,
            isScrolling: false,
        })
    }
    const onMouseMove = e => {
        if (ref && ref.current && !ref.current.contains(e.target)) {
            
        } 
        e.preventDefault()

        const {clientX, scrollX, isScrolling} = state

        if (isScrolling) {
            ref.current.scrollLeft = scrollX + e.clientX - clientX
            let sX = scrollX + e.clientX - clientX
            let cX = e.clientX

            setState({
                ...state,
                scrollX: sX,
                clientX: cX
            })
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', onMouseDown)
        document.addEventListener('mouseup', onMouseUp)
        document.addEventListener('mousemove', onMouseMove)

        return () => {
            document.removeEventListener('mousedown', onMouseDown)
            document.removeEventListener('mouseup', onMouseUp)
            document.removeEventListener('mousemove', onMouseMove)
        }
    })

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
                <div className='contentWrapper'>
                    <div className='contentDelivery'>
                        <a href='#'>Отзывы</a>
                        <a className='link' href='#'>Доставка и оплата</a>
                        <img src={search}/>
                    </div>
                </div>  
            </div> 
            <hr className='hr' align="center"></hr> 

            <div className='contentScroll'>
                <div 
                ref={ref}
                className={props._class}
                onMouseDown={onmousedown}
                onMouseUp={onmouseup}
                onMouseMove={onmousemove}
                >
                    {
                        React.Children.map(props.children, child => React.Children.only(child))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Content;