"use client";

import { useProductStore } from "@/store/productStore";

const COLORS: Record<string, string> = {
  yellow: "#ffcb00",
  pink: "#ff89c9",
  green: "#71d86d",
};

export default function Frosting() {
  const frosting =
    useProductStore(
      (state) =>
        state.selectedAttributes["color"]
    ) ?? "yellow";

  return (
    <div
      className="cake-frosting"
      style={{
        background:
          COLORS[frosting] ?? COLORS.yellow,
      }}
    />
  );
}