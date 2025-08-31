import React from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";

const font = Raleway({ subsets: ["latin"], weight: ["500"] });

const Navigation = () => {
  return (
    <ul className={`${font.className} text-base text-white flex gap-7`}>
      <li>
        <Link href="#" className="py-[10.5px] hover:text-[#FF4A77]">
          Структура
        </Link>
      </li>
      <li>
        <Link href="#" className="py-[10.5px] hover:text-[#FF4A77]">
          Обо мне
        </Link>
      </li>
      <li>
        <Link href="#" className="py-[10.5px] hover:text-[#FF4A77]">
          Плюсы
        </Link>
      </li>
      <li>
        <Link href="#" className="py-[10.5px] hover:text-[#FF4A77]">
          Отзывы
        </Link>
      </li>
      <li>
        <Link href="#" className="py-[10.5px] hover:text-[#FF4A77]">
          FAQ
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
