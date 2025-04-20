// src/components/ServiceCarousel.jsx
import React from "react";
import Slider from "react-slick";
import Tilt from "react-parallax-tilt";

import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import web from "../assets/web.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Your services array
const services = [
  { title: "Editing", icon: mobile },
  { title: "Influencer Marketing", icon: backend },
  { title: "Food Blogger Promotions", icon: creator },
  { title: "BPO - Data Entry", icon: web },
  { title: "SEO & SMO", icon: mobile },
  { title: "Telecalling", icon: backend },
  { title: "Quality Assurance", icon: creator },
  { title: "Web Development", icon: web },
  { title: "Govt Project Execution", icon: backend },
  { title: "Brand Promotion", icon: creator },
];

const ServiceCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="my-10 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Our Services</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={false}>
            <div className="p-4">
              <div
                className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border"
                style={{
                  background: "transparent",
                  borderColor: "#1ec088",
                  boxShadow: "0 0 10px #1ec088",
                }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain mb-4"
                />
                <h3 className="text-white text-[20px] font-bold text-center">{service.title}</h3>
              </div>
            </div>
          </Tilt>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceCarousel;
