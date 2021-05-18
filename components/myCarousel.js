import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyCarousel({ slideUrls }) {
  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "50px",
    className: "center",
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "25px",
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {slideUrls.map(([slideUrl, description]) => (
          <div key={description} className="px-2">
            <div className="relative h-smallsquare sm:h-square">
              <Image
                layout="fill"
                objectFit="cover"
                src={slideUrl}
                alt={description}
                sizes="33vw"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
