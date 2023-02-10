import React, { useState } from 'react';
import {slides} from '../data';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div className="slider">
            <div className="wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
                {
                    slides.map(slide => {
                      return  <div className="slide" key={slide.id}>
                        <div className="image-container">
                            <img src={slide.img} alt="slider-image" />
                        </div>
                        <div className="content">
                            <h2>{slide.title}</h2>
                            <p>
                               {slide.desc}
                            </p>
                            <button type='button' title='open'>Learn More &raquo;</button>
                        </div>
                      </div>
                    })
                }
            </div>
            <span className="slider-button left" onClick={() => handleClick("left")}><i className="fa fa-angle-left"></i></span>
            <span className="slider-button right" onClick={() => handleClick("right")}><i className="fa fa-angle-right"></i></span>
        </div>
    );
}

export default Slider;
