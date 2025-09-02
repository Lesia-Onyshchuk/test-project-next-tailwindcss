"use client";

import Image from "next/image";
import React from "react";
import BuyButton from "./buy-button";
import { Raleway } from "next/font/google";
import { useModal } from "./modal-provider";

const font = Raleway({ subsets: ["latin"] });

const Footer = () => {
  const { openModal } = useModal();

  return (
    <footer
      className={`${font.className} xl:pt-[100px] pt-[66px] xl:w-[1280px] w-[393px]`}
    >
      <div className="h-[488px] flex justify-between overflow-visible relative">
        <Image
          src="/images/footer-top.png"
          alt=""
          width={315}
          height={282}
          className="visible absolute top-[-20px] left-[-22px] z-10 xl:invisible"
        />
        <Image
          src="/images/footer-bottom.png"
          alt=""
          width={315}
          height={282}
          className="visible absolute bottom-[-16px] right-[-22px] z-10 xl:invisible"
        />
        <Image
          src="/images/footer-blick.png"
          width={712}
          height={1486}
          alt=""
          className="invisible absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-full xl:visible"
        />
        <Image
          src="/images/cycle.jpg"
          width={513}
          height={799}
          alt=""
          className="invisible object-cover xl:visible"
        />
        <div className="xl:w-[608px] w-[393px] xl:bg-[linear-gradient(124deg,#1f1d8b_0%,#7b7cab_40.3%,#ffffff_79.87%,#5bdbfd_100%)] bg-[#0c0117]">
          <div className="absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 xl:w-[400px] w-[200px] flex items-center flex-col">
            <h2 className="xl:text-4xl text-xl font-bold uppercase text-white text-center mb-[20px]">
              From beginner to professional –{" "}
              <span className="bg-gradient-to-r from-[#5bdbfd] via-[#7b7cab] via-[#1f1d8b] to-[#7b7cab] bg-clip-text text-transparent">
                your accounting journey
              </span>
            </h2>
            <p className="text-white text-center xl:text-2xl text-sm font-medium xl:mb-[44px] mb-[62px]">
              Resources to help you with it!
            </p>
            <div className="relative z-20 xl:w-[480px] w-[240px] flex mb-[11px]">
              <BuyButton
                onClick={openModal}
                className="xl:w-[480px] xl:h-[74px] w-[240px] h-[68px] shadow-footer bg-[linear-gradient(121deg,#1f1d8b_0%,#7b7cab_40.3%,#7b7cab_79.87%,#5bdbfd_100%)]
                          flex items-center pl-[49px] xl:justify-center
                          xl:text-[22px] text-sm text-white rounded-full leading-[1.66667] relative z-30 hover:text-yellow-300 transition-colors duration-300 ease-in-out"
              />
              <p className="flex items-center justify-center xl:w-[74px] xl:h-[74px] w-[68px] h-[68px] font-semibold xl:text-2xl text-xl rounded-full text-black leading-[1.53509] bg-yellow-300 absolute top-0 right-0 z-40">
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
