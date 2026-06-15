import { create } from "zustand";

type SelectedAttributes = Record<string, string | string[]>;

interface ProductState {
  quantity: number;

  selectedAttributes: SelectedAttributes;

  setAttribute: (
    attributeSetId: string,
    value: string | string[]
  ) => void;

  setQuantity: (qty: number) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  quantity: 1,

  selectedAttributes: {},

  setAttribute: (attributeSetId, value) =>
    set((state) => ({
      selectedAttributes: {
        ...state.selectedAttributes,
        [attributeSetId]: value,
      },
    })),

  setQuantity: (quantity) =>
    set({
      quantity,
    }),
}));