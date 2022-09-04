import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ServiceCard from "./ServiceCard";

const responsive = {
  xxl: {
    breakpoint: { max: 5000, min: 2500 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  xl: {
    breakpoint: { max: 1280, min: 1024 },
    items: 4,
  },
  lg: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  md: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  sm: {
    breakpoint: { max: 640, min: 475 },
    items: 2,
    // partialVisibilityGutter: 120,
  },
  xs: {
    breakpoint: { max: 475, min: 380 },
    items: 1,
    partialVisibilityGutter: 80,
  },
  xxs: {
    breakpoint: { max: 380, min: 0 },
    items: 1,
    partialVisibilityGutter: 20,
  },
};

const CardSlider = () => {
  return (
    <div className="border border-black mx-auto">
      <Carousel
        partialVisible={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["xxs", "xs", "sm", "md"]}
        itemClass=""
      >
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </Carousel>
    </div>
  );
};

export default CardSlider;
