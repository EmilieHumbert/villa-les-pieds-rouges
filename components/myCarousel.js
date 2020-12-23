import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <Slider {...settings}>
      <div>
        <h3>
          <img className="h-80  w-96" src="/images/bedroom.jpg" />
        </h3>
      </div>
      <div>
        <h3>
          <img className="h-80  w-96" src="/images/beach-view.jpeg" />
        </h3>
      </div>
      <div>
        <h3>
          <img className="h-80  w-96" src="/images/houses.jpg" />
        </h3>
      </div>
      <div>
        <h3>
          <img className="h-80  w-96" src="/images/livingroom.jpg" />
        </h3>
      </div>
      <div>
        <h3>
          <img className="h-80  w-96" src="/images/ocean.jpg" />
        </h3>
      </div>
      <div>
        <h3>
          <img className="h-80  w-96" src="/images/stairs.jpg" />
        </h3>
      </div>
    </Slider>
  );
}
