"use client";

import { Field, Form, Formik } from "formik";
import React from "react";
import { Raleway } from "next/font/google";
import Image from "next/image";

const font = Raleway({ subsets: ["latin"] });

const Modal = ({ onClose }) => {
  const initialValues = {
    name: "",
    nik: "",
    email: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Форма отправлена:", values);
    onClose();
    resetForm();
  };

  return (
    <div
      onClick={onClose}
      className="fixed xs:w-screen xs:h-screen inset-0 z-50 flex items-center justify-center bg-transparent"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" relative xl:w-[410px] xl:h-[491px] xs:w-screen xs:h-screen xs:rounded-none bg-[#0c0117] xl:inset-shadow-custom xs:px-[42px] xs:pt-[157px] xs:pb-[41px] xl:px-[50px] xl:pt-[90px] xl:pb-[73px] xl:rounded-[28px]"
      >
        <button
          onClick={onClose}
          className="absolute xl:top-[28px] xs:right-[32px] xs:top-[32px] xl:right-[28px]"
        >
          <Image
            src="/images/vector.png"
            alt="Закрыть"
            width={18}
            height={18}
          />
        </button>
        <h3
          className={`${font.className} text-white uppercase text-center font-bold text-2xl mb-[36px]`}
        >
          Укажите свои данные
        </h3>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="flex flex-col xs:items-center xl:justify-start xs:justify-between">
            <div className="flex flex-col">
              <Field
                placeholder="Имя"
                name="name"
                className="w-[310px] py-[15px] px-[20px] rounded-[14px] placeholder:text-[#0c0117]
               placeholder:text-[14px]
               placeholder:font-raleway
               placeholder:font-normal mb-[18px]"
              />
              <Field
                placeholder="Ник Telegram"
                name="nik"
                className="w-[310px] py-[15px] px-[20px] rounded-[14px] placeholder:text-[#0c0117]
               placeholder:text-[14px]
               placeholder:font-raleway
               placeholder:font-normal mb-[18px]"
              />
              <Field
                placeholder="Email*"
                name="email"
                required
                className="w-[310px] py-[15px] px-[20px] rounded-[14px] placeholder:text-[#0c0117]
               placeholder:text-[14px]
               placeholder:font-raleway
               placeholder:font-normal xs:mb-[120px] xl:mb-[40px]"
              />
            </div>
            <button
              type="submit"
              className={`${font.className} w-[310px] h-[50px] bg-white text-[#0c0117] font-semibold text-sm rounded-[10px] hover:bg-[#ff4a77]`}
            >
              Отправить
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Modal;
