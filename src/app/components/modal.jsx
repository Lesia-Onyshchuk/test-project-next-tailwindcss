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
      className="fixed w-screen h-screen inset-0 z-50 flex items-center justify-center bg-transparent"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" relative xl:w-[410px] xl:h-[491px] w-screen h-screen rounded-none bg-[#0c0117] inset-shadow-custom px-[42px] pt-[157px] pb-[41px] xl:px-[50px] xl:pt-[90px] xl:pb-[73px] xl:rounded-[28px]"
      >
        <button
          onClick={onClose}
          className="absolute xl:top-[28px] right-[32px] top-[32px] xl:right-[28px]"
        >
          <Image
            src="/images/vector.png"
            alt="Закрыть"
            width={18}
            height={18}
          />
        </button>
        <h3
          className={`${font.className} text-white uppercase text-center font-bold text-l mb-[36px]`}
        >
          Please provide your information
        </h3>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="flex flex-col items-center xl:justify-start justify-between">
            <div className="flex flex-col w-full">
              <Field
                placeholder="Name"
                name="name"
                className="w-full py-[15px] px-[20px] rounded-[14px] placeholder:text-[#0c0117]
               placeholder:text-[14px]
               placeholder:font-raleway
               placeholder:font-normal mb-[18px]"
              />
              <Field
                placeholder="Telegram username"
                name="nik"
                className="w-full py-[15px] px-[20px] rounded-[14px] placeholder:text-[#0c0117]
               placeholder:text-[14px]
               placeholder:font-raleway
               placeholder:font-normal mb-[18px]"
              />
              <Field
                placeholder="Email*"
                name="email"
                required
                className="w-full py-[15px] px-[20px] rounded-[14px] placeholder:text-[#0c0117]
               placeholder:text-[14px]
               placeholder:font-raleway
               placeholder:font-normal mb-[120px] xl:mb-[40px]"
              />
            </div>
            <button
              type="submit"
              className={`${font.className} w-full h-[50px] bg-white text-[#0c0117] font-semibold text-sm rounded-[10px] hover:bg-yellow-300`}
            >
              Send
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Modal;
