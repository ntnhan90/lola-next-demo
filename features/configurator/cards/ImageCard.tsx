"use client";

import Image from "next/image";
import { useProductStore } from "@/store/productStore";
import type { OptionRendererProps } from "../types";

export default function ImageCard({
  option,
  attributeSetId,
  selectionType,
}: OptionRendererProps) {
  const {
    selectedAttributes,
    selectedMultiAttributes,
    setAttribute,
    toggleMultiAttribute,
  } = useProductStore();

  const isMultiple = selectionType === "multiple";

  const active = isMultiple
    ? (selectedMultiAttributes[attributeSetId] ?? []).includes(option.value)
    : selectedAttributes[attributeSetId] === option.value;

  const handleClick = () => {
    if (isMultiple) {
      toggleMultiAttribute(attributeSetId, option.value);
      return;
    }

    setAttribute(attributeSetId, option.value);
  };

  return (
    <button
      type="button"
      className={`image-card ${active ? "active" : ""}`}
      onClick={handleClick}
      aria-pressed={active}
    >
      <div className="image-card__image">
        <Image
          src={option.image ?? "/placeholder.png"}
          alt={option.label}
          fill
          sizes="120px"
        />
      </div>

      <span className="image-card__label">{option.label}</span>

      {!!option.price && option.price > 0 && (
        <small className="image-card__price">+${option.price}</small>
      )}
    </button>
  );
}