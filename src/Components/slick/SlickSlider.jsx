import React from "react";
import Slider from "react-slick";
import "./SlickSlider.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="img-wrapper">
        <img src="../assets/images/banner-1-img.webp" alt="" />
      </div>
      <div className="img-wrapper">
      <img src="../assets/images/banner-2-img.webp" alt="" />
      </div>
      <div className="img-wrapper">
      <img src="../assets/images/banner-3-img.webp" alt="" />
      </div>
    </Slider>
  );
}