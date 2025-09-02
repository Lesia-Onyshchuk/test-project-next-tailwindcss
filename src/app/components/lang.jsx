"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const languages = ["EN", "UA"];

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-[10px] flex items-center gap-[9px] bg-transparent text-white hover:text-[#FF4A77] focus:outline-none"
      >
        {selected}
        <IoIosArrowDown />
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-12 bg-transparent text-white z-20">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setSelected(lang);
                setIsOpen(false);
              }}
              className="w-full text-center px-1 py-1 hover:text-[#FF4A77]"
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
