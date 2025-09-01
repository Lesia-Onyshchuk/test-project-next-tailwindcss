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
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="xl:w-[410px] xl:h-[491px] xs:w-screen xs:h-screen xs:rounded-none max-w-md relative bg-[#0c0117] inset-shadow-custom xs:px-[42px] xs:pt-[157px] xl:px-[50px] xl:pt-[90px] xl:pb-[73px] xl:rounded-[28px]"
      >
        <button onClick={onClose} className="absolute top-[36px] right-[36px]">
          <Image
            src="/images/vector.png"
            alt="Закрыть"
            width={18}
            height={18}
          />
        </button>
        <h3
          className={`${font.className} text-white uppercase font-bold text-2xl mb-[36px]`}
        >
          Укажите свои данные
        </h3>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
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
             placeholder:font-normal mb-[40px]"
            />
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
