import Image from "next/image";
import { useState } from "react";
import CustomIcon from "../svg-custom/CustomIcon";

export default function Block({ block }) {
  const { title, background_img_raw, mobile_background_img_raw } = block.main;
  const branch = block.main.branches;
  const [isHovered, setIsHovered] = useState(null);

  const handleHover = (index) => {
    setIsHovered(index);
  };

  return (
    <>
      <section className="">
        <div className="relative w-full">
          <div>
            <picture className="w-full">
              <source media="(min-width: 415px)" srcSet={background_img_raw} />
              <source
                media="(min-width: 414px)"
                srcSet={mobile_background_img_raw}
              />
              <Image
                src={background_img_raw}
                className="h-full w-full absolute object-cover -z-10"
                height={1000}
                width={1000}
                loading="lazy"
                alt="Azure Background Image"
              />
            </picture>
          </div>
          <div className="container-primary pt-[50px] pb-[100px] px-5 xl:px-0">
            <div className="flex flex-col text-center py-5">
              <h2 className="text-main-blue font-[700] text-[35px] md:text-[45px] lg:text-[60px] pb-5">
                {title}
              </h2>
            </div>
            <div className="flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row gap-x-10  ">
              {branch.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 group w-full sm:w-1/2"
                  onMouseEnter={() => handleHover(i)}
                  onMouseLeave={() => handleHover(null)}
                >
                  <div className="relative ">
                    <div className="h-[310px] w-full">
                      <Image
                        src={item.img_raw}
                        width={1000}
                        height={1000}
                        alt={item.img_raw}
                        loading="lazy"
                        className="w-full h-[250px] group-hover:h-full transition-all duration-300 object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 flex gap-x-3 items-center h-[20%] justify-center w-full">
                      <div className="relative flex h-full w-full items-center justify-center transition-all duration-300">
                        <span className="absolute left-4 4sm:left-[28%] 2sm:left-[30%] sm:left-[23%] md:left-[32%] 2md:left-[36%] group-hover:left-4 group-hover:text-main-cyan text-secondary-blue font-[700] text-[25px] lg:text-[33px] xl:text-[36px] transition-all duration-300 ">
                          {item.branch_name}
                        </span>
                        <div className="absolute right-[25%] sm:right-[22%] md:right-[25%]  group-hover:right-4 transition-all duration-300 ">
                          <CustomIcon
                            width
                            iconType={
                              isHovered === i ? "left-arrow" : "chevron"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// import Image from "next/image";
// import { useState } from "react";
// import CustomIcon from "../svg-custom/CustomIcon";

// export default function Block({ block }) {
//   const { title, background_img_raw, mobile_background_img_raw } = block.main;
//   const branch = block.main.branches;
//   const [isHovered, setIsHovered] = useState(null);

//   const handleHover = (index) => {
//     setIsHovered(index);
//   };

//   return (
//     <>
//       <section className="relative">
//         <div className="">
//           <picture className="w-full h-full">
//             <source media="(min-width: 415px)" srcSet={background_img_raw} />
//             <source
//               media="(min-width: 414px)"
//               srcSet={mobile_background_img_raw}
//             />
//             <Image
//               src={mobile_background_img_raw}
//               className="h-full w-full min-h-screen object-cover"
//               alt="Azure Banner"
//               width={1920}
//               height={645}
//               loading="lazy"
//               priority={false}
//             />
//           </picture>
//         </div>
//         <div className="absolute top-0 inset-x-0">
//           <div className="container-primary pt-[50px] pb-[100px] px-5 xl:px-0">
//             <div className="flex flex-col text-center py-5">
//               <h2 className="text-main-blue font-[700] text-[35px] md:text-[45px] lg:text-[60px] pb-5">
//                 {title}
//               </h2>
//             </div>
//             <div className="flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row gap-x-10  ">
//               {branch.map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-white p-5 group w-full sm:w-1/2"
//                   onMouseEnter={() => handleHover(i)}
//                   onMouseLeave={() => handleHover(null)}
//                 >
//                   <div className="relative ">
//                     <div className="h-[310px] w-full">
//                       <Image
//                         src={item.img_raw}
//                         width={1000}
//                         height={1000}
//                         alt={item.img_raw}
//                         loading="lazy"
//                         className="w-full h-[250px] group-hover:h-full transition-all duration-300 object-cover"
//                       />
//                     </div>
//                     <div className="absolute bottom-0 flex gap-x-3 items-center h-[20%] justify-center w-full">
//                       <div className="relative flex h-full w-full items-center justify-center transition-all duration-300">
//                         <span className="absolute left-4 4sm:left-[28%] 2sm:left-[30%] sm:left-[23%] md:left-[32%] 2md:left-[36%] group-hover:left-4 group-hover:text-main-cyan text-secondary-blue font-[700] text-[25px] lg:text-[33px] xl:text-[36px] transition-all duration-300 ">
//                           {item.branch_name}
//                         </span>
//                         <div className="absolute right-[25%] sm:right-[22%] md:right-[25%]  group-hover:right-4 transition-all duration-300 ">
//                           <CustomIcon
//                             width
//                             iconType={
//                               isHovered === i ? "left-arrow" : "chevron"
//                             }
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
