import { IProduct } from "./IProduct";

export interface ITableModalProps {
  data: IProduct;
  isOpen: boolean;
  handleModal: (data: IProduct) => void;
}
