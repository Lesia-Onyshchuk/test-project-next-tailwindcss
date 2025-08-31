import React from "react";
import BaseTariff from "./base-tariff";
import AdvancedTariff from "./advanced-tariff";
import ExpertTariff from "./expert-tariff";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });

const Tariffs = () => {
  return (
    <section className="container pt-[100px]">
      <h2
        className={`${font.className} text-white uppercase font-bold text-5xl text-center`}
      >
        Тарифы
      </h2>
      <ul className="flex justify-between mt-[79px]">
        <li>
          <BaseTariff />
        </li>
        <li>
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
