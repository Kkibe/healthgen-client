import React, { useState } from 'react';
import './Carousel.scss';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
      imgSrc: "http://dummyimage.com/350x300/f0f0f0/333"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
      imgSrc: "http://dummyimage.com/350x300/f0f0f0/333"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
      imgSrc: "http://dummyimage.com/350x300/f0f0f0/333"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
      imgSrc: "http://dummyimage.com/350x300/f0f0f0/333"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
      imgSrc: "http://dummyimage.com/350x300/f0f0f0/333"
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat",
      imgSrc: "http://dummyimage.com/350x300/f0f0f0/333"
    }
  ];

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container">
      <div className="customNavigation">
        <button className="btn gray prev" onClick={goPrev}>
          <i className="icon ion-ios-arrow-left"></i>
        </button>
        <button className="btn gray next" onClick={goNext}>
          <i className="icon ion-ios-arrow-right"></i>
        </button>
      </div>
      <div className="owl-carousel">
        {items.map((item, index) => (
          <div
            className={`item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <a className="hoverfx" href="#">
              <div className="figure">
                <i className="icon ion-search"></i>
              </div>
              <div className="figure">
                <i className="icon ion-link"></i>
              </div>
              <div className="overlay"></div>
              <img src={item.imgSrc} alt={item.title} />
            </a>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
