import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyCarousel({slideNames}) {
  const settings = {
    dots: true,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {slideNames.map((slideName) => (
          <div className="px-2">
            <div
              className={`h-96 w-full bg-${slideName} bg-cover bg-bottom`}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}