import Image from "next/image";

export default function Block({ block }) {
  const { image, mobile_image, banner_title, banner_image } = block.main;
  return (
    <>
      <section className="min-h-[calc(100vh+10px)]">
        {/* <div className="w-full h-full overflow-hidden"> */}
        <div>
          <picture className="w-full">
            <source media="(min-width: 415px)" srcSet={image} />
            <source media="(min-width: 414px)" srcSet={mobile_image} />
            <Image
              src={mobile_image}
              className="h-full w-full min-h-screen object-cover"
              alt="Azure Banner"
              width={1920}
              height={645}
              loading="eager"
              priority={true}            />
          </picture>
        </div>
        <div className="relative container-primary px-[20px]">
          <div className="absolute pb-[35px] bottom-0 right-0 text-white text-xs sm:text-sm md:text-[25px] lg:text-[40px] xl:text-[60px] font-bold leading-[70px] drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] max-w-[470px] text-end">
            <h1>{banner_title}</h1>
          </div>
        </div>
        {/* <div className="flex justify-center w-full border-2">
            <div className="flex container-primary absolute bottom-[8px] sm:bottom-[25px] md:bottom-[40px] lg:bottom-[50px] xl:bottom-[80px]">
              <div className="flex flex-col sm:gap-y-1 md:gap-y-2 lg:gap-y-7 xl:gap-y-10 w-full px-5 lg:px-0">
                <h1 className="static font-[700] w-[100%] bottom-0 text-end text-xs sm:text-sm md:text-[25px] lg:text-[40px] xl:text-[60px] text-white">
                  {title}
                </h1>
                <h6 className="static font-[700] w-[100%] bottom-0 text-end text-xs sm:text-sm md:text-[25px] lg:text-[40px] xl:text-[60px] text-white ">
                  {subtitle}
                </h6>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </section>
    </>
  );
}
