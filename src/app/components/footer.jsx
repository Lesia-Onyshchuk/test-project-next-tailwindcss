import Image from "next/image";
import React from "react";
import BuyButton from "./buy-button";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer
      className={`${font.className} xl:pt-[100px] xs:pt-[66px] xl:w-[1280px] xs:w-[393px]`}
    >
      <div className="h-[488px] flex justify-between overflow-hidden relative">
        <Image
          src="/images/footer-top.png"
          alt=""
          width={315}
          height={282}
          className="xl:invisible xs:visible xs:absolute top-[-20px] left-[-22px] z-10"
        />
        <Image
          src="/images/footer-bottom.png"
          alt=""
          width={315}
          height={282}
          className="xl:invisible xs:visible xs:absolute bottom-[-16px] right-[-22px] z-10"
        />
        <Image
          src="/images/footer-blick.png"
          width={712}
          height={1486}
          alt=""
          className=" xs:invisible xl:visible absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-full"
        />
        <Image
          src="/images/footer.png"
          width={513}
          height={799}
          alt=""
          className="xs:invisible xl:visible"
        />
        <div className="xl:w-[608px] xs:w-[393px] xl:bg-[linear-gradient(124deg,#5bdbfd_0%,#7375ff_40.3%,#df93ff_79.87%,#e56f8c_100%)] xs:bg-[#0c0117]">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 xl:w-[447px] xs:w-[280px] flex items-center flex-col">
            <h2 className="xl:text-4xl xs:text-xl font-bold uppercase text-white text-center mb-[20px]">
              Узнай, как создавать контент, который{" "}
              <span className="bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] via-[#df93ff] to-[#e56f8c] bg-clip-text text-transparent">
                покоряет аудитории
              </span>
            </h2>
            <p className="text-white text-center xl:text-2xl xs:text-sm font-medium xl:mb-[44px] xs:mb-[62px]">
              Материалы, способные стать вирусными и охватить тысячи людей!
            </p>
            <div className="relative xl:w-[534px] xs:w-[268px] flex mb-[11px]">
              <BuyButton
                className="xl:w-[534px] xl:h-[74px] xs:w-[268px] xs:h-[68px] shadow-footer bg-[linear-gradient(121deg,#5bdbfd_0%,#7375ff_40.3%,#df93ff_79.87%,#e56f8c_100%)]
                          flex items-center xs:pl-[49px] xl:justify-center
                          xl:text-[22px] xs:text-sm text-white rounded-full leading-[1.66667]"
              />
              <p className="flex items-center justify-center xl:w-[74px] xl:h-[74px] xs:w-[68px] xs:h-[68px] font-semibold xl:text-2xl xs:text-xl rounded-full text-white leading-[1.53509] bg-[#ff4a77] absolute top-0 right-0">
                -50%
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
