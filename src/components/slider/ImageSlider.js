import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        <div>
          <img src={require('../../assets/bookslide/Design.png')} alt="Slide 1"  />
        </div>
        <div>
          <img src={require('../../assets/bookslide/Design (2).png')} alt="Slide 2"  />
        </div>
        <div>
          <img src={require('../../assets/bookslide/Design (1).png')} alt="Slide 3"  />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;


