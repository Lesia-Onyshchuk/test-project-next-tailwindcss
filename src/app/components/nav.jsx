"use client";

import React, { useState } from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const font = Raleway({ subsets: ["latin"], weight: ["500"] });

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="burger-btn z-50"
      >
        <Image src="/images/burger.png" width={31} height={21} alt="Menu" />
      </button>
      <ul
        className={`${font.className} text-base text-white gap-7 hidden xl:flex`}
      >
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
      {isOpen && (
        <div className="fixed inset-0 bg-[#0c0117] bg-opacity-95 z-50 flex flex-col items-center justify-center xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-[36px] right-[36px]"
          >
            <Image
              src="/images/vector.png"
              alt="Закрыть"
              width={18}
              height={18}
            />
          </button>
          <ul
            className={`${font.className} text-white text-xl text-center space-y-6`}
          >
            <li>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#FF4A77]"
              >
                Структура
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#FF4A77]"
              >
                Обо мне
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#FF4A77]"
              >
                Плюсы
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#FF4A77]"
              >
                Отзывы
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#FF4A77]"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
