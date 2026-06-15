import { Product } from "@/types/product";

export function getProductAssetBase(
  product: Product
) {
  return `/assets/cakes/${product.slug}`;
}

export function getLayerPath(
  product: Product,
  layer: string,
  value: string
) {
  return `${getProductAssetBase(
    product
  )}/${layer}/${value}.png`;
}