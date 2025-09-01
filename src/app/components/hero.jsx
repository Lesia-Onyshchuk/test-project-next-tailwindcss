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
      className={`${font.className} xl:pt-[67px] xs:pt-[24px] xl:pb-[100px] xs:pb-[66px] xs:flex xl:gap-[40px] xs:flex-col xs:justify-center xl:flex-row`}
    >
      <div className="flex flex-col">
        <div className="xs:relative xl:static xs:flex xl:mb-[42px] xs:mb-[277px] xl:w-[644px] xl:h-[466px] xs:w-[313px] xs:h-[354px] xs:rounded-[18px] xs:overflow-hidden xl:overflow-visible">
          <Image
            src="/images/hero.png"
            width={644}
            height={466}
            alt="hero"
            className="object-cover"
          />
          <div className="xs:absolute xl:static xl:invisible inset-0 bg-gradient-to-b from-black/0 to-black/100 xs:top-[177px] xl:top-0" />
        </div>
        <div className="xs:relative xl:w-[534px] xs:w-[313px] xs:flex xs:mb-[11px]">
          <BuyButton
            onClick={openModal}
            className="xl:w-[534px] xl:h-[74px] xs:w-[313px] xs:h-[60px] xs:bg-white
            xs:flex xs:items-center xs:justify-center
            xl:text-[22px] xs:text-[14px] xs:text-black xs:rounded-full xs:leading-[1.66667] xs:hover:bg-[#ff4a77]"
          />
          <p className="xs:flex xs:items-center xs:justify-center xl:w-[74px] xl:h-[74px] xs:w-[60px] xs:h-[60px] xs:font-semibold xl:text-2xl xs:text-xl xs:rounded-full xs:text-white xs:leading-[1.53509] xs:bg-[#ff4a77] xs:absolute xs:top-0 xs:right-0">
            -50%
          </p>
        </div>
        <div className="xs:flex xl:gap-[16px] xs:gap-[11px] xs:items-center xl:pl-[176.5px] xs:pl-[79.5px]">
          <p className="xl:text-2xl xs:text-xl xs:text-[#ff4a77] xs:font-semibold xs:leading-[1.53509]">
            1000 грн
          </p>
          <p className="leading-[1.53509] text-sm text-[#c5c5c5] line-through">
            2000грн
          </p>
        </div>
      </div>
      <div className="relative">
        <p className="xs:text-white xl:w-[396px] xs:w-[313px] xl:text-lg xs:text-sm xs:font-normal xl:pt-[84px] xs:pt-0 xs:top-[-220px] xs:absolute xl:static xs:text-center xl:text-left">
          Станьте известным всего за 3 месяца без затрат на рекламу! Узнайте
          ключ к созданию вирусного контента и превратите свои идеи в миллионные
          просмотры.
        </p>
        <div className="xs:absolute xl:left-[-114px] xs:left-0 xl:top-[210px] xs:top-[-460px] xs:text-center xl:text-left">
          <p className="xs:font-bold xl:text-[32px] xs:text-[20px] xl:mb-[15px] xs:mb-[4px] bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] via-[#df93ff] to-[#e56f8c] bg-clip-text text-transparent">
            От 0 до 100,000 за 90 дней
          </p>
          <h1 className="xs:leading-[1.1] xs:text-white xs:font-extrabold xl:text-[96px] xs:text-[54px] xs:uppercase xl:w-[570px] xs:w-[313px] xs:flex">
            Секреты Вирусных Видео
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
