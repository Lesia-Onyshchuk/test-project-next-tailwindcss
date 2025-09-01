import React from "react";
import BaseTariff from "./base-tariff";
import AdvancedTariff from "./advanced-tariff";
import ExpertTariff from "./expert-tariff";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });

const Tariffs = () => {
  return (
    <section className="xl:py-[100px] xs:py-[66px]">
      <h2
        className={`${font.className} xs:text-white xs:uppercase xs:font-bold xl:text-5xl xs:text-2xl xs:text-center`}
      >
        Тарифы
      </h2>
      <ul className="xs:flex xs:flex-col xl:flex-row xl:justify-between xs:justify-center xl:items-start xs:items-center xl:mt-[79px] xs:mt-[28px]">
        <li className="xs:mb-[52px] xl:mb-0">
          <BaseTariff />
        </li>
        <li className="xs:mb-[26px] xl:mb-0">
          <AdvancedTariff />
        </li>
        <li>
          <ExpertTariff />
        </li>
      </ul>
    </section>
  );
};

export default Tariffs;
