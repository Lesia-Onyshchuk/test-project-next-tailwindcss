"use client";

import React, { useState } from "react";
import { Raleway, Manrope } from "next/font/google";
import Modal from "./modal";
import { useLanguage } from "./lang-provider";

const fontmain = Raleway({ subsets: ["latin"] });
const fontsecond = Manrope({ subsets: ["latin"] });

const ExpertTariff = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const plan = t("expert");

  return (
    <div className="bg-[linear-gradient(121deg,#1f1d8b_0%,#7b7cab_40.3%,#7b7cab_79.87%,#5bdbfd_100%)] xl:px-[36px] xl:pt-[36px] xl:pb-[26px] p-[32px] rounded-28 xl:w-[360px] xl:h-[560px] w-[313px] h-[560px] flex justify-between flex-col inset-shadow-custom">
      <div>
        <div className="flex uppercase items-center justify-between mb-[18px]">
          <h3
            className={`${fontmain.className} xl:text-xl xs:text-base text-yellow-300 uppercase font-semibold`}
          >
            {plan.name}
          </h3>
          <div className="flex justify-center items-center px-[43px] py-[11.5px] bg-white rounded-[30px]">
            <p
              className={`${fontmain.className} bg-gradient-to-r from-[#5bdbfd] via-[#7b7cab] via-[#1f1d8b] to-[#7b7cab] bg-clip-text text-transparent text-base font-bold`}
            >
              Expert
            </p>
          </div>
        </div>
        <div
          className={`${fontsecond.className} flex gap-[22px] text-yellow-300 font-bold items-end leading-none mb-[29px]`}
        >
          <p className="xl:text-[74px] text-[64px]">{plan.new_price} $</p>
          <p className="text-xl line-through">{plan.old_price}$</p>
        </div>
        <ul
          className={`${fontmain.className} flex gap-[14px] flex-col text-yellow-300 uppercase leading-[1.1875] font-semibold text-base`}
        >
          {plan.includes.map((item, i) => (
            <li key={i} className="before-round-yellow pl-[28px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setOpen(true)}
        className={`${fontsecond.className} xl:w-[287px] xl:h-[57px] w-[248px] h-[47px] xl:text-[#0c0117] xl:bg-white text-white bg-yellow-300 font-semibold xl:text-base text-sm rounded-[52px] hover:bg-yellow-300`}
      >
        {t("buy")}
      </button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default ExpertTariff;
