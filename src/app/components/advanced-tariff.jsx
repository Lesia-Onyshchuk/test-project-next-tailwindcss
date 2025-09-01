"use client";

import React, { useState } from "react";
import { Raleway, Manrope } from "next/font/google";
import Modal from "./modal";

const fontmain = Raleway({ subsets: ["latin"] });
const fontsecond = Manrope({ subsets: ["latin"] });

const AdvancedTariff = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white px-[36px] pt-[36px] pb-[26px] rounded-28 w-[360px] h-[465px] relative flex justify-between flex-col inset-shadow-custom">
      <div className="flex top-[-30px] left-1/2 -translate-x-1/2 justify-center items-center px-[33px] py-[11px] shadow-best-seller bg-[linear-gradient(121deg,#5bdbfd_0%,#7375ff_40.3%,#df93ff_79.87%,#e56f8c_100%)] rounded-[18px] absolute">
        <p
          className={`${fontmain.className} text-white uppercase text-base font-bold`}
        >
          Best Seller
        </p>
      </div>
      <div>
        <div className="flex gap-[11px] uppercase items-center justify-between mb-[18px]">
          <h3
            className={`${fontmain.className} text-xl text-[#0c0117] uppercase font-semibold`}
          >
            Продвинутый
          </h3>
          <div className="flex justify-center items-center px-[43px] py-[11.5px] bg-black rounded-[30px]">
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
          <p className="text-[74px]">149 $</p>
          <p className="text-xl line-through">199$</p>
        </div>
        <ul
          className={`${fontmain.className} flex gap-[14px] flex-col text-[#0c0117] uppercase leading-[1.1875] font-semibold text-base`}
        >
          <li className="before-round-black pl-[28px]">База</li>
          <li className="before-round-black pl-[28px]">Дополнительные уроки</li>
          <li className="before-round-black pl-[28px]">48 уроков</li>
          <li className="before-round-black pl-[28px]">
            Чат-комьюнити для создателей контента
          </li>
        </ul>
      </div>
      <button
        onClick={() => setOpen(true)}
        className={`${fontsecond.className} w-[287px] h-[57px] bg-[#0c0117] text-white font-semibold text-base rounded-[52px] hover:bg-[#ff4a77]`}
      >
        Купить
      </button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default AdvancedTariff;
