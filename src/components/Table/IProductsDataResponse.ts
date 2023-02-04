import { IProduct } from "./IProduct";

export interface IProductsDataResponse {
  page: number;
  per_page: number;
  data: IProduct[];
  total: number;
  total_pages: number;
}
