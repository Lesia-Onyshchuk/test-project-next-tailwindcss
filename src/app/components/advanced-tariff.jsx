"use client";

import React, { useState } from "react";
import { Raleway, Manrope } from "next/font/google";
import Modal from "./modal";

const fontmain = Raleway({ subsets: ["latin"] });
const fontsecond = Manrope({ subsets: ["latin"] });

const AdvancedTariff = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white xl:px-[36px] xl:pt-[36px] xl:pb-[26px] p-[32px] rounded-28 xl:w-[360px] xl:h-[560px] w-[313px] h-[430px] relative flex justify-between flex-col inset-shadow-custom">
      <div className="flex xl:top-[-30px] top-[-22px] left-1/2 -translate-x-1/2 justify-center items-center xl:px-[33.5px] px-[26.5px] py-[11px] shadow-best-seller bg-[linear-gradient(121deg,#5bdbfd_0%,#7375ff_40.3%,#df93ff_79.87%,#e56f8c_100%)] rounded-[18px] absolute">
        <p
          className={`${fontmain.className} text-white uppercase text-base font-bold`}
        >
          Best Seller
        </p>
      </div>
      <div>
        <div className="flex xl:gap-[11px] gap-[30px] uppercase items-center justify-between mb-[18px]">
          <h3
            className={`${fontmain.className} xl:text-xl text-base text-[#0c0117] uppercase font-semibold`}
          >
            Advanced
          </h3>
          <div className="flex justify-center items-center xl:px-[43px] px-[33.5px] py-[11.5px] bg-black rounded-[30px]">
            <p
              className={`${fontmain.className} bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] to-[#e56f8c] bg-clip-text text-transparent text-base font-bold`}
            >
              Pro
            </p>
          </div>
        </div>
        <div
          className={`${fontsecond.className} flex gap-[22px] text-[#0c0117] font-bold items-end leading-none mb-[29px]`}
        >
          <p className="text-[64px] xl:text-[74px]">149 $</p>
          <p className="text-xl line-through">199$</p>
        </div>
        <ul
          className={`${fontmain.className} flex gap-[14px] flex-col text-[#0c0117] uppercase leading-[1.1875] font-semibold text-base`}
        >
          <li className="before-round-black pl-[28px]">
            Access to 25 video lessons
          </li>
          <li className="before-round-black pl-[28px]">
            All materials from the Basic plan
          </li>
          <li className="before-round-black pl-[28px]">
            Working with accounting software
          </li>
          <li className="before-round-black pl-[28px]">
            Real company case studies
          </li>
          <li className="before-round-black pl-[28px]">
            Completion certificate
          </li>
        </ul>
      </div>
      <button
        onClick={() => setOpen(true)}
        className={`${fontsecond.className} xl:w-[287px] xl:h-[57px] w-[248px] h-[47px] bg-[#0c0117] text-white font-semibold xl:text-base text-sm rounded-[52px] hover:bg-[#ff4a77]`}
      >
        Buy
      </button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default AdvancedTariff;
