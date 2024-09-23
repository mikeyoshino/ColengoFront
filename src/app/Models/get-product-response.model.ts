import { Product } from './product.model';

export interface GetProductResponse {
  totalPages: number;
  totalItems: number;
  pageSize: number;
  products: Product[];
}