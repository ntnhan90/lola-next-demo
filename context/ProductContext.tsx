"use client";

import {
  createContext,
  useContext,
} from "react";

import { Product } from "@/types/product";

const ProductContext =
  createContext<Product | null>(null);

export function ProductProvider({
  product,
  children,
}: {
  product: Product;
  children: React.ReactNode;
}) {
  return (
    <ProductContext.Provider
      value={product}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const product =
    useContext(ProductContext);

  if (!product) {
    throw new Error(
      "ProductContext missing"
    );
  }

  return product;
}