import CustomIcon from "../svg-custom/CustomIcon";

export default function Block({ block }) {
  const { title } = block.main;

  return (
    <section className="pt-[50px] pb-[100px]">
      <div className="container-primary">
        <div className="text-center text-[35px] md:text-[45px] lg:text-[60px] text-main-blue font-bold leading-[70px]">{title}</div>
        <button className="mt-[30px] mx-auto bg-main-blue text-[14px] text-white uppercase font-bold leading-[20px] py-[14px] px-[27px] flex gap-[10px]">Visit our Instagram <CustomIcon iconType="greaterThan" /></button>
      </div>
    </section>
  );
}
