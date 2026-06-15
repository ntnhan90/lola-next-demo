"use client";

import Image from "next/image";

import { useProductStore } from "@/store/productStore";
import { OptionRendererProps } from "../types";

export default function ImageCard({
  option,
  attributeSetId,
}: OptionRendererProps) {
  const { selectedAttributes, setAttribute } = useProductStore();

  const active =
    selectedAttributes[attributeSetId] === option.value;

  return (
    <button
      type="button"
      className={`image-card ${active ? "active" : ""}`}
      onClick={() =>
        setAttribute(attributeSetId, option.value)
      }
    >
      <div className="image-card__image">
        <Image
          src={option.image ?? "/images/placeholder.png"}
          alt={option.label}
          fill
          sizes="96px"
        />
      </div>

      <span className="image-card__label">
        {option.label}
      </span>

      {option.price && option.price > 0 && (
        <small className="image-card__price">
          +${option.price}
        </small>
      )}
    </button>
  );
}