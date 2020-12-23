import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyCarousel() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    autoplay: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="px-2">
          <div className="m-10 h-96 w-full bg-bedroom bg-cover bg-center"></div>
        </div>
        <div className="px-2">
          <div className="m-10 h-96 w-full bg-beachView bg-cover bg-center"></div>
        </div>
        <div className="px-2">
          <div className="m-10 h-96 w-full bg-houses bg-cover bg-bottom"></div>
        </div>
        <div className="px-2">
          <div className="m-10 h-96 w-full bg-livingroom bg-cover bg-center"></div>
        </div>
        <div className="px-2">
          <div className="m-10 h-96 w-full bg-ocean bg-cover bg-center"></div>
        </div>
        <div className="px-2">
          <div className="m-10 h-96 w-full bg-stairs bg-cover bg-center"></div>
        </div>
      </Slider>
    </div>
  );
}
