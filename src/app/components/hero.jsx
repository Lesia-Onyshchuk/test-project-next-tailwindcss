"use client";

import Image from "next/image";
import React from "react";
import BuyButton from "./buy-button";
import { Raleway } from "next/font/google";
import { useModal } from "./modal-provider";
import { useLanguage } from "./lang-provider";

const font = Raleway({ subsets: ["latin"] });

const Hero = () => {
  const { openModal } = useModal();
  const { t } = useLanguage();
  return (
    <section
      className={`${font.className} xl:pt-[67px] pt-[24px] xl:pb-[100px] pb-[66px] flex gap-0 xl:gap-[40px] flex-col justify-center items-center xl:items-start xl:justify-start xl:flex-row`}
    >
      <div className="flex flex-col">
        <div className="relative flex xl:mb-[42px] mb-[277px] xl:w-[644px] xl:h-[466px] w-[313px] h-[354px] rounded-[18px] overflow-hidden xl:overflow-visible">
          <Image
            src="/images/operations.jpg"
            width={644}
            height={466}
            alt="hero"
            className="object-cover rounded-[18px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/100 top-[177px] xl:top-0" />
        </div>
        <div className="relative xl:w-[534px] w-[313px] flex mb-[11px]">
          <BuyButton
            onClick={openModal}
            className="xl:w-[534px] xl:h-[74px] w-[313px] h-[60px] bg-white
            flex items-center justify-center
            xl:text-[22px] text-[14px] text-black rounded-full leading-[1.66667] hover:bg-yellow-300 transition-colors duration-300 ease-in-out"
          />
          <p className="flex items-center justify-center xl:w-[74px] xl:h-[74px] w-[60px] h-[60px] font-semibold xl:text-2xl text-xl rounded-full text-black leading-[1.53509] bg-yellow-300 absolute top-0 right-0">
            -50%
          </p>
        </div>
        <div className="flex xl:gap-[16px] gap-[11px] items-center xl:pl-[176.5px] pl-[79.5px]">
          <p className="xl:text-2xl text-xl text-yellow-300 font-semibold leading-[1.53509]">
            {t("from")} 99 $
          </p>
          <p className="leading-[1.53509] text-sm text-[#c5c5c5] line-through">
            139 $
          </p>
        </div>
      </div>
      <div className="relative">
        <p className="text-white xl:w-[460px] w-[313px] xl:text-lg text-[14px] font-normal pt-0 top-[-240px] xl:top-[84px] absolute text-center xl:text-left left-1/2 -translate-x-1/2 xl:left-[218px]">
          {t("description")}
        </p>
        <div className="absolute xl:left-[170px] left-1/2 -translate-x-1/2 xl:top-[232px] top-[-430px] text-center xl:text-left">
          <p className="font-bold xl:text-[32px] text-[20px] xl:mb-[15px] mb-[4px] bg-gradient-to-r from-[#5bdbfd] via-[#7b7cab] via-[#1f1d8b] to-[#ffffff] bg-clip-text text-transparent">
            {t("text")}
          </p>
          <h1 className="leading-[1.1] text-yellow-300 font-extrabold xl:text-[88px] text-[46px] uppercase xl:w-[600px] w-[313px] flex">
            {t("title")}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
