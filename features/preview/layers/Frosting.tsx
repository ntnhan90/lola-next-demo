"use client";

import LayerImage from "../LayerImage";

import { useProductStore } from "@/store/productStore";

import { useProductContext } from "@/context/ProductContext";

import {
  getLayerPath,
} from "@/engine/productAssetResolver";

export default function Frosting() {
  const product =
    useProductContext();

  const color =
    useProductStore(
      (s) =>
        s.selectedAttributes["color"]
    ) || "yellow";

  return (
    <LayerImage
      src={getLayerPath(
        product,
        "frosting",
        color
      )}
      alt={color}
      zIndex={3}
    />
  );
}