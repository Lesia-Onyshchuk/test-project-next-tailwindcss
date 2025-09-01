"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Raleway, Manrope } from "next/font/google";
import Modal from "./modal";

const fontmain = Raleway({ subsets: ["latin"] });
const fontsecond = Manrope({ subsets: ["latin"] });

const BaseTariff = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#0c0117] inset-shadow-custom px-[36px] pt-[36px] pb-[26px] rounded-28 w-[360px] h-[465px] relative overflow-hidden flex justify-between flex-col">
      <Image
        src="/images/base-top.png"
        alt=""
        width={184}
        height={174}
        className="absolute top-[-67px] right-[-115px] z-10"
      />
      <div>
        <h3
          className={`${fontmain.className} text-xl text-white uppercase font-semibold mb-[18px]`}
        >
          Базовый
        </h3>
        <div
          className={`${fontsecond.className} flex gap-[22px] text-white font-bold items-end leading-none mb-[29px]`}
        >
          <p className="text-[74px]">99 $</p>
          <p className="text-xl line-through">139$</p>
        </div>
        <ul
          className={`${fontmain.className} flex gap-[14px] flex-col text-white uppercase leading-[1.1875] font-semibold text-base`}
        >
          <li className="before-round-white pl-[28px]">Базовый курс</li>
          <li className="before-round-white pl-[28px]">38 уроков</li>
        </ul>
      </div>
      <button
        onClick={() => setOpen(true)}
        className={`${fontsecond.className} w-[287px] h-[57px] bg-white text-[#0c0117] font-semibold text-base rounded-[52px] hover:bg-[#ff4a77]`}
      >
        Купить
      </button>
      <Image
        src="/images/base-bottom.png"
        alt=""
        width={184}
        height={174}
        className="absolute bottom-[-67px] left-[-115px]"
      />
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default BaseTariff;
