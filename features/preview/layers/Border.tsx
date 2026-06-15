"use client";

import LayerImage from "../LayerImage";

import {
  getLayerPath,
} from "@/engine/productAssetResolver";

import { useProductContext } from "@/context/ProductContext";

import { useProductStore } from "@/store/productStore";

export default function Border() {
  const product =
    useProductContext();

  const border =
    useProductStore(
      (s) =>
        s.selectedAttributes["border"]
    ) || "white-border";

  return (
    <LayerImage
      src={getLayerPath(
        product,
        "border",
        border
      )}
      alt={border}
      zIndex={4}
    />
  );
}