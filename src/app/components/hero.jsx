"use client";

import Image from "next/image";
import React from "react";
import BuyButton from "./buy-button";
import { Raleway } from "next/font/google";
import { useModal } from "./modal-provider";

const font = Raleway({ subsets: ["latin"] });

const Hero = () => {
  const { openModal } = useModal();
  return (
    <section
      className={`${font.className} xl:pt-[67px] pt-[24px] xl:pb-[100px] pb-[66px] flex gap-0 xl:gap-[40px] flex-col justify-center items-center xl:items-start xl:justify-start xl:flex-row`}
    >
      <div className="flex flex-col">
        <div className="relative xl:static flex xl:mb-[42px] mb-[277px] xl:w-[644px] xl:h-[466px] w-[313px] h-[354px] rounded-[18px] overflow-hidden xl:overflow-visible">
          <Image
            src="/images/hero.png"
            width={644}
            height={466}
            alt="hero"
            className="object-cover"
          />
          <div className="absolute xl:static xl:invisible inset-0 bg-gradient-to-b from-black/0 to-black/100 top-[177px] xl:top-0" />
        </div>
        <div className="relative xl:w-[534px] w-[313px] flex mb-[11px]">
          <BuyButton
            onClick={openModal}
            className="xl:w-[534px] xl:h-[74px] w-[313px] h-[60px] bg-white
            flex items-center justify-center
            xl:text-[22px] text-[14px] text-black rounded-full leading-[1.66667] hover:bg-[#ff4a77]"
          />
          <p className="flex items-center justify-center xl:w-[74px] xl:h-[74px] w-[60px] h-[60px] font-semibold xl:text-2xl text-xl rounded-full text-white leading-[1.53509] bg-[#ff4a77] absolute top-0 right-0">
            -50%
          </p>
        </div>
        <div className="flex xl:gap-[16px] gap-[11px] items-center xl:pl-[176.5px] pl-[79.5px]">
          <p className="xl:text-2xl text-xl text-[#ff4a77] font-semibold leading-[1.53509]">
            1000 грн
          </p>
          <p className="leading-[1.53509] text-sm text-[#c5c5c5] line-through">
            2000грн
          </p>
        </div>
      </div>
      <div className="relative">
        <p className="text-white xl:w-[396px] w-[313px] xl:text-lg text-sm font-normal pt-0 top-[-220px] xl:top-[84px] absolute text-center xl:text-left left-1/2 -translate-x-1/2 xl:left-[198px]">
          Станьте известным всего за 3 месяца без затрат на рекламу! Узнайте
          ключ к созданию вирусного контента и превратите свои идеи в миллионные
          просмотры.
        </p>
        <div className="absolute xl:left-[170px] left-1/2 -translate-x-1/2 xl:top-[210px] top-[-460px] text-center xl:text-left">
          <p className="font-bold xl:text-[32px] text-[20px] xl:mb-[15px] mb-[4px] bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] via-[#df93ff] to-[#e56f8c] bg-clip-text text-transparent">
            От 0 до 100,000 за 90 дней
          </p>
          <h1 className="leading-[1.1] text-white font-extrabold xl:text-[96px] text-[54px] uppercase xl:w-[570px] w-[313px] flex">
            Секреты Вирусных Видео
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
