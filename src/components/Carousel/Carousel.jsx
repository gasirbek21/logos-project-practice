import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { CustomContext } from "../../utils/Context";
import Card from "../Card/Card";

import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  const { products } = useContext(CustomContext);
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        speed={2000}
        modules={[Autoplay]}
        className="mySwiper">
        {products.map((item) => (
          <SwiperSlide>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
