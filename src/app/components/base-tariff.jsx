"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Raleway, Manrope } from "next/font/google";
import Modal from "./modal";
import { useLanguage } from "./lang-provider";

const fontmain = Raleway({ subsets: ["latin"] });
const fontsecond = Manrope({ subsets: ["latin"] });

const BaseTariff = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const plan = t("basic");

  return (
    <div className="bg-[#0c0117] inset-shadow-custom xl:px-[36px] xl:pt-[36px] xl:pb-[26px] p-[32px] rounded-28 xl:w-[360px] xl:h-[560px] w-[313px] h-[560px] relative overflow-hidden flex justify-between flex-col">
      <Image
        src="/images/base-top.png"
        alt=""
        width={184}
        height={174}
        className="absolute top-[-67px] right-[-115px] z-10"
      />
      <div>
        <h3
          className={`${fontmain.className} xl:text-xl text-base text-white uppercase font-semibold mb-[18px]`}
        >
          {plan.name}
        </h3>
        <div
          className={`${fontsecond.className} flex gap-[22px] text-white font-bold items-end leading-none mb-[29px]`}
        >
          <p className="xl:text-[74px] text-[64px]">{plan.new_price} $</p>
          <p className="text-xl line-through">{plan.old_price}$</p>
        </div>
        <ul
          className={`${fontmain.className} flex gap-[14px] flex-col text-white uppercase leading-[1.1875] font-semibold text-base`}
        >
          {plan.includes.map((item, i) => (
            <li key={i} className="before-round-white pl-[28px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setOpen(true)}
        className={`${fontsecond.className} xl:w-[287px] xl:h-[57px] w-[248px] h-[47px] bg-white text-[#0c0117] font-semibold xl:text-base text-sm rounded-[52px] hover:bg-yellow-300`}
      >
        {t("buy")}
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
