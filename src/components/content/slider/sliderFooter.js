//import React, { useState } from 'react';
import './sliderFooter.css';
import '../../../App.css';
import React, { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { SliderData } from '../sliderData.js';
import { SliderFooterData } from '../SliderFooterData.js';

function SliderFooter(props) {

    let ref = useRef()
    const [state, setState] = useState({
        isScrolling: false,
        clientX: 0,
        scrollX: 0
    })

    useEffect(() => {
        const el = ref.current
        if(el) {
            const onWheel = e => {
                e.preventDefault()
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 4,
                    behavior: 'smooth'
                })
            }
            el.addEventListener('wheel', onWheel)

            return () => el.removeEventListener('wheel', onWheel)
        }
    }, [])

    const onMouseMove = e => {
        if(ref && ref.current && !ref.current.contains(e.target)) {
            return
        }
        e.preventDefault()

        const {clientX, scrollX, isScrolling} = state

        if (isScrolling) {
            ref.current.scrollLeft = scrollX + e.clientX - clientX
            let sX = scrollX + e.clientX - clientX
            let cX = e.clientX

            setState ({
                ...state,
                scrollX: sX,
                clientX: cX
            })
        }
    }
    const onMouseUp = e => {
        if(ref && ref.current && !ref.current.contains(e.target)) {
            return
        }
        e.preventDefault()
        setState({
            ...state,
            isScrolling: false
        })
    }
    const onMouseDown = e => {
        if(ref && ref.current && !ref.current.contains(e.target)) {
            return
        }
        e.preventDefault()

        setState({
            ...state,
            isScrolling:true,
            clientX: e.clientX
        })
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

                    {/* <div className='container'>
                        <SliderFooter _class='SliderFooterData'>
                                    {
                                    SliderFooterData.map((v, i) => {
                                        return (
                                        <div key={i} className='scrollableItem'>
                                            <h2>{v.title}</h2>
                                            <p>{v.text}</p>
                                        </div>
                                        )
                                    })
                                    }
                        </SliderFooter>
                    </div> */}
        </div>
    )

    // const [current, setCurrent] = useState(0);
    // const length = karusel.length;

    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // }
    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }

    // if (!Array.isArray(karusel) || karusel.length <= 0) {
    //     return null;
    // }
    // return (
    //     <>
    //         <section className='slider'>
    //                 <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
    //                 <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
    //                 {SliderData.map((slide, index) => {
    //                     return (
    //                         <div className={index === current ? 'slide active' : 'slide'} key={index}>
    //                             {index === current && (
    //                                 <img src={slide.image} alt='' className='image'/>
    //                             )}  
    //                         </div>
    //                     )  
    //                 })}
    //         </section>
    //     </>
    // )
}

export default SliderFooter;
