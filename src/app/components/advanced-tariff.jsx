"use client";

import React, { useState } from "react";
import { Raleway, Manrope } from "next/font/google";
import Modal from "./modal";
import { useLanguage } from "./lang-provider";

const fontmain = Raleway({ subsets: ["latin"] });
const fontsecond = Manrope({ subsets: ["latin"] });

const AdvancedTariff = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const plan = t("advanced");

  return (
    <div className="bg-white xl:px-[36px] xl:pt-[36px] xl:pb-[26px] p-[32px] rounded-28 xl:w-[360px] xl:h-[560px] w-[313px] h-[560px] relative flex justify-between flex-col inset-shadow-custom">
      <div className="flex xl:top-[-30px] top-[-22px] left-1/2 -translate-x-1/2 justify-center items-center xl:px-[33.5px] px-[26.5px] py-[11px] shadow-best-seller bg-[linear-gradient(121deg,#1f1d8b_0%,#7b7cab_40.3%,#7b7cab_79.87%,#5bdbfd_100%)] rounded-[18px] absolute">
        <p
          className={`${fontmain.className} text-white uppercase text-base font-bold`}
        >
          {t("bestseller")}
        </p>
      </div>
      <div>
        <div className="flex xl:gap-[11px] gap-[30px] uppercase items-center justify-between mb-[18px]">
          <h3
            className={`${fontmain.className} xl:text-xl text-base text-[#0c0117] uppercase font-semibold`}
          >
            {plan.name}
          </h3>
          <div className="flex justify-center items-center xl:px-[43px] px-[33.5px] py-[11.5px] bg-black rounded-[30px]">
            <p
              className={`${fontmain.className} bg-gradient-to-r from-[#5bdbfd] via-[#7b7cab] via-[#1f1d8b] to-[#ffffff] bg-clip-text text-transparent text-base font-bold`}
            >
              Pro
            </p>
          </div>
        </div>
        <div
          className={`${fontsecond.className} flex gap-[22px] text-[#0c0117] font-bold items-end leading-none mb-[29px]`}
        >
          <p className="text-[64px] xl:text-[74px]">{plan.new_price} $</p>
          <p className="text-xl line-through">{plan.old_price}$</p>
        </div>
        <ul
          className={`${fontmain.className} flex gap-[14px] flex-col text-[#0c0117] uppercase leading-[1.1875] font-semibold text-base`}
        >
          {plan.includes.map((item, i) => (
            <li key={i} className="before-round-black pl-[28px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setOpen(true)}
        className={`${fontsecond.className} xl:w-[287px] xl:h-[57px] w-[248px] h-[47px] bg-[#0c0117] text-white font-semibold xl:text-base text-sm rounded-[52px] hover:bg-yellow-300 hover:text-black`}
      >
        {t("buy")}
      </button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default AdvancedTariff;
