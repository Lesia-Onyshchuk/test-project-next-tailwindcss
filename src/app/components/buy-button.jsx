"use client";

import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"], weight: ["600"] });

export default function BuyButton({
  className = "",
  children = "Купить со скидкой",
  onClick,
  ...props
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={`${font.className} font-semibold leading-[1.66667] ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
