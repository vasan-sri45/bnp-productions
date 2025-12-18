import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample portfolio data (replace with your actual data source)
const portfolioinfo = [
  {
    image: '/images/portfolio/1.jpg',
    alt: 'Portfolio Item 1'
  },
  {
    image: '/images/portfolio/2.jpg',
    alt: 'Portfolio Item 2'
  },
  {
    image: '/images/portfolio/3.jpg',
    alt: 'Portfolio Item 3'
  },
  {
    image: '/images/portfolio/4.jpg',
    alt: 'Portfolio Item 4'
  },
  // Add more items as needed
];

const SlickSlider = () => {
  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {portfolioinfo.map((item, index) => (
        <div className="px-2" key={index}>
          <img
            src={item.image}
            alt={item.alt}
            className="rounded-lg w-full h-auto"
          />
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
