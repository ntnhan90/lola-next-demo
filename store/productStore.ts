import { create } from "zustand";

export interface ProductState {
  quantity: number;

  // Single select
  selectedAttributes: Record<string, string>;

  // Multi select
  selectedMultiAttributes: Record<string, string[]>;

  setAttribute: (
    attributeSetId: string,
    value: string
  ) => void;

  toggleMultiAttribute: (
    attributeSetId: string,
    value: string
  ) => void;

  setQuantity: (qty: number) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  quantity: 1,

  selectedAttributes: {},

  selectedMultiAttributes: {},

  setAttribute: (attributeSetId, value) =>
    set((state) => ({
      selectedAttributes: {
        ...state.selectedAttributes,
        [attributeSetId]: value,
      },
    })),

  toggleMultiAttribute: (attributeSetId, value) =>
    set((state) => {
      const current =
        state.selectedMultiAttributes[attributeSetId] ?? [];

      const exists = current.includes(value);

      return {
        selectedMultiAttributes: {
          ...state.selectedMultiAttributes,
          [attributeSetId]: exists
            ? current.filter((v) => v !== value)
            : [...current, value],
        },
      };
    }),

  setQuantity: (quantity) =>
    set({
      quantity,
    }),
}));