// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useContext, useState } from "react";
import { ModalContext } from ".";
import { IProduct } from "../../services/Products/IProduct";

export const useTableModal = () => {
  const value = useContext(ModalContext);
  if (value === null) throw new Error("Please add ModalProvider");

  return value;
};

export default () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<IProduct>({
    color: "",
    year: 0,
    id: 0,
    name: "",
    pantone_value: "",
  });

  const handleModal = (data?: IProduct) => {
    setIsOpen(!isOpen);

    if (data) {
      setData(data);
    }
  };

  return { isOpen, handleModal, data };
};
