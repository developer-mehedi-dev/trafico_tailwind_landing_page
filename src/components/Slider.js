import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import clientImg1 from "../assets/img/testimonials/avatar1.png";
import clientImg2 from "../assets/img/testimonials/avatar2.png";
import clientImg3 from "../assets/img/testimonials/avatar3.png";

const clientImgs = [
  {
    avatar: clientImg1,
  },
  {
    avatar: clientImg2,
  },
  {
    avatar: clientImg3,
  },
];

const Slider = ({ clients }) => {
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
        1120: {
          width: 1120,
          slidesPerView: 3,
        },
      }}
      // slidesPerView={3}
      spaceBetween={20}
      slidesOffsetBefore={60}
      grabCursor={true}
      className="testimonialSlider"
    >
      {clients.map((client, index) => {
        const { message, image, name } = client;
        return (
          <SwiperSlide key={index}>
            <div className="bg-white h-[360px] drop-shadow-primary rounded-[10px] px-[50px] pt-[60px] lg:pb-[40px] pb-[80px] flex flex-col justify-between">
              <p className="font-light leading-[30px]">{message}</p>
              <div className="flex items-center gap-x-5">
                {/* {clientImgs.map((citem, id) => {
                  return (
                    <img src={citem} key={id} className="w-[60px] h-[60px]" />
                  );
                })} */}
                <span className="font-semibold">{name}</span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
