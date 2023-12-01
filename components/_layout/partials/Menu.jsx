import globalState from "@/lib/store/globalState";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "@/lib/context/GlobalContext";
import { useEffect } from "react";
import CustomIcon from "@/components/svg-custom/CustomIcon";

export default function Menu() {
  const { menus, tenantDetails } = useContext(GlobalContext);
  const [showNav, setShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    if (showNav && window.innerWidth < 768) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showNav]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNumberClick = (phoneNumber) => {
    initiateCall(phoneNumber);
  };
  const initiateCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`;
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-10 w-full bg-[#000000]/20 text-white ${
          isScrolled
            ? "bg-black/80 transition-all duration-300"
            : "bg-transparent"
        }`}
      >
        {/* <div className="sticky top-0 z-10 w-full bg-[#000000]/50 text-white "> */}
        <div className="flex flex-col container-primary w-full lg:mx-auto py-2 md:py-5 items-center px-5 xl:px-0">
          <div className="flex justify-between w-full items-center">
            <div className="hidden md:block">
              <div className="flex items-center gap-2 ">
                <CustomIcon iconType="note" />
                <span className="uppercase text-[14px]">music playlist</span>
              </div>
            </div>
            <div className="flex items-center justify-between md:justify-normal w-full md:w-auto">
              <Link href={"/"}>
                <div className="-z-10">
                  <Image
                    src={tenantDetails.data.main.logo}
                    height={45}
                    width={210}
                    alt="azure logo"
                    className="w-[100px] md:w-[210px]"
                  />
                </div>
              </Link>
              <div className="flex items-center md:hidden ">
                <button
                  className=" rounded-md outline-none text-2xl text-secondary"
                  onClick={() => setShowNav(!showNav)}
                  aria-label="menu"
                >
                  {showNav ? (
                    <div className="text-[#FFFFFF] hover:text-main-cyan">
                      <CustomIcon iconType="close" />
                    </div>
                  ) : (
                    <>
                      <div className="text-[#FFFFFF] hover:text-main-cyan">
                        <CustomIcon iconType="burger" />
                      </div>
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-x-5">
                <div className="flex w-full gap-x-[20px] items-center">
                  <div
                    className="flex group cursor-pointer"
                    onClick={() =>
                      handleNumberClick(
                        tenantDetails.data.contact_details.contact_number
                      )
                    }
                  >
                    <div className="text-white group-hover:text-main-cyan transition-all duration-300 flex justify-center items-center">
                      <CustomIcon iconType="phone" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Link
                      href={tenantDetails.data.social_media.facebook_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="facebook"
                      className="text-white hover:text-main-cyan transition-all duration-300 inline-block w-auto h-[15px]"
                    >
                      <CustomIcon iconType="facebook" />
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link
                      href={tenantDetails.data.social_media.twitter_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="twitter"
                      className="text-white hover:text-main-cyan transition-all duration-300 inline-block w-auto h-[15px]"
                    >
                      <CustomIcon iconType="twitter" />
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link
                      href={tenantDetails.data.social_media.instagram_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="instagram"
                      className="text-white hover:text-main-cyan transition-all duration-300 inline-block  w-auto h-[15px]"
                    >
                      <CustomIcon iconType="instagram" />
                    </Link>
                  </div>
                </div>
                <div>
                  <button className="border border-[#FFFFFF] text-[14px] w-[121px] uppercase py-2 hover:bg-main-cyan hover:text-main-blue">
                    book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-opacity-50" />
        <div className="w-full flex justify-center">
          <div
            className={`left-0 top-[0px] md:static fixed container-primary w-full -z-10 md:z-0 flex justify-center bg-black/50 md:bg-transparent py-5 items-center px-5 xl:px-0 transition-all duration-300 overflow-hidden ${
              showNav ? "left-[0px] w-full h-auto" : "left-[100%] lg:h-auto"
            }`}
          >
            <div className="flex w-full h-full justify-between">
              <div className="h-screen md:h-auto flex flex-col md:flex-row items-center justify-center w-full">
                <div className="flex flex-col md:flex-row justify-between w-full gap-y-6 md:gap-y-0">
                  {menus?.parentNodes.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className={`flex gap-y-6text-[25px] md:text-[14px] `}
                      >
                        <Link className="uppercase hover:text-main-cyan" href={item.url}>
                          {item.label}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
