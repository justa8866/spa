import { IProduct } from "../../services/Products/IProduct";

export interface ITableModalProps {
  data: IProduct;
  isOpen: boolean;
  handleModal: (data: IProduct) => void;
}
