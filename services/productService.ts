import product from "../mock/products/classic-round";
import { Product } from "../types/product";


export async function getProduct(): Promise<Product> {
  return Promise.resolve(product);
}