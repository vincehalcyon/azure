import Image from "next/image";
import CustomIcon from "../svg-custom/CustomIcon";
import Link from "next/link";

export default function Block({ block }) {
  const { title } = block?.main;
  const blogs = block?.main?.blogs || [];
  return (
    <section className="px-[20px] pb-[50px] bg-gradient-to-b from-main-blue from-50% to-[#f2faff] to-50%">
      <div className="container-primary">
        <div className="flex pt-[100px] pb-[30px] gap-x-[32px] text-center justify-center items-center text-[35px] md:text-[45px] lg:text-[60px] text-main-cyan font-bold leading-[70px]">
          {title}
          <CustomIcon iconType="arrowRight" />
        </div>
        <div className="flex flex-wrap xl:flex-nowrap justify-center gap-[27px]">
          {blogs.map((blog, index) => (
            <Link href={blog.attributes.route_url} key={index}>
              <div
                key={index}
                className="relative group text-center max-w-[359px] max-h-[472px] bg-white p-[20px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute z-[1] top-0 left-[30px] bg-main-blue group-hover:bg-main-cyan font-bold p-[10px] transition-all duration-300 text-white group-hover:text-main-blue uppercase">
                  <div className="text-[13px] md:text-[14px] lg:text-[16px] leading-[10px] md:leading-[25px] tracking-[1.6px]">
                    {new Date(blog?.attributes?.published_at)
                      .toLocaleDateString("en-US", {
                        month: "short",
                      })
                      .replace(/,/g, "")}
                  </div>
                  <div className="text-[15px] md:text-[25px] lg:text-[30px] leading-[30px] tracking-[3px]">
                    {new Date(
                      blog?.attributes?.published_at
                    ).toLocaleDateString("en-US", {
                      day: "2-digit",
                    })}
                  </div>
                  <div className="text-[13px] md:text-[14px] lg:text-[16px] leading-[10px] md:leading-[25px] tracking-[1.6px]">
                    {new Date(
                      blog?.attributes?.published_at
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                    })}
                  </div>
                </div>
                {/* <div className="relative w-[210px] md:w-[319px] h-[200px] md:h-[240px]"> */}
                <div className="relative md:w-[319px] md:h-[240px]">
                  <Image
                    src={blog?.attributes?.data?.main?.image}
                    width={319}
                    height={240}
                    alt={blog?.attributes?.title}
                    loading="lazy"
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-main-blue opacity-0 group-hover:opacity-[35%] transition-all duration-300" />
                </div>
                <div className="text-[15px] md:text-[25px] lg:text-[32px] font-bold text-main-blue group-hover:text-main-cyan transition-all duration-300 pt-[20px] pb-[30px]">
                  {blog?.attributes?.title}
                </div>
                <button className="mx-auto bg-main-blue flex gap-[20px] px-[20px] py-[14px] text-white text-[12px] lg:text-[14px] group-hover:text-main-blue group-hover:bg-main-cyan transition-all duration-300 font-bold leading-[20px] uppercase">
                  Read More
                  <CustomIcon iconType="greaterThan" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
