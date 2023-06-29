import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { ClientBusinessCard } from "@/components";

function NextArrow({ className = "", style = {}, onClick = () => {} }) {
  return (
    <BsFillArrowRightCircleFill
      className={className}
      style={{ ...style, display: "block", color: "#a5a5a5" }}
      onClick={onClick}
    />
  );
}

function PrevArrow({ className = "", style = {}, onClick = () => {} }) {
  return (
    <BsFillArrowLeftCircleFill
      className={className}
      style={{ ...style, display: "block", color: "#a5a5a5" }}
      onClick={onClick}
    />
  );
}

const CardSlider = () => {
  var settings = {
    className: "slider variable-width",
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 475,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="mx-auto w-[98vw] xs:w-[90vw] 2xl:w-3/5">
      <Slider {...settings}>
        <ClientBusinessCard />
        <ClientBusinessCard />
        <ClientBusinessCard />
        <ClientBusinessCard />
        <ClientBusinessCard />
        <ClientBusinessCard />
        <ClientBusinessCard />
        <ClientBusinessCard />
        <ClientBusinessCard />
      </Slider>
    </div>
  );
};

export default CardSlider;
