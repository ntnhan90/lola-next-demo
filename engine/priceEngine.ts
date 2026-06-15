import type {
  Product,
} from "@/types/product";

export interface PriceResult {
  basePrice: number;
  extras: number;
  total: number;
}

export function calculatePrice(
  product: Product,
  selectedAttributes: Record<
    string,
    string
  >,
  selectedMultiAttributes: Record<
    string,
    string[]
  >
): PriceResult {
  let extras = 0;

  product.attributeSets.forEach(
    (attributeSet) => {
      const selected =
        selectedAttributes[
          attributeSet.id
        ];

      if (!selected) return;

      const option =
        attributeSet.options.find(
          (o) =>
            o.value === selected
        );

      extras += option?.price ?? 0;
    }
  );

  Object.entries(
    selectedMultiAttributes
  ).forEach(([key, values]) => {
    const set =
      product.attributeSets.find(
        (a) => a.id === key
      );

    if (!set) return;

    values.forEach((value) => {
      const option =
        set.options.find(
          (o) =>
            o.value === value
        );

      extras += option?.price ?? 0;
    });
  });

  return {
    basePrice: product.price,
    extras,
    total: product.price + extras,
  };
}