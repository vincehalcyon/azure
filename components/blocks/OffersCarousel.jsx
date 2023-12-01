import Image from "next/image";
import CustomIcon from "../svg-custom/CustomIcon";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useRef } from "react";

export default function Block({ block }) {
  const { collection } = block?.main;
  const offers = collection?.contents;
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    fade: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
  const sliderHandleNext = () => {
    sliderRef.current.slickNext();
  };

  const sliderHandlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="flex justify-center items-center text-center bg-white py-[100px]">
      <div className="container-primary relative">
        <div
          onClick={sliderHandlePrev}
          className="pl-[20px] text-white rotate-180 w-fit absolute left-[-85px] top-[50%] cursor-pointer"
        >
          <CustomIcon iconType="carouselChevron" />
        </div>
        <div
          onClick={sliderHandleNext}
          className="pl-[20px] text-white w-fit absolute right-[-85px] top-[50%] cursor-pointer"
        >
          <CustomIcon iconType="carouselChevron" />
        </div>
        <Slider ref={sliderRef} {...settings}>
          {offers.map((item, index) => (
            <div key={index}>
              <div className="text-main-blue text-center text-[35px] md:text-[45px] lg:text-[60px] font-bold leading-[70px]">
                {item.title}
              </div>
              <div className="mx-auto  h-[561px] md:max-w-[1130px]  lg:max-w-[1130px] px-[20px]">
                <Image
                  src={item.data.main.image}
                  width={1130}
                  height={561}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
