import React from 'react';
import Slider from 'react-slick';
import './Carousel.scss'; // Assuming you will import the SCSS file

const cardData = [
  {
    picClass: 'a',
    title: 'Similique ullam',
    subtitle: 'blanditiis',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. c totam ipsam impedit quidem saepe maiores blanditiis repellendus.',
  },
  {
    picClass: 'b',
    title: 'Similique ullam',
    subtitle: 'blanditiis',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. c totam ipsam impedit quidem saepe maiores blanditiis repellendus.',
  },
  {
    picClass: 'c',
    title: 'Similique ullam',
    subtitle: 'blanditiis',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. c totam ipsam impedit quidem saepe maiores blanditiis repellendus.',
  },
  {
    picClass: 'd',
    title: 'Similique ullam',
    subtitle: 'blanditiis',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. c totam ipsam impedit quidem saepe maiores blanditiis repellendus.',
  },
  {
    picClass: 'e',
    title: 'Similique ullam',
    subtitle: 'blanditiis',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. c totam ipsam impedit quidem saepe maiores blanditiis repellendus.',
  },
];

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="mdh-carousel" className="container-fluid">
      <Slider {...settings}>
        {cardData.map((item, index) => (
          <div key={index} className="item mdh-item-overlay">
            <div className={`pic ${item.picClass}`}></div>
            <div className="info">
              <h3>{item.title}</h3>
              <small>{item.subtitle}</small>
              <p>
                {item.description}
                <span>#Youngwildandfree</span>
              </p>
            </div>
            <div className="item-overlay">
              <div className="item-overlay-info">
                <a href="#">Download</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
