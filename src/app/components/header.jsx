import Link from "next/link";
import React from "react";
import BuyButton from "./buy-button";
import { Raleway } from "next/font/google";
import Navigation from "./nav";
import Language from "./lang";

const font = Raleway({ subsets: ["latin"], weight: ["700"] });

const Header = () => {
  return (
    <header className="flex items-center gap-[159px]">
      <Link href="/" className={`${font.className} text-white uppercase`}>
        Aleko{" "}
        <span className="bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] via-[#df93ff] to-[#e56f8c] bg-clip-text text-transparent">
          Sokurashvili
        </span>
      </Link>
      <div className="flex items-center gap-[60px]">
        <Navigation />
        <Language />
        <BuyButton
          className="w-[190px] h-[40px] bg-[linear-gradient(84deg,#5bdbfd_0%,#7375ff_40.3%,#df93ff_79.87%,#e56f8c_100%)]
            flex items-center justify-center
            text-xs text-white rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
