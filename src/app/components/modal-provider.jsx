"use client";

import { createContext, useContext, useState } from "react";
import Modal from "./modal";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {open && <Modal onClose={closeModal} />}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
