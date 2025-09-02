"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLanguage } from "./lang-provider"; // підключаємо контекст

const languages = ["EN", "UA"];

const Language = () => {
  const { language, setLanguage } = useLanguage(); // отримуємо мову з контексту
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-[10px] flex items-center gap-[9px] bg-transparent text-white hover:text-yellow-300 focus:outline-none transition-colors duration-300 ease-in-out"
      >
        {language.toUpperCase()}
        <IoIosArrowDown />
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-12 bg-transparent text-white z-20">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang.toLowerCase()); // змінюємо мову в контексті
                setIsOpen(false);
              }}
              className="w-full text-center px-1 py-1 hover:text-yellow-300 transition-colors duration-300 ease-in-out"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;
