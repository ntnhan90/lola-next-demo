"use client";

import { useProductStore } from "@/store/productStore";
import { OptionRendererProps } from "../types";

export default function TextCard({
  option,
  attributeSetId,
}: OptionRendererProps) {
  const {
    selectedAttributes,
    setAttribute,
  } = useProductStore();

  const active =
    selectedAttributes[attributeSetId] ===
    option.value;

  return (
    <button
      className={`option-card ${
        active ? "active" : ""
      }`}
      onClick={() =>
        setAttribute(
          attributeSetId,
          option.value
        )
      }
    >
      {option.label}
    </button>
  );
}