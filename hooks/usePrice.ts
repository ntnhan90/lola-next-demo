import { useMemo } from "react";

import { useProductStore } from "@/store/productStore";

import { calculatePrice } from "@/engine/priceEngine";

import { useProductContext } from "@/context/ProductContext";

export function usePrice() {
  const product =
    useProductContext();

  const selectedAttributes =
    useProductStore(
      (s) =>
        s.selectedAttributes
    );

  const selectedMultiAttributes =
    useProductStore(
      (s) =>
        s.selectedMultiAttributes
    );

  return useMemo(
    () =>
      calculatePrice(
        product,
        selectedAttributes,
        selectedMultiAttributes
      ),
    [
      product,
      selectedAttributes,
      selectedMultiAttributes,
    ]
  );
}