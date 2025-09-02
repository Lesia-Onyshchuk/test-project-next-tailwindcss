"use client";

import React, { useState } from "react";
import { Raleway, Manrope } from "next/font/google";
import Modal from "./modal";

const fontmain = Raleway({ subsets: ["latin"] });
const fontsecond = Manrope({ subsets: ["latin"] });

const ExpertTariff = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[linear-gradient(121deg,#5bdbfd_0%,#7375ff_40.3%,#df93ff_79.87%,#e56f8c_100%)] xl:px-[36px] xl:pt-[36px] xl:pb-[26px] p-[32px] rounded-28 xl:w-[360px] xl:h-[560px] w-[313px] h-[430px] flex justify-between flex-col inset-shadow-custom">
      <div>
        <div className="flex uppercase items-center justify-between mb-[18px]">
          <h3
            className={`${fontmain.className} xl:text-xl xs:text-base text-white uppercase font-semibold`}
          >
            Expert
          </h3>
          <div className="flex justify-center items-center px-[43px] py-[11.5px] bg-white rounded-[30px]">
            <p
              className={`${fontmain.className} bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] to-[#e56f8c] bg-clip-text text-transparent text-base font-bold`}
            >
              Expert
            </p>
          </div>
        </div>
        <div
          className={`${fontsecond.className} flex gap-[22px] text-white font-bold items-end leading-none mb-[29px]`}
        >
          <p className="xl:text-[74px] text-[64px]">299 $</p>
          <p className="text-xl line-through">500$</p>
        </div>
        <ul
          className={`${fontmain.className} flex gap-[14px] flex-col text-white uppercase leading-[1.1875] font-semibold text-base`}
        >
          <li className="before-round-white pl-[28px]">
            Access to all 30+ video lessons
          </li>
          <li className="before-round-white pl-[28px]">
            All materials from the Advanced plan
          </li>
          <li className="before-round-white pl-[28px]">
            Personal consultations with the instructor
          </li>
          <li className="before-round-white pl-[28px]">
            Additional practical assignments
          </li>
          <li className="before-round-white pl-[28px]">
            In-depth topics: taxes, financial accounting, audit
          </li>
        </ul>
      </div>
      <button
        onClick={() => setOpen(true)}
        className={`${fontsecond.className} xl:w-[287px] xl:h-[57px] w-[248px] h-[47px] xl:text-[#0c0117] xl:bg-white text-white bg-[#0c0117] font-semibold xl:text-base text-sm rounded-[52px] hover:bg-[#ff4a77]`}
      >
        Buy
      </button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default ExpertTariff;
