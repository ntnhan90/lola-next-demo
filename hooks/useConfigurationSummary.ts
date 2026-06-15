import { useMemo } from "react";
import { useProductContext } from "@/context/ProductContext";
import { useProductStore } from "@/store/productStore";

export interface SummaryItem {
  attributeSetId: string;
  title: string;
  values: string[];
}

export function useConfigurationSummary() {
  const product = useProductContext();

  const selectedAttributes = useProductStore(
    (s) => s.selectedAttributes
  );

  const selectedMultiAttributes = useProductStore(
    (s) => s.selectedMultiAttributes
  );

  return useMemo<SummaryItem[]>(() => {
    return product.attributeSets
      .map((set) => {
        const singleValue = selectedAttributes[set.id];

        if (singleValue) {
          const option = set.options.find(
            (item) => item.value === singleValue
          );

          return {
            attributeSetId: set.id,
            title: set.title,
            values: option ? [option.label] : [singleValue],
          };
        }

        const multiValues = selectedMultiAttributes[set.id] ?? [];

        if (multiValues.length > 0) {
          return {
            attributeSetId: set.id,
            title: set.title,
            values: multiValues.map((value) => {
              const option = set.options.find(
                (item) => item.value === value
              );

              return option?.label ?? value;
            }),
          };
        }

        return null;
      })
      .filter((item): item is SummaryItem => Boolean(item));
  }, [product, selectedAttributes, selectedMultiAttributes]);
}