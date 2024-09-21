// src/components/ImageSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css'; // External CSS for styling

const ImageSlider = () => {
  // Slider settings with auto sliding enabled
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Time in milliseconds between slides
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        <div>
          <img src="https://cdn.pixabay.com/photo/2017/03/20/22/13/book-2160539_1280.png" alt="Slide 1" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/12/05/08/25/fantasy-1077863_1280.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_960_720.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
