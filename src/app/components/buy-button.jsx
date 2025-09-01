"use client";

import { Raleway } from "next/font/google";
import { useState } from "react";
import Modal from "./modal";

const font = Raleway({ subsets: ["latin"], weight: ["600"] });

export default function BuyButton({
  className = "",
  children = "Купить со скидкой",
  ...props
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${font.className} font-semibold leading-[1.66667] ${className}`}
        {...props}
      >
        {children}
      </button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  );
}
