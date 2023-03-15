import {ProductType} from "./product-type";

export interface Product {
  id?: number;
  name?: string;
  origin?: string;
  productType?: ProductType
}
