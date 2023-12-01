import ComeAndDrinkForm from "@/components/partials/forms/ComeAndDrinkForm";
import Image from "next/image";

export default function Block({ block }) {
  const { title, description, form } = block.main;

  return (
    <section className="pb-[80px] bg-dim-blue">
      <div className="flex w-full">
        <Image
          src="/images/top-pattern-left.webp"
          width={1000}
          height={0}
          alt="azure pattern design"
        />
        <Image
          src="/images/top-pattern-right.webp"
          width={1000}
          height={0}
          alt="azure pattern design"
        />
      </div>
      <div className="px-[20px] mt-[66px]">
        <div className="container-primary flex lg:gap-x-[80px] flex-col lg:flex-row 2sm:justify-center 2sm:items-center">
          <div className="w-[50%]">
            <div className="text-center text-main-blue font-bold text-[35px] md:text-[45px] lg:text-[60px] leading-[70px] mb-[20px]">
              {title}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="text-[16px] text-main-black leading-[22px] tracking-[1.6px]"
            />
          </div>
          <div className="w-[50%]">
            <ComeAndDrinkForm form={block?.main?.form} />
          </div>
        </div>
      </div>
    </section>
  );
}
