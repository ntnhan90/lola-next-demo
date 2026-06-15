"use client";

import { useProductStore } from "@/store/productStore";
import { OptionRendererProps } from "../types";

export default function ColorCard({
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
      className={`color-card ${
        active ? "active" : ""
      }`}
      onClick={() =>
        setAttribute(
          attributeSetId,
          option.value
        )
      }
    >
      <span
        style={{
          background: option.color,
        }}
      />
    </button>
  );
}