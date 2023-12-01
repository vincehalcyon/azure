import { GlobalContext } from "@/lib/context/GlobalContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import CustomIcon from "@/components/svg-custom/CustomIcon";

export default function Footer() {
  const { tenantDetails, footerNavigation, footerServices } =
    useContext(GlobalContext);
  const currentYear = new Date().getFullYear();
  const [showMap, setShowMap] = useState(false);
  const handleNumberClick = (phoneNumber) => {
    initiateCall(phoneNumber);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const initiateCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`;
  };
  return (
    <>
      <section className="bg-dim-white px-[20px]">
        <div className="container-primary pb-[80px]">
          <div className="flex items-center w-full gap-[50px] pb-[30px] pt-[71px]">
            <div className="md:hidden flex flex-grow bg-main-blue h-[2px]" />
            <div>
              <Image
                src={tenantDetails.data.main.footer_logo}
                height={45}
                width={210}
                loading="lazy"
                alt="azure logo"
              />
            </div>
            <div className="flex flex-grow bg-main-blue h-[2px]" />
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-[98px] md:justify-start justify-center ">
            <div className="text-[14px] flex flex-col gap-[10px] ">
              <div className="relative aspect-auto overflow-hidden">
                {showMap ? (
                  <iframe
                    src={tenantDetails.data.main.map_url}
                    title="Azure Beach Resort Map"
                    width="325"
                    height="190"
                    loading="lazy"
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                    className="px-[20px] 4sm:px-[0px]"
                  ></iframe>
                ) : (
                  <div className=" h-full min-h-[190px] w-[325px] bg-slate-200 animate-pulse">
                    <div className="top-[40%] left-[45%] absolute animate-bounce">
                      <Image
                        src={
                          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8ZGVmcz4KPC9kZWZzPgo8ZyBzdHlsZT0ic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDA7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IG5vbmU7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNDA2NTkzNDA2NTkzNDAxNiAxLjQwNjU5MzQwNjU5MzQwMTYpIHNjYWxlKDIuODEgMi44MSkiID4KCTxwYXRoIGQ9Ik0gNDUgOTAgQyAzMC4wODYgNzEuNzU3IDE1LjE3NCA0Ni4yOTkgMTUuMTc0IDI5LjgyNiBTIDI4LjUyNyAwIDQ1IDAgcyAyOS44MjYgMTMuMzUzIDI5LjgyNiAyOS44MjYgUyA1OS45MTQgNzEuNzU3IDQ1IDkwIHoiIHN0eWxlPSJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgZmlsbDogcmdiKDIyMCwzMiw0MCk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0iIG1hdHJpeCgxIDAgMCAxIDAgMCkgIiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+Cgk8Y2lyY2xlIGN4PSI0NSIgY3k9IjI5LjM4MDAwMDAwMDAwMDAwMyIgcj0iMTMuNSIgc3R5bGU9InN0cm9rZTogbm9uZTsgc3Ryb2tlLXdpZHRoOiAxOyBzdHJva2UtZGFzaGFycmF5OiBub25lOyBzdHJva2UtbGluZWNhcDogYnV0dDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBmaWxsOiByZ2IoMjU1LDI1NSwyNTUpOyBmaWxsLXJ1bGU6IG5vbnplcm87IG9wYWNpdHk6IDE7IiB0cmFuc2Zvcm09IiAgbWF0cml4KDEgMCAwIDEgMCAwKSAiLz4KCTxwYXRoIGQ9Ik0gNDguNTk2IDUuMzc1IEMgMzMuMzU1IDUuMzc1IDIxIDE3LjczIDIxIDMyLjk3IGMgMCAxLjU4NCAwLjE0MSAzLjEzNSAwLjM5NyA0LjY0NiBDIDIwLjQ5NiAzNS4wMzUgMjAgMzIuMjY0IDIwIDI5LjM3NSBjIDAgLTEzLjgwNyAxMS4xOTMgLTI1IDI1IC0yNSBjIDIuODg5IDAgNS42NjEgMC40OTYgOC4yNDIgMS4zOTcgQyA1MS43MzEgNS41MTYgNTAuMTggNS4zNzUgNDguNTk2IDUuMzc1IHoiIHN0eWxlPSJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgZmlsbDogcmdiKDIzMSw3Nyw3MCk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0iIG1hdHJpeCgxIDAgMCAxIDAgMCkgIiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CjwvZz4KPC9zdmc+"
                        }
                        loading="lazy"
                        height={40}
                        width={40}
                        alt="map pin"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div>
                Managed by<span className="font-bold"> Chroma Hospitality</span>
              </div>
              <div>
                Part of
                <span className="font-bold"> Filinvest Hotels and Resorts</span>
              </div>
            </div>
            <div className="uppercase flex text-center md:text-start flex-wrap gap-[80px] md:justify-start justify-center">
              <div>
                <h2 className="text-main-blue font-bold text-[18px]">
                  Navigation
                </h2>
                <div className="flex flex-grow bg-main-blue h-[2px] my-[19px] max-w-[150px]" />
                <div className="flex flex-col gap-[15px]">
                  {footerNavigation.nodes.map((item, index) => (
                    <Link
                      href={item.url}
                      key={index}
                      className="text-[14px] text-main-black leading-normal"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-main-blue font-bold text-[18px]">
                  Our Services
                </h2>
                <div className="flex flex-grow bg-main-blue h-[2px] my-[19px] max-w-[150px]" />
                <div className="flex flex-col text-[14px] gap-[15px]">
                  {footerServices.nodes.map((item, index) => (
                    <Link href={item.url} key={index}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-main-blue font-bold text-[18px]">
                  Connect with us
                </h2>
                <div className="flex flex-grow bg-main-blue h-[2px] my-[19px] max-w-[150px]" />
                <div className="flex flex-col gap-[15px]">
                  <div className="w-fit">
                    <div
                      className="flex group cursor-pointer"
                      onClick={() =>
                        handleNumberClick(
                          tenantDetails.data.contact_details.contact_number
                        )
                      }
                    >
                      <div className="text-main-blue group-hover:text-main-cyan transition-all duration-300 flex justify-center items-center">
                        <CustomIcon iconType="phone" />
                      </div>
                      {tenantDetails.data.contact_details.contact_number}
                    </div>
                  </div>
                  <div className="flex w-full gap-x-[20px] items-center">
                    <div className="flex items-center">
                      <Link
                        href={tenantDetails.data.social_media.facebook_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="facebook"
                        className="text-main-blue hover:text-main-cyan transition-all duration-300 inline-block w-auto h-[15px]"
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
                        className="text-main-blue hover:text-main-cyan transition-all duration-300 inline-block w-auto h-[15px]"
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
                        className="text-main-blue hover:text-main-cyan transition-all duration-300 inline-block  w-auto h-[15px]"
                      >
                        <CustomIcon iconType="instagram" />
                      </Link>
                    </div>
                  </div>
                  <div className="mt-[30px]">
                    <Link
                      href={tenantDetails.data.tripadvisor.tripadvisor_link}
                      className="max-h-[102px] max-w-[220px]"
                    >
                      <Image
                        src={tenantDetails.data.tripadvisor.tripadvisor}
                        width={220}
                        height={102}
                        loading="lazy"
                        className="w-full h-full"
                        alt="Trip Advisor"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-[14px] text-center w-full bg-dim-grey py-[16px]">
        <p>
          Website Developed by Halcyon Agile | Copyright {currentYear} (c) Azure
          Beach Club. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
