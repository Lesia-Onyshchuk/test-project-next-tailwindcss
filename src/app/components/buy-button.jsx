"use client";

import { Raleway } from "next/font/google";
import { useLanguage } from "./lang-provider";

const font = Raleway({ subsets: ["latin"], weight: ["600"] });

export default function BuyButton({
  className = "",
  children,
  onClick,
  ...props
}) {
  const { t } = useLanguage();

  return (
    <>
      <button
        onClick={onClick}
        className={`${font.className} font-semibold leading-[1.66667] ${className}`}
        {...props}
      >
        {children || t("button")}
      </button>
    </>
  );
}
