import Image from "next/image";
import React from "react";
import BuyButton from "./buy-button";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className={`${font.className} pt-[100px] w-[1280px]`}>
      <div className="h-[488px] flex justify-between overflow-hidden relative">
        <Image
          src="/images/footer-blick.png"
          width={712}
          height={1486}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-full"
        />
        <Image src="/images/footer.png" width={513} height={799} alt="" />
        <div className="w-[608px] bg-[linear-gradient(124deg,#5bdbfd_0%,#7375ff_40.3%,#df93ff_79.87%,#e56f8c_100%)]">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[447px] flex items-center flex-col">
            <h2 className="text-4xl font-bold uppercase text-white text-center mb-[20px]">
              Узнай, как создавать контент, который{" "}
              <span className="bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] via-[#df93ff] to-[#e56f8c] bg-clip-text text-transparent">
                покоряет аудитории
              </span>
            </h2>
            <p className="text-white text-center text-2xl font-medium mb-[44px]">
              Материалы, способные стать вирусными и охватить тысячи людей!
            </p>
            <div className="relative w-[534px] flex mb-[11px]">
              <BuyButton
                className="w-[534px] h-[74px] shadow-footer bg-[linear-gradient(121deg,#5bdbfd_0%,#7375ff_40.3%,#df93ff_79.87%,#e56f8c_100%)]
                          flex items-center justify-center
                          text-[22px] text-black rounded-full leading-[1.66667]"
              />
              <p className="flex items-center justify-center w-[74px] h-[74px] font-semibold text-2xl rounded-full text-white leading-[1.53509] bg-[#ff4a77] absolute top-0 right-0">
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
