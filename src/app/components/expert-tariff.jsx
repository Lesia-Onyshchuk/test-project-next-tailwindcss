import React from "react";
import { Raleway, Manrope } from "next/font/google";

const fontmain = Raleway({ subsets: ["latin"] });
const fontsecond = Manrope({ subsets: ["latin"] });

const ExpertTariff = () => {
  return (
    <div className="bg-[linear-gradient(121deg,#5bdbfd_0%,#7375ff_40.3%,#df93ff_79.87%,#e56f8c_100%)] px-[36px] pt-[36px] pb-[26px] rounded-28 w-[360px] h-[465px] flex justify-between flex-col inset-shadow-custom">
      <div>
        <div className="flex gap-[11px] uppercase items-center justify-between mb-[18px]">
          <h3
            className={`${fontmain.className} text-xl text-white uppercase font-semibold`}
          >
            Эксперт
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
          <p className="text-[74px]">299 $</p>
          <p className="text-xl line-through">500$</p>
        </div>
        <ul
          className={`${fontmain.className} flex gap-[14px] flex-col text-white uppercase leading-[1.1875] font-semibold text-base`}
        >
          <li className="before-round-white pl-[28px]">Дополнительные уроки</li>
          <li className="before-round-white pl-[28px]">48 уроков</li>
          <li className="before-round-white pl-[28px]">
            Чат-комьюнити для создателей контента
          </li>
          <li className="before-round-white pl-[28px]">
            Разбор вашей страницы в формате видеозвонка
          </li>
        </ul>
      </div>
      <button
        className={`${fontsecond.className} w-[287px] h-[57px] text-[#0c0117] bg-white font-semibold text-base rounded-[52px] hover:bg-[#ff4a77]`}
      >
        Купить
      </button>
    </div>
  );
};

export default ExpertTariff;
