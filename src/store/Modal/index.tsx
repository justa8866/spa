import React, { createContext, PropsWithChildren } from "react";
import useModal from "./useModal";
import TableModal from "../../components/Table/TableModal";
import { ITableModalProps } from "../../components/Table/ITableModalProps";

const ModalContext = createContext<ITableModalProps | null>(null);
const { Provider } = ModalContext;

const ModalProvider = ({ children }: PropsWithChildren) => {
  const { isOpen, handleModal, data } = useModal();

  return (
    <Provider value={{ isOpen, handleModal, data }}>
      <TableModal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
