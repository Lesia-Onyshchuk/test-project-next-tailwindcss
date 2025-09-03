"use client";

import Link from "next/link";
import React from "react";
import BuyButton from "./buy-button";
import { Raleway } from "next/font/google";
import Navigation from "./nav";
import Language from "./lang";
import { useModal } from "./modal-provider";

const font = Raleway({ subsets: ["latin"], weight: ["700"] });

const Header = () => {
  const { openModal } = useModal();

  return (
    <header className="container flex items-center justify-center xl:justify-between gap-[28px] xl:gap-[159px]">
      <Link
        href="/"
        className={`${font.className} flex gap-1 text-white xl:text-lg text-base uppercase w-[178px] xl:w-[200px]`}
      >
        <span>Learn</span>
        <span className="bg-gradient-to-r from-[#5bdbfd] via-[#7b7cab] via-[#1f1d8b] to-[#7b7cab] bg-clip-text text-transparent">
          Accounting
        </span>
      </Link>
      <div className="flex items-center xs:gap-0 xl:gap-[60px]">
        <div className="flex flex-row-reverse xl:flex-row gap-[28px] xl:gap-[40px] xl:items-center">
          <Navigation />
          <Language />
        </div>
        <BuyButton
          onClick={openModal}
          className="w-[190px] h-[40px] bg-[linear-gradient(121deg,#1f1d8b_0%,#7b7cab_40.3%,#7b7cab_79.87%,#5bdbfd_100%)]
            xl:flex items-center justify-center
            text-xs text-white rounded-full hidden hover:text-yellow-300 transition-colors duration-300 ease-in-out"
        />
      </div>
    </header>
  );
};

export default Header;
