"use client";

import React from "react";
import BaseTariff from "./base-tariff";
import AdvancedTariff from "./advanced-tariff";
import ExpertTariff from "./expert-tariff";
import { Raleway } from "next/font/google";
import { useLanguage } from "./lang-provider";

const font = Raleway({ subsets: ["latin"] });

const Tariffs = () => {
  const { t } = useLanguage();
  return (
    <section className="xl:py-[100px] py-[66px]">
      <h2
        className={`${font.className} text-white uppercase font-bold xl:text-5xl text-2xl text-center`}
      >
        {t("title_plans")}
      </h2>
      <ul className="flex flex-col xl:flex-row xl:justify-between justify-center xl:items-start items-center xl:mt-[79px] mt-[28px]">
        <li className="mb-[52px] xl:mb-0">
          <BaseTariff />
        </li>
        <li className="mb-[26px] xl:mb-0">
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
