import React from "react";
import Slider from "react-slick";
import "./CategorySlick.css";

export default function CategorySlider({ data }) {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    slidesToShow: 4, // Change this to display multiple items per slide
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {data && data.map((category, index) => (
        <div className="product" key={index}>
          <div className="box-wrap">
            <img src={category.image || "./assets/images/new_cat.jpg"} style={{ width: '100%', height: 'auto' }} />
          <h3>{category.name}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
}
