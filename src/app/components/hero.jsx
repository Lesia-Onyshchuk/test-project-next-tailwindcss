import Image from "next/image";
import React from "react";
import BuyButton from "./buy-button";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section
      className={`${font.className} pt-[67px] pb-[50px] flex gap-[40px]`}
    >
      <div className="flex flex-col">
        <div className="flex mb-[42px] w-[644px] h-[466px]">
          <Image
            src="/images/hero.png"
            width={644}
            height={466}
            alt="hero"
            className="object-cover"
          />
        </div>
        <div className="relative w-[534px] flex mb-[11px]">
          <BuyButton
            className="w-[534px] h-[74px] bg-white
            flex items-center justify-center
            text-[22px] text-black rounded-full leading-[1.66667] hover:bg-[#ff4a77]"
          />
          <p className="flex items-center justify-center w-[74px] h-[74px] font-semibold text-2xl rounded-full text-white leading-[1.53509] bg-[#ff4a77] absolute top-0 right-0">
            -50%
          </p>
        </div>
        <div className="flex gap-[16px] items-center pl-[176.5px]">
          <p className="text-2xl text-[#ff4a77] font-semibold leading-[1.53509]">
            1000 грн
          </p>
          <p className="leading-[1.53509] text-sm text-[#c5c5c5] line-through">
            2000грн
          </p>
        </div>
      </div>
      <div className="relative">
        <p className="text-white w-[396px] text-lg font-normal pt-[84px]">
          Станьте известным всего за 3 месяца без затрат на рекламу! Узнайте
          ключ к созданию вирусного контента и превратите свои идеи в миллионные
          просмотры.
        </p>
        <div className="absolute left-[-114px] top-[210px]">
          <p>От 0 до 100,000 за 90 дней</p>
          <h1 className="text-white font-extrabold text-8xl uppercase width-[570px] flex">
            Секреты Вирусных Видео
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
