import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
// internal
import img_1 from "@assets/img/slider/about/about-gallery-slider-1.jpg";
import img_2 from "@assets/img/slider/about/about-gallery-slider-2.jpg";
import img_3 from "@assets/img/slider/about/about-gallery-slider-3.jpg";
import img_4 from "@assets/img/slider/about/about-gallery-slider-2.jpg";

// data
const images = [img_1, img_2, img_3, img_4];

// slider setting
const settings = {
  autoplaySpeed: 4000,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
};
//ImageStyle
const ImageStyle = {
  width: "100%",
  height: "100%",
};

const AboutGallery = () => {
  const sliderRef = useRef();
  return (
    <section
      className={`about__gallery-area fix`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10">
            <div className="about__gallery-slider pl-50 pr-50 p-relative">
              <Slider
                {...settings}
                ref={sliderRef}
                className="about__gallery-slider-active"
              >
                {images.map((img, i) => (
                  <div key={i} className="about__gallery-item">
                    <div className="about__gallery-thumb m-img">
                      <Image src={img} alt="about img" style={ImageStyle} />
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="about__gallery-arrow d-none d-sm-block">
                <button
                  onClick={() => sliderRef.current?.slickPrev()}
                  type="button"
                  className="about-button-prev slick-prev slick-arrow"
                >
                  <span>
                    <i className="fa-regular fa-arrow-left"></i>
                  </span>
                </button>
                <button
                  onClick={() => sliderRef.current?.slickNext()}
                  type="button"
                  className="about-button-next slick-next slick-arrow"
                >
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
