import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyCarousel({
  numberSlidesBig,
  numberSlidesSmall,
  slideNames,
}) {
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: numberSlidesBig,
    slidesToScroll: 1,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: numberSlidesSmall,
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
        {slideNames.map((slideName, index) => (
          <div key={index} className="px-2">
            <div
              className={`h-md md:h-xl w-full bg-${slideName} bg-cover bg-center`}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
