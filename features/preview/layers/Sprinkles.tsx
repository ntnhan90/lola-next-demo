"use client";

import LayerImage from "../LayerImage";
import { useProductStore } from "@/store/productStore";
import { useProductContext } from "@/context/ProductContext";
import { getLayerPath } from "@/engine/productAssetResolver";

export default function Sprinkles() {
  const product = useProductContext();

  const toppings =
    useProductStore((state) => state.selectedMultiAttributes["toppings"]) ?? [];

  return (
    <>
      {toppings.map((topping) => (
        <LayerImage
          key={topping}
          src={getLayerPath(product, "sprinkles", topping)}
          alt={topping}
          zIndex={5}
        />
      ))}
    </>
  );
}