import Image from "next/image";
import CustomIcon from "../svg-custom/CustomIcon";

export default function Block({ block }) {
  const { title, content, image_raw } = block.main;


  return (
    <>
      <section className="bg-dim-blue pt-0 lg:pt-[30px]">
        <div className="container-primary ">
          <div className="flex flex-col text-center mx-5 py-5">
            <h2 className="text-main-blue font-[700] text-[35px] md:text-[45px] lg:text-[60px] pb-5">
              {title}
            </h2>
            <div
              className="text-[#333333] text-[14px] sm:text-[16px]"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
        <div className="w-full">
          <Image
            src={"/images/bottom-mosaic-pattern-design.webp"}
            className="h-full w-full"
            height={1000}
            width={1000}
            alt="azure bottom mosaic pattern design"
          />
        </div>
      </section>
    </>
  );
}
