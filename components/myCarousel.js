import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyCarousel({ slideNames }) {
  const settings = {
    dots: true,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
              className={`h-xs sm:h-md md:h-xs xl:h-lg w-full bg-${slideName} bg-cover bg-center`}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
