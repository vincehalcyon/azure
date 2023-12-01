import Image from "next/image";
import CustomIcon from "../svg-custom/CustomIcon";
import Link from "next/link";

export default function Block({ block }) {
  const { title } = block?.main;
  const dining = block?.main?.dining || [];

  return (
    <section className="bg-gradient-to-b from-main-blue from-50% to-[#f2faff] to-50% px-[20px] pb-[100px] drop-shadow-md shadow-md">
      <div className="container-primary">
        <div className="pt-[100px] pb-[30px] gap-[32px] text-center text-[35px] md:text-[45px] lg:text-[60px] text-main-cyan font-bold leading-[70px]">
          {title}
        </div>
        <div className="lg:flex gap-[20px]">
          <div className="relative py-[20px] px-[19px] bg-white w-full lg:max-w-[670px] lg:max-h-[760px] drop-shadow-xl shadow-xl cursor-pointer mb-[20px]">
            <div className="z-10 absolute top-0 left-[40px] py-[13px] px-[20px] text-main-blue flex flex-col justify-center items-center text-center max-w-[130px] lg:max-w-[226px] max-h-[125px] bg-main-cyan">
              <CustomIcon iconType="star" />
              <div className="uppercase mt-[5px] text-[10px] md:text-[14px] lg:text-[16px] font-bold leading-[25px] tracking-[1.6px]">
                Chef’s Recommendation
              </div>
            </div>
            <div className="relative">
              <div>
                <Image
                  src={dining[0].attributes.data.main.image}
                  width={632}
                  height={640}
                  alt={dining[0].attributes.title}
                  className="w-full h-full md:max-h-[420px] md:min-h-[420px] lg:max-h-[640px] lg:min-h-[640px] object-cover"
                />
              </div>
              <Image
                src="/images/bottom-left-design.webp"
                width={311}
                height={169}
                alt="Tile design pattern"
                className="absolute bottom-0 object-cover"
              />
            </div>
            <div className="py-[38px] flex justify-between text-main-blue text-[25px] md:text-[35px] lg:text-[40px] font-bold leading-[25px]">
              {dining[0].attributes.title}
              <CustomIcon iconType="chevron" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col gap-[20px]">
            <div className="pt-[20px] px-[19px] bg-white w-full lg:max-w-[440px] max-h-[370px] drop-shadow-xl shadow-xl cursor-pointer">
              <div className="">
                <Image
                  src={dining[1].attributes.data.main.image}
                  width={404}
                  height={640}
                  alt={dining[1].attributes.title}
                  className="w-full h-full max-h-[250px] min-h-[250px] object-cover"
                />
              </div>
              <div className="py-[38px] text-center text-main-black text-[25px] md:text-[35px] lg:text-[40px] font-[500] leading-[25px]">
                {dining[1].attributes.title}
              </div>
            </div>
            <div className="pt-[20px] px-[19px] bg-white w-full lg:max-w-[440px] max-h-[370px] drop-shadow-xl shadow-xl cursor-pointer">
              <div className="">
                <Image
                  src={dining[2].attributes.data.main.image}
                  width={404}
                  height={640}
                  alt={dining[2].attributes.title}
                  className="w-full h-ull max-h-[250px] min-h-[250px] object-cover"
                />
              </div>
              <div className="py-[38px] text-center text-main-black text-[25px] md:text-[35px] lg:text-[40px] font-[500] leading-[25px]">
                {dining[2].attributes.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
